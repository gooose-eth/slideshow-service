// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lY6TI":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "f2c9685dad4863d1";
module.bundle.HMR_BUNDLE_ID = "11e76bf040377dca";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2vhQy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _slideshow = require("./pages/slideshow");
var _slideshowDefault = parcelHelpers.interopDefault(_slideshow);
var _index = require("./pages/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
// stylesheet
var _appScss = require("./scss/app.scss");
// route
const routeMode = location.pathname.split('/')[1];
switch(routeMode){
    case 'watch':
    case 'create':
    case 'manage':
        _slideshowDefault.default(routeMode);
        break;
    default:
        _indexDefault.default();
        break;
}

},{"./pages/slideshow":"kg41d","./pages/index":"8nIIs","./scss/app.scss":"1njeh","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"kg41d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _resource = require("@redgoose/slideshow/docs/resource");
// import Slideshow from '@redgoose/slideshow';
/**
 * slideshow (watch, create, manage)
 *
 * @param {string} mode (watch, create, manage)
 */ function slideshow(mode) {
    console.log('call slideshow');
    // console.log('=========>', createApp, '=======')
    console.log(_resource.store, _resource.i18n);
// createApp()
}
exports.default = slideshow;

},{"vue":"h7dRr","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7","@redgoose/slideshow/docs/resource":"1030d"}],"h7dRr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compile", ()=>compile
);
var _runtimeDom = require("@vue/runtime-dom");
parcelHelpers.exportAll(_runtimeDom, exports);
function initDev() {
    _runtimeDom.initCustomFormatter();
}
initDev();
const compile = ()=>{
    _runtimeDom.warn(`Runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
};

},{"@vue/runtime-dom":"hwGpR","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"hwGpR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition
);
parcelHelpers.export(exports, "TransitionGroup", ()=>TransitionGroup
);
parcelHelpers.export(exports, "VueElement", ()=>VueElement
);
parcelHelpers.export(exports, "createApp", ()=>createApp
);
parcelHelpers.export(exports, "createSSRApp", ()=>createSSRApp
);
parcelHelpers.export(exports, "defineCustomElement", ()=>defineCustomElement
);
parcelHelpers.export(exports, "defineSSRCustomElement", ()=>defineSSRCustomElement
);
parcelHelpers.export(exports, "hydrate", ()=>hydrate1
);
parcelHelpers.export(exports, "render", ()=>render
);
parcelHelpers.export(exports, "useCssModule", ()=>useCssModule
);
parcelHelpers.export(exports, "useCssVars", ()=>useCssVars
);
parcelHelpers.export(exports, "vModelCheckbox", ()=>vModelCheckbox
);
parcelHelpers.export(exports, "vModelDynamic", ()=>vModelDynamic
);
parcelHelpers.export(exports, "vModelRadio", ()=>vModelRadio
);
parcelHelpers.export(exports, "vModelSelect", ()=>vModelSelect
);
parcelHelpers.export(exports, "vModelText", ()=>vModelText
);
parcelHelpers.export(exports, "vShow", ()=>vShow
);
parcelHelpers.export(exports, "withKeys", ()=>withKeys
);
parcelHelpers.export(exports, "withModifiers", ()=>withModifiers
);
var _runtimeCore = require("@vue/runtime-core");
var _shared = require("@vue/shared");
parcelHelpers.exportAll(_runtimeCore, exports);
const svgNS = 'http://www.w3.org/2000/svg';
const doc = typeof document !== 'undefined' ? document : null;
const staticTemplateCache = new Map();
const nodeOps = {
    insert: (child, parent, anchor)=>{
        parent.insertBefore(child, anchor || null);
    },
    remove: (child)=>{
        const parent = child.parentNode;
        if (parent) parent.removeChild(child);
    },
    createElement: (tag, isSVG, is, props)=>{
        const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
            is
        } : undefined);
        if (tag === 'select' && props && props.multiple != null) el.setAttribute('multiple', props.multiple);
        return el;
    },
    createText: (text)=>doc.createTextNode(text)
    ,
    createComment: (text)=>doc.createComment(text)
    ,
    setText: (node, text)=>{
        node.nodeValue = text;
    },
    setElementText: (el, text)=>{
        el.textContent = text;
    },
    parentNode: (node)=>node.parentNode
    ,
    nextSibling: (node)=>node.nextSibling
    ,
    querySelector: (selector)=>doc.querySelector(selector)
    ,
    setScopeId (el, id) {
        el.setAttribute(id, '');
    },
    cloneNode (el) {
        const cloned = el.cloneNode(true);
        // #3072
        // - in `patchDOMProp`, we store the actual value in the `el._value` property.
        // - normally, elements using `:value` bindings will not be hoisted, but if
        //   the bound value is a constant, e.g. `:value="true"` - they do get
        //   hoisted.
        // - in production, hoisted nodes are cloned when subsequent inserts, but
        //   cloneNode() does not copy the custom property we attached.
        // - This may need to account for other custom DOM properties we attach to
        //   elements in addition to `_value` in the future.
        if (`_value` in el) cloned._value = el._value;
        return cloned;
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent (content, parent, anchor, isSVG) {
        // <parent> before | first ... last | anchor </parent>
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        let template = staticTemplateCache.get(content);
        if (!template) {
            const t = doc.createElement('template');
            t.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            template = t.content;
            if (isSVG) {
                // remove outer svg wrapper
                const wrapper = template.firstChild;
                while(wrapper.firstChild)template.appendChild(wrapper.firstChild);
                template.removeChild(wrapper);
            }
            staticTemplateCache.set(content, template);
        }
        parent.insertBefore(template.cloneNode(true), anchor);
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};
// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    const transitionClasses = el._vtc;
    if (transitionClasses) value = (value ? [
        value,
        ...transitionClasses
    ] : [
        ...transitionClasses
    ]).join(' ');
    if (value == null) el.removeAttribute('class');
    else if (isSVG) el.setAttribute('class', value);
    else el.className = value;
}
function patchStyle(el, prev, next) {
    const style = el.style;
    const currentDisplay = style.display;
    if (!next) el.removeAttribute('style');
    else if (_shared.isString(next)) {
        if (prev !== next) style.cssText = next;
    } else {
        for(const key in next)setStyle(style, key, next[key]);
        if (prev && !_shared.isString(prev)) {
            for(const key1 in prev)if (next[key1] == null) setStyle(style, key1, '');
        }
    }
    // indicates that the `display` of the element is controlled by `v-show`,
    // so we always keep the current `display` value regardless of the `style` value,
    // thus handing over control to `v-show`.
    if ('_vod' in el) style.display = currentDisplay;
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (_shared.isArray(val)) val.forEach((v)=>setStyle(style, name, v)
    );
    else if (name.startsWith('--')) // custom property definition
    style.setProperty(name, val);
    else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) // !important
        style.setProperty(_shared.hyphenate(prefixed), val.replace(importantRE, ''), 'important');
        else style[prefixed] = val;
    }
}
const prefixes = [
    'Webkit',
    'Moz',
    'ms'
];
const prefixCache = {
};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) return cached;
    let name = _runtimeCore.camelize(rawName);
    if (name !== 'filter' && name in style) return prefixCache[rawName] = name;
    name = _shared.capitalize(name);
    for(let i = 0; i < prefixes.length; i++){
        const prefixed = prefixes[i] + name;
        if (prefixed in style) return prefixCache[rawName] = prefixed;
    }
    return rawName;
}
const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        else el.setAttributeNS(xlinkNS, key, value);
    } else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = _shared.isSpecialBooleanAttr(key);
        if (value == null || isBoolean && !_shared.includeBooleanAttr(value)) el.removeAttribute(key);
        else el.setAttribute(key, isBoolean ? '' : value);
    }
}
// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) unmountChildren(prevChildren, parentComponent, parentSuspense);
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' && el.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) el.value = newValue;
        if (value == null) el.removeAttribute(key);
        return;
    }
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            el[key] = _shared.includeBooleanAttr(value);
            return;
        } else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            el[key] = '';
            el.removeAttribute(key);
            return;
        } else if (type === 'number') {
            // e.g. <img :width="null">
            // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
            try {
                el[key] = 0;
            } catch (_a) {
            }
            el.removeAttribute(key);
            return;
        }
    }
    // some properties perform value validation and throw
    try {
        el[key] = value;
    } catch (e) {
        _runtimeCore.warn(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` + `value ${value} is invalid.`, e);
    }
}
// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow = Date.now;
let skipTimestampCheck = false;
if (typeof window !== 'undefined') {
    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    if (_getNow() > document.createEvent('Event').timeStamp) // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = ()=>performance.now()
    ;
    // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
    // and does not fire microtasks in between event propagation, so safe to exclude.
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
}
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = Promise.resolve();
const reset = ()=>{
    cachedNow = 0;
};
const getNow = ()=>cachedNow || (p.then(reset), cachedNow = _getNow())
;
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {
    });
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) // patch
    existingInvoker.value = nextValue;
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = invokers[rawName] = createInvoker(nextValue, instance);
            addEventListener(el, name, invoker, options);
        } else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {
        };
        let m;
        while(m = name.match(optionsModifierRE)){
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [
        _shared.hyphenate(name.slice(2)),
        options
    ];
}
function createInvoker(initialValue, instance) {
    const invoker = (e)=>{
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (skipTimestampCheck || timeStamp >= invoker.attached - 1) _runtimeCore.callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */ , [
            e
        ]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if (_shared.isArray(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = ()=>{
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map((fn)=>(e1)=>!e1._stopped && fn(e1)
        );
    } else return value;
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren)=>{
    if (key === 'class') patchClass(el, nextValue, isSVG);
    else if (key === 'style') patchStyle(el, prevValue, nextValue);
    else if (_shared.isOn(key)) // ignore v-model listeners
    {
        if (!_shared.isModelListener(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
    } else if (key[0] === '.' ? (key = key.slice(1), true) : key[0] === '^' ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') el._trueValue = nextValue;
        else if (key === 'false-value') el._falseValue = nextValue;
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML & textContent
        if (key === 'innerHTML' || key === 'textContent') return true;
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && _shared.isFunction(value)) return true;
        return false;
    }
    // spellcheck and draggable are numerated attrs, however their
    // corresponding DOM properties are actually booleans - this leads to
    // setting it with a string "false" value leading it to be coerced to
    // `true`, so we need to always treat them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable') return false;
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === 'form') return false;
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') return false;
    // #2766 <textarea type> must be set as attribute
    if (key === 'type' && el.tagName === 'TEXTAREA') return false;
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && _shared.isString(value)) return false;
    return key in el;
}
function defineCustomElement(options, hydate) {
    const Comp = _runtimeCore.defineComponent(options);
    class VueCustomElement extends VueElement {
        constructor(initialProps){
            super(Comp, initialProps, hydate);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
const defineSSRCustomElement = (options)=>{
    // @ts-ignore
    return defineCustomElement(options, hydrate1);
};
const BaseClass = typeof HTMLElement !== 'undefined' ? HTMLElement : class {
};
class VueElement extends BaseClass {
    constructor(_def, _props = {
    }, hydrate){
        super();
        this._def = _def;
        this._props = _props;
        /**
         * @internal
         */ this._instance = null;
        this._connected = false;
        this._resolved = false;
        if (this.shadowRoot && hydrate) hydrate(this._createVNode(), this.shadowRoot);
        else {
            if (this.shadowRoot) _runtimeCore.warn(`Custom element has pre-rendered declarative shadow root but is not ` + `defined as hydratable. Use \`defineSSRCustomElement\`.`);
            this.attachShadow({
                mode: 'open'
            });
        }
        // set initial attrs
        for(let i = 0; i < this.attributes.length; i++)this._setAttr(this.attributes[i].name);
        // watch future attr changes
        const observer = new MutationObserver((mutations)=>{
            for (const m of mutations)this._setAttr(m.attributeName);
        });
        observer.observe(this, {
            attributes: true
        });
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) {
            this._resolveDef();
            render(this._createVNode(), this.shadowRoot);
        }
    }
    disconnectedCallback() {
        this._connected = false;
        _runtimeCore.nextTick(()=>{
            if (!this._connected) {
                render(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */ _resolveDef() {
        if (this._resolved) return;
        const resolve = (def)=>{
            this._resolved = true;
            // check if there are props set pre-upgrade or connect
            for (const key of Object.keys(this))if (key[0] !== '_') this._setProp(key, this[key]);
            const { props , styles  } = def;
            // defining getter/setters on prototype
            const rawKeys = props ? _shared.isArray(props) ? props : Object.keys(props) : [];
            for (const key1 of rawKeys.map(_shared.camelize))Object.defineProperty(this, key1, {
                get () {
                    return this._getProp(key1);
                },
                set (val) {
                    this._setProp(key1, val);
                }
            });
            this._applyStyles(styles);
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) asyncDef().then(resolve);
        else resolve(this._def);
    }
    _setAttr(key) {
        this._setProp(_shared.camelize(key), _shared.toNumber(this.getAttribute(key)), false);
    }
    /**
     * @internal
     */ _getProp(key) {
        return this._props[key];
    }
    /**
     * @internal
     */ _setProp(key, val, shouldReflect = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (this._instance) render(this._createVNode(), this.shadowRoot);
            // reflect
            if (shouldReflect) {
                if (val === true) this.setAttribute(_shared.hyphenate(key), '');
                else if (typeof val === 'string' || typeof val === 'number') this.setAttribute(_shared.hyphenate(key), val + '');
                else if (!val) this.removeAttribute(_shared.hyphenate(key));
            }
        }
    }
    _createVNode() {
        const vnode = _runtimeCore.createVNode(this._def, _shared.extend({
        }, this._props));
        if (!this._instance) vnode.ce = (instance)=>{
            this._instance = instance;
            instance.isCE = true;
            instance.ceReload = (newStyles)=>{
                // alawys reset styles
                if (this._styles) {
                    this._styles.forEach((s)=>this.shadowRoot.removeChild(s)
                    );
                    this._styles.length = 0;
                }
                this._applyStyles(newStyles);
                // if this is an async component, ceReload is called from the inner
                // component so no need to reload the async wrapper
                if (!this._def.__asyncLoader) {
                    // reload
                    this._instance = null;
                    render(this._createVNode(), this.shadowRoot);
                }
            };
            // intercept emit
            instance.emit = (event, ...args)=>{
                this.dispatchEvent(new CustomEvent(event, {
                    detail: args
                }));
            };
            // locate nearest Vue custom element parent for provide/inject
            let parent = this;
            while(parent = parent && (parent.parentNode || parent.host))if (parent instanceof VueElement) {
                instance.parent = parent._instance;
                break;
            }
        };
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) styles.forEach((css)=>{
            const s = document.createElement('style');
            s.textContent = css;
            this.shadowRoot.appendChild(s);
            (this._styles || (this._styles = [])).push(s);
        });
    }
}
function useCssModule(name = '$style') {
    /* istanbul ignore else */ {
        const instance = _runtimeCore.getCurrentInstance();
        if (!instance) {
            _runtimeCore.warn(`useCssModule must be called inside setup()`);
            return _shared.EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            _runtimeCore.warn(`Current instance does not have CSS modules injected.`);
            return _shared.EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            _runtimeCore.warn(`Current instance does not have CSS module named "${name}".`);
            return _shared.EMPTY_OBJ;
        }
        return mod;
    }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */ function useCssVars(getter) {
    const instance = _runtimeCore.getCurrentInstance();
    /* istanbul ignore next */ if (!instance) {
        _runtimeCore.warn(`useCssVars is called without current active component instance.`);
        return;
    }
    const setVars = ()=>setVarsOnVNode(instance.subTree, getter(instance.proxy))
    ;
    _runtimeCore.watchPostEffect(setVars);
    _runtimeCore.onMounted(()=>{
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, {
            childList: true
        });
        _runtimeCore.onUnmounted(()=>ob.disconnect()
        );
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 /* SUSPENSE */ ) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push(()=>{
            setVarsOnVNode(suspense.activeBranch, vars);
        });
    }
    // drill down HOCs until it's a non-component vnode
    while(vnode.component)vnode = vnode.component.subTree;
    if (vnode.shapeFlag & 1 /* ELEMENT */  && vnode.el) setVarsOnNode(vnode.el, vars);
    else if (vnode.type === _runtimeCore.Fragment) vnode.children.forEach((c)=>setVarsOnVNode(c, vars)
    );
    else if (vnode.type === _runtimeCore.Static) {
        let { el , anchor  } = vnode;
        while(el){
            setVarsOnNode(el, vars);
            if (el === anchor) break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        for(const key in vars)style.setProperty(`--${key}`, vars[key]);
    }
}
const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots  })=>_runtimeCore.h(_runtimeCore.BaseTransition, resolveTransitionProps(props), slots)
;
Transition.displayName = 'Transition';
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [
        String,
        Number,
        Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /*#__PURE__*/ _shared.extend({
}, _runtimeCore.BaseTransition.props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */ const callHook = (hook, args = [])=>{
    if (_shared.isArray(hook)) hook.forEach((h)=>h(...args)
    );
    else if (hook) hook(...args);
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */ const hasExplicitCallback = (hook)=>{
    return hook ? _shared.isArray(hook) ? hook.some((h)=>h.length > 1
    ) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {
    };
    for(const key in rawProps)if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
    if (rawProps.css === false) return baseProps;
    const { name ='v' , type , duration , enterFromClass =`${name}-enter-from` , enterActiveClass =`${name}-enter-active` , enterToClass =`${name}-enter-to` , appearFromClass =enterFromClass , appearActiveClass =enterActiveClass , appearToClass =enterToClass , leaveFromClass =`${name}-leave-from` , leaveActiveClass =`${name}-leave-active` , leaveToClass =`${name}-leave-to`  } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter , onEnter , onEnterCancelled , onLeave , onLeaveCancelled , onBeforeAppear =onBeforeEnter , onAppear =onEnter , onAppearCancelled =onEnterCancelled  } = baseProps;
    const finishEnter = (el, isAppear, done)=>{
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done)=>{
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear)=>{
        return (el, done)=>{
            const hook = isAppear ? onAppear : onEnter;
            const resolve = ()=>finishEnter(el, isAppear, done)
            ;
            callHook(hook, [
                el,
                resolve
            ]);
            nextFrame(()=>{
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
            });
        };
    };
    return _shared.extend(baseProps, {
        onBeforeEnter (el) {
            callHook(onBeforeEnter, [
                el
            ]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear (el) {
            callHook(onBeforeAppear, [
                el
            ]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave (el, done) {
            const resolve = ()=>finishLeave(el, done)
            ;
            addTransitionClass(el, leaveFromClass);
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(()=>{
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
            });
            callHook(onLeave, [
                el,
                resolve
            ]);
        },
        onEnterCancelled (el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [
                el
            ]);
        },
        onAppearCancelled (el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [
                el
            ]);
        },
        onLeaveCancelled (el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [
                el
            ]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) return null;
    else if (_shared.isObject(duration)) return [
        NumberOf(duration.enter),
        NumberOf(duration.leave)
    ];
    else {
        const n = NumberOf(duration);
        return [
            n,
            n
        ];
    }
}
function NumberOf(val) {
    const res = _shared.toNumber(val);
    validateDuration(res);
    return res;
}
function validateDuration(val) {
    if (typeof val !== 'number') _runtimeCore.warn(`<transition> explicit duration is not a valid number - ` + `got ${JSON.stringify(val)}.`);
    else if (isNaN(val)) _runtimeCore.warn(`<transition> explicit duration is NaN - ` + 'the duration expression might be incorrect.');
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.add(c)
    );
    (el._vtc || (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.remove(c)
    );
    const { _vtc  } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) el._vtc = undefined;
    }
}
function nextFrame(cb) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = ()=>{
        if (id === el._endId) resolve();
    };
    if (explicitTimeout) return setTimeout(resolveIfNotStale, explicitTimeout);
    const { type , timeout , propCount  } = getTransitionInfo(el, expectedType);
    if (!type) return resolve();
    const endEvent = type + 'end';
    let ended = 0;
    const end = ()=>{
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e)=>{
        if (e.target === el && (++ended) >= propCount) end();
    };
    setTimeout(()=>{
        if (ended < propCount) end();
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key)=>(styles[key] || '').split(', ')
    ;
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */ if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while(delays.length < durations.length)delays = delays.concat(delays);
    return Math.max(...durations.map((d, i1)=>toMs(d) + toMs(delays[i1])
    ));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}
const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ _shared.extend({
    }, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup (props, { slots  }) {
        const instance = _runtimeCore.getCurrentInstance();
        const state = _runtimeCore.useTransitionState();
        let prevChildren;
        let children;
        _runtimeCore.onUpdated(()=>{
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) return;
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) return;
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach((c)=>{
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = el._moveCb = (e)=>{
                    if (e && e.target !== el) return;
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                };
                el.addEventListener('transitionend', cb);
            });
        });
        return ()=>{
            const rawProps = _runtimeCore.toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || _runtimeCore.Fragment;
            prevChildren = children;
            children = slots.default ? _runtimeCore.getTransitionRawChildren(slots.default()) : [];
            for(let i1 = 0; i1 < children.length; i1++){
                const child = children[i1];
                if (child.key != null) _runtimeCore.setTransitionHooks(child, _runtimeCore.resolveTransitionHooks(child, cssTransitionProps, state, instance));
                else _runtimeCore.warn(`<TransitionGroup> children must be keyed.`);
            }
            if (prevChildren) for(let i2 = 0; i2 < prevChildren.length; i2++){
                const child = prevChildren[i2];
                _runtimeCore.setTransitionHooks(child, _runtimeCore.resolveTransitionHooks(child, cssTransitionProps, state, instance));
                positionMap.set(child, child.el.getBoundingClientRect());
            }
            return _runtimeCore.createVNode(tag, null, children);
        };
    }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) el._moveCb();
    if (el._enterCb) el._enterCb();
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) el._vtc.forEach((cls)=>{
        cls.split(/\s+/).forEach((c)=>c && clone.classList.remove(c)
        );
    });
    moveClass.split(/\s+/).forEach((c)=>c && clone.classList.add(c)
    );
    clone.style.display = 'none';
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform  } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}
const getModelAssigner = (vnode)=>{
    const fn = vnode.props['onUpdate:modelValue'];
    return _shared.isArray(fn) ? (value)=>_shared.invokeArrayFns(fn, value)
     : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        trigger(target, 'input');
    }
}
function trigger(el, type) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created (el, { modifiers: { lazy , trim , number  }  }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || vnode.props && vnode.props.type === 'number';
        addEventListener(el, lazy ? 'change' : 'input', (e)=>{
            if (e.target.composing) return;
            let domValue = el.value;
            if (trim) domValue = domValue.trim();
            else if (castToNumber) domValue = _shared.toNumber(domValue);
            el._assign(domValue);
        });
        if (trim) addEventListener(el, 'change', ()=>{
            el.value = el.value.trim();
        });
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted (el, { value  }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate (el, { value , modifiers: { lazy , trim , number  }  }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing) return;
        if (document.activeElement === el) {
            if (lazy) return;
            if (trim && el.value.trim() === value) return;
            if ((number || el.type === 'number') && _shared.toNumber(el.value) === value) return;
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) el.value = newValue;
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created (el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', ()=>{
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if (_shared.isArray(modelValue)) {
                const index = _shared.looseIndexOf(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) assign(modelValue.concat(elementValue));
                else if (!checked && found) {
                    const filtered = [
                        ...modelValue
                    ];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            } else if (_shared.isSet(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) cloned.add(elementValue);
                else cloned.delete(elementValue);
                assign(cloned);
            } else assign(getCheckboxValue(el, checked));
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate (el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value , oldValue  }, vnode) {
    el._modelValue = value;
    if (_shared.isArray(value)) el.checked = _shared.looseIndexOf(value, vnode.props.value) > -1;
    else if (_shared.isSet(value)) el.checked = value.has(vnode.props.value);
    else if (value !== oldValue) el.checked = _shared.looseEqual(value, getCheckboxValue(el, true));
}
const vModelRadio = {
    created (el, { value  }, vnode) {
        el.checked = _shared.looseEqual(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', ()=>{
            el._assign(getValue(el));
        });
    },
    beforeUpdate (el, { value , oldValue  }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) el.checked = _shared.looseEqual(value, vnode.props.value);
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created (el, { value , modifiers: { number  }  }, vnode) {
        const isSetModel = _shared.isSet(value);
        addEventListener(el, 'change', ()=>{
            const selectedVal = Array.prototype.filter.call(el.options, (o)=>o.selected
            ).map((o)=>number ? _shared.toNumber(getValue(o)) : getValue(o)
            );
            el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted (el, { value  }) {
        setSelected(el, value);
    },
    beforeUpdate (el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated (el, { value  }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !_shared.isArray(value) && !_shared.isSet(value)) {
        _runtimeCore.warn(`<select multiple v-model> expects an Array or Set value for its binding, ` + `but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for(let i1 = 0, l = el.options.length; i1 < l; i1++){
        const option = el.options[i1];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (_shared.isArray(value)) option.selected = _shared.looseIndexOf(value, optionValue) > -1;
            else option.selected = value.has(optionValue);
        } else if (_shared.looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i1) el.selectedIndex = i1;
            return;
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function callModelHook(el, binding, vnode, prevVNode, hook) {
    let modelToUse;
    switch(el.tagName){
        case 'SELECT':
            modelToUse = vModelSelect;
            break;
        case 'TEXTAREA':
            modelToUse = vModelText;
            break;
        default:
            switch(vnode.props && vnode.props.type){
                case 'checkbox':
                    modelToUse = vModelCheckbox;
                    break;
                case 'radio':
                    modelToUse = vModelRadio;
                    break;
                default:
                    modelToUse = vModelText;
            }
    }
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
const systemModifiers = [
    'ctrl',
    'shift',
    'alt',
    'meta'
];
const modifierGuards = {
    stop: (e)=>e.stopPropagation()
    ,
    prevent: (e)=>e.preventDefault()
    ,
    self: (e)=>e.target !== e.currentTarget
    ,
    ctrl: (e)=>!e.ctrlKey
    ,
    shift: (e)=>!e.shiftKey
    ,
    alt: (e)=>!e.altKey
    ,
    meta: (e)=>!e.metaKey
    ,
    left: (e)=>'button' in e && e.button !== 0
    ,
    middle: (e)=>'button' in e && e.button !== 1
    ,
    right: (e)=>'button' in e && e.button !== 2
    ,
    exact: (e, modifiers)=>systemModifiers.some((m)=>e[`${m}Key`] && !modifiers.includes(m)
        )
};
/**
 * @private
 */ const withModifiers = (fn, modifiers)=>{
    return (event, ...args)=>{
        for(let i1 = 0; i1 < modifiers.length; i1++){
            const guard = modifierGuards[modifiers[i1]];
            if (guard && guard(event, modifiers)) return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */ const withKeys = (fn, modifiers)=>{
    return (event)=>{
        if (!('key' in event)) return;
        const eventKey = _shared.hyphenate(event.key);
        if (modifiers.some((k)=>k === eventKey || keyNames[k] === eventKey
        )) return fn(event);
    };
};
const vShow = {
    beforeMount (el, { value  }, { transition  }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) transition.beforeEnter(el);
        else setDisplay(el, value);
    },
    mounted (el, { value  }, { transition  }) {
        if (transition && value) transition.enter(el);
    },
    updated (el, { value , oldValue  }, { transition  }) {
        if (!value === !oldValue) return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            } else transition.leave(el, ()=>{
                setDisplay(el, false);
            });
        } else setDisplay(el, value);
    },
    beforeUnmount (el, { value  }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}
const rendererOptions = _shared.extend({
    patchProp
}, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = _runtimeCore.createRenderer(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : _runtimeCore.createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const render = (...args)=>{
    ensureRenderer().render(...args);
};
const hydrate1 = (...args)=>{
    ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args)=>{
    const app = ensureRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount  } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (!container) return;
        const component = app._component;
        if (!_shared.isFunction(component) && !component.render && !component.template) // __UNSAFE__
        // Reason: potential execution of JS expressions in in-DOM template.
        // The user must make sure the in-DOM template is trusted. If it's
        // rendered by the server, the template should not contain any user data.
        component.template = container.innerHTML;
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
            container.removeAttribute('v-cloak');
            container.setAttribute('data-v-app', '');
        }
        return proxy;
    };
    return app;
};
const createSSRApp = (...args)=>{
    const app = ensureHydrationRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount  } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (container) return mount(container, true, container instanceof SVGElement);
    };
    return app;
};
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag)=>_shared.isHTMLTag(tag) || _shared.isSVGTag(tag)
        ,
        writable: false
    });
}
// dev only
function injectCompilerOptionsCheck(app) {
    if (_runtimeCore.isRuntimeOnly()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, 'isCustomElement', {
            get () {
                return isCustomElement;
            },
            set () {
                _runtimeCore.warn(`The \`isCustomElement\` config option is deprecated. Use ` + `\`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using ` + `a build of Vue.js that includes the runtime compiler (aka "full build"). ` + `Since you are using the runtime-only build, \`compilerOptions\` ` + `must be passed to \`@vue/compiler-dom\` in the build setup instead.\n` + `- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n` + `- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n` + `- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
        Object.defineProperty(app.config, 'compilerOptions', {
            get () {
                _runtimeCore.warn(msg);
                return compilerOptions;
            },
            set () {
                _runtimeCore.warn(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if (_shared.isString(container)) {
        const res = document.querySelector(container);
        if (!res) _runtimeCore.warn(`Failed to mount app: mount target selector "${container}" returned null.`);
        return res;
    }
    if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === 'closed') _runtimeCore.warn(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    return container;
}

},{"@vue/runtime-core":"fmy95","@vue/shared":"jjDCJ","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"fmy95":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>_reactivity.EffectScope
);
parcelHelpers.export(exports, "ReactiveEffect", ()=>_reactivity.ReactiveEffect
);
parcelHelpers.export(exports, "computed", ()=>_reactivity.computed
);
parcelHelpers.export(exports, "customRef", ()=>_reactivity.customRef
);
parcelHelpers.export(exports, "effect", ()=>_reactivity.effect
);
parcelHelpers.export(exports, "effectScope", ()=>_reactivity.effectScope
);
parcelHelpers.export(exports, "getCurrentScope", ()=>_reactivity.getCurrentScope
);
parcelHelpers.export(exports, "isProxy", ()=>_reactivity.isProxy
);
parcelHelpers.export(exports, "isReactive", ()=>_reactivity.isReactive
);
parcelHelpers.export(exports, "isReadonly", ()=>_reactivity.isReadonly
);
parcelHelpers.export(exports, "isRef", ()=>_reactivity.isRef
);
parcelHelpers.export(exports, "markRaw", ()=>_reactivity.markRaw
);
parcelHelpers.export(exports, "onScopeDispose", ()=>_reactivity.onScopeDispose
);
parcelHelpers.export(exports, "proxyRefs", ()=>_reactivity.proxyRefs
);
parcelHelpers.export(exports, "reactive", ()=>_reactivity.reactive
);
parcelHelpers.export(exports, "readonly", ()=>_reactivity.readonly
);
parcelHelpers.export(exports, "ref", ()=>_reactivity.ref
);
parcelHelpers.export(exports, "shallowReactive", ()=>_reactivity.shallowReactive
);
parcelHelpers.export(exports, "shallowReadonly", ()=>_reactivity.shallowReadonly
);
parcelHelpers.export(exports, "shallowRef", ()=>_reactivity.shallowRef
);
parcelHelpers.export(exports, "stop", ()=>_reactivity.stop
);
parcelHelpers.export(exports, "toRaw", ()=>_reactivity.toRaw
);
parcelHelpers.export(exports, "toRef", ()=>_reactivity.toRef
);
parcelHelpers.export(exports, "toRefs", ()=>_reactivity.toRefs
);
parcelHelpers.export(exports, "triggerRef", ()=>_reactivity.triggerRef
);
parcelHelpers.export(exports, "unref", ()=>_reactivity.unref
);
parcelHelpers.export(exports, "camelize", ()=>_shared.camelize
);
parcelHelpers.export(exports, "capitalize", ()=>_shared.capitalize
);
parcelHelpers.export(exports, "normalizeClass", ()=>_shared.normalizeClass
);
parcelHelpers.export(exports, "normalizeProps", ()=>_shared.normalizeProps
);
parcelHelpers.export(exports, "normalizeStyle", ()=>_shared.normalizeStyle
);
parcelHelpers.export(exports, "toDisplayString", ()=>_shared.toDisplayString
);
parcelHelpers.export(exports, "toHandlerKey", ()=>_shared.toHandlerKey
);
parcelHelpers.export(exports, "BaseTransition", ()=>BaseTransition
);
parcelHelpers.export(exports, "Comment", ()=>Comment1
);
parcelHelpers.export(exports, "Fragment", ()=>Fragment
);
parcelHelpers.export(exports, "KeepAlive", ()=>KeepAlive
);
parcelHelpers.export(exports, "Static", ()=>Static
);
parcelHelpers.export(exports, "Suspense", ()=>Suspense
);
parcelHelpers.export(exports, "Teleport", ()=>Teleport
);
parcelHelpers.export(exports, "Text", ()=>Text1
);
parcelHelpers.export(exports, "callWithAsyncErrorHandling", ()=>callWithAsyncErrorHandling
);
parcelHelpers.export(exports, "callWithErrorHandling", ()=>callWithErrorHandling
);
parcelHelpers.export(exports, "cloneVNode", ()=>cloneVNode
);
parcelHelpers.export(exports, "compatUtils", ()=>compatUtils
);
parcelHelpers.export(exports, "createBlock", ()=>createBlock
);
parcelHelpers.export(exports, "createCommentVNode", ()=>createCommentVNode
);
parcelHelpers.export(exports, "createElementBlock", ()=>createElementBlock
);
parcelHelpers.export(exports, "createElementVNode", ()=>createBaseVNode
);
parcelHelpers.export(exports, "createHydrationRenderer", ()=>createHydrationRenderer
);
parcelHelpers.export(exports, "createRenderer", ()=>createRenderer
);
parcelHelpers.export(exports, "createSlots", ()=>createSlots
);
parcelHelpers.export(exports, "createStaticVNode", ()=>createStaticVNode
);
parcelHelpers.export(exports, "createTextVNode", ()=>createTextVNode
);
parcelHelpers.export(exports, "createVNode", ()=>createVNode
);
parcelHelpers.export(exports, "defineAsyncComponent", ()=>defineAsyncComponent
);
parcelHelpers.export(exports, "defineComponent", ()=>defineComponent
);
parcelHelpers.export(exports, "defineEmits", ()=>defineEmits
);
parcelHelpers.export(exports, "defineExpose", ()=>defineExpose
);
parcelHelpers.export(exports, "defineProps", ()=>defineProps
);
parcelHelpers.export(exports, "devtools", ()=>devtools
);
parcelHelpers.export(exports, "getCurrentInstance", ()=>getCurrentInstance
);
parcelHelpers.export(exports, "getTransitionRawChildren", ()=>getTransitionRawChildren
);
parcelHelpers.export(exports, "guardReactiveProps", ()=>guardReactiveProps
);
parcelHelpers.export(exports, "h", ()=>h
);
parcelHelpers.export(exports, "handleError", ()=>handleError
);
parcelHelpers.export(exports, "initCustomFormatter", ()=>initCustomFormatter
);
parcelHelpers.export(exports, "inject", ()=>inject
);
parcelHelpers.export(exports, "isMemoSame", ()=>isMemoSame
);
parcelHelpers.export(exports, "isRuntimeOnly", ()=>isRuntimeOnly
);
parcelHelpers.export(exports, "isVNode", ()=>isVNode
);
parcelHelpers.export(exports, "mergeDefaults", ()=>mergeDefaults
);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps
);
parcelHelpers.export(exports, "nextTick", ()=>nextTick
);
parcelHelpers.export(exports, "onActivated", ()=>onActivated
);
parcelHelpers.export(exports, "onBeforeMount", ()=>onBeforeMount
);
parcelHelpers.export(exports, "onBeforeUnmount", ()=>onBeforeUnmount
);
parcelHelpers.export(exports, "onBeforeUpdate", ()=>onBeforeUpdate
);
parcelHelpers.export(exports, "onDeactivated", ()=>onDeactivated
);
parcelHelpers.export(exports, "onErrorCaptured", ()=>onErrorCaptured
);
parcelHelpers.export(exports, "onMounted", ()=>onMounted
);
parcelHelpers.export(exports, "onRenderTracked", ()=>onRenderTracked
);
parcelHelpers.export(exports, "onRenderTriggered", ()=>onRenderTriggered
);
parcelHelpers.export(exports, "onServerPrefetch", ()=>onServerPrefetch
);
parcelHelpers.export(exports, "onUnmounted", ()=>onUnmounted
);
parcelHelpers.export(exports, "onUpdated", ()=>onUpdated
);
parcelHelpers.export(exports, "openBlock", ()=>openBlock
);
parcelHelpers.export(exports, "popScopeId", ()=>popScopeId
);
parcelHelpers.export(exports, "provide", ()=>provide
);
parcelHelpers.export(exports, "pushScopeId", ()=>pushScopeId
);
parcelHelpers.export(exports, "queuePostFlushCb", ()=>queuePostFlushCb
);
parcelHelpers.export(exports, "registerRuntimeCompiler", ()=>registerRuntimeCompiler
);
parcelHelpers.export(exports, "renderList", ()=>renderList
);
parcelHelpers.export(exports, "renderSlot", ()=>renderSlot
);
parcelHelpers.export(exports, "resolveComponent", ()=>resolveComponent
);
parcelHelpers.export(exports, "resolveDirective", ()=>resolveDirective
);
parcelHelpers.export(exports, "resolveDynamicComponent", ()=>resolveDynamicComponent
);
parcelHelpers.export(exports, "resolveFilter", ()=>resolveFilter
);
parcelHelpers.export(exports, "resolveTransitionHooks", ()=>resolveTransitionHooks
);
parcelHelpers.export(exports, "setBlockTracking", ()=>setBlockTracking
);
parcelHelpers.export(exports, "setDevtoolsHook", ()=>setDevtoolsHook
);
parcelHelpers.export(exports, "setTransitionHooks", ()=>setTransitionHooks
);
parcelHelpers.export(exports, "ssrContextKey", ()=>ssrContextKey
);
parcelHelpers.export(exports, "ssrUtils", ()=>ssrUtils
);
parcelHelpers.export(exports, "toHandlers", ()=>toHandlers
);
parcelHelpers.export(exports, "transformVNodeArgs", ()=>transformVNodeArgs
);
parcelHelpers.export(exports, "useAttrs", ()=>useAttrs
);
parcelHelpers.export(exports, "useSSRContext", ()=>useSSRContext
);
parcelHelpers.export(exports, "useSlots", ()=>useSlots
);
parcelHelpers.export(exports, "useTransitionState", ()=>useTransitionState
);
parcelHelpers.export(exports, "version", ()=>version
);
parcelHelpers.export(exports, "warn", ()=>warn
);
parcelHelpers.export(exports, "watch", ()=>watch
);
parcelHelpers.export(exports, "watchEffect", ()=>watchEffect
);
parcelHelpers.export(exports, "watchPostEffect", ()=>watchPostEffect
);
parcelHelpers.export(exports, "watchSyncEffect", ()=>watchSyncEffect
);
parcelHelpers.export(exports, "withAsyncContext", ()=>withAsyncContext
);
parcelHelpers.export(exports, "withCtx", ()=>withCtx
);
parcelHelpers.export(exports, "withDefaults", ()=>withDefaults
);
parcelHelpers.export(exports, "withDirectives", ()=>withDirectives
);
parcelHelpers.export(exports, "withMemo", ()=>withMemo
);
parcelHelpers.export(exports, "withScopeId", ()=>withScopeId
);
var _reactivity = require("@vue/reactivity");
var _shared = require("@vue/shared");
var global = arguments[3];
/* eslint-disable no-restricted-globals */ let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
{
    const globalObject = typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {
    };
    globalObject.__VUE_HMR_RUNTIME__ = {
        createRecord: tryWrap(createRecord),
        rerender: tryWrap(rerender),
        reload: tryWrap(reload)
    };
}const map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id);
        record = map.get(id);
    }
    record.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).delete(instance);
}
function createRecord(id) {
    if (map.has(id)) return false;
    map.set(id, new Set());
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) return;
    [
        ...record
    ].forEach((instance)=>{
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record) return;
    newComp = normalizeClassComponent(newComp);
    // create a snapshot which avoids the set being mutated during updates
    const instances = [
        ...record
    ];
    for (const instance of instances){
        const oldComp = normalizeClassComponent(instance.type);
        if (!hmrDirtyComponents.has(oldComp)) {
            // 1. Update existing comp definition to match new one
            _shared.extend(oldComp, newComp);
            for(const key in oldComp)if (key !== '__file' && !(key in newComp)) delete oldComp[key];
            // 2. mark definition dirty. This forces the renderer to replace the
            // component on patch.
            hmrDirtyComponents.add(oldComp);
        }
        // 3. invalidate options resolution cache
        instance.appContext.optionsCache.delete(instance.type);
        // 4. actually update
        if (instance.ceReload) {
            // custom element
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
        } else if (instance.parent) {
            // 4. Force the parent instance to re-render. This will cause all updated
            // components to be unmounted and re-mounted. Queue the update so that we
            // don't end up forcing the same parent to re-render multiple times.
            queueJob(instance.parent.update);
            // instance is the inner component of an async custom element
            // invoke to reset styles
            if (instance.parent.type.__asyncLoader && instance.parent.ceReload) instance.parent.ceReload(newComp.styles);
        } else if (instance.appContext.reload) // root instance mounted via createApp() has a reload method
        instance.appContext.reload();
        else if (typeof window !== 'undefined') // root instance inside tree created via raw render(). Force reload.
        window.location.reload();
        else console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
    }
    // 5. make sure to cleanup dirty hmr components after update
    queuePostFlushCb(()=>{
        for (const instance1 of instances)hmrDirtyComponents.delete(normalizeClassComponent(instance1.type));
    });
}
function tryWrap(fn) {
    return (id, arg)=>{
        try {
            return fn(id, arg);
        } catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` + `Full reload required.`);
        }
    };
}
let devtools;
function setDevtoolsHook(hook) {
    devtools = hook;
}
function devtoolsInitApp(app, version) {
    // TODO queue if devtools is undefined
    if (!devtools) return;
    devtools.emit("app:init" /* APP_INIT */ , app, version, {
        Fragment,
        Text: Text1,
        Comment: Comment1,
        Static
    });
}
function devtoolsUnmountApp(app) {
    if (!devtools) return;
    devtools.emit("app:unmount" /* APP_UNMOUNT */ , app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */ );
const devtoolsComponentUpdated = /*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */ );
const devtoolsComponentRemoved = /*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */ );
function createDevtoolsComponentHook(hook) {
    return (component)=>{
        if (!devtools) return;
        devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
    };
}
const devtoolsPerfStart = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */ );
const devtoolsPerfEnd = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */ );
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time)=>{
        if (!devtools) return;
        devtools.emit(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    if (!devtools) return;
    devtools.emit("component:emit" /* COMPONENT_EMIT */ , component.appContext.app, component, event, params);
}
const deprecationData = {
    ["GLOBAL_MOUNT" /* GLOBAL_MOUNT */ ]: {
        message: `The global app bootstrapping API has changed: vm.$mount() and the "el" ` + `option have been removed. Use createApp(RootComponent).mount() instead.`,
        link: `https://v3.vuejs.org/guide/migration/global-api.html#mounting-app-instance`
    },
    ["GLOBAL_MOUNT_CONTAINER" /* GLOBAL_MOUNT_CONTAINER */ ]: {
        message: `Vue detected directives on the mount container. ` + `In Vue 3, the container is no longer considered part of the template ` + `and will not be processed/replaced.`,
        link: `https://v3.vuejs.org/guide/migration/mount-changes.html`
    },
    ["GLOBAL_EXTEND" /* GLOBAL_EXTEND */ ]: {
        message: `Vue.extend() has been removed in Vue 3. ` + `Use defineComponent() instead.`,
        link: `https://v3.vuejs.org/api/global-api.html#definecomponent`
    },
    ["GLOBAL_PROTOTYPE" /* GLOBAL_PROTOTYPE */ ]: {
        message: `Vue.prototype is no longer available in Vue 3. ` + `Use app.config.globalProperties instead.`,
        link: `https://v3.vuejs.org/guide/migration/global-api.html#vue-prototype-replaced-by-config-globalproperties`
    },
    ["GLOBAL_SET" /* GLOBAL_SET */ ]: {
        message: `Vue.set() has been removed as it is no longer needed in Vue 3. ` + `Simply use native JavaScript mutations.`
    },
    ["GLOBAL_DELETE" /* GLOBAL_DELETE */ ]: {
        message: `Vue.delete() has been removed as it is no longer needed in Vue 3. ` + `Simply use native JavaScript mutations.`
    },
    ["GLOBAL_OBSERVABLE" /* GLOBAL_OBSERVABLE */ ]: {
        message: `Vue.observable() has been removed. ` + `Use \`import { reactive } from "vue"\` from Composition API instead.`,
        link: `https://v3.vuejs.org/api/basic-reactivity.html`
    },
    ["GLOBAL_PRIVATE_UTIL" /* GLOBAL_PRIVATE_UTIL */ ]: {
        message: `Vue.util has been removed. Please refactor to avoid its usage ` + `since it was an internal API even in Vue 2.`
    },
    ["CONFIG_SILENT" /* CONFIG_SILENT */ ]: {
        message: `config.silent has been removed because it is not good practice to ` + `intentionally suppress warnings. You can use your browser console's ` + `filter features to focus on relevant messages.`
    },
    ["CONFIG_DEVTOOLS" /* CONFIG_DEVTOOLS */ ]: {
        message: `config.devtools has been removed. To enable devtools for ` + `production, configure the __VUE_PROD_DEVTOOLS__ compile-time flag.`,
        link: `https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags`
    },
    ["CONFIG_KEY_CODES" /* CONFIG_KEY_CODES */ ]: {
        message: `config.keyCodes has been removed. ` + `In Vue 3, you can directly use the kebab-case key names as v-on modifiers.`,
        link: `https://v3.vuejs.org/guide/migration/keycode-modifiers.html`
    },
    ["CONFIG_PRODUCTION_TIP" /* CONFIG_PRODUCTION_TIP */ ]: {
        message: `config.productionTip has been removed.`,
        link: `https://v3.vuejs.org/guide/migration/global-api.html#config-productiontip-removed`
    },
    ["CONFIG_IGNORED_ELEMENTS" /* CONFIG_IGNORED_ELEMENTS */ ]: {
        message: ()=>{
            let msg = `config.ignoredElements has been removed.`;
            if (isRuntimeOnly()) msg += ` Pass the "isCustomElement" option to @vue/compiler-dom instead.`;
            else msg += ` Use config.isCustomElement instead.`;
            return msg;
        },
        link: `https://v3.vuejs.org/guide/migration/global-api.html#config-ignoredelements-is-now-config-iscustomelement`
    },
    ["CONFIG_WHITESPACE" /* CONFIG_WHITESPACE */ ]: {
        // this warning is only relevant in the full build when using runtime
        // compilation, so it's put in the runtime compatConfig list.
        message: `Vue 3 compiler's whitespace option will default to "condense" instead of ` + `"preserve". To suppress this warning, provide an explicit value for ` + `\`config.compilerOptions.whitespace\`.`
    },
    ["CONFIG_OPTION_MERGE_STRATS" /* CONFIG_OPTION_MERGE_STRATS */ ]: {
        message: `config.optionMergeStrategies no longer exposes internal strategies. ` + `Use custom merge functions instead.`
    },
    ["INSTANCE_SET" /* INSTANCE_SET */ ]: {
        message: `vm.$set() has been removed as it is no longer needed in Vue 3. ` + `Simply use native JavaScript mutations.`
    },
    ["INSTANCE_DELETE" /* INSTANCE_DELETE */ ]: {
        message: `vm.$delete() has been removed as it is no longer needed in Vue 3. ` + `Simply use native JavaScript mutations.`
    },
    ["INSTANCE_DESTROY" /* INSTANCE_DESTROY */ ]: {
        message: `vm.$destroy() has been removed. Use app.unmount() instead.`,
        link: `https://v3.vuejs.org/api/application-api.html#unmount`
    },
    ["INSTANCE_EVENT_EMITTER" /* INSTANCE_EVENT_EMITTER */ ]: {
        message: `vm.$on/$once/$off() have been removed. ` + `Use an external event emitter library instead.`,
        link: `https://v3.vuejs.org/guide/migration/events-api.html`
    },
    ["INSTANCE_EVENT_HOOKS" /* INSTANCE_EVENT_HOOKS */ ]: {
        message: (event)=>`"${event}" lifecycle events are no longer supported. From templates, ` + `use the "vnode" prefix instead of "hook:". For example, @${event} ` + `should be changed to @vnode-${event.slice(5)}. ` + `From JavaScript, use Composition API to dynamically register lifecycle ` + `hooks.`
        ,
        link: `https://v3.vuejs.org/guide/migration/vnode-lifecycle-events.html`
    },
    ["INSTANCE_CHILDREN" /* INSTANCE_CHILDREN */ ]: {
        message: `vm.$children has been removed. Consider refactoring your logic ` + `to avoid relying on direct access to child components.`,
        link: `https://v3.vuejs.org/guide/migration/children.html`
    },
    ["INSTANCE_LISTENERS" /* INSTANCE_LISTENERS */ ]: {
        message: `vm.$listeners has been removed. In Vue 3, parent v-on listeners are ` + `included in vm.$attrs and it is no longer necessary to separately use ` + `v-on="$listeners" if you are already using v-bind="$attrs". ` + `(Note: the Vue 3 behavior only applies if this compat config is disabled)`,
        link: `https://v3.vuejs.org/guide/migration/listeners-removed.html`
    },
    ["INSTANCE_SCOPED_SLOTS" /* INSTANCE_SCOPED_SLOTS */ ]: {
        message: `vm.$scopedSlots has been removed. Use vm.$slots instead.`,
        link: `https://v3.vuejs.org/guide/migration/slots-unification.html`
    },
    ["INSTANCE_ATTRS_CLASS_STYLE" /* INSTANCE_ATTRS_CLASS_STYLE */ ]: {
        message: (componentName)=>`Component <${componentName || 'Anonymous'}> has \`inheritAttrs: false\` but is ` + `relying on class/style fallthrough from parent. In Vue 3, class/style ` + `are now included in $attrs and will no longer fallthrough when ` + `inheritAttrs is false. If you are already using v-bind="$attrs" on ` + `component root it should render the same end result. ` + `If you are binding $attrs to a non-root element and expecting ` + `class/style to fallthrough on root, you will need to now manually bind ` + `them on root via :class="$attrs.class".`
        ,
        link: `https://v3.vuejs.org/guide/migration/attrs-includes-class-style.html`
    },
    ["OPTIONS_DATA_FN" /* OPTIONS_DATA_FN */ ]: {
        message: `The "data" option can no longer be a plain object. ` + `Always use a function.`,
        link: `https://v3.vuejs.org/guide/migration/data-option.html`
    },
    ["OPTIONS_DATA_MERGE" /* OPTIONS_DATA_MERGE */ ]: {
        message: (key)=>`Detected conflicting key "${key}" when merging data option values. ` + `In Vue 3, data keys are merged shallowly and will override one another.`
        ,
        link: `https://v3.vuejs.org/guide/migration/data-option.html#mixin-merge-behavior-change`
    },
    ["OPTIONS_BEFORE_DESTROY" /* OPTIONS_BEFORE_DESTROY */ ]: {
        message: `\`beforeDestroy\` has been renamed to \`beforeUnmount\`.`
    },
    ["OPTIONS_DESTROYED" /* OPTIONS_DESTROYED */ ]: {
        message: `\`destroyed\` has been renamed to \`unmounted\`.`
    },
    ["WATCH_ARRAY" /* WATCH_ARRAY */ ]: {
        message: `"watch" option or vm.$watch on an array value will no longer ` + `trigger on array mutation unless the "deep" option is specified. ` + `If current usage is intended, you can disable the compat behavior and ` + `suppress this warning with:` + `\n\n  configureCompat({ ${"WATCH_ARRAY" /* WATCH_ARRAY */ }: false })\n`,
        link: `https://v3.vuejs.org/guide/migration/watch.html`
    },
    ["PROPS_DEFAULT_THIS" /* PROPS_DEFAULT_THIS */ ]: {
        message: (key)=>`props default value function no longer has access to "this". The compat ` + `build only offers access to this.$options.` + `(found in prop "${key}")`
        ,
        link: `https://v3.vuejs.org/guide/migration/props-default-this.html`
    },
    ["CUSTOM_DIR" /* CUSTOM_DIR */ ]: {
        message: (legacyHook, newHook)=>`Custom directive hook "${legacyHook}" has been removed. ` + `Use "${newHook}" instead.`
        ,
        link: `https://v3.vuejs.org/guide/migration/custom-directives.html`
    },
    ["V_FOR_REF" /* V_FOR_REF */ ]: {
        message: `Ref usage on v-for no longer creates array ref values in Vue 3. ` + `Consider using function refs or refactor to avoid ref usage altogether.`,
        link: `https://v3.vuejs.org/guide/migration/array-refs.html`
    },
    ["V_ON_KEYCODE_MODIFIER" /* V_ON_KEYCODE_MODIFIER */ ]: {
        message: `Using keyCode as v-on modifier is no longer supported. ` + `Use kebab-case key name modifiers instead.`,
        link: `https://v3.vuejs.org/guide/migration/keycode-modifiers.html`
    },
    ["ATTR_FALSE_VALUE" /* ATTR_FALSE_VALUE */ ]: {
        message: (name)=>`Attribute "${name}" with v-bind value \`false\` will render ` + `${name}="false" instead of removing it in Vue 3. To remove the attribute, ` + `use \`null\` or \`undefined\` instead. If the usage is intended, ` + `you can disable the compat behavior and suppress this warning with:` + `\n\n  configureCompat({ ${"ATTR_FALSE_VALUE" /* ATTR_FALSE_VALUE */ }: false })\n`
        ,
        link: `https://v3.vuejs.org/guide/migration/attribute-coercion.html`
    },
    ["ATTR_ENUMERATED_COERCION" /* ATTR_ENUMERATED_COERCION */ ]: {
        message: (name, value, coerced)=>`Enumerated attribute "${name}" with v-bind value \`${value}\` will ` + `${value === null ? `be removed` : `render the value as-is`} instead of coercing the value to "${coerced}" in Vue 3. ` + `Always use explicit "true" or "false" values for enumerated attributes. ` + `If the usage is intended, ` + `you can disable the compat behavior and suppress this warning with:` + `\n\n  configureCompat({ ${"ATTR_ENUMERATED_COERCION" /* ATTR_ENUMERATED_COERCION */ }: false })\n`
        ,
        link: `https://v3.vuejs.org/guide/migration/attribute-coercion.html`
    },
    ["TRANSITION_CLASSES" /* TRANSITION_CLASSES */ ]: {
        message: `` // this feature cannot be runtime-detected
    },
    ["TRANSITION_GROUP_ROOT" /* TRANSITION_GROUP_ROOT */ ]: {
        message: `<TransitionGroup> no longer renders a root <span> element by ` + `default if no "tag" prop is specified. If you do not rely on the span ` + `for styling, you can disable the compat behavior and suppress this ` + `warning with:` + `\n\n  configureCompat({ ${"TRANSITION_GROUP_ROOT" /* TRANSITION_GROUP_ROOT */ }: false })\n`,
        link: `https://v3.vuejs.org/guide/migration/transition-group.html`
    },
    ["COMPONENT_ASYNC" /* COMPONENT_ASYNC */ ]: {
        message: (comp)=>{
            const name = getComponentName(comp);
            return `Async component${name ? ` <${name}>` : `s`} should be explicitly created via \`defineAsyncComponent()\` ` + `in Vue 3. Plain functions will be treated as functional components in ` + `non-compat build. If you have already migrated all async component ` + `usage and intend to use plain functions for functional components, ` + `you can disable the compat behavior and suppress this ` + `warning with:` + `\n\n  configureCompat({ ${"COMPONENT_ASYNC" /* COMPONENT_ASYNC */ }: false })\n`;
        },
        link: `https://v3.vuejs.org/guide/migration/async-components.html`
    },
    ["COMPONENT_FUNCTIONAL" /* COMPONENT_FUNCTIONAL */ ]: {
        message: (comp)=>{
            const name = getComponentName(comp);
            return `Functional component${name ? ` <${name}>` : `s`} should be defined as a plain function in Vue 3. The "functional" ` + `option has been removed. NOTE: Before migrating to use plain ` + `functions for functional components, first make sure that all async ` + `components usage have been migrated and its compat behavior has ` + `been disabled.`;
        },
        link: `https://v3.vuejs.org/guide/migration/functional-components.html`
    },
    ["COMPONENT_V_MODEL" /* COMPONENT_V_MODEL */ ]: {
        message: (comp)=>{
            const configMsg = `opt-in to ` + `Vue 3 behavior on a per-component basis with \`compatConfig: { ${"COMPONENT_V_MODEL" /* COMPONENT_V_MODEL */ }: false }\`.`;
            if (comp.props && (_shared.isArray(comp.props) ? comp.props.includes('modelValue') : _shared.hasOwn(comp.props, 'modelValue'))) return `Component delcares "modelValue" prop, which is Vue 3 usage, but ` + `is running under Vue 2 compat v-model behavior. You can ${configMsg}`;
            return `v-model usage on component has changed in Vue 3. Component that expects ` + `to work with v-model should now use the "modelValue" prop and emit the ` + `"update:modelValue" event. You can update the usage and then ${configMsg}`;
        },
        link: `https://v3.vuejs.org/guide/migration/v-model.html`
    },
    ["RENDER_FUNCTION" /* RENDER_FUNCTION */ ]: {
        message: `Vue 3's render function API has changed. ` + `You can opt-in to the new API with:` + `\n\n  configureCompat({ ${"RENDER_FUNCTION" /* RENDER_FUNCTION */ }: false })\n` + `\n  (This can also be done per-component via the "compatConfig" option.)`,
        link: `https://v3.vuejs.org/guide/migration/render-function-api.html`
    },
    ["FILTERS" /* FILTERS */ ]: {
        message: `filters have been removed in Vue 3. ` + `The "|" symbol will be treated as native JavaScript bitwise OR operator. ` + `Use method calls or computed properties instead.`,
        link: `https://v3.vuejs.org/guide/migration/filters.html`
    },
    ["PRIVATE_APIS" /* PRIVATE_APIS */ ]: {
        message: (name)=>`"${name}" is a Vue 2 private API that no longer exists in Vue 3. ` + `If you are seeing this warning only due to a dependency, you can ` + `suppress this warning via { PRIVATE_APIS: 'supress-warning' }.`
    }
};
const instanceWarned = Object.create(null);
const warnCount = Object.create(null);
function warnDeprecation(key, instance, ...args) {
    instance = instance || getCurrentInstance();
    // check user config
    const config = getCompatConfigForKey(key, instance);
    if (config === 'suppress-warning') return;
    const dupKey = key + args.join('');
    let compId = instance && formatComponentName(instance, instance.type);
    if (compId === 'Anonymous' && instance) compId = instance.uid;
    // skip if the same warning is emitted for the same component type
    const componentDupKey = dupKey + compId;
    if (componentDupKey in instanceWarned) return;
    instanceWarned[componentDupKey] = true;
    // same warning, but different component. skip the long message and just
    // log the key and count.
    if (dupKey in warnCount) {
        warn(`(deprecation ${key}) (${(++warnCount[dupKey]) + 1})`);
        return;
    }
    warnCount[dupKey] = 0;
    const { message , link  } = deprecationData[key];
    warn(`(deprecation ${key}) ${typeof message === 'function' ? message(...args) : message}${link ? `\n  Details: ${link}` : ``}`);
    if (!isCompatEnabled(key, instance, true)) console.error(`^ The above deprecation's compat behavior is disabled and will likely ` + `lead to runtime errors.`);
}
const globalCompatConfig = {
    MODE: 2
};
function getCompatConfigForKey(key, instance) {
    const instanceConfig = instance && instance.type.compatConfig;
    if (instanceConfig && key in instanceConfig) return instanceConfig[key];
    return globalCompatConfig[key];
}
function isCompatEnabled(key, instance, enableForBuiltIn = false) {
    // skip compat for built-in components
    if (!enableForBuiltIn && instance && instance.type.__isBuiltIn) return false;
    const rawMode = getCompatConfigForKey('MODE', instance) || 2;
    const val = getCompatConfigForKey(key, instance);
    const mode = _shared.isFunction(rawMode) ? rawMode(instance && instance.type) : rawMode;
    if (mode === 2) return val !== false;
    else return val === true || val === 'suppress-warning';
}
function emit(instance, event, ...rawArgs) {
    const props = instance.vnode.props || _shared.EMPTY_OBJ;
    {
        const { emitsOptions , propsOptions: [propsOptions]  } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
                if (!propsOptions || !(_shared.toHandlerKey(event) in propsOptions)) warn(`Component emitted event "${event}" but it is neither declared in ` + `the emits option nor as an "${_shared.toHandlerKey(event)}" prop.`);
            } else {
                const validator = emitsOptions[event];
                if (_shared.isFunction(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) warn(`Invalid event arguments: event validation failed for event "${event}".`);
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith('update:');
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
        const { number , trim  } = props[modifiersKey] || _shared.EMPTY_OBJ;
        if (trim) args = rawArgs.map((a)=>a.trim()
        );
        else if (number) args = rawArgs.map(_shared.toNumber);
    }
    devtoolsComponentEmit(instance, event, args);
    {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[_shared.toHandlerKey(lowerCaseEvent)]) warn(`Event "${lowerCaseEvent}" is emitted in component ` + `${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". ` + `Note that HTML attributes are case-insensitive and you cannot use ` + `v-on to listen to camelCase events when using in-DOM templates. ` + `You should probably use "${_shared.hyphenate(event)}" instead of "${event}".`);
    }
    let handlerName;
    let handler = props[handlerName = _shared.toHandlerKey(event)] || // also try camelCase event handler (#2249)
    props[handlerName = _shared.toHandlerKey(_shared.camelize(event))];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) handler = props[handlerName = _shared.toHandlerKey(_shared.hyphenate(event))];
    if (handler) callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */ , args);
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) instance.emitted = {
        };
        else if (instance.emitted[handlerName]) return;
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */ , args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== undefined) return cached;
    const raw = comp.emits;
    let normalized = {
    };
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !_shared.isFunction(comp)) {
        const extendEmits = (raw1)=>{
            const normalizedFromExtend = normalizeEmitsOptions(raw1, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                _shared.extend(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
        if (comp.extends) extendEmits(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendEmits);
    }
    if (!raw && !hasExtends) {
        cache.set(comp, null);
        return null;
    }
    if (_shared.isArray(raw)) raw.forEach((key)=>normalized[key] = null
    );
    else _shared.extend(normalized, raw);
    cache.set(comp, normalized);
    return normalized;
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !_shared.isOn(key)) return false;
    key = key.slice(2).replace(/Once$/, '');
    return _shared.hasOwn(options, key[0].toLowerCase() + key.slice(1)) || _shared.hasOwn(options, _shared.hyphenate(key)) || _shared.hasOwn(options, key);
}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */ let currentRenderingInstance = null;
let currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */ function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */ function pushScopeId(id) {
    currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */ function popScopeId() {
    currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */ const withScopeId = (_id)=>withCtx
;
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */ function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot // false only
) {
    if (!ctx) return fn;
    // already normalized
    if (fn._n) return fn;
    const renderFnWithContext = (...args)=>{
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we disable block tracking and
        // force bail out when invoking a compiled slot (indicated by the ._d flag).
        // This isn't necessary if rendering a compiled `<slot>`, so we flip the
        // ._d flag off when invoking the wrapped fn inside `renderSlot`.
        if (renderFnWithContext._d) setBlockTracking(-1);
        const prevInstance = setCurrentRenderingInstance(ctx);
        const res = fn(...args);
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) setBlockTracking(1);
        devtoolsComponentUpdated(ctx);
        return res;
    };
    // mark normalized to avoid duplicated wrapping
    renderFnWithContext._n = true;
    // mark this as compiled by default
    // this is used in vnode.ts -> normalizeChildren() to set the slot
    // rendering flag.
    renderFnWithContext._c = true;
    // disable block tracking by default
    renderFnWithContext._d = true;
    return renderFnWithContext;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */ let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component , vnode , proxy , withProxy , props , propsOptions: [propsOptions] , slots , attrs , emit: emit1 , render , renderCache , data , setupState , ctx , inheritAttrs  } = instance;
    let result;
    const prev = setCurrentRenderingInstance(instance);
    accessedAttrs = false;
    try {
        let fallthroughAttrs;
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */ ) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        } else {
            // functional
            const render1 = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (attrs === props) markAttrsAccessed();
            result = normalizeVNode(render1.length > 1 ? render1(props, {
                get attrs () {
                    markAttrsAccessed();
                    return attrs;
                },
                slots,
                emit: emit1
            }) : render1(props, null));
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
        }
        // attr merging
        // in dev mode, comments are preserved, and it's possible for a template
        // to have comments along side the root element which makes it a fragment
        let root = result;
        let setRoot = undefined;
        if (result.patchFlag > 0 && result.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */ ) [root, setRoot] = getChildRoot(result);
        if (fallthroughAttrs && inheritAttrs !== false) {
            const keys = Object.keys(fallthroughAttrs);
            const { shapeFlag  } = root;
            if (keys.length) {
                if (shapeFlag & 7 /* COMPONENT */ ) {
                    if (propsOptions && keys.some(_shared.isModelListener)) // If a v-model listener (onUpdate:xxx) has a corresponding declared
                    // prop, it indicates this component expects to handle v-model and
                    // it should not fallthrough.
                    // related: #1543, #1643, #1989
                    fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                    root = cloneVNode(root, fallthroughAttrs);
                } else if (!accessedAttrs && root.type !== Comment1) {
                    const allAttrs = Object.keys(attrs);
                    const eventAttrs = [];
                    const extraAttrs = [];
                    for(let i = 0, l = allAttrs.length; i < l; i++){
                        const key = allAttrs[i];
                        if (_shared.isOn(key)) // ignore v-model handlers when they fail to fallthrough
                        {
                            if (!_shared.isModelListener(key)) // remove `on`, lowercase first letter to reflect event casing
                            // accurately
                            eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                        } else extraAttrs.push(key);
                    }
                    if (extraAttrs.length) warn(`Extraneous non-props attributes (` + `${extraAttrs.join(', ')}) ` + `were passed to component but could not be automatically inherited ` + `because component renders fragment or text root nodes.`);
                    if (eventAttrs.length) warn(`Extraneous non-emits event listeners (` + `${eventAttrs.join(', ')}) ` + `were passed to component but could not be automatically inherited ` + `because component renders fragment or text root nodes. ` + `If the listener is intended to be a component custom event listener only, ` + `declare it using the "emits" option.`);
                }
            }
        }
        // inherit directives
        if (vnode.dirs) {
            if (!isElementRoot(root)) warn(`Runtime directive used on component with non-element root node. ` + `The directives will not function as intended.`);
            root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
        }
        // inherit transition data
        if (vnode.transition) {
            if (!isElementRoot(root)) warn(`Component inside <Transition> renders non-element root node ` + `that cannot be animated.`);
            root.transition = vnode.transition;
        }
        if (setRoot) setRoot(root);
        else result = root;
    } catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1 /* RENDER_FUNCTION */ );
        result = createVNode(Comment1);
    }
    setCurrentRenderingInstance(prev);
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */ const getChildRoot = (vnode)=>{
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) return [
        vnode,
        undefined
    ];
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot)=>{
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) dynamicChildren[dynamicIndex] = updatedRoot;
            else if (updatedRoot.patchFlag > 0) vnode.dynamicChildren = [
                ...dynamicChildren,
                updatedRoot
            ];
        }
    };
    return [
        normalizeVNode(childRoot),
        setRoot
    ];
};
function filterSingleRoot(children) {
    let singleRoot;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (isVNode(child)) // ignore user comment
        {
            if (child.type !== Comment1 || child.children === 'v-if') {
                if (singleRoot) // has more than 1 non-comment child, return now
                return;
                else singleRoot = child;
            }
        } else return;
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs)=>{
    let res;
    for(const key in attrs)if (key === 'class' || key === 'style' || _shared.isOn(key)) (res || (res = {
    }))[key] = attrs[key];
    return res;
};
const filterModelListeners = (attrs, props)=>{
    const res = {
    };
    for(const key in attrs)if (!_shared.isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
    return res;
};
const isElementRoot = (vnode)=>{
    return vnode.shapeFlag & 7 /* ELEMENT */  || vnode.type === Comment1 // potential v-if branch switch
    ;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps , children: prevChildren , component  } = prevVNode;
    const { props: nextProps , children: nextChildren , patchFlag  } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if ((prevChildren || nextChildren) && isHmrUpdating) return true;
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) return true;
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* DYNAMIC_SLOTS */ ) // slot content that references values that might have changed,
        // e.g. in a v-for
        return true;
        if (patchFlag & 16 /* FULL_PROPS */ ) {
            if (!prevProps) return !!nextProps;
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8 /* PROPS */ ) {
            const dynamicProps = nextVNode.dynamicProps;
            for(let i = 0; i < dynamicProps.length; i++){
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) return true;
            }
        }
    } else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) return true;
        }
        if (prevProps === nextProps) return false;
        if (!prevProps) return !!nextProps;
        if (!nextProps) return true;
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) return true;
    for(let i = 0; i < nextKeys.length; i++){
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) return true;
    }
    return false;
}
function updateHOCHostEl({ vnode , parent  }, el // HostNode
) {
    while(parent && parent.subTree === vnode){
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}
const isSuspense = (type)=>type.__isSuspense
;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    name: 'Suspense',
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
        else patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary,
    normalize: normalizeSuspenseChildren
};
// Force-casted public typing for h and TSX props inference
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if (_shared.isFunction(eventListener)) eventListener();
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    const { p: patch , o: { createElement  }  } = rendererInternals;
    const hiddenContainer = createElement('div');
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals);
    // start mounting the content subtree in an off-dom container
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // invoke @fallback event
        triggerEvent(vnode, 'onPending');
        triggerEvent(vnode, 'onFallback');
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    } else // Suspense has no async deps. Just resolve.
    suspense.resolve();
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch , um: unmount , o: { createElement  }  }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch , pendingBranch , isInFallback , isHydrating  } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) suspense.resolve();
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, newFallback);
            }
        } else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            } else unmount(pendingBranch, parentComponent, suspense);
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement('div');
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                // force resolve
                suspense.resolve(true);
            } else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
            }
        }
    } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // root did not change, just normal patch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newBranch);
    } else {
        // root node toggled
        // invoke @pending event
        triggerEvent(n2, 'onPending');
        // mount pending branch in off-dom container
        suspense.pendingBranch = newBranch;
        suspense.pendingId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) // incoming branch has no async deps, resolve now.
        suspense.resolve();
        else {
            const { timeout , pendingId  } = suspense;
            if (timeout > 0) setTimeout(()=>{
                if (suspense.pendingId === pendingId) suspense.fallback(newFallback);
            }, timeout);
            else if (timeout === 0) suspense.fallback(newFallback);
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parent, parentComponent, container1, hiddenContainer, anchor1, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */ if (!hasWarned) {
        hasWarned = true;
        // @ts-ignore `console.info` cannot be null error
        console[console.info ? 'info' : 'log'](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch , m: move , um: unmount , n: next , o: { parentNode , remove  }  } = rendererInternals;
    const timeout = _shared.toNumber(vnode.props && vnode.props.timeout);
    const suspense = {
        vnode,
        parent,
        parentComponent,
        isSVG,
        container: container1,
        hiddenContainer,
        anchor: anchor1,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === 'number' ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve (resume = false) {
            if (!resume && !suspense.pendingBranch) throw new Error(`suspense.resolve() is called without a pending branch.`);
            if (suspense.isUnmounted) throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
            const { vnode: vnode1 , activeBranch , pendingBranch , pendingId , effects , parentComponent: parentComponent1 , container: container1  } = suspense;
            if (suspense.isHydrating) suspense.isHydrating = false;
            else if (!resume) {
                const delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === 'out-in';
                if (delayEnter) activeBranch.transition.afterLeave = ()=>{
                    if (pendingId === suspense.pendingId) move(pendingBranch, container1, anchor1, 0 /* ENTER */ );
                };
                // this is initial anchor on mount
                let { anchor: anchor1  } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor1 = next(activeBranch);
                    unmount(activeBranch, parentComponent1, suspense, true);
                }
                if (!delayEnter) // move content from off-dom container to actual container
                move(pendingBranch, container1, anchor1, 0 /* ENTER */ );
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent1 = suspense.parent;
            let hasUnresolvedAncestor = false;
            while(parent1){
                if (parent1.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent1.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent1 = parent1.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) queuePostFlushCb(effects);
            suspense.effects = [];
            // invoke @resolve event
            triggerEvent(vnode1, 'onResolve');
        },
        fallback (fallbackVNode) {
            if (!suspense.pendingBranch) return;
            const { vnode: vnode1 , activeBranch , parentComponent: parentComponent1 , container: container1 , isSVG: isSVG1  } = suspense;
            // invoke @fallback event
            triggerEvent(vnode1, 'onFallback');
            const anchor1 = next(activeBranch);
            const mountFallback = ()=>{
                if (!suspense.isInFallback) return;
                // mount the fallback tree
                patch(null, fallbackVNode, container1, anchor1, parentComponent1, null, isSVG1, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';
            if (delayEnter) activeBranch.transition.afterLeave = mountFallback;
            suspense.isInFallback = true;
            // unmount current active branch
            unmount(activeBranch, parentComponent1, null, true // shouldRemove
            );
            if (!delayEnter) mountFallback();
        },
        move (container, anchor, type) {
            suspense.activeBranch && move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next () {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep (instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) suspense.deps++;
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err)=>{
                handleError(err, instance, 0 /* SETUP_FUNCTION */ );
            }).then((asyncSetupResult)=>{
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
                // retry from this component
                instance.asyncResolved = true;
                const { vnode: vnode1  } = instance;
                pushWarningContext(vnode1);
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) // vnode may have been replaced if an update happened before the
                // async dep is resolved.
                vnode1.el = hydratedEl;
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode1, // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                if (placeholder) remove(placeholder);
                updateHOCHostEl(instance, vnode1.el);
                popWarningContext();
                // only decrease deps count if suspense is not already resolved
                if (isInPendingSuspense && (--suspense.deps) === 0) suspense.resolve();
            });
        },
        unmount (parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
            if (suspense.pendingBranch) unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */ const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true);
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) suspense.resolve();
    return result;
/* eslint-enable no-restricted-globals */ }
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag , children  } = vnode;
    const isSlotChildren = shapeFlag & 32 /* SLOTS_CHILDREN */ ;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment1);
}
function normalizeSuspenseSlot(s) {
    let block;
    if (_shared.isFunction(s)) {
        const isCompiledSlot = s._c;
        if (isCompiledSlot) {
            // disableTracking: false
            // allow block tracking for compiled slots
            // (see ./componentRenderContext.ts)
            s._d = false;
            openBlock();
        }
        s = s();
        if (isCompiledSlot) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if (_shared.isArray(s)) {
        const singleChild = filterSingleRoot(s);
        if (!singleChild) warn(`<Suspense> slots expect a single root node.`);
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c)=>c !== s
    );
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if (_shared.isArray(fn)) suspense.effects.push(...fn);
        else suspense.effects.push(fn);
    } else queuePostFlushCb(fn);
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode , parentComponent  } = suspense;
    const el = vnode.el = branch.el;
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}
function provide(key, value) {
    if (!currentInstance) warn(`provide() can only be used inside setup().`);
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the intance is at root
        const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
        if (provides && key in provides) // TS doesn't allow symbol as index type
        return provides[key];
        else if (arguments.length > 1) return treatDefaultAsFactory && _shared.isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
        else warn(`injection "${String(key)}" not found.`);
    } else warn(`inject() can only be used inside setup() or functional components.`);
}
function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(()=>{
        state.isMounted = true;
    });
    onBeforeUnmount(()=>{
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [
    Function,
    Array
];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup (props, { slots  }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return ()=>{
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) return;
            // warn multiple elements
            if (children.length > 1) warn("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = _reactivity.toRaw(props);
            const { mode  } = rawProps;
            // check mode
            if (mode && ![
                'in-out',
                'out-in',
                'default'
            ].includes(mode)) warn(`invalid <transition> mode: ${mode}`);
            // at this point children has a guaranteed length of 1.
            const child = children[0];
            if (state.isLeaving) return emptyPlaceholder(child);
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) return emptyPlaceholder(child);
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey  } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) prevTransitionKey = key;
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild && oldInnerChild.type !== Comment1 && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = ()=>{
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                } else if (mode === 'in-out' && innerChild.type !== Comment1) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave)=>{
                    const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                    leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                    // early removal callback
                    el._leaveCb = ()=>{
                        earlyRemove();
                        el._leaveCb = undefined;
                        delete enterHooks.delayedLeave;
                    };
                    enterHooks.delayedLeave = delayedLeave;
                };
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes  } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode1, props, state, instance) {
    const { appear , mode , persisted =false , onBeforeEnter , onEnter , onAfterEnter , onEnterCancelled , onBeforeLeave , onLeave , onAfterLeave , onLeaveCancelled , onBeforeAppear , onAppear , onAfterAppear , onAppearCancelled  } = props;
    const key = String(vnode1.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode1);
    const callHook = (hook, args)=>{
        hook && callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */ , args);
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter (el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) hook = onBeforeAppear || onBeforeEnter;
                else return;
            }
            // for same element (v-show)
            if (el._leaveCb) el._leaveCb(true);
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && isSameVNodeType(vnode1, leavingVNode) && leavingVNode.el._leaveCb) // force early removal (not cancelled)
            leavingVNode.el._leaveCb();
            callHook(hook, [
                el
            ]);
        },
        enter (el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                } else return;
            }
            let called = false;
            const done = el._enterCb = (cancelled)=>{
                if (called) return;
                called = true;
                if (cancelled) callHook(cancelHook, [
                    el
                ]);
                else callHook(afterHook, [
                    el
                ]);
                if (hooks.delayedLeave) hooks.delayedLeave();
                el._enterCb = undefined;
            };
            if (hook) {
                hook(el, done);
                if (hook.length <= 1) done();
            } else done();
        },
        leave (el, remove) {
            const key1 = String(vnode1.key);
            if (el._enterCb) el._enterCb(true);
            if (state.isUnmounting) return remove();
            callHook(onBeforeLeave, [
                el
            ]);
            let called = false;
            const done = el._leaveCb = (cancelled)=>{
                if (called) return;
                called = true;
                remove();
                if (cancelled) callHook(onLeaveCancelled, [
                    el
                ]);
                else callHook(onAfterLeave, [
                    el
                ]);
                el._leaveCb = undefined;
                if (leavingVNodesCache[key1] === vnode1) delete leavingVNodesCache[key1];
            };
            leavingVNodesCache[key1] = vnode1;
            if (onLeave) {
                onLeave(el, done);
                if (onLeave.length <= 1) done();
            } else done();
        },
        clone (vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* COMPONENT */  && vnode.component) setTransitionHooks(vnode.component.subTree, hooks);
    else if (vnode.shapeFlag & 128 /* SUSPENSE */ ) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false) {
    let ret = [];
    let keyedFragmentCount = 0;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* KEYED_FRAGMENT */ ) keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
        } else if (keepComment || child.type !== Comment1) ret.push(child);
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) for(let i1 = 0; i1 < ret.length; i1++)ret[i1].patchFlag = -2 /* BAIL */ ;
    return ret;
}
// implementation, close to no-op
function defineComponent(options) {
    return _shared.isFunction(options) ? {
        setup: options,
        name: options.name
    } : options;
}
const isAsyncWrapper = (i)=>!!i.type.__asyncLoader
;
function defineAsyncComponent(source) {
    if (_shared.isFunction(source)) source = {
        loader: source
    };
    const { loader , loadingComponent , errorComponent , delay =200 , timeout , suspensible =true , onError: userOnError  } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = ()=>{
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = ()=>{
        let thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch((err)=>{
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) return new Promise((resolve, reject)=>{
                const userRetry = ()=>resolve(retry())
                ;
                const userFail = ()=>reject(err)
                ;
                userOnError(err, userRetry, userFail, retries + 1);
            });
            else throw err;
        }).then((comp)=>{
            if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
            if (!comp) warn(`Async component loader resolved to undefined. ` + `If you are using retry(), make sure to return its return value.`);
            // interop module default
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) comp = comp.default;
            if (comp && !_shared.isObject(comp) && !_shared.isFunction(comp)) throw new Error(`Invalid async component load result: ${comp}`);
            resolvedComp = comp;
            return comp;
        }));
    };
    return defineComponent({
        name: 'AsyncComponentWrapper',
        __asyncLoader: load,
        get __asyncResolved () {
            return resolvedComp;
        },
        setup () {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) return ()=>createInnerComp(resolvedComp, instance)
            ;
            const onError = (err)=>{
                pendingRequest = null;
                handleError(err, instance, 13 /* ASYNC_COMPONENT_LOADER */ , !errorComponent /* do not throw in dev if user provided error component */ );
            };
            // suspense-controlled or SSR.
            if (suspensible && instance.suspense || false) return load().then((comp)=>{
                return ()=>createInnerComp(comp, instance)
                ;
            }).catch((err)=>{
                onError(err);
                return ()=>errorComponent ? createVNode(errorComponent, {
                        error: err
                    }) : null
                ;
            });
            const loaded = _reactivity.ref(false);
            const error = _reactivity.ref();
            const delayed = _reactivity.ref(!!delay);
            if (delay) setTimeout(()=>{
                delayed.value = false;
            }, delay);
            if (timeout != null) setTimeout(()=>{
                if (!loaded.value && !error.value) {
                    const err = new Error(`Async component timed out after ${timeout}ms.`);
                    onError(err);
                    error.value = err;
                }
            }, timeout);
            load().then(()=>{
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) // parent is keep-alive, force update so the loaded component's
                // name is taken into account
                queueJob(instance.parent.update);
            }).catch((err)=>{
                onError(err);
                error.value = err;
            });
            return ()=>{
                if (loaded.value && resolvedComp) return createInnerComp(resolvedComp, instance);
                else if (error.value && errorComponent) return createVNode(errorComponent, {
                    error: error.value
                });
                else if (loadingComponent && !delayed.value) return createVNode(loadingComponent);
            };
        }
    });
}
function createInnerComp(comp, { vnode: { ref , props , children  }  }) {
    const vnode = createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    return vnode;
}
const isKeepAlive = (vnode)=>vnode.type.__isKeepAlive
;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [
            String,
            RegExp,
            Array
        ],
        exclude: [
            String,
            RegExp,
            Array
        ],
        max: [
            String,
            Number
        ]
    },
    setup (props, { slots  }) {
        const instance = getCurrentInstance();
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance.ctx;
        // if the internal renderer is not registered, it indicates that this is server-side rendering,
        // for KeepAlive, we just need to render its children
        if (!sharedContext.renderer) return slots.default;
        const cache = new Map();
        const keys = new Set();
        let current = null;
        instance.__v_cache = cache;
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch , m: move , um: _unmount , o: { createElement  }  }  } = sharedContext;
        const storageContainer = createElement('div');
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized)=>{
            const instance1 = vnode.component;
            move(vnode, container, anchor, 0 /* ENTER */ , parentSuspense);
            // in case props have changed
            patch(instance1.vnode, vnode, container, anchor, instance1, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(()=>{
                instance1.isDeactivated = false;
                if (instance1.a) _shared.invokeArrayFns(instance1.a);
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance1.parent, vnode);
            }, parentSuspense);
            // Update components tree
            devtoolsComponentAdded(instance1);
        };
        sharedContext.deactivate = (vnode)=>{
            const instance1 = vnode.component;
            move(vnode, storageContainer, null, 1 /* LEAVE */ , parentSuspense);
            queuePostRenderEffect(()=>{
                if (instance1.da) _shared.invokeArrayFns(instance1.da);
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance1.parent, vnode);
                instance1.isDeactivated = true;
            }, parentSuspense);
            // Update components tree
            devtoolsComponentAdded(instance1);
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key)=>{
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) pruneCacheEntry(key);
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) unmount(cached);
            else if (current) // current active instance should no longer be kept-alive.
            // we can't unmount it now but it might be later, so reset its flag now.
            resetShapeFlag(current);
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(()=>[
                props.include,
                props.exclude
            ]
        , ([include, exclude])=>{
            include && pruneCache((name)=>matches(include, name)
            );
            exclude && pruneCache((name)=>!matches(exclude, name)
            );
        }, // prune post-render after `current` has been updated
        {
            flush: 'post',
            deep: true
        });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = ()=>{
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) cache.set(pendingCacheKey, getInnerChild(instance.subTree));
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(()=>{
            cache.forEach((cached)=>{
                const { subTree , suspense  } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return ()=>{
            pendingCacheKey = null;
            if (!slots.default) return null;
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                warn(`KeepAlive should contain exactly one component child.`);
                current = null;
                return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4 /* STATEFUL_COMPONENT */ ) && !(rawVNode.shapeFlag & 128 /* SUSPENSE */ )) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            // for async components, name check should be based in its loaded
            // inner component if available
            const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {
            } : comp);
            const { include , exclude , max  } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* SUSPENSE */ ) rawVNode.ssContent = vnode;
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) // recursively update transition hooks on subTree
                setTransitionHooks(vnode, vnode.transition);
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* COMPONENT_KEPT_ALIVE */ ;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            } else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ;
            current = vnode;
            return rawVNode;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if (_shared.isArray(pattern)) return pattern.some((p)=>matches(p, name)
    );
    else if (_shared.isString(pattern)) return pattern.split(',').indexOf(name) > -1;
    else if (pattern.test) return pattern.test(name);
    /* istanbul ignore next */ return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* ACTIVATED */ , target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* DEACTIVATED */ , target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc || (hook.__wdc = ()=>{
        // only fire the hook if the target instance is NOT in a deactivated branch.
        let current = target;
        while(current){
            if (current.isDeactivated) return;
            current = current.parent;
        }
        hook();
    });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while(current && current.parent){
            if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true);
    onUnmounted(()=>{
        _shared.remove(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ) shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ;
    if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */ ) shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */ ;
    vnode.shapeFlag = shapeFlag;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* SUSPENSE */  ? vnode.ssContent : vnode;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh || (hook.__weh = (...args)=>{
            if (target.isUnmounted) return;
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            _reactivity.pauseTracking();
            // Set currentInstance during hook invocation.
            // This assumes the hook does not synchronously trigger other hooks, which
            // can only be false when the user does something really funky.
            setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            unsetCurrentInstance();
            _reactivity.resetTracking();
            return res;
        });
        if (prepend) hooks.unshift(wrappedHook);
        else hooks.push(wrappedHook);
        return wrappedHook;
    } else {
        const apiName = _shared.toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ''));
        warn(`${apiName} is called when there is no active component instance to be ` + `associated with. ` + `Lifecycle injection APIs can only be used during execution of setup().` + (` If you are using async setup(), make sure to register lifecycle ` + `hooks before the first await statement.`));
    }
}
const createHook = (lifecycle)=>(hook, target = currentInstance)=>// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!isInSSRComponentSetup || lifecycle === "sp" /* SERVER_PREFETCH */ ) && injectHook(lifecycle, hook, target)
;
const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */ );
const onMounted = createHook("m" /* MOUNTED */ );
const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */ );
const onUpdated = createHook("u" /* UPDATED */ );
const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */ );
const onUnmounted = createHook("um" /* UNMOUNTED */ );
const onServerPrefetch = createHook("sp" /* SERVER_PREFETCH */ );
const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */ );
const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */ );
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec" /* ERROR_CAPTURED */ , hook, target);
}
function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key)=>{
        if (cache[key]) warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
        else cache[key] = type;
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    // do not cache property access on public proxy during state initialization
    shouldCacheAccess = false;
    // call beforeCreate first before accessing other options since
    // the hook may mutate resolved options (#2791)
    if (options.beforeCreate) callHook(options.beforeCreate, instance, "bc" /* BEFORE_CREATE */ );
    const { // state
    data: dataOptions , computed: computedOptions , methods , watch: watchOptions , provide: provideOptions , inject: injectOptions , // lifecycle
    created , beforeMount , mounted , beforeUpdate , updated , activated , deactivated , beforeDestroy , beforeUnmount , destroyed , unmounted , render , renderTracked , renderTriggered , errorCaptured , serverPrefetch , // public API
    expose , inheritAttrs , // assets
    components , directives , filters  } = options;
    const checkDuplicateProperties = createDuplicateChecker();
    {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) for(const key in propsOptions)checkDuplicateProperties("Props" /* PROPS */ , key);
    }
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    if (methods) for(const key in methods){
        const methodHandler = methods[key];
        if (_shared.isFunction(methodHandler)) {
            Object.defineProperty(ctx, key, {
                value: methodHandler.bind(publicThis),
                configurable: true,
                enumerable: true,
                writable: true
            });
            checkDuplicateProperties("Methods" /* METHODS */ , key);
        } else warn(`Method "${key}" has type "${typeof methodHandler}" in the component definition. ` + `Did you reference the function correctly?`);
    }
    if (dataOptions) {
        if (!_shared.isFunction(dataOptions)) warn(`The data option must be a function. ` + `Plain object usage is no longer supported.`);
        const data = dataOptions.call(publicThis, publicThis);
        if (_shared.isPromise(data)) warn(`data() returned a Promise - note data() cannot be async; If you ` + `intend to perform data fetching before component renders, use ` + `async setup() + <Suspense>.`);
        if (!_shared.isObject(data)) warn(`data() should return an object.`);
        else {
            instance.data = _reactivity.reactive(data);
            for(const key1 in data){
                checkDuplicateProperties("Data" /* DATA */ , key1);
                // expose data on ctx during dev
                if (key1[0] !== '$' && key1[0] !== '_') Object.defineProperty(ctx, key1, {
                    configurable: true,
                    enumerable: true,
                    get: ()=>data[key1]
                    ,
                    set: _shared.NOOP
                });
            }
        }
    }
    // state initialization complete at this point - start caching access
    shouldCacheAccess = true;
    if (computedOptions) for(const key1 in computedOptions){
        const opt = computedOptions[key1];
        const get = _shared.isFunction(opt) ? opt.bind(publicThis, publicThis) : _shared.isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : _shared.NOOP;
        if (get === _shared.NOOP) warn(`Computed property "${key1}" has no getter.`);
        const set = !_shared.isFunction(opt) && _shared.isFunction(opt.set) ? opt.set.bind(publicThis) : ()=>{
            warn(`Write operation failed: computed property "${key1}" is readonly.`);
        };
        const c = _reactivity.computed({
            get,
            set
        });
        Object.defineProperty(ctx, key1, {
            enumerable: true,
            configurable: true,
            get: ()=>c.value
            ,
            set: (v)=>c.value = v
        });
        checkDuplicateProperties("Computed" /* COMPUTED */ , key1);
    }
    if (watchOptions) for(const key2 in watchOptions)createWatcher(watchOptions[key2], ctx, publicThis, key2);
    if (provideOptions) {
        const provides = _shared.isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key3)=>{
            provide(key3, provides[key3]);
        });
    }
    if (created) callHook(created, instance, "c" /* CREATED */ );
    function registerLifecycleHook(register, hook) {
        if (_shared.isArray(hook)) hook.forEach((_hook)=>register(_hook.bind(publicThis))
        );
        else if (hook) register(hook.bind(publicThis));
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (_shared.isArray(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {
            });
            expose.forEach((key3)=>{
                Object.defineProperty(exposed, key3, {
                    get: ()=>publicThis[key3]
                    ,
                    set: (val)=>publicThis[key3] = val
                });
            });
        } else if (!instance.exposed) instance.exposed = {
        };
    }
    // options that are handled when creating the instance but also need to be
    // applied from mixins
    if (render && instance.render === _shared.NOOP) instance.render = render;
    if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
    // asset options.
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = _shared.NOOP, unwrapRef = false) {
    if (_shared.isArray(injectOptions)) injectOptions = normalizeInject(injectOptions);
    for(const key in injectOptions){
        const opt = injectOptions[key];
        let injected;
        if (_shared.isObject(opt)) {
            if ('default' in opt) injected = inject(opt.from || key, opt.default, true);
            else injected = inject(opt.from || key);
        } else injected = inject(opt);
        if (_reactivity.isRef(injected)) {
            // TODO remove the check in 3.3
            if (unwrapRef) Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>injected.value
                ,
                set: (v)=>injected.value = v
            });
            else {
                warn(`injected property "${key}" is a ref and will be auto-unwrapped ` + `and no longer needs \`.value\` in the next minor release. ` + `To opt-in to the new behavior now, ` + `set \`app.config.unwrapInjectedRef = true\` (this config is ` + `temporary and will not be needed in the future.)`);
                ctx[key] = injected;
            }
        } else ctx[key] = injected;
        checkDuplicateProperties("Inject" /* INJECT */ , key);
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(_shared.isArray(hook) ? hook.map((h)=>h.bind(instance.proxy)
    ) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes('.') ? createPathGetter(publicThis, key) : ()=>publicThis[key]
    ;
    if (_shared.isString(raw)) {
        const handler = ctx[raw];
        if (_shared.isFunction(handler)) watch(getter, handler);
        else warn(`Invalid watch handler specified by key "${raw}"`, handler);
    } else if (_shared.isFunction(raw)) watch(getter, raw.bind(publicThis));
    else if (_shared.isObject(raw)) {
        if (_shared.isArray(raw)) raw.forEach((r)=>createWatcher(r, ctx, publicThis, key)
        );
        else {
            const handler = _shared.isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if (_shared.isFunction(handler)) watch(getter, handler, raw);
            else warn(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
    } else warn(`Invalid watch option: "${key}"`, raw);
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */ function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins , extends: extendsOptions  } = base;
    const { mixins: globalMixins , optionsCache: cache , config: { optionMergeStrategies  }  } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) resolved = cached;
    else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
    else {
        resolved = {
        };
        if (globalMixins.length) globalMixins.forEach((m)=>mergeOptions(resolved, m, optionMergeStrategies, true)
        );
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    cache.set(base, resolved);
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins , extends: extendsOptions  } = from;
    if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
    if (mixins) mixins.forEach((m)=>mergeOptions(to, m, strats, true)
    );
    for(const key in from)if (asMixin && key === 'expose') warn(`"expose" option is ignored when declared in mixins or extends. ` + `It should only be declared in the base component itself.`);
    else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) return to;
    if (!to) return from;
    return function mergedDataFn() {
        return _shared.extend(_shared.isFunction(to) ? to.call(this, this) : to, _shared.isFunction(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if (_shared.isArray(raw)) {
        const res = {
        };
        for(let i = 0; i < raw.length; i++)res[raw[i]] = raw[i];
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [
        ...new Set([].concat(to, from))
    ] : from;
}
function mergeObjectOptions(to, from) {
    return to ? _shared.extend(_shared.extend(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged = _shared.extend(Object.create(null), to);
    for(const key in from)merged[key] = mergeAsArray(to[key], from[key]);
    return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {
    };
    const attrs = {
    };
    _shared.def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    // ensure all declared prop keys are present
    for(const key in instance.propsOptions[0])if (!(key in props)) props[key] = undefined;
    validateProps(rawProps || {
    }, props, instance);
    if (isStateful) // stateful
    instance.props = isSSR ? props : _reactivity.shallowReactive(props);
    else if (!instance.type.props) // functional w/ optional props, props === attrs
    instance.props = attrs;
    else // functional w/ declared props
    instance.props = props;
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props , attrs , vnode: { patchFlag  }  } = instance;
    const rawCurrentProps = _reactivity.toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (// always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId) && (optimized || patchFlag > 0) && !(patchFlag & 16 /* FULL_PROPS */ )) {
        if (patchFlag & 8 /* PROPS */ ) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for(let i = 0; i < propsToUpdate.length; i++){
                let key = propsToUpdate[i];
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if (_shared.hasOwn(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    } else {
                        const camelizedKey = _shared.camelize(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                    }
                } else if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    } else {
        // full props update.
        if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for(const key in rawCurrentProps)if (!rawProps || !_shared.hasOwn(rawProps, key) && ((kebabKey = _shared.hyphenate(key)) === key || !_shared.hasOwn(rawProps, kebabKey))) {
            if (options) {
                if (rawPrevProps && (rawPrevProps[key] !== undefined || // for kebab-case
                rawPrevProps[kebabKey] !== undefined)) props[key] = resolvePropValue(options, rawCurrentProps, key, undefined, instance, true);
            } else delete props[key];
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for(const key1 in attrs)if (!rawProps || !_shared.hasOwn(rawProps, key1)) {
                delete attrs[key1];
                hasAttrsChanged = true;
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    if (hasAttrsChanged) _reactivity.trigger(instance, "set" /* SET */ , '$attrs');
    validateProps(rawProps || {
    }, props, instance);
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) for(let key in rawProps){
        // key, ref are reserved and never passed down
        if (_shared.isReservedProp(key)) continue;
        const value = rawProps[key];
        // prop option names are camelized during normalization, so to support
        // kebab -> camel conversion here we need to camelize the key.
        let camelKey;
        if (options && _shared.hasOwn(options, camelKey = _shared.camelize(key))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
            else (rawCastValues || (rawCastValues = {
            }))[camelKey] = value;
        } else if (!isEmitListener(instance.emitsOptions, key)) {
            if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = _reactivity.toRaw(props);
        const castValues = rawCastValues || _shared.EMPTY_OBJ;
        for(let i = 0; i < needCastKeys.length; i++){
            const key1 = needCastKeys[i];
            props[key1] = resolvePropValue(options, rawCurrentProps, key1, castValues[key1], instance, !_shared.hasOwn(castValues, key1));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = _shared.hasOwn(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && _shared.isFunction(defaultValue)) {
                const { propsDefaults  } = instance;
                if (key in propsDefaults) value = propsDefaults[key];
                else {
                    setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    unsetCurrentInstance();
                }
            } else value = defaultValue;
        }
        // boolean casting
        if (opt[0 /* shouldCast */ ]) {
            if (isAbsent && !hasDefault) value = false;
            else if (opt[1 /* shouldCastTrue */ ] && (value === '' || value === _shared.hyphenate(key))) value = true;
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) return cached;
    const raw = comp.props;
    const normalized = {
    };
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !_shared.isFunction(comp)) {
        const extendProps = (raw1)=>{
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw1, appContext, true);
            _shared.extend(normalized, props);
            if (keys) needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
        if (comp.extends) extendProps(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendProps);
    }
    if (!raw && !hasExtends) {
        cache.set(comp, _shared.EMPTY_ARR);
        return _shared.EMPTY_ARR;
    }
    if (_shared.isArray(raw)) for(let i = 0; i < raw.length; i++){
        if (!_shared.isString(raw[i])) warn(`props must be strings when using array syntax.`, raw[i]);
        const normalizedKey = _shared.camelize(raw[i]);
        if (validatePropName(normalizedKey)) normalized[normalizedKey] = _shared.EMPTY_OBJ;
    }
    else if (raw) {
        if (!_shared.isObject(raw)) warn(`invalid props options`, raw);
        for(const key in raw){
            const normalizedKey = _shared.camelize(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = normalized[normalizedKey] = _shared.isArray(opt) || _shared.isFunction(opt) ? {
                    type: opt
                } : opt;
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */ ] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */ ] = stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || _shared.hasOwn(prop, 'default')) needCastKeys.push(normalizedKey);
                }
            }
        }
    }
    const res = [
        normalized,
        needCastKeys
    ];
    cache.set(comp, res);
    return res;
}
function validatePropName(key) {
    if (key[0] !== '$') return true;
    else warn(`Invalid prop name: "${key}" is a reserved property.`);
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? 'null' : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (_shared.isArray(expectedTypes)) return expectedTypes.findIndex((t)=>isSameType(t, type)
    );
    else if (_shared.isFunction(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
    return -1;
}
/**
 * dev only
 */ function validateProps(rawProps, props, instance) {
    const resolvedValues = _reactivity.toRaw(props);
    const options = instance.propsOptions[0];
    for(const key in options){
        let opt = options[key];
        if (opt == null) continue;
        validateProp(key, resolvedValues[key], opt, !_shared.hasOwn(rawProps, key) && !_shared.hasOwn(rawProps, _shared.hyphenate(key)));
    }
}
/**
 * dev only
 */ function validateProp(name, value, prop, isAbsent) {
    const { type , required , validator  } = prop;
    // required!
    if (required && isAbsent) {
        warn('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) return;
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = _shared.isArray(type) ? type : [
            type
        ];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for(let i = 0; i < types.length && !isValid; i++){
            const { valid , expectedType  } = assertType(value, types[i]);
            expectedTypes.push(expectedType || '');
            isValid = valid;
        }
        if (!isValid) {
            warn(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) warn('Invalid prop: custom validator check failed for prop "' + name + '".');
}
const isSimpleType = /*#__PURE__*/ _shared.makeMap('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */ function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') valid = value instanceof type;
    } else if (expectedType === 'Object') valid = _shared.isObject(value);
    else if (expectedType === 'Array') valid = _shared.isArray(value);
    else if (expectedType === 'null') valid = value === null;
    else valid = value instanceof type;
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */ function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` + ` Expected ${expectedTypes.map(_shared.capitalize).join(' | ')}`;
    const expectedType = expectedTypes[0];
    const receivedType = _shared.toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) message += ` with value ${expectedValue}`;
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) message += `with value ${receivedValue}.`;
    return message;
}
/**
 * dev only
 */ function styleValue(value, type) {
    if (type === 'String') return `"${value}"`;
    else if (type === 'Number') return `${Number(value)}`;
    else return `${value}`;
}
/**
 * dev only
 */ function isExplicable(type) {
    const explicitTypes = [
        'string',
        'number',
        'boolean'
    ];
    return explicitTypes.some((elem)=>type.toLowerCase() === elem
    );
}
/**
 * dev only
 */ function isBoolean(...args) {
    return args.some((elem)=>elem.toLowerCase() === 'boolean'
    );
}
const isInternalKey = (key)=>key[0] === '_' || key === '$stable'
;
const normalizeSlotValue = (value)=>_shared.isArray(value) ? value.map(normalizeVNode) : [
        normalizeVNode(value)
    ]
;
const normalizeSlot = (key, rawSlot, ctx)=>{
    const normalized = withCtx((...args)=>{
        if (currentInstance) warn(`Slot "${key}" invoked outside of the render function: ` + `this will not track dependencies used in the slot. ` + `Invoke the slot function inside the render function instead.`);
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance)=>{
    const ctx = rawSlots._ctx;
    for(const key in rawSlots){
        if (isInternalKey(key)) continue;
        const value = rawSlots[key];
        if (_shared.isFunction(value)) slots[key] = normalizeSlot(key, value, ctx);
        else if (value != null) {
            warn(`Non-function value encountered for slot "${key}". ` + `Prefer function slots for better performance.`);
            const normalized = normalizeSlotValue(value);
            slots[key] = ()=>normalized
            ;
        }
    }
};
const normalizeVNodeSlots = (instance, children)=>{
    if (!isKeepAlive(instance.vnode) && true) warn(`Non-function value encountered for default slot. ` + `Prefer function slots for better performance.`);
    const normalized = normalizeSlotValue(children);
    instance.slots.default = ()=>normalized
    ;
};
const initSlots = (instance, children)=>{
    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */ ) {
        const type = children._;
        if (type) {
            // users can get the shallow readonly version of the slots object through `this.$slots`,
            // we should avoid the proxy object polluting the slots of the internal instance
            instance.slots = _reactivity.toRaw(children);
            // make compiler marker non-enumerable
            _shared.def(children, '_', type);
        } else normalizeObjectSlots(children, instance.slots = {
        });
    } else {
        instance.slots = {
        };
        if (children) normalizeVNodeSlots(instance, children);
    }
    _shared.def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized)=>{
    const { vnode , slots  } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = _shared.EMPTY_OBJ;
    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */ ) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (isHmrUpdating) // Parent was HMR updated so slot content may have changed.
            // force update slots and mark instance for hmr as well
            _shared.extend(slots, children);
            else if (optimized && type === 1 /* STABLE */ ) // compiled AND stable.
            // no need to update, and skip stale slots removal.
            needDeletionCheck = false;
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                _shared.extend(slots, children);
                // #2893
                // when rendering the optimized slots by manually written render function,
                // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
                // i.e. let the `renderSlot` create the bailed Fragment
                if (!optimized && type === 1 /* STABLE */ ) delete slots._;
            }
        } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    } else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = {
            default: 1
        };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for(const key in slots)if (!isInternalKey(key) && !(key in deletionComparisonTarget)) delete slots[key];
    }
};
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/ const isBuiltInDirective = /*#__PURE__*/ _shared.makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text');
function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) warn('Do not use built-in directive ids as custom directive id: ' + name);
}
/**
 * Adds directives to a VNode.
 */ function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        warn(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for(let i = 0; i < directives.length; i++){
        let [dir, value, arg, modifiers = _shared.EMPTY_OBJ] = directives[i];
        if (_shared.isFunction(dir)) dir = {
            mounted: dir,
            updated: dir
        };
        if (dir.deep) traverse(value);
        bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
        });
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for(let i = 0; i < bindings.length; i++){
        const binding = bindings[i];
        if (oldBindings) binding.oldValue = oldBindings[i].value;
        let hook = binding.dir[name];
        if (hook) {
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            _reactivity.pauseTracking();
            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */ , [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            _reactivity.resetTracking();
        }
    }
}
function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: _shared.NO,
            performance: false,
            globalProperties: {
            },
            optionMergeStrategies: {
            },
            errorHandler: undefined,
            warnHandler: undefined,
            compilerOptions: {
            }
        },
        mixins: [],
        components: {
        },
        directives: {
        },
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (rootProps != null && !_shared.isObject(rootProps)) {
            warn(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config () {
                return context.config;
            },
            set config (v){
                warn(`app.config cannot be replaced. Modify individual options instead.`);
            },
            use (plugin, ...options) {
                if (installedPlugins.has(plugin)) warn(`Plugin has already been applied to target app.`);
                else if (plugin && _shared.isFunction(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                } else if (_shared.isFunction(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                } else warn(`A plugin must either be a function or an object with an "install" ` + `function.`);
                return app;
            },
            mixin (mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
                    else warn('Mixin has already been applied to target app' + (mixin.name ? `: ${mixin.name}` : ''));
                } else warn('Mixins are only available in builds supporting Options API');
                return app;
            },
            component (name, component) {
                validateComponentName(name, context.config);
                if (!component) return context.components[name];
                if (context.components[name]) warn(`Component "${name}" has already been registered in target app.`);
                context.components[name] = component;
                return app;
            },
            directive (name, directive) {
                validateDirectiveName(name);
                if (!directive) return context.directives[name];
                if (context.directives[name]) warn(`Directive "${name}" has already been registered in target app.`);
                context.directives[name] = directive;
                return app;
            },
            mount (rootContainer, isHydrate, isSVG) {
                if (!isMounted) {
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    context.reload = ()=>{
                        render(cloneVNode(vnode), rootContainer, isSVG);
                    };
                    if (isHydrate && hydrate) hydrate(vnode, rootContainer);
                    else render(vnode, rootContainer, isSVG);
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    app._instance = vnode.component;
                    devtoolsInitApp(app, version);
                    return vnode.component.proxy;
                } else warn(`App has already been mounted.\n` + `If you want to remount the same app, move your app creation logic ` + `into a factory function and create fresh app instances for each ` + `mount - e.g. \`const createMyApp = () => createApp(App)\``);
            },
            unmount () {
                if (isMounted) {
                    render(null, app._container);
                    app._instance = null;
                    devtoolsUnmountApp(app);
                    delete app._container.__vue_app__;
                } else warn(`Cannot unmount an app that is not mounted.`);
            },
            provide (key, value) {
                if (key in context.provides) warn(`App already provides property with key "${String(key)}". ` + `It will be overwritten with the new value.`);
                // TypeScript doesn't allow symbols as index type
                // https://github.com/Microsoft/TypeScript/issues/24587
                context.provides[key] = value;
                return app;
            }
        };
        return app;
    };
}
let hasMismatch = false;
const isSVGContainer = (container)=>/svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject'
;
const isComment = (node)=>node.nodeType === 8 /* COMMENT */ 
;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent , p: patch , o: { patchProp , nextSibling , parentNode , remove , insert , createComment  }  } = rendererInternals;
    const hydrate = (vnode, container)=>{
        if (!container.hasChildNodes()) {
            warn(`Attempting to hydrate existing markup but container is empty. ` + `Performing full mount instead.`);
            patch(null, vnode, container);
            flushPostFlushCbs();
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        if (hasMismatch && true) // this error should show up in production
        console.error(`Hydration completed but contains mismatches.`);
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false)=>{
        const isFragmentStart = isComment(node) && node.data === '[';
        const onMismatch = ()=>handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart)
        ;
        const { type , ref , shapeFlag  } = vnode;
        const domType = node.nodeType;
        vnode.el = node;
        let nextNode = null;
        switch(type){
            case Text1:
                if (domType !== 3 /* TEXT */ ) nextNode = onMismatch();
                else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        warn(`Hydration text mismatch:` + `\n- Client: ${JSON.stringify(node.data)}` + `\n- Server: ${JSON.stringify(vnode.children)}`);
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment1:
                if (domType !== 8 /* COMMENT */  || isFragmentStart) nextNode = onMismatch();
                else nextNode = nextSibling(node);
                break;
            case Static:
                if (domType !== 1 /* ELEMENT */ ) nextNode = onMismatch();
                else {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for(let i = 0; i < vnode.staticCount; i++){
                        if (needToAdoptContent) vnode.children += nextNode.outerHTML;
                        if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
                        nextNode = nextSibling(nextNode);
                    }
                    return nextNode;
                }
                break;
            case Fragment:
                if (!isFragmentStart) nextNode = onMismatch();
                else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */ ) {
                    if (domType !== 1 /* ELEMENT */  || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) nextNode = onMismatch();
                    else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                } else if (shapeFlag & 6 /* COMPONENT */ ) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
                    // #3787
                    // if component is async, it may get moved / unmounted before its
                    // inner component is loaded, so we need to give it a placeholder
                    // vnode that matches its adopted DOM.
                    if (isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = createVNode(Fragment);
                            subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                        } else subTree = node.nodeType === 3 ? createTextVNode('') : createVNode('div');
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                } else if (shapeFlag & 64 /* TELEPORT */ ) {
                    if (domType !== 8 /* COMMENT */ ) nextNode = onMismatch();
                    else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                } else if (shapeFlag & 128 /* SUSPENSE */ ) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                else warn('Invalid HostVNode type:', type, `(${typeof type})`);
        }
        if (ref != null) setRef(ref, null, parentSuspense, vnode);
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const { type , props , patchFlag , shapeFlag , dirs  } = vnode;
        // #4006 for form elements with non-string v-model value bindings
        // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
        const forcePatchValue = type === 'input' && dirs || type === 'option';
        // skip props & children if this is hoisted static nodes
        if (forcePatchValue || patchFlag !== -1 /* HOISTED */ ) {
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, 'created');
            // props
            if (props) {
                if (forcePatchValue || !optimized || patchFlag & 48 /* HYDRATE_EVENTS */ ) {
                    for(const key in props)if (forcePatchValue && key.endsWith('value') || _shared.isOn(key) && !_shared.isReservedProp(key)) patchProp(el, key, null, props[key]);
                } else if (props.onClick) // Fast path for click listeners (which is most often) to avoid
                // iterating through props.
                patchProp(el, 'onClick', null, props.onClick);
            }
            // vnode / directive hooks
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) queueEffectWithSuspense(()=>{
                vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
            // children
            if (shapeFlag & 16 /* ARRAY_CHILDREN */  && // skip if element has innerHTML / textContent
            !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned1 = false;
                while(next){
                    hasMismatch = true;
                    if (!hasWarned1) {
                        warn(`Hydration children mismatch in <${vnode.type}>: ` + `server rendered element contains more child nodes than client vdom.`);
                        hasWarned1 = true;
                    }
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            } else if (shapeFlag & 8 /* TEXT_CHILDREN */ ) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    warn(`Hydration text content mismatch in <${vnode.type}>:\n` + `- Client: ${el.textContent}\n` + `- Server: ${vnode.children}`);
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned1 = false;
        for(let i = 0; i < l; i++){
            const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
            if (node) node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            else if (vnode.type === Text1 && !vnode.children) continue;
            else {
                hasMismatch = true;
                if (!hasWarned1) {
                    warn(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: ` + `server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned1 = true;
                }
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        const { slotScopeIds: fragmentSlotScopeIds  } = vnode;
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === ']') return nextSibling(vnode.anchor = next);
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment)=>{
        hasMismatch = true;
        warn(`Hydration node mismatch:\n- Client vnode:`, vnode.type, `\n- Server rendered DOM:`, node, node.nodeType === 3 /* TEXT */  ? `(text)` : isComment(node) && node.data === '[' ? `(start of fragment)` : ``);
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while(true){
                const next = nextSibling(node);
                if (next && next !== end) remove(next);
                else break;
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
        return next;
    };
    const locateClosingAsyncAnchor = (node)=>{
        let match = 0;
        while(node){
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === '[') match++;
                if (node.data === ']') {
                    if (match === 0) return nextSibling(node);
                    else match--;
                }
            }
        }
        return node;
    };
    return [
        hydrate,
        hydrateNode
    ];
}
let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) perf.mark(`vue-${type}-${instance.uid}`);
    devtoolsPerfStart(instance, type, supported ? perf.now() : Date.now());
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    devtoolsPerfEnd(instance, type, supported ? perf.now() : Date.now());
}
function isSupported() {
    if (supported !== undefined) return supported;
    /* eslint-disable no-restricted-globals */ if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    } else supported = false;
    /* eslint-enable no-restricted-globals */ return supported;
}
/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */ function initFeatureFlags() {
    let needWarn = false;
    if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
        needWarn = true;
        _shared.getGlobalThis().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
        needWarn = true;
        _shared.getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (needWarn) console.warn(`You are running the esm-bundler build of Vue. It is recommended to ` + `configure your bundler to explicitly replace feature flag globals ` + `with boolean literals to get proper tree-shaking in the final bundle. ` + `See http://link.vuejs.org/feature-flags for more details.`);
}
const queuePostRenderEffect = queueEffectWithSuspense;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */ function createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    initFeatureFlags();
    {
        const target = _shared.getGlobalThis();
        target.__VUE__ = true;
        setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__);
    }
    const { insert: hostInsert , remove: hostRemove , patchProp: hostPatchProp , createElement: hostCreateElement , createText: hostCreateText , createComment: hostCreateComment , setText: hostSetText , setElementText: hostSetElementText , parentNode: hostParentNode , nextSibling: hostNextSibling , setScopeId: hostSetScopeId = _shared.NOOP , cloneNode: hostCloneNode , insertStaticContent: hostInsertStaticContent  } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren)=>{
        if (n1 === n2) return;
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* BAIL */ ) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type , ref , shapeFlag  } = n2;
        switch(type){
            case Text1:
                processText(n1, n2, container, anchor);
                break;
            case Comment1:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) mountStaticNode(n2, container, anchor, isSVG);
                else patchStaticNode(n1, n2, container, isSVG);
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */ ) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (shapeFlag & 6 /* COMPONENT */ ) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (shapeFlag & 64 /* TELEPORT */ ) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                else if (shapeFlag & 128 /* SUSPENSE */ ) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                else warn('Invalid VNode type:', type, `(${typeof type})`);
        }
        // set ref
        if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    };
    const processText = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
        else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) hostSetText(el, n2.children);
        }
    };
    const processCommentNode = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ''), container, anchor);
        else // there's no support for dynamic comments
        n2.el = n1.el;
    };
    const mountStaticNode = (n2, container, anchor, isSVG)=>{
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
    };
    /**
     * Dev / HMR only
     */ const patchStaticNode = (n1, n2, container, isSVG)=>{
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el , anchor  }, container, nextSibling)=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el , anchor  })=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        else patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        let el;
        let vnodeHook;
        const { type , props , shapeFlag , transition , patchFlag , dirs  } = vnode;
        el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
        // mount children first, since some props may rely on child content
        // being already rendered, e.g. `<select value>`
        if (shapeFlag & 8 /* TEXT_CHILDREN */ ) hostSetElementText(el, vnode.children);
        else if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, 'created');
        // props
        if (props) {
            for(const key in props)if (key !== 'value' && !_shared.isReservedProp(key)) hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            /**
                 * Special case for setting value on DOM elements:
                 * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                 * - it needs to be forced (#1471)
                 * #2353 proposes adding another renderer option to configure this, but
                 * the properties affects are so finite it is worth special casing it
                 * here to reduce the complexity. (Special casing it also should not
                 * affect non-DOM renderers)
                 */ if ('value' in props) hostPatchProp(el, 'value', null, props.value);
            if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        // scopeId
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        Object.defineProperty(el, '__vnode', {
            value: vnode,
            enumerable: false
        });
        Object.defineProperty(el, '__vueParentComponent', {
            value: parentComponent,
            enumerable: false
        });
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
        if (needCallTransitionHooks) transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
        }, parentSuspense);
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent)=>{
        if (scopeId) hostSetScopeId(el, scopeId);
        if (slotScopeIds) for(let i = 0; i < slotScopeIds.length; i++)hostSetScopeId(el, slotScopeIds[i]);
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */ ) subTree = filterSingleRoot(subTree.children) || subTree;
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0)=>{
        for(let i = start; i < children.length; i++){
            const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        const el = n2.el = n1.el;
        let { patchFlag , dynamicChildren , dirs  } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */ ;
        const oldProps = n1.props || _shared.EMPTY_OBJ;
        const newProps = n2.props || _shared.EMPTY_OBJ;
        let vnodeHook;
        if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        if (dirs) invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        if (isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
            if (parentComponent && parentComponent.type.__hmrId) traverseStaticChildren(n1, n2);
        } else if (!optimized) // full diff
        patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* FULL_PROPS */ ) // element props contain dynamic keys, full diff needed
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* CLASS */ ) {
                    if (oldProps.class !== newProps.class) hostPatchProp(el, 'class', null, newProps.class, isSVG);
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* STYLE */ ) hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PROPS */ ) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for(let i = 0; i < propsToUpdate.length; i++){
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        // #1471 force patch value
                        if (next !== prev || key === 'value') hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* TEXT */ ) {
                if (n1.children !== n2.children) hostSetElementText(el, n2.children);
            }
        } else if (!optimized && dynamicChildren == null) // unoptimized, full diff
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
        }, parentSuspense);
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds)=>{
        for(let i = 0; i < newChildren.length; i++){
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & 70 /* TELEPORT */ ) ? hostParentNode(oldVNode.el) : // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG)=>{
        if (oldProps !== newProps) {
            for(const key in newProps){
                // empty string is not valid prop
                if (_shared.isReservedProp(key)) continue;
                const next = newProps[key];
                const prev = oldProps[key];
                // defer patching value
                if (next !== prev && key !== 'value') hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if (oldProps !== _shared.EMPTY_OBJ) {
                for(const key1 in oldProps)if (!_shared.isReservedProp(key1) && !(key1 in newProps)) hostPatchProp(el, key1, oldProps[key1], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if ('value' in newProps) hostPatchProp(el, 'value', oldProps.value, newProps.value);
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText('');
        const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText('');
        let { patchFlag , dynamicChildren , slotScopeIds: fragmentSlotScopeIds  } = n2;
        if (isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        // check if this is a slot fragment with :slotted scope ids
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */  && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
            // a stable fragment (template root or <template v-for>) doesn't need to
            // patch children order, but it may contain dynamicChildren.
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
            if (parentComponent && parentComponent.type.__hmrId) traverseStaticChildren(n1, n2);
            else if (// #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null || parentComponent && n2 === parentComponent.subTree) traverseStaticChildren(n1, n2, true);
        } else // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */ ) parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            else mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        } else updateComponent(n1, n2, optimized);
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized)=>{
        const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
        if (instance.type.__hmrId) registerHMR(instance);
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
        startMeasure(instance, `init`);
        setupComponent(instance);
        endMeasure(instance, `init`);
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = instance.subTree = createVNode(Comment1);
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        popWarningContext();
        endMeasure(instance, `mount`);
    };
    const updateComponent = (n1, n2, optimized)=>{
        const instance = n2.component = n1.component;
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
                pushWarningContext(n2);
                updateComponentPreRender(instance, n2, optimized);
                popWarningContext();
                return;
            } else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect.
                instance.update();
            }
        } else {
            // no update needed. just copy over properties
            n2.component = n1.component;
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized)=>{
        const componentUpdateFn = ()=>{
            if (!instance.isMounted) {
                let vnodeHook;
                const { el , props  } = initialVNode;
                const { bm , m , parent  } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                effect.allowRecurse = false;
                // beforeMount hook
                if (bm) _shared.invokeArrayFns(bm);
                // onVnodeBeforeMount
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
                effect.allowRecurse = true;
                if (el && hydrateNode) {
                    // vnode has adopted host node - perform hydration instead of mount.
                    const hydrateSubTree = ()=>{
                        startMeasure(instance, `render`);
                        instance.subTree = renderComponentRoot(instance);
                        endMeasure(instance, `render`);
                        startMeasure(instance, `hydrate`);
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        endMeasure(instance, `hydrate`);
                    };
                    if (isAsyncWrapperVNode) initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    ()=>!instance.isUnmounted && hydrateSubTree()
                    );
                    else hydrateSubTree();
                } else {
                    startMeasure(instance, `render`);
                    const subTree = instance.subTree = renderComponentRoot(instance);
                    endMeasure(instance, `render`);
                    startMeasure(instance, `patch`);
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    endMeasure(instance, `patch`);
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) queuePostRenderEffect(m, parentSuspense);
                // onVnodeMounted
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, scopedInitialVNode)
                    , parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                if (initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                instance.isMounted = true;
                devtoolsComponentAdded(instance);
                // #2458: deference mount-only object parameters to prevent memleaks
                initialVNode = container = anchor = null;
            } else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next , bu , u , parent , vnode  } = instance;
                let originNext = next;
                let vnodeHook;
                pushWarningContext(next || instance.vnode);
                // Disallow component effect recursion during pre-lifecycle hooks.
                effect.allowRecurse = false;
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                } else next = vnode;
                // beforeUpdate hook
                if (bu) _shared.invokeArrayFns(bu);
                // onVnodeBeforeUpdate
                if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
                effect.allowRecurse = true;
                startMeasure(instance, `render`);
                const nextTree = renderComponentRoot(instance);
                endMeasure(instance, `render`);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                startMeasure(instance, `patch`);
                patch(prevTree, nextTree, // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                endMeasure(instance, `patch`);
                next.el = nextTree.el;
                if (originNext === null) // self-triggered update. In case of HOC, update parent component
                // vnode el. HOC is indicated by parent instance's subTree pointing
                // to child component's vnode
                updateHOCHostEl(instance, nextTree.el);
                // updated hook
                if (u) queuePostRenderEffect(u, parentSuspense);
                // onVnodeUpdated
                if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, next, vnode)
                , parentSuspense);
                devtoolsComponentUpdated(instance);
                popWarningContext();
            }
        };
        // create reactive effect for rendering
        const effect = new _reactivity.ReactiveEffect(componentUpdateFn, ()=>queueJob(instance.update)
        , instance.scope // track it in component's effect scope
        );
        const update = instance.update = effect.run.bind(effect);
        update.id = instance.uid;
        // allowRecurse
        // #1801, #2043 component render effects should allow recursive updates
        effect.allowRecurse = update.allowRecurse = true;
        effect.onTrack = instance.rtc ? (e)=>_shared.invokeArrayFns(instance.rtc, e)
         : void 0;
        effect.onTrigger = instance.rtg ? (e)=>_shared.invokeArrayFns(instance.rtg, e)
         : void 0;
        // @ts-ignore (for scheduler)
        update.ownerInstance = instance;
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized)=>{
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        _reactivity.pauseTracking();
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs(undefined, instance.update);
        _reactivity.resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false)=>{
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag , shapeFlag  } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* KEYED_FRAGMENT */ ) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            } else if (patchFlag & 256 /* UNKEYED_FRAGMENT */ ) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* TEXT_CHILDREN */ ) {
            // text children fast path
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */ ) unmountChildren(c1, parentComponent, parentSuspense);
            if (c2 !== c1) hostSetElementText(container, c2);
        } else if (prevShapeFlag & 16 /* ARRAY_CHILDREN */ ) {
            // prev children was array
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) // two arrays, cannot assume anything, do full diff
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else // no new children, just unmount old
            unmountChildren(c1, parentComponent, parentSuspense, true);
        } else {
            // prev children was text OR null
            // new children is array OR null
            if (prevShapeFlag & 8 /* TEXT_CHILDREN */ ) hostSetElementText(container, '');
            // mount new if array
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        c1 = c1 || _shared.EMPTY_ARR;
        c2 = c2 || _shared.EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for(i = 0; i < commonLength; i++){
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        if (oldLength > newLength) // remove old
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        else // mount new
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while(i <= e1 && i <= e2){
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else break;
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while(i <= e1 && i <= e2){
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else break;
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while(i <= e2){
                    patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    i++;
                }
            }
        } else if (i > e2) while(i <= e1){
            unmount(c1[i], parentComponent, parentSuspense, true);
            i++;
        }
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for(i = s2; i <= e2; i++){
                const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                if (nextChild.key != null) {
                    if (keyToNewIndexMap.has(nextChild.key)) warn(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for(i = 0; i < toBePatched; i++)newIndexToOldIndexMap[i] = 0;
            for(i = s1; i <= e1; i++){
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for(j = s2; j <= e2; j++)if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                        newIndex = j;
                        break;
                    }
                }
                if (newIndex === undefined) unmount(prevChild, parentComponent, parentSuspense, true);
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
                    else moved = true;
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _shared.EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for(i = toBePatched - 1; i >= 0; i--){
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) // mount new
                patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2 /* REORDER */ );
                    else j--;
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null)=>{
        const { el , type , transition , children , shapeFlag  } = vnode;
        if (shapeFlag & 6 /* COMPONENT */ ) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128 /* SUSPENSE */ ) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* TELEPORT */ ) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for(let i = 0; i < children.length; i++)move(children[i], container, anchor, moveType);
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* REORDER */  && shapeFlag & 1 /* ELEMENT */  && transition;
        if (needTransition) {
            if (moveType === 0 /* ENTER */ ) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(()=>transition.enter(el)
                , parentSuspense);
            } else {
                const { leave , delayLeave , afterLeave  } = transition;
                const remove = ()=>hostInsert(el, container, anchor)
                ;
                const performLeave = ()=>{
                    leave(el, ()=>{
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) delayLeave(el, remove, performLeave);
                else performLeave();
            }
        } else hostInsert(el, container, anchor);
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false)=>{
        const { type , props , ref , children , dynamicChildren , shapeFlag , patchFlag , dirs  } = vnode;
        // unset ref
        if (ref != null) setRef(ref, null, parentSuspense, vnode, true);
        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */  && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        if (shapeFlag & 6 /* COMPONENT */ ) unmountComponent(vnode.component, parentSuspense, doRemove);
        else {
            if (shapeFlag & 128 /* SUSPENSE */ ) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            if (shapeFlag & 64 /* TELEPORT */ ) vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */ )) // fast path for block nodes: only need to unmount dynamic children.
            unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            else if (type === Fragment && patchFlag & 384 /* UNKEYED_FRAGMENT */  || !optimized && shapeFlag & 16 /* ARRAY_CHILDREN */ ) unmountChildren(children, parentComponent, parentSuspense);
            if (doRemove) remove(vnode);
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
        }, parentSuspense);
    };
    const remove = (vnode)=>{
        const { type , el , anchor , transition  } = vnode;
        if (type === Fragment) {
            removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = ()=>{
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
        };
        if (vnode.shapeFlag & 1 /* ELEMENT */  && transition && !transition.persisted) {
            const { leave , delayLeave  } = transition;
            const performLeave = ()=>leave(el, performRemove)
            ;
            if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
            else performLeave();
        } else performRemove();
    };
    const removeFragment = (cur, end)=>{
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while(cur !== end){
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove)=>{
        if (instance.type.__hmrId) unregisterHMR(instance);
        const { bum , scope , update , subTree , um  } = instance;
        // beforeUnmount hook
        if (bum) _shared.invokeArrayFns(bum);
        // stop effects in component scope
        scope.stop();
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            // so that scheduler will no longer invoke it
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) queuePostRenderEffect(um, parentSuspense);
        queuePostRenderEffect(()=>{
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) parentSuspense.resolve();
        }
        devtoolsComponentRemoved(instance);
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0)=>{
        for(let i = start; i < children.length; i++)unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    };
    const getNextHostNode = (vnode)=>{
        if (vnode.shapeFlag & 6 /* COMPONENT */ ) return getNextHostNode(vnode.component.subTree);
        if (vnode.shapeFlag & 128 /* SUSPENSE */ ) return vnode.suspense.next();
        return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render = (vnode, container, isSVG)=>{
        if (vnode == null) {
            if (container._vnode) unmount(container._vnode, null, null, true);
        } else patch(container._vnode || null, vnode, container, null, null, null, isSVG);
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (_shared.isArray(rawRef)) {
        rawRef.forEach((r, i)=>setRef(r, oldRawRef && (_shared.isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount)
        );
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) // when mounting async components, nothing needs to be done,
    // because the template ref is forwarded to inner component
    return;
    const refValue = vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */  ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner , r: ref  } = rawRef;
    if (!owner) {
        warn(`Missing ref owner context. ref cannot be used on hoisted vnodes. ` + `A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === _shared.EMPTY_OBJ ? owner.refs = {
    } : owner.refs;
    const setupState = owner.setupState;
    // dynamic ref changed. unset old ref
    if (oldRef != null && oldRef !== ref) {
        if (_shared.isString(oldRef)) {
            refs[oldRef] = null;
            if (_shared.hasOwn(setupState, oldRef)) setupState[oldRef] = null;
        } else if (_reactivity.isRef(oldRef)) oldRef.value = null;
    }
    if (_shared.isString(ref)) {
        const doSet = ()=>{
            refs[ref] = value;
            if (_shared.hasOwn(setupState, ref)) setupState[ref] = value;
        };
        // #1789: for non-null values, set them after render
        // null values means this is unmount and it should not overwrite another
        // ref with the same key
        if (value) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
        } else doSet();
    } else if (_reactivity.isRef(ref)) {
        const doSet = ()=>{
            ref.value = value;
        };
        if (value) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
        } else doSet();
    } else if (_shared.isFunction(ref)) callWithErrorHandling(ref, owner, 12 /* FUNCTION_REF */ , [
        value,
        refs
    ]);
    else warn('Invalid template ref type:', value, `(${typeof value})`);
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */ , [
        vnode,
        prevVNode
    ]);
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always moved so that need inherit el form previous nodes
 * to ensure correct moved position.
 */ function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (_shared.isArray(ch1) && _shared.isArray(ch2)) for(let i = 0; i < ch1.length; i++){
        // this is only called in the optimized path so array children are
        // guaranteed to be vnodes
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 /* ELEMENT */  && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */ ) {
                c2 = ch2[i] = cloneIfMounted(ch2[i]);
                c2.el = c1.el;
            }
            if (!shallow) traverseStaticChildren(c1, c2);
        }
        // also inherit for comment nodes, but not placeholders (e.g. v-if which
        // would have received .el during block patch)
        if (c2.type === Comment1 && !c2.el) c2.el = c1.el;
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [
        0
    ];
    let i, j, u, v, c;
    const len = arr.length;
    for(i = 0; i < len; i++){
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while(u < v){
                c = u + v >> 1;
                if (arr[result[c]] < arrI) u = c + 1;
                else v = c;
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) p[i] = result[u - 1];
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while((u--) > 0){
        result[u] = v;
        v = p[v];
    }
    return result;
}
const isTeleport = (type)=>type.__isTeleport
;
const isTeleportDisabled = (props)=>props && (props.disabled || props.disabled === '')
;
const isTargetSVG = (target)=>typeof SVGElement !== 'undefined' && target instanceof SVGElement
;
const resolveTarget = (props, select)=>{
    const targetSelector = props && props.to;
    if (_shared.isString(targetSelector)) {
        if (!select) {
            warn(`Current renderer does not support string target for Teleports. ` + `(missing querySelector renderer option)`);
            return null;
        } else {
            const target = select(targetSelector);
            if (!target) warn(`Failed to locate Teleport target with selector "${targetSelector}". ` + `Note the target element must exist before the component is mounted - ` + `i.e. the target cannot be rendered by the component itself, and ` + `ideally should be outside of the entire Vue component tree.`);
            return target;
        }
    } else {
        if (!targetSelector && !isTeleportDisabled(props)) warn(`Invalid Teleport target: ${targetSelector}`);
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
        const { mc: mountChildren , pc: patchChildren , pbc: patchBlockChildren , o: { insert , querySelector , createText , createComment  }  } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag , children , dynamicChildren  } = n2;
        // #3302
        // HMR updated, force full diff
        if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = n2.el = createComment('teleport start');
            const mainAnchor = n2.anchor = createComment('teleport end');
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText('');
            if (target) {
                insert(targetAnchor, target);
                // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                isSVG = isSVG || isTargetSVG(target);
            } else if (!disabled) warn('Invalid Teleport target on mount:', target, `(${typeof target})`);
            const mount = (container, anchor)=>{
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            };
            if (disabled) mount(container, mainAnchor);
            else if (target) mount(target, targetAnchor);
        } else {
            // update content
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            } else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
            if (disabled) {
                if (!wasDisabled) // enabled -> disabled
                // move into main container
                moveTeleport(n2, container, mainAnchor, internals, 1 /* TOGGLE */ );
            } else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                    if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */ );
                    else warn('Invalid Teleport target on update:', target, `(${typeof target})`);
                } else if (wasDisabled) // disabled -> enabled
                // move into teleport target
                moveTeleport(n2, target, targetAnchor, internals, 1 /* TOGGLE */ );
            }
        }
    },
    remove (vnode, parentComponent, parentSuspense, optimized, { um: unmount , o: { remove: hostRemove  }  }, doRemove) {
        const { shapeFlag , children , anchor , targetAnchor , target , props  } = vnode;
        if (target) hostRemove(targetAnchor);
        // an unmounted teleport should always remove its children if not disabled
        if (doRemove || !isTeleportDisabled(props)) {
            hostRemove(anchor);
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) for(let i = 0; i < children.length; i++){
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert  } , m: move  }, moveType = 2 /* REORDER */ ) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TARGET_CHANGE */ ) insert(vnode.targetAnchor, container, parentAnchor);
    const { el , anchor , shapeFlag , children , props  } = vnode;
    const isReorder = moveType === 2 /* REORDER */ ;
    // move main view anchor if this is a re-order.
    if (isReorder) insert(el, container, parentAnchor);
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) for(let i = 0; i < children.length; i++)move(children[i], container, parentAnchor, 2 /* REORDER */ );
    }
    // move main view anchor if this is a re-order.
    if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling , parentNode , querySelector  }  }, hydrateChildren) {
    const target = vnode.target = resolveTarget(vnode.props, querySelector);
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */ ) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            } else {
                vnode.anchor = nextSibling(node);
                vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;
const COMPONENTS = 'components';
const DIRECTIVES = 'directives';
/**
 * @private
 */ function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */ function resolveDynamicComponent(component) {
    if (_shared.isString(component)) return resolveAsset(COMPONENTS, component, false) || component;
    else // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
}
/**
 * @private
 */ function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // explicit self name has highest priority
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component);
            if (selfName && (selfName === name || selfName === _shared.camelize(name) || selfName === _shared.capitalize(_shared.camelize(name)))) return Component;
        }
        const res = // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) // fallback to implicit self-reference
        return Component;
        if (warnMissing && !res) warn(`Failed to resolve ${type.slice(0, -1)}: ${name}`);
        return res;
    } else warn(`resolve${_shared.capitalize(type.slice(0, -1))} ` + `can only be used in render() or setup().`);
}
function resolve(registry, name) {
    return registry && (registry[name] || registry[_shared.camelize(name)] || registry[_shared.capitalize(_shared.camelize(name))]);
}
const Fragment = Symbol('Fragment');
const Text1 = Symbol('Text');
const Comment1 = Symbol('Comment');
const Static = Symbol('Static');
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */ function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */ function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    // save current block children on the block vnode
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _shared.EMPTY_ARR : null;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
    return vnode;
}
/**
 * @private
 */ function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */ function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 /* COMPONENT */  && hmrDirtyComponents.has(n2.type)) // HMR only: if the component has been hot-updated, force a reload.
    return false;
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */ function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args)=>{
    return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key  })=>key != null ? key : null
;
const normalizeRef = ({ ref  })=>{
    return ref != null ? _shared.isString(ref) || _reactivity.isRef(ref) || _shared.isFunction(ref) ? {
        i: currentRenderingInstance,
        r: ref
    } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1 /* ELEMENT */ , isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        // normalize suspense children
        if (shapeFlag & 128 /* SUSPENSE */ ) type.normalize(vnode);
    } else if (children) // compiled element vnode - if children is passed, only possible types are
    // string or Array.
    vnode.shapeFlag |= _shared.isString(children) ? 8 /* TEXT_CHILDREN */  : 16 /* ARRAY_CHILDREN */ ;
    // validate key
    if (vnode.key !== vnode.key) warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    // track vnode for block tree
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6 /* COMPONENT */ ) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32 /* HYDRATE_EVENTS */ ) currentBlock.push(vnode);
    return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (!type) warn(`Invalid vnode type when creating vnode: ${type}.`);
        type = Comment1;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true);
        if (children) normalizeChildren(cloned, children);
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) type = type.__vccOpts;
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        props = guardReactiveProps(props);
        let { class: klass , style  } = props;
        if (klass && !_shared.isString(klass)) props.class = _shared.normalizeClass(klass);
        if (_shared.isObject(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if (_reactivity.isProxy(style) && !_shared.isArray(style)) style = _shared.extend({
            }, style);
            props.style = _shared.normalizeStyle(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = _shared.isString(type) ? 1 /* ELEMENT */  : isSuspense(type) ? 128 /* SUSPENSE */  : isTeleport(type) ? 64 /* TELEPORT */  : _shared.isObject(type) ? 4 /* STATEFUL_COMPONENT */  : _shared.isFunction(type) ? 2 /* FUNCTIONAL_COMPONENT */  : 0;
    if (shapeFlag & 4 /* STATEFUL_COMPONENT */  && _reactivity.isProxy(type)) {
        type = _reactivity.toRaw(type);
        warn(`Vue received a Component which was made a reactive object. This can ` + `lead to unnecessary performance overhead, and should be avoided by ` + `marking the component with \`markRaw\` or using \`shallowRef\` ` + `instead of \`ref\`.`, `\nComponent that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props) return null;
    return _reactivity.isProxy(props) || InternalObjectKey in props ? _shared.extend({
    }, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props , ref , patchFlag , children  } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {
    }, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref ? _shared.isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [
            ref,
            normalizeRef(extraProps)
        ] : normalizeRef(extraProps) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: patchFlag === -1 /* HOISTED */  && _shared.isArray(children) ? children.map(deepCloneVNode) : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: perserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
         ? 16 /* FULL_PROPS */  : patchFlag | 16 /* FULL_PROPS */  : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor
    };
    return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */ function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (_shared.isArray(vnode.children)) cloned.children = vnode.children.map(deepCloneVNode);
    return cloned;
}
/**
 * @private
 */ function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text1, null, text, flag);
}
/**
 * @private
 */ function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */ function createCommentVNode(text = '', // when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment1, null, text)) : createVNode(Comment1, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') // empty placeholder
    return createVNode(Comment1);
    else if (_shared.isArray(child)) // fragment
    return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
    else if (typeof child === 'object') // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return cloneIfMounted(child);
    else // strings and numbers
    return createVNode(Text1, null, String(child));
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag  } = vnode;
    if (children == null) children = null;
    else if (_shared.isArray(children)) type = 16 /* ARRAY_CHILDREN */ ;
    else if (typeof children === 'object') {
        if (shapeFlag & 65 /* TELEPORT */ ) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        } else {
            type = 32 /* SLOTS_CHILDREN */ ;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) children._ctx = currentRenderingInstance;
            else if (slotFlag === 3 /* FORWARDED */  && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.slots._ === 1 /* STABLE */ ) children._ = 1 /* STABLE */ ;
                else {
                    children._ = 2 /* DYNAMIC */ ;
                    vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */ ;
                }
            }
        }
    } else if (_shared.isFunction(children)) {
        children = {
            default: children,
            _ctx: currentRenderingInstance
        };
        type = 32 /* SLOTS_CHILDREN */ ;
    } else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* TELEPORT */ ) {
            type = 16 /* ARRAY_CHILDREN */ ;
            children = [
                createTextVNode(children)
            ];
        } else type = 8 /* TEXT_CHILDREN */ ;
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {
    };
    for(let i = 0; i < args.length; i++){
        const toMerge = args[i];
        for(const key in toMerge){
            if (key === 'class') {
                if (ret.class !== toMerge.class) ret.class = _shared.normalizeClass([
                    ret.class,
                    toMerge.class
                ]);
            } else if (key === 'style') ret.style = _shared.normalizeStyle([
                ret.style,
                toMerge.style
            ]);
            else if (_shared.isOn(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (existing !== incoming) ret[key] = existing ? [].concat(existing, incoming) : incoming;
            } else if (key !== '') ret[key] = toMerge[key];
        }
    }
    return ret;
}
/**
 * Actual implementation
 */ function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if (_shared.isArray(source) || _shared.isString(source)) {
        ret = new Array(source.length);
        for(let i = 0, l = source.length; i < l; i++)ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
    } else if (typeof source === 'number') {
        if (!Number.isInteger(source)) {
            warn(`The v-for range expect an integer value but got ${source}.`);
            return [];
        }
        ret = new Array(source);
        for(let i = 0; i < source; i++)ret[i] = renderItem(i + 1, i, undefined, cached && cached[i]);
    } else if (_shared.isObject(source)) {
        if (source[Symbol.iterator]) ret = Array.from(source, (item, i)=>renderItem(item, i, undefined, cached && cached[i])
        );
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for(let i = 0, l = keys.length; i < l; i++){
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    } else ret = [];
    if (cache) cache[index] = ret;
    return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */ function createSlots(slots, dynamicSlots) {
    for(let i = 0; i < dynamicSlots.length; i++){
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if (_shared.isArray(slot)) for(let j = 0; j < slot.length; j++)slots[slot[j].name] = slot[j].fn;
        else if (slot) // conditional single slot generated by <template v-if="..." #foo>
        slots[slot.name] = slot.fn;
    }
    return slots;
}
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */ function renderSlot(slots, name, props = {
}, // this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback, noSlotted) {
    if (currentRenderingInstance.isCE) return createVNode('slot', name === 'default' ? null : {
        name
    }, fallback && fallback());
    let slot = slots[name];
    if (slot && slot.length > 1) {
        warn(`SSR-optimized slot function detected in a non-SSR-optimized render ` + `function. You need to mark this component with $dynamic-slots in the ` + `parent template.`);
        slot = ()=>[]
        ;
    }
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    if (slot && slot._c) slot._d = false;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, {
        key: props.key || `_${name}`
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* STABLE */  ? 64 /* STABLE_FRAGMENT */  : -2 /* BAIL */ );
    if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [
        rendered.scopeId + '-s'
    ];
    if (slot && slot._c) slot._d = true;
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some((child)=>{
        if (!isVNode(child)) return true;
        if (child.type === Comment1) return false;
        if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
        return true;
    }) ? vnodes : null;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */ function toHandlers(obj) {
    const ret = {
    };
    if (!_shared.isObject(obj)) {
        warn(`v-on with no argument expects an object value.`);
        return ret;
    }
    for(const key in obj)ret[_shared.toHandlerKey(key)] = obj[key];
    return ret;
}
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */ const getPublicInstance = (i)=>{
    if (!i) return null;
    if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = _shared.extend(Object.create(null), {
    $: (i)=>i
    ,
    $el: (i)=>i.vnode.el
    ,
    $data: (i)=>i.data
    ,
    $props: (i)=>_reactivity.shallowReadonly(i.props)
    ,
    $attrs: (i)=>_reactivity.shallowReadonly(i.attrs)
    ,
    $slots: (i)=>_reactivity.shallowReadonly(i.slots)
    ,
    $refs: (i)=>_reactivity.shallowReadonly(i.refs)
    ,
    $parent: (i)=>getPublicInstance(i.parent)
    ,
    $root: (i)=>getPublicInstance(i.root)
    ,
    $emit: (i)=>i.emit
    ,
    $options: (i)=>__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type
    ,
    $forceUpdate: (i)=>()=>queueJob(i.update)
    ,
    $nextTick: (i)=>nextTick.bind(i.proxy)
    ,
    $watch: (i)=>__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : _shared.NOOP
});
const PublicInstanceProxyHandlers = {
    get ({ _: instance  }, key) {
        const { ctx , setupState , data , props , accessCache , type , appContext  } = instance;
        // for internal formatters to know that this is a Vue instance
        if (key === '__isVue') return true;
        // prioritize <script setup> bindings during dev.
        // this allows even properties that start with _ or $ to be used - so that
        // it aligns with the production behavior where the render fn is inlined and
        // indeed has access to all declared variables.
        if (setupState !== _shared.EMPTY_OBJ && setupState.__isScriptSetup && _shared.hasOwn(setupState, key)) return setupState[key];
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) switch(n){
                case 0 /* SETUP */ :
                    return setupState[key];
                case 1 /* DATA */ :
                    return data[key];
                case 3 /* CONTEXT */ :
                    return ctx[key];
                case 2 /* PROPS */ :
                    return props[key];
            }
            else if (setupState !== _shared.EMPTY_OBJ && _shared.hasOwn(setupState, key)) {
                accessCache[key] = 0 /* SETUP */ ;
                return setupState[key];
            } else if (data !== _shared.EMPTY_OBJ && _shared.hasOwn(data, key)) {
                accessCache[key] = 1 /* DATA */ ;
                return data[key];
            } else if (// only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && _shared.hasOwn(normalizedProps, key)) {
                accessCache[key] = 2 /* PROPS */ ;
                return props[key];
            } else if (ctx !== _shared.EMPTY_OBJ && _shared.hasOwn(ctx, key)) {
                accessCache[key] = 3 /* CONTEXT */ ;
                return ctx[key];
            } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) accessCache[key] = 4 /* OTHER */ ;
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                _reactivity.track(instance, "get" /* GET */ , key);
                markAttrsAccessed();
            }
            return publicGetter(instance);
        } else if (// css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
        else if (ctx !== _shared.EMPTY_OBJ && _shared.hasOwn(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 3 /* CONTEXT */ ;
            return ctx[key];
        } else if (globalProperties = appContext.config.globalProperties, _shared.hasOwn(globalProperties, key)) return globalProperties[key];
        else if (currentRenderingInstance && (!_shared.isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
        // to infinite warning loop
        key.indexOf('__v') !== 0)) {
            if (data !== _shared.EMPTY_OBJ && (key[0] === '$' || key[0] === '_') && _shared.hasOwn(data, key)) warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved ` + `character ("$" or "_") and is not proxied on the render context.`);
            else if (instance === currentRenderingInstance) warn(`Property ${JSON.stringify(key)} was accessed during render ` + `but is not defined on instance.`);
        }
    },
    set ({ _: instance  }, key, value) {
        const { data , setupState , ctx  } = instance;
        if (setupState !== _shared.EMPTY_OBJ && _shared.hasOwn(setupState, key)) setupState[key] = value;
        else if (data !== _shared.EMPTY_OBJ && _shared.hasOwn(data, key)) data[key] = value;
        else if (_shared.hasOwn(instance.props, key)) {
            warn(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            warn(`Attempting to mutate public property "${key}". ` + `Properties starting with $ are reserved and readonly.`, instance);
            return false;
        } else if (key in instance.appContext.config.globalProperties) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
        });
        else ctx[key] = value;
        return true;
    },
    has ({ _: { data , setupState , accessCache , ctx , appContext , propsOptions  }  }, key) {
        let normalizedProps;
        return accessCache[key] !== undefined || data !== _shared.EMPTY_OBJ && _shared.hasOwn(data, key) || setupState !== _shared.EMPTY_OBJ && _shared.hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && _shared.hasOwn(normalizedProps, key) || _shared.hasOwn(ctx, key) || _shared.hasOwn(publicPropertiesMap, key) || _shared.hasOwn(appContext.config.globalProperties, key);
    }
};
PublicInstanceProxyHandlers.ownKeys = (target)=>{
    warn(`Avoid app logic that relies on enumerating keys on a component instance. ` + `The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
};
const RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/ _shared.extend({
}, PublicInstanceProxyHandlers, {
    get (target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) return;
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has (_, key) {
        const has = key[0] !== '_' && !_shared.isGloballyWhitelisted(key);
        if (!has && PublicInstanceProxyHandlers.has(_, key)) warn(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        return has;
    }
});
// dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createDevRenderContext(instance) {
    const target = {
    };
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: ()=>instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach((key)=>{
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: ()=>publicPropertiesMap[key](instance)
            ,
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: _shared.NOOP
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx , propsOptions: [propsOptions]  } = instance;
    if (propsOptions) Object.keys(propsOptions).forEach((key)=>{
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>instance.props[key]
            ,
            set: _shared.NOOP
        });
    });
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx , setupState  } = instance;
    Object.keys(_reactivity.toRaw(setupState)).forEach((key)=>{
        if (!setupState.__isScriptSetup && (key[0] === '$' || key[0] === '_')) {
            warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` + `which are reserved prefixes for Vue internals.`);
            return;
        }
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>setupState[key]
            ,
            set: _shared.NOOP
        });
    });
}
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        update: null,
        scope: new _reactivity.EffectScope(true),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resovled assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // props default value
        propsDefaults: _shared.EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: _shared.EMPTY_OBJ,
        data: _shared.EMPTY_OBJ,
        props: _shared.EMPTY_OBJ,
        attrs: _shared.EMPTY_OBJ,
        slots: _shared.EMPTY_OBJ,
        refs: _shared.EMPTY_OBJ,
        setupState: _shared.EMPTY_OBJ,
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    instance.ctx = createDevRenderContext(instance);
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    // apply custom element special handling
    if (vnode.ce) vnode.ce(instance);
    return instance;
}
let currentInstance = null;
const getCurrentInstance = ()=>currentInstance || currentRenderingInstance
;
const setCurrentInstance = (instance)=>{
    currentInstance = instance;
    instance.scope.on();
};
const unsetCurrentInstance = ()=>{
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
};
const isBuiltInTag = /*#__PURE__*/ _shared.makeMap('slot,component');
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || _shared.NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) warn('Do not use built-in or reserved HTML elements as component id: ' + name);
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */ ;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props , children  } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    if (Component.name) validateComponentName(Component.name, instance.appContext.config);
    if (Component.components) {
        const names = Object.keys(Component.components);
        for(let i = 0; i < names.length; i++)validateComponentName(names[i], instance.appContext.config);
    }
    if (Component.directives) {
        const names = Object.keys(Component.directives);
        for(let i = 0; i < names.length; i++)validateDirectiveName(names[i]);
    }
    if (Component.compilerOptions && isRuntimeOnly()) warn(`"compilerOptions" is only supported when using a build of Vue that ` + `includes the runtime compiler. Since you are using a runtime-only ` + `build, the options should be passed via your build tool config instead.`);
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = _reactivity.markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    exposePropsOnRenderContext(instance);
    // 2. call setup()
    const { setup  } = Component;
    if (setup) {
        const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
        setCurrentInstance(instance);
        _reactivity.pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */ , [
            _reactivity.shallowReadonly(instance.props),
            setupContext
        ]);
        _reactivity.resetTracking();
        unsetCurrentInstance();
        if (_shared.isPromise(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) // return the promise so server-renderer can wait on it
            return setupResult.then((resolvedResult)=>{
                handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e)=>{
                handleError(e, instance, 0 /* SETUP_FUNCTION */ );
            });
            else // async setup returned Promise.
            // bail here and wait for re-entry.
            instance.asyncDep = setupResult;
        } else handleSetupResult(instance, setupResult, isSSR);
    } else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
    if (_shared.isFunction(setupResult)) instance.render = setupResult;
    else if (_shared.isObject(setupResult)) {
        if (isVNode(setupResult)) warn(`setup() should not return VNodes directly - ` + `return a render function instead.`);
        instance.devtoolsRawSetupState = setupResult;
        instance.setupState = _reactivity.proxyRefs(setupResult);
        exposeSetupStateOnRenderContext(instance);
    } else if (setupResult !== undefined) warn(`setup() should return an object. Received: ${setupResult === null ? 'null' : typeof setupResult}`);
    finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */ function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = (i)=>{
        if (i.render._rc) i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    };
}
// dev only
const isRuntimeOnly = ()=>!compile
;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    // template / render function normalization
    if (!instance.render) {
        // could be set from setup()
        if (compile && !Component.render) {
            const template = Component.template;
            if (template) {
                startMeasure(instance, `compile`);
                const { isCustomElement , compilerOptions  } = instance.appContext.config;
                const { delimiters , compilerOptions: componentCompilerOptions  } = Component;
                const finalCompilerOptions = _shared.extend(_shared.extend({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
                endMeasure(instance, `compile`);
            }
        }
        instance.render = Component.render || _shared.NOOP;
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (installWithProxy) installWithProxy(instance);
    }
    // support for 2.x options
    if (__VUE_OPTIONS_API__ && true) {
        setCurrentInstance(instance);
        _reactivity.pauseTracking();
        applyOptions(instance);
        _reactivity.resetTracking();
        unsetCurrentInstance();
    }
    // warn missing template/render
    // the runtime compilation of template in SSR is done by server-render
    if (!Component.render && instance.render === _shared.NOOP && !isSSR) {
        /* istanbul ignore if */ if (!compile && Component.template) warn(`Component provided template option but ` + `runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
        else warn(`Component is missing template or render function.`);
    }
}
function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, {
        get (target, key) {
            markAttrsAccessed();
            _reactivity.track(instance, "get" /* GET */ , '$attrs');
            return target[key];
        },
        set () {
            warn(`setupContext.attrs is readonly.`);
            return false;
        },
        deleteProperty () {
            warn(`setupContext.attrs is readonly.`);
            return false;
        }
    });
}
function createSetupContext(instance) {
    const expose = (exposed)=>{
        if (instance.exposed) warn(`expose() should be called only once per setup().`);
        instance.exposed = exposed || {
        };
    };
    let attrs;
    // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)
    return Object.freeze({
        get attrs () {
            return attrs || (attrs = createAttrsProxy(instance));
        },
        get slots () {
            return _reactivity.shallowReadonly(instance.slots);
        },
        get emit () {
            return (event, ...args)=>instance.emit(event, ...args)
            ;
        },
        expose
    });
}
function getExposeProxy(instance) {
    if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(_reactivity.proxyRefs(_reactivity.markRaw(instance.exposed)), {
        get (target, key) {
            if (key in target) return target[key];
            else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
        }
    }));
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str)=>str.replace(classifyRE, (c)=>c.toUpperCase()
    ).replace(/[-_]/g, '')
;
function getComponentName(Component) {
    return _shared.isFunction(Component) ? Component.displayName || Component.name : Component.name;
}
/* istanbul ignore next */ function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) name = match[1];
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry)=>{
            for(const key in registry){
                if (registry[key] === Component) return key;
            }
        };
        name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return _shared.isFunction(value) && '__vccOpts' in value;
}
const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    _reactivity.pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */ , [
        msg + args.join(''),
        instance && instance.proxy,
        trace.map(({ vnode  })=>`at <${formatComponentName(instance, vnode.type)}>`
        ).join('\n'),
        trace
    ]);
    else {
        const warnArgs = [
            `[Vue warn]: ${msg}`,
            ...args
        ];
        /* istanbul ignore if */ if (trace.length && // avoid spamming console during tests
        true) warnArgs.push(`\n`, ...formatTrace(trace));
        console.warn(...warnArgs);
    }
    _reactivity.resetTracking();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) return [];
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while(currentVNode){
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) last.recurseCount++;
        else normalizedStack.push({
            vnode: currentVNode,
            recurseCount: 0
        });
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */ function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i)=>{
        logs.push(...i === 0 ? [] : [
            `\n`
        ], ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode , recurseCount  }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [
        open,
        ...formatProps(vnode.props),
        close
    ] : [
        open + close
    ];
}
/* istanbul ignore next */ function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key)=>{
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) res.push(` ...`);
    return res;
}
/* istanbul ignore next */ function formatProp(key, value, raw) {
    if (_shared.isString(value)) {
        value = JSON.stringify(value);
        return raw ? value : [
            `${key}=${value}`
        ];
    } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) return raw ? value : [
        `${key}=${value}`
    ];
    else if (_reactivity.isRef(value)) {
        value = formatProp(key, _reactivity.toRaw(value.value), true);
        return raw ? value : [
            `${key}=Ref<`,
            value,
            `>`
        ];
    } else if (_shared.isFunction(value)) return [
        `${key}=fn${value.name ? `<${value.name}>` : ``}`
    ];
    else {
        value = _reactivity.toRaw(value);
        return raw ? value : [
            `${key}=`,
            value
        ];
    }
}
const ErrorTypeStrings = {
    ["sp" /* SERVER_PREFETCH */ ]: 'serverPrefetch hook',
    ["bc" /* BEFORE_CREATE */ ]: 'beforeCreate hook',
    ["c" /* CREATED */ ]: 'created hook',
    ["bm" /* BEFORE_MOUNT */ ]: 'beforeMount hook',
    ["m" /* MOUNTED */ ]: 'mounted hook',
    ["bu" /* BEFORE_UPDATE */ ]: 'beforeUpdate hook',
    ["u" /* UPDATED */ ]: 'updated',
    ["bum" /* BEFORE_UNMOUNT */ ]: 'beforeUnmount hook',
    ["um" /* UNMOUNTED */ ]: 'unmounted hook',
    ["a" /* ACTIVATED */ ]: 'activated hook',
    ["da" /* DEACTIVATED */ ]: 'deactivated hook',
    ["ec" /* ERROR_CAPTURED */ ]: 'errorCaptured hook',
    ["rtc" /* RENDER_TRACKED */ ]: 'renderTracked hook',
    ["rtg" /* RENDER_TRIGGERED */ ]: 'renderTriggered hook',
    [0 /* SETUP_FUNCTION */ ]: 'setup function',
    [1 /* RENDER_FUNCTION */ ]: 'render function',
    [2 /* WATCH_GETTER */ ]: 'watcher getter',
    [3 /* WATCH_CALLBACK */ ]: 'watcher callback',
    [4 /* WATCH_CLEANUP */ ]: 'watcher cleanup function',
    [5 /* NATIVE_EVENT_HANDLER */ ]: 'native event handler',
    [6 /* COMPONENT_EVENT_HANDLER */ ]: 'component event handler',
    [7 /* VNODE_HOOK */ ]: 'vnode hook',
    [8 /* DIRECTIVE_HOOK */ ]: 'directive hook',
    [9 /* TRANSITION_HOOK */ ]: 'transition hook',
    [10 /* APP_ERROR_HANDLER */ ]: 'app errorHandler',
    [11 /* APP_WARN_HANDLER */ ]: 'app warnHandler',
    [12 /* FUNCTION_REF */ ]: 'ref function',
    [13 /* ASYNC_COMPONENT_LOADER */ ]: 'async component loader',
    [14 /* SCHEDULER */ ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next"
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    } catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (_shared.isFunction(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && _shared.isPromise(res)) res.catch((err)=>{
            handleError(err, instance, type);
        });
        return res;
    }
    const values = [];
    for(let i = 0; i < fn.length; i++)values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = ErrorTypeStrings[type];
        while(cur){
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) for(let i = 0; i < errorCapturedHooks.length; i++){
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */ , [
                err,
                exposedInstance,
                errorInfo
            ]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    {
        const info = ErrorTypeStrings[type];
        if (contextVNode) pushWarningContext(contextVNode);
        warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) popWarningContext();
        // crash in dev by default so it's more noticeable
        if (throwInDev) throw err;
        else console.error(err);
    }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id) {
    // the start index should be `flushIndex + 1`
    let start = flushIndex + 1;
    let end = queue.length;
    while(start < end){
        const middle = start + end >>> 1;
        const middleJobId = getId(queue[middle]);
        middleJobId < id ? start = middle + 1 : end = middle;
    }
    return start;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
        if (job.id == null) queue.push(job);
        else queue.splice(findInsertionIndex(job.id), 0, job);
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) queue.splice(i, 1);
}
function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!_shared.isArray(cb)) {
        if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) pendingQueue.push(cb);
    } else // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingQueue.push(...cb);
    queueFlush();
}
function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
        currentPreFlushParentJob = parentJob;
        activePreFlushCbs = [
            ...new Set(pendingPreFlushCbs)
        ];
        pendingPreFlushCbs.length = 0;
        seen = seen || new Map();
        for(preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++){
            if (checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])) continue;
            activePreFlushCbs[preFlushIndex]();
        }
        activePreFlushCbs = null;
        preFlushIndex = 0;
        currentPreFlushParentJob = null;
        // recursively flush until it drains
        flushPreFlushCbs(seen, parentJob);
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [
            ...new Set(pendingPostFlushCbs)
        ];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        seen = seen || new Map();
        activePostFlushCbs.sort((a, b)=>getId(a) - getId(b)
        );
        for(postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++){
            if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) continue;
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job)=>job.id == null ? Infinity : job.id
;
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    seen = seen || new Map();
    flushPreFlushCbs(seen);
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort((a, b)=>getId(a) - getId(b)
    );
    try {
        for(flushIndex = 0; flushIndex < queue.length; flushIndex++){
            const job = queue[flushIndex];
            if (job && job.active !== false) {
                if (checkRecursiveUpdates(seen, job)) continue;
                // console.log(`running:`, job.id)
                callWithErrorHandling(job, null, 14 /* SCHEDULER */ );
            }
        }
    } finally{
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) flushJobs(seen);
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) seen.set(fn, 1);
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            warn(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. ` + `This means you have a reactive effect that is mutating its own ` + `dependencies and thus recursively triggering itself. Possible sources ` + `include component template, render function, updated hook or ` + `watcher source function.`);
            return true;
        } else seen.set(fn, count + 1);
    }
}
// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, Object.assign(options || {
    }, {
        flush: 'post'
    }));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, Object.assign(options || {
    }, {
        flush: 'sync'
    }));
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {
};
// implementation
function watch(source, cb, options) {
    if (!_shared.isFunction(cb)) warn(`\`watch(fn, options?)\` signature has been moved to a separate API. ` + `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` + `supports \`watch(source, cb, options?) signature.`);
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate , deep , flush , onTrack , onTrigger  } = _shared.EMPTY_OBJ) {
    if (!cb) {
        if (immediate !== undefined) warn(`watch() "immediate" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
        if (deep !== undefined) warn(`watch() "deep" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
    }
    const warnInvalidSource = (s)=>{
        warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` + `a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (_reactivity.isRef(source)) {
        getter = ()=>source.value
        ;
        forceTrigger = !!source._shallow;
    } else if (_reactivity.isReactive(source)) {
        getter = ()=>source
        ;
        deep = true;
    } else if (_shared.isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some(_reactivity.isReactive);
        getter = ()=>source.map((s)=>{
                if (_reactivity.isRef(s)) return s.value;
                else if (_reactivity.isReactive(s)) return traverse(s);
                else if (_shared.isFunction(s)) return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */ );
                else warnInvalidSource(s);
            })
        ;
    } else if (_shared.isFunction(source)) {
        if (cb) // getter with cb
        getter = ()=>callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */ )
        ;
        else // no cb -> simple effect
        getter = ()=>{
            if (instance && instance.isUnmounted) return;
            if (cleanup) cleanup();
            return callWithAsyncErrorHandling(source, instance, 3 /* WATCH_CALLBACK */ , [
                onInvalidate
            ]);
        };
    } else {
        getter = _shared.NOOP;
        warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = ()=>traverse(baseGetter())
        ;
    }
    let cleanup;
    let onInvalidate = (fn)=>{
        cleanup = effect.onStop = ()=>{
            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */ );
        };
    };
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    const job = ()=>{
        if (!effect.active) return;
        if (cb) {
            // watch(source, cb)
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i)=>_shared.hasChanged(v, oldValue[i])
            ) : _shared.hasChanged(newValue, oldValue)) || false) {
                // cleanup before running cb again
                if (cleanup) cleanup();
                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */ , [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onInvalidate
                ]);
                oldValue = newValue;
            }
        } else // watchEffect
        effect.run();
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === 'sync') scheduler = job; // the scheduler function gets called directly
    else if (flush === 'post') scheduler = ()=>queuePostRenderEffect(job, instance && instance.suspense)
    ;
    else // default: 'pre'
    scheduler = ()=>{
        if (!instance || instance.isMounted) queuePreFlushCb(job);
        else // with 'pre' option, the first call must happen before
        // the component is mounted so it is called synchronously.
        job();
    };
    const effect = new _reactivity.ReactiveEffect(getter, scheduler);
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
    // initial run
    if (cb) {
        if (immediate) job();
        else oldValue = effect.run();
    } else if (flush === 'post') queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    else effect.run();
    return ()=>{
        effect.stop();
        if (instance && instance.scope) _shared.remove(instance.scope.effects, effect);
    };
}
// this.$watch
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = _shared.isString(source) ? source.includes('.') ? createPathGetter(publicThis, source) : ()=>publicThis[source]
     : source.bind(publicThis, publicThis);
    let cb;
    if (_shared.isFunction(value)) cb = value;
    else {
        cb = value.handler;
        options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) setCurrentInstance(cur);
    else unsetCurrentInstance();
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split('.');
    return ()=>{
        let cur = ctx;
        for(let i = 0; i < segments.length && cur; i++)cur = cur[segments[i]];
        return cur;
    };
}
function traverse(value, seen = new Set()) {
    if (!_shared.isObject(value) || value["__v_skip" /* SKIP */ ]) return value;
    seen = seen || new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    if (_reactivity.isRef(value)) traverse(value.value, seen);
    else if (_shared.isArray(value)) for(let i = 0; i < value.length; i++)traverse(value[i], seen);
    else if (_shared.isSet(value) || _shared.isMap(value)) value.forEach((v)=>{
        traverse(v, seen);
    });
    else if (_shared.isPlainObject(value)) for(const key in value)traverse(value[key], seen);
    return value;
}
Object.freeze({
});
Object.freeze([]);
const isFunction = (val)=>typeof val === 'function'
;
const isObject = (val)=>val !== null && typeof val === 'object'
;
const isPromise = (val)=>{
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
// dev only
const warnRuntimeUsage = (method)=>warn(`${method}() is a compiler-hint helper that is only usable inside ` + `<script setup> of a single file component. Its arguments should be ` + `compiled away and passing it at runtime has no effect.`)
;
// implementation
function defineProps() {
    warnRuntimeUsage(`defineProps`);
    return null;
}
// implementation
function defineEmits() {
    warnRuntimeUsage(`defineEmits`);
    return null;
}
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. varaibles inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */ function defineExpose(exposed) {
    warnRuntimeUsage(`defineExpose`);
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */ function withDefaults(props, defaults) {
    warnRuntimeUsage(`withDefaults`);
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = getCurrentInstance();
    if (!i) warn(`useContext() called without active instance.`);
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */ function mergeDefaults(// the base props is compiler-generated and guaranteed to be in this shape.
props, defaults) {
    for(const key in defaults){
        const val = props[key];
        if (val) val.default = defaults[key];
        else if (val === null) props[key] = {
            default: defaults[key]
        };
        else warn(`props default key "${key}" has no corresponding declaration.`);
    }
    return props;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */ function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (!ctx) warn(`withAsyncContext called without active current instance. ` + `This is likely a bug.`);
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if (isPromise(awaitable)) awaitable = awaitable.catch((e)=>{
        setCurrentInstance(ctx);
        throw e;
    });
    return [
        awaitable,
        ()=>setCurrentInstance(ctx)
    ];
}
// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if (_shared.isObject(propsOrChildren) && !_shared.isArray(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) return createVNode(type, null, [
                propsOrChildren
            ]);
            // props without children
            return createVNode(type, propsOrChildren);
        } else // omit props
        return createVNode(type, null, propsOrChildren);
    } else {
        if (l > 3) children = Array.prototype.slice.call(arguments, 2);
        else if (l === 3 && isVNode(children)) children = [
            children
        ];
        return createVNode(type, propsOrChildren, children);
    }
}
const ssrContextKey = Symbol(`ssrContext`);
const useSSRContext = ()=>{
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) warn(`Server rendering context not provided. Make sure to only call ` + `useSSRContext() conditionally in the server build.`);
        return ctx;
    }
};
function initCustomFormatter() {
    /* eslint-disable no-restricted-globals */ if (typeof window === 'undefined') return;
    const vueStyle = {
        style: 'color:#3ba776'
    };
    const numberStyle = {
        style: 'color:#0b1bc9'
    };
    const stringStyle = {
        style: 'color:#b62e24'
    };
    const keywordStyle = {
        style: 'color:#9d288c'
    };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header (obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!_shared.isObject(obj)) return null;
            if (obj.__isVue) return [
                'div',
                vueStyle,
                `VueInstance`
            ];
            else if (_reactivity.isRef(obj)) return [
                'div',
                {
                },
                [
                    'span',
                    vueStyle,
                    genRefFlag(obj)
                ],
                '<',
                formatValue(obj.value),
                `>`
            ];
            else if (_reactivity.isReactive(obj)) return [
                'div',
                {
                },
                [
                    'span',
                    vueStyle,
                    'Reactive'
                ],
                '<',
                formatValue(obj),
                `>${_reactivity.isReadonly(obj) ? ` (readonly)` : ``}`
            ];
            else if (_reactivity.isReadonly(obj)) return [
                'div',
                {
                },
                [
                    'span',
                    vueStyle,
                    'Readonly'
                ],
                '<',
                formatValue(obj),
                '>'
            ];
            return null;
        },
        hasBody (obj) {
            return obj && obj.__isVue;
        },
        body (obj) {
            if (obj && obj.__isVue) return [
                'div',
                {
                },
                ...formatInstance(obj.$)
            ];
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) blocks.push(createInstanceBlock('props', _reactivity.toRaw(instance.props)));
        if (instance.setupState !== _shared.EMPTY_OBJ) blocks.push(createInstanceBlock('setup', instance.setupState));
        if (instance.data !== _shared.EMPTY_OBJ) blocks.push(createInstanceBlock('data', _reactivity.toRaw(instance.data)));
        const computed = extractKeys(instance, 'computed');
        if (computed) blocks.push(createInstanceBlock('computed', computed));
        const injected = extractKeys(instance, 'inject');
        if (injected) blocks.push(createInstanceBlock('injected', injected));
        blocks.push([
            'div',
            {
            },
            [
                'span',
                {
                    style: keywordStyle.style + ';opacity:0.66'
                },
                '$ (internal): '
            ],
            [
                'object',
                {
                    object: instance
                }
            ]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = _shared.extend({
        }, target);
        if (!Object.keys(target).length) return [
            'span',
            {
            }
        ];
        return [
            'div',
            {
                style: 'line-height:1.25em;margin-bottom:0.6em'
            },
            [
                'div',
                {
                    style: 'color:#476582'
                },
                type
            ],
            [
                'div',
                {
                    style: 'padding-left:1.25em'
                },
                ...Object.keys(target).map((key)=>{
                    return [
                        'div',
                        {
                        },
                        [
                            'span',
                            keywordStyle,
                            key + ': '
                        ],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v, asRaw = true) {
        if (typeof v === 'number') return [
            'span',
            numberStyle,
            v
        ];
        else if (typeof v === 'string') return [
            'span',
            stringStyle,
            JSON.stringify(v)
        ];
        else if (typeof v === 'boolean') return [
            'span',
            keywordStyle,
            v
        ];
        else if (_shared.isObject(v)) return [
            'object',
            {
                object: asRaw ? _reactivity.toRaw(v) : v
            }
        ];
        else return [
            'span',
            stringStyle,
            String(v)
        ];
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if (_shared.isFunction(Comp)) return;
        const extracted = {
        };
        for(const key in instance.ctx)if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if (_shared.isArray(opts) && opts.includes(key) || _shared.isObject(opts) && key in opts) return true;
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
        if (Comp.mixins && Comp.mixins.some((m)=>isKeyOfType(m, key, type)
        )) return true;
    }
    function genRefFlag(v) {
        if (v._shallow) return `ShallowRef`;
        if (v.effect) return `ComputedRef`;
        return `Ref`;
    }
    if (window.devtoolsFormatters) window.devtoolsFormatters.push(formatter);
    else window.devtoolsFormatters = [
        formatter
    ];
}
function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) return cached;
    const ret = render();
    // shallow clone
    ret.memo = memo.slice();
    return cache[index] = ret;
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) return false;
    for(let i = 0; i < prev.length; i++){
        if (prev[i] !== memo[i]) return false;
    }
    // make sure to let parent block track it when returning cached
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(cached);
    return true;
}
// Core API ------------------------------------------------------------------
const version = "3.2.11";
const _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode,
    normalizeVNode
};
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */ const ssrUtils = _ssrUtils;
/**
 * @internal only exposed in compat builds
 */ const resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */ const compatUtils = null;

},{"@vue/reactivity":"j9cvP","@vue/shared":"jjDCJ","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"j9cvP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>EffectScope
);
parcelHelpers.export(exports, "ITERATE_KEY", ()=>ITERATE_KEY
);
parcelHelpers.export(exports, "ReactiveEffect", ()=>ReactiveEffect
);
parcelHelpers.export(exports, "computed", ()=>computed
);
parcelHelpers.export(exports, "customRef", ()=>customRef
);
parcelHelpers.export(exports, "deferredComputed", ()=>deferredComputed
);
parcelHelpers.export(exports, "effect", ()=>effect
);
parcelHelpers.export(exports, "effectScope", ()=>effectScope
);
parcelHelpers.export(exports, "enableTracking", ()=>enableTracking
);
parcelHelpers.export(exports, "getCurrentScope", ()=>getCurrentScope
);
parcelHelpers.export(exports, "isProxy", ()=>isProxy
);
parcelHelpers.export(exports, "isReactive", ()=>isReactive
);
parcelHelpers.export(exports, "isReadonly", ()=>isReadonly
);
parcelHelpers.export(exports, "isRef", ()=>isRef
);
parcelHelpers.export(exports, "markRaw", ()=>markRaw
);
parcelHelpers.export(exports, "onScopeDispose", ()=>onScopeDispose
);
parcelHelpers.export(exports, "pauseTracking", ()=>pauseTracking
);
parcelHelpers.export(exports, "proxyRefs", ()=>proxyRefs
);
parcelHelpers.export(exports, "reactive", ()=>reactive
);
parcelHelpers.export(exports, "readonly", ()=>readonly
);
parcelHelpers.export(exports, "ref", ()=>ref
);
parcelHelpers.export(exports, "resetTracking", ()=>resetTracking
);
parcelHelpers.export(exports, "shallowReactive", ()=>shallowReactive
);
parcelHelpers.export(exports, "shallowReadonly", ()=>shallowReadonly
);
parcelHelpers.export(exports, "shallowRef", ()=>shallowRef
);
parcelHelpers.export(exports, "stop", ()=>stop
);
parcelHelpers.export(exports, "toRaw", ()=>toRaw
);
parcelHelpers.export(exports, "toRef", ()=>toRef
);
parcelHelpers.export(exports, "toRefs", ()=>toRefs
);
parcelHelpers.export(exports, "track", ()=>track
);
parcelHelpers.export(exports, "trigger", ()=>trigger
);
parcelHelpers.export(exports, "triggerRef", ()=>triggerRef
);
parcelHelpers.export(exports, "unref", ()=>unref
);
var _shared = require("@vue/shared");
function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
const effectScopeStack = [];
class EffectScope {
    constructor(detached = false){
        this.active = true;
        this.effects = [];
        this.cleanups = [];
        if (!detached && activeEffectScope) {
            this.parent = activeEffectScope;
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    run(fn) {
        if (this.active) try {
            this.on();
            return fn();
        } finally{
            this.off();
        }
        else warn(`cannot run an inactive effect scope.`);
    }
    on() {
        if (this.active) {
            effectScopeStack.push(this);
            activeEffectScope = this;
        }
    }
    off() {
        if (this.active) {
            effectScopeStack.pop();
            activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
        }
    }
    stop(fromParent) {
        if (this.active) {
            this.effects.forEach((e)=>e.stop()
            );
            this.cleanups.forEach((cleanup)=>cleanup()
            );
            if (this.scopes) this.scopes.forEach((e)=>e.stop(true)
            );
            // nested scope, dereference from parent to avoid memory leaks
            if (this.parent && !fromParent) {
                // optimized O(1) removal
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.active = false;
        }
    }
}
function effectScope(detached1) {
    return new EffectScope(detached1);
}
function recordEffectScope(effect, scope) {
    scope = scope || activeEffectScope;
    if (scope && scope.active) scope.effects.push(effect);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) activeEffectScope.cleanups.push(fn);
    else warn(`onScopeDispose() is called when there is no active effect scope` + ` to be associated with.`);
}
const createDep = (effects)=>{
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
};
const wasTracked = (dep)=>(dep.w & trackOpBit) > 0
;
const newTracked = (dep)=>(dep.n & trackOpBit) > 0
;
const initDepMarkers = ({ deps  })=>{
    if (deps.length) for(let i = 0; i < deps.length; i++)deps[i].w |= trackOpBit; // set was tracked
};
const finalizeDepMarkers = (effect)=>{
    const { deps  } = effect;
    if (deps.length) {
        let ptr = 0;
        for(let i = 0; i < deps.length; i++){
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) dep.delete(effect);
            else deps[ptr++] = dep;
            // clear bits
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
        }
        deps.length = ptr;
    }
};
const targetMap = new WeakMap();
// The number of effects currently being tracked recursively.
let effectTrackDepth = 0;
let trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels op recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */ const maxMarkerBits = 30;
const effectStack = [];
let activeEffect;
const ITERATE_KEY = Symbol('iterate');
const MAP_KEY_ITERATE_KEY = Symbol('Map key iterate');
class ReactiveEffect {
    constructor(fn, scheduler = null, scope){
        this.fn = fn;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        recordEffectScope(this, scope);
    }
    run() {
        if (!this.active) return this.fn();
        if (!effectStack.includes(this)) try {
            effectStack.push(activeEffect = this);
            enableTracking();
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) initDepMarkers(this);
            else cleanupEffect(this);
            return this.fn();
        } finally{
            if (effectTrackDepth <= maxMarkerBits) finalizeDepMarkers(this);
            trackOpBit = 1 << --effectTrackDepth;
            resetTracking();
            effectStack.pop();
            const n = effectStack.length;
            activeEffect = n > 0 ? effectStack[n - 1] : undefined;
        }
    }
    stop() {
        if (this.active) {
            cleanupEffect(this);
            if (this.onStop) this.onStop();
            this.active = false;
        }
    }
}
function cleanupEffect(effect) {
    const { deps  } = effect;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect);
        deps.length = 0;
    }
}
function effect(fn1, options) {
    if (fn1.effect) fn1 = fn1.effect.fn;
    const _effect = new ReactiveEffect(fn1);
    if (options) {
        _shared.extend(_effect, options);
        if (options.scope) recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) _effect.run();
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (!isTracking()) return;
    let depsMap = targetMap.get(target);
    if (!depsMap) targetMap.set(target, depsMap = new Map());
    let dep = depsMap.get(key);
    if (!dep) depsMap.set(key, dep = createDep());
    const eventInfo = {
        effect: activeEffect,
        target,
        type,
        key
    };
    trackEffects(dep, eventInfo);
}
function isTracking() {
    return shouldTrack && activeEffect !== undefined;
}
function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack1 = false;
    if (effectTrackDepth <= maxMarkerBits) {
        if (!newTracked(dep)) {
            dep.n |= trackOpBit; // set newly tracked
            shouldTrack1 = !wasTracked(dep);
        }
    } else // Full cleanup mode.
    shouldTrack1 = !dep.has(activeEffect);
    if (shouldTrack1) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.onTrack) activeEffect.onTrack(Object.assign({
            effect: activeEffect
        }, debuggerEventExtraInfo));
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) // never been tracked
    return;
    let deps = [];
    if (type === "clear" /* CLEAR */ ) // collection being cleared
    // trigger all effects for target
    deps = [
        ...depsMap.values()
    ];
    else if (key === 'length' && _shared.isArray(target)) depsMap.forEach((dep, key1)=>{
        if (key1 === 'length' || key1 >= newValue) deps.push(dep);
    });
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) deps.push(depsMap.get(key));
        // also run for iteration key on ADD | DELETE | Map.SET
        switch(type){
            case "add" /* ADD */ :
                if (!_shared.isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (_shared.isMap(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if (_shared.isIntegerKey(key)) // new index added to array -> length changes
                deps.push(depsMap.get('length'));
                break;
            case "delete" /* DELETE */ :
                if (!_shared.isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (_shared.isMap(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set" /* SET */ :
                if (_shared.isMap(target)) deps.push(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const eventInfo = {
        target,
        type,
        key,
        newValue,
        oldValue,
        oldTarget
    };
    if (deps.length === 1) {
        if (deps[0]) triggerEffects(deps[0], eventInfo);
    } else {
        const effects = [];
        for (const dep of deps)if (dep) effects.push(...dep);
        triggerEffects(createDep(effects), eventInfo);
    }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
    // spread into array for stabilization
    for (const effect1 of _shared.isArray(dep) ? dep : [
        ...dep
    ])if (effect1 !== activeEffect || effect1.allowRecurse) {
        if (effect1.onTrigger) effect1.onTrigger(_shared.extend({
            effect: effect1
        }, debuggerEventExtraInfo));
        if (effect1.scheduler) effect1.scheduler();
        else effect1.run();
    }
}
const isNonTrackableKeys = /*#__PURE__*/ _shared.makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key)=>Symbol[key]
).filter(_shared.isSymbol));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {
    };
    [
        'includes',
        'indexOf',
        'lastIndexOf'
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get" /* GET */ , i + '');
            // we run the method using the original args first (which may be reactive)
            const res = arr[key](...args);
            if (res === -1 || res === false) // if that didn't work, run it again using raw values.
            return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        'push',
        'pop',
        'shift',
        'unshift',
        'splice'
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get1(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */ ) return !isReadonly;
        else if (key === "__v_isReadonly" /* IS_READONLY */ ) return isReadonly;
        else if (key === "__v_raw" /* RAW */  && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = _shared.isArray(target);
        if (!isReadonly && targetIsArray && _shared.hasOwn(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        const res = Reflect.get(target, key, receiver);
        if (_shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly) track(target, "get" /* GET */ , key);
        if (shallow) return res;
        if (isRef(res)) {
            // ref unwrapping - does not apply for Array + integer key.
            const shouldUnwrap = !targetIsArray || !_shared.isIntegerKey(key);
            return shouldUnwrap ? res.value : res;
        }
        if (_shared.isObject(res)) // Convert returned value into a proxy as well. we do the isObject check
        // here to avoid invalid value warning. Also need to lazy access readonly
        // and reactive here to avoid circular dependency.
        return isReadonly ? readonly(res) : reactive(res);
        return res;
    };
}
const set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set1(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            oldValue = toRaw(oldValue);
            if (!_shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = _shared.isArray(target) && _shared.isIntegerKey(key) ? Number(key) < target.length : _shared.hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add" /* ADD */ , key, value);
            else if (_shared.hasChanged(value, oldValue)) trigger(target, "set" /* SET */ , key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = _shared.hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete" /* DELETE */ , key, undefined, oldValue);
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!_shared.isSymbol(key) || !builtInSymbols.has(key)) track(target, "has" /* HAS */ , key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */ , _shared.isArray(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    },
    deleteProperty (target, key) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
};
const shallowReactiveHandlers = /*#__PURE__*/ _shared.extend({
}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = /*#__PURE__*/ _shared.extend({
}, readonlyHandlers, {
    get: shallowReadonlyGet
});
const toReactive = (value)=>_shared.isObject(value) ? reactive(value) : value
;
const toReadonly = (value)=>_shared.isObject(value) ? readonly(value) : value
;
const toShallow = (value)=>value
;
const getProto = (v)=>Reflect.getPrototypeOf(v)
;
function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */ ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "get" /* GET */ , key);
    !isReadonly && track(rawTarget, "get" /* GET */ , rawKey);
    const { has: has1  } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has1.call(rawTarget, key)) return wrap(target.get(key));
    else if (has1.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw" /* RAW */ ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "has" /* HAS */ , key);
    !isReadonly && track(rawTarget, "has" /* HAS */ , rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* RAW */ ];
    !isReadonly && track(toRaw(target), "iterate" /* ITERATE */ , ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add" /* ADD */ , value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has1 , get: get1  } = getProto(target);
    let hadKey = has1.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has1.call(target, key);
    } else checkIdentityKeys(target, has1, key);
    const oldValue = get1.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add" /* ADD */ , key, value);
    else if (_shared.hasChanged(value, oldValue)) trigger(target, "set" /* SET */ , key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has1 , get: get1  } = getProto(target);
    let hadKey = has1.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has1.call(target, key);
    } else checkIdentityKeys(target, has1, key);
    const oldValue = get1 ? get1.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete" /* DELETE */ , key, undefined, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = _shared.isMap(target) ? new Map(target) : new Set(target);
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) trigger(target, "clear" /* CLEAR */ , undefined, undefined, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */ ];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */ , ITERATE_KEY);
        return target.forEach((value, key)=>{
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw" /* RAW */ ];
        const rawTarget = toRaw(target);
        const targetIsMap = _shared.isMap(rawTarget);
        const isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */ , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next () {
                const { value , done  } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${_shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" /* DELETE */  ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations = {
        get (key) {
            return get$1(this, key);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations = {
        get (key) {
            return get$1(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations = {
        get (key) {
            return get$1(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */ ),
        set: createReadonlyMethod("set" /* SET */ ),
        delete: createReadonlyMethod("delete" /* DELETE */ ),
        clear: createReadonlyMethod("clear" /* CLEAR */ ),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations = {
        get (key) {
            return get$1(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */ ),
        set: createReadonlyMethod("set" /* SET */ ),
        delete: createReadonlyMethod("delete" /* DELETE */ ),
        clear: createReadonlyMethod("clear" /* CLEAR */ ),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        'keys',
        'values',
        'entries',
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations[method] = createIterableMethod(method, true, false);
        shallowInstrumentations[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations,
        readonlyInstrumentations,
        shallowInstrumentations,
        shallowReadonlyInstrumentations
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive" /* IS_REACTIVE */ ) return !isReadonly;
        else if (key === "__v_isReadonly" /* IS_READONLY */ ) return isReadonly;
        else if (key === "__v_raw" /* RAW */ ) return target;
        return Reflect.get(_shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has1, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has1.call(target, rawKey)) {
        const type = _shared.toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` + `versions of the same object${type === `Map` ? ` as keys` : ``}, ` + `which can lead to inconsistencies. ` + `Avoid differentiating between the raw and reactive versions ` + `of an object and only use the reactive version if possible.`);
    }
}
const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case 'Object':
        case 'Array':
            return 1 /* COMMON */ ;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* COLLECTION */ ;
        default:
            return 0 /* INVALID */ ;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */ ] || !Object.isExtensible(value) ? 0 /* INVALID */  : targetTypeMap(_shared.toRawType(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (target && target["__v_isReadonly" /* IS_READONLY */ ]) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */ function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */ function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */ function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!_shared.isObject(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */ ] && !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */ ])) return target;
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) return isReactive(value["__v_raw" /* RAW */ ]);
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */ ]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */ ]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw" /* RAW */ ];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    _shared.def(value, "__v_skip" /* SKIP */ , true);
    return value;
}
function trackRefValue(ref) {
    if (isTracking()) {
        ref = toRaw(ref);
        if (!ref.dep) ref.dep = createDep();
        trackEffects(ref.dep, {
            target: ref,
            type: "get" /* GET */ ,
            key: 'value'
        });
    }
}
function triggerRefValue(ref, newVal) {
    ref = toRaw(ref);
    if (ref.dep) triggerEffects(ref.dep, {
        target: ref,
        type: "set" /* SET */ ,
        key: 'value',
        newValue: newVal
    });
}
const convert = (val)=>_shared.isObject(val) ? reactive(val) : val
;
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
class RefImpl {
    constructor(value, _shallow){
        this._shallow = _shallow;
        this.dep = undefined;
        this.__v_isRef = true;
        this._rawValue = _shallow ? value : toRaw(value);
        this._value = _shallow ? value : convert(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        newVal = this._shallow ? newVal : toRaw(newVal);
        if (_shared.hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = this._shallow ? newVal : convert(newVal);
            triggerRefValue(this, newVal);
        }
    }
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) return rawValue;
    return new RefImpl(rawValue, shallow);
}
function triggerRef(ref1) {
    triggerRefValue(ref1, ref1.value);
}
function unref(ref1) {
    return isRef(ref1) ? ref1.value : ref1;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver)=>unref(Reflect.get(target, key, receiver))
    ,
    set: (target, key, value1, receiver)=>{
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value1)) {
            oldValue.value = value1;
            return true;
        } else return Reflect.set(target, key, value1, receiver);
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory){
        this.dep = undefined;
        this.__v_isRef = true;
        const { get: get1 , set: set1  } = factory(()=>trackRefValue(this)
        , ()=>triggerRefValue(this)
        );
        this._get = get1;
        this._set = set1;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory1) {
    return new CustomRefImpl(factory1);
}
function toRefs(object) {
    if (!isProxy(object)) console.warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = _shared.isArray(object) ? new Array(object.length) : {
    };
    for(const key in object)ret[key] = toRef(object, key);
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key){
        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
    }
    get value() {
        return this._object[this._key];
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key) {
    const val = object[key];
    return isRef(val) ? val : new ObjectRefImpl(object, key);
}
class ComputedRefImpl {
    constructor(getter, _setter, isReadonly1){
        this._setter = _setter;
        this.dep = undefined;
        this._dirty = true;
        this.__v_isRef = true;
        this.effect = new ReactiveEffect(getter, ()=>{
            if (!this._dirty) {
                this._dirty = true;
                triggerRefValue(this);
            }
        });
        this["__v_isReadonly" /* IS_READONLY */ ] = isReadonly1;
    }
    get value() {
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        const self = toRaw(this);
        trackRefValue(self);
        if (self._dirty) {
            self._dirty = false;
            self._value = self.effect.run();
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function computed(getterOrOptions, debugOptions) {
    let getter1;
    let setter;
    if (_shared.isFunction(getterOrOptions)) {
        getter1 = getterOrOptions;
        setter = ()=>{
            console.warn('Write operation failed: computed value is readonly');
        };
    } else {
        getter1 = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter1, setter, _shared.isFunction(getterOrOptions) || !getterOrOptions.set);
    if (debugOptions) {
        cRef.effect.onTrack = debugOptions.onTrack;
        cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
var _a;
const tick = Promise.resolve();
const queue = [];
let queued = false;
const scheduler1 = (fn1)=>{
    queue.push(fn1);
    if (!queued) {
        queued = true;
        tick.then(flush);
    }
};
const flush = ()=>{
    for(let i = 0; i < queue.length; i++)queue[i]();
    queue.length = 0;
    queued = false;
};
class DeferredComputedRefImpl {
    constructor(getter1){
        this.dep = undefined;
        this._dirty = true;
        this.__v_isRef = true;
        this[_a] = true;
        let compareTarget;
        let hasCompareTarget = false;
        let scheduled = false;
        this.effect = new ReactiveEffect(getter1, (computedTrigger)=>{
            if (this.dep) {
                if (computedTrigger) {
                    compareTarget = this._value;
                    hasCompareTarget = true;
                } else if (!scheduled) {
                    const valueToCompare = hasCompareTarget ? compareTarget : this._value;
                    scheduled = true;
                    hasCompareTarget = false;
                    scheduler1(()=>{
                        if (this.effect.active && this._get() !== valueToCompare) triggerRefValue(this);
                        scheduled = false;
                    });
                }
                // chained upstream computeds are notified synchronously to ensure
                // value invalidation in case of sync access; normal effects are
                // deferred to be triggered in scheduler.
                for (const e of this.dep)if (e.computed) e.scheduler(true);
            }
            this._dirty = true;
        });
        this.effect.computed = true;
    }
    _get() {
        if (this._dirty) {
            this._dirty = false;
            return this._value = this.effect.run();
        }
        return this._value;
    }
    get value() {
        trackRefValue(this);
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        return toRaw(this)._get();
    }
}
_a = "__v_isReadonly" /* IS_READONLY */ ;
function deferredComputed(getter2) {
    return new DeferredComputedRefImpl(getter2);
}

},{"@vue/shared":"jjDCJ","@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"jjDCJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY_ARR", ()=>EMPTY_ARR
);
parcelHelpers.export(exports, "EMPTY_OBJ", ()=>EMPTY_OBJ
);
parcelHelpers.export(exports, "NO", ()=>NO
);
parcelHelpers.export(exports, "NOOP", ()=>NOOP
);
parcelHelpers.export(exports, "PatchFlagNames", ()=>PatchFlagNames
);
parcelHelpers.export(exports, "babelParserDefaultPlugins", ()=>babelParserDefaultPlugins
);
parcelHelpers.export(exports, "camelize", ()=>camelize
);
parcelHelpers.export(exports, "capitalize", ()=>capitalize
);
parcelHelpers.export(exports, "def", ()=>def
);
parcelHelpers.export(exports, "escapeHtml", ()=>escapeHtml
);
parcelHelpers.export(exports, "escapeHtmlComment", ()=>escapeHtmlComment
);
parcelHelpers.export(exports, "extend", ()=>extend
);
parcelHelpers.export(exports, "generateCodeFrame", ()=>generateCodeFrame
);
parcelHelpers.export(exports, "getGlobalThis", ()=>getGlobalThis
);
parcelHelpers.export(exports, "hasChanged", ()=>hasChanged
);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn
);
parcelHelpers.export(exports, "hyphenate", ()=>hyphenate
);
parcelHelpers.export(exports, "includeBooleanAttr", ()=>includeBooleanAttr
);
parcelHelpers.export(exports, "invokeArrayFns", ()=>invokeArrayFns
);
parcelHelpers.export(exports, "isArray", ()=>isArray
);
parcelHelpers.export(exports, "isBooleanAttr", ()=>isBooleanAttr
);
parcelHelpers.export(exports, "isDate", ()=>isDate
);
parcelHelpers.export(exports, "isFunction", ()=>isFunction
);
parcelHelpers.export(exports, "isGloballyWhitelisted", ()=>isGloballyWhitelisted
);
parcelHelpers.export(exports, "isHTMLTag", ()=>isHTMLTag
);
parcelHelpers.export(exports, "isIntegerKey", ()=>isIntegerKey
);
parcelHelpers.export(exports, "isKnownHtmlAttr", ()=>isKnownHtmlAttr
);
parcelHelpers.export(exports, "isKnownSvgAttr", ()=>isKnownSvgAttr
);
parcelHelpers.export(exports, "isMap", ()=>isMap
);
parcelHelpers.export(exports, "isModelListener", ()=>isModelListener
);
parcelHelpers.export(exports, "isNoUnitNumericStyleProp", ()=>isNoUnitNumericStyleProp
);
parcelHelpers.export(exports, "isObject", ()=>isObject
);
parcelHelpers.export(exports, "isOn", ()=>isOn
);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject
);
parcelHelpers.export(exports, "isPromise", ()=>isPromise
);
parcelHelpers.export(exports, "isReservedProp", ()=>isReservedProp
);
parcelHelpers.export(exports, "isSSRSafeAttrName", ()=>isSSRSafeAttrName
);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag
);
parcelHelpers.export(exports, "isSet", ()=>isSet
);
parcelHelpers.export(exports, "isSpecialBooleanAttr", ()=>isSpecialBooleanAttr
);
parcelHelpers.export(exports, "isString", ()=>isString
);
parcelHelpers.export(exports, "isSymbol", ()=>isSymbol
);
parcelHelpers.export(exports, "isVoidTag", ()=>isVoidTag
);
parcelHelpers.export(exports, "looseEqual", ()=>looseEqual
);
parcelHelpers.export(exports, "looseIndexOf", ()=>looseIndexOf
);
parcelHelpers.export(exports, "makeMap", ()=>makeMap
);
parcelHelpers.export(exports, "normalizeClass", ()=>normalizeClass
);
parcelHelpers.export(exports, "normalizeProps", ()=>normalizeProps
);
parcelHelpers.export(exports, "normalizeStyle", ()=>normalizeStyle
);
parcelHelpers.export(exports, "objectToString", ()=>objectToString
);
parcelHelpers.export(exports, "parseStringStyle", ()=>parseStringStyle
);
parcelHelpers.export(exports, "propsToAttrMap", ()=>propsToAttrMap
);
parcelHelpers.export(exports, "remove", ()=>remove
);
parcelHelpers.export(exports, "slotFlagsText", ()=>slotFlagsText
);
parcelHelpers.export(exports, "stringifyStyle", ()=>stringifyStyle
);
parcelHelpers.export(exports, "toDisplayString", ()=>toDisplayString
);
parcelHelpers.export(exports, "toHandlerKey", ()=>toHandlerKey
);
parcelHelpers.export(exports, "toNumber", ()=>toNumber
);
parcelHelpers.export(exports, "toRawType", ()=>toRawType
);
parcelHelpers.export(exports, "toTypeString", ()=>toTypeString
);
var global = arguments[3];
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */ function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()]
     : (val)=>!!map[val]
    ;
}
/**
 * dev only flag -> name mapping
 */ const PatchFlagNames = {
    [1 /* TEXT */ ]: `TEXT`,
    [2 /* CLASS */ ]: `CLASS`,
    [4 /* STYLE */ ]: `STYLE`,
    [8 /* PROPS */ ]: `PROPS`,
    [16 /* FULL_PROPS */ ]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */ ]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */ ]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */ ]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */ ]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */ ]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */ ]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */ ]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */ ]: `HOISTED`,
    [-2 /* BAIL */ ]: `BAIL`
};
/**
 * Dev only
 */ const slotFlagsText = {
    [1 /* STABLE */ ]: 'STABLE',
    [2 /* DYNAMIC */ ]: 'DYNAMIC',
    [3 /* FORWARDED */ ]: 'FORWARDED'
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1
    );
    lines = lines.filter((_, idx)=>idx % 2 === 0
    );
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */ const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */ const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` + `loop,open,required,reversed,scoped,seamless,` + `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. <select multiple> compiles to { multiple: '' }
 */ function includeBooleanAttr(value) {
    return !!value || value === '';
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {
};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) return attrValidationCache[name];
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) console.error(`unsafe attribute name: ${name}`);
    return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */ const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` + `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` + `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` + `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` + `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` + `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` + // SVG
`fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` + `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */ const isKnownHtmlAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` + `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` + `border,buffered,capture,challenge,charset,checked,cite,class,code,` + `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` + `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` + `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` + `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` + `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` + `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` + `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` + `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` + `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` + `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` + `start,step,style,summary,tabindex,target,title,translate,type,usemap,` + `value,width,wrap`);
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */ const isKnownSvgAttr = /*#__PURE__*/ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` + `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` + `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` + `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` + `color-interpolation-filters,color-profile,color-rendering,` + `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` + `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` + `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` + `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` + `font-family,font-size,font-size-adjust,font-stretch,font-style,` + `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` + `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` + `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` + `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` + `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` + `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` + `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` + `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` + `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` + `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` + `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` + `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` + `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` + `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` + `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` + `specularConstant,specularExponent,speed,spreadMethod,startOffset,` + `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` + `strikethrough-position,strikethrough-thickness,string,stroke,` + `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` + `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` + `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` + `text-decoration,text-rendering,textLength,to,transform,transform-origin,` + `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` + `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` + `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` + `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` + `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` + `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` + `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {
        };
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if (isString(value)) return value;
    else if (isObject(value)) return value;
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {
    };
    cssText.split(listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles || isString(styles)) return ret;
    for(const key in styles){
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) // only render valid values
        ret += `${normalizedKey}:${value};`;
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) res = value;
    else if (isArray(value)) for(let i = 0; i < value.length; i++){
        const normalized = normalizeClass(value[i]);
        if (normalized) res += normalized + ' ';
    }
    else if (isObject(value)) {
        for(const name in value)if (value[name]) res += name + ' ';
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props) return null;
    let { class: klass , style  } = props;
    if (klass && !isString(klass)) props.class = normalizeClass(klass);
    if (style) props.style = normalizeStyle(style);
    return props;
}
// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) return str;
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escaped = '&quot;';
                break;
            case 38:
                escaped = '&amp;';
                break;
            case 39:
                escaped = '&#39;';
                break;
            case 60:
                escaped = '&lt;';
                break;
            case 62:
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) html += str.substring(lastIndex, index);
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}
function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = looseEqual(a[i], b[i]);
    return equal;
}
function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */ if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex((item)=>looseEqual(item, val)
    );
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */ const toDisplayString = (val)=>{
    return val == null ? '' : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val)=>{
    // can't use isRef here since @vue/shared has no deps
    if (val && val.__v_isRef) return replacer(_key, val.value);
    else if (isMap(val)) return {
        [`Map(${val.size})`]: [
            ...val.entries()
        ].reduce((entries, [key, val1])=>{
            entries[`${key} =>`] = val1;
            return entries;
        }, {
        })
    };
    else if (isSet(val)) return {
        [`Set(${val.size})`]: [
            ...val.values()
        ]
    };
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) return String(val);
    return val;
};
/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */ const babelParserDefaultPlugins = [
    'bigInt',
    'optionalChaining',
    'nullishCoalescingOperator'
];
const EMPTY_OBJ = Object.freeze({
});
const EMPTY_ARR = Object.freeze([]);
const NOOP = ()=>{
};
/**
 * Always return false.
 */ const NO = ()=>false
;
const onRE = /^on[^a-z]/;
const isOn = (key)=>onRE.test(key)
;
const isModelListener = (key)=>key.startsWith('onUpdate:')
;
const extend = Object.assign;
const remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key)=>hasOwnProperty.call(val, key)
;
const isArray = Array.isArray;
const isMap = (val)=>toTypeString(val) === '[object Map]'
;
const isSet = (val)=>toTypeString(val) === '[object Set]'
;
const isDate = (val)=>val instanceof Date
;
const isFunction = (val)=>typeof val === 'function'
;
const isString = (val)=>typeof val === 'string'
;
const isSymbol = (val)=>typeof val === 'symbol'
;
const isObject = (val)=>val !== null && typeof val === 'object'
;
const isPromise = (val)=>{
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value)=>objectToString.call(value)
;
const toRawType = (value)=>{
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val)=>toTypeString(val) === '[object Object]'
;
const isIntegerKey = (key)=>isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key
;
const isReservedProp = /*#__PURE__*/ makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const cacheStringFunction = (fn)=>{
    const cache = Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */ const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : ''
    );
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */ const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, '-$1').toLowerCase()
);
/**
 * @private
 */ const capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1)
);
/**
 * @private
 */ const toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``
);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue)=>!Object.is(value, oldValue)
;
const invokeArrayFns = (fns, arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](arg);
};
const def = (obj, key, value)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = ()=>{
    return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"4N8i7":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1030d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "store", ()=>io
);
parcelHelpers.export(exports, "i18n", ()=>fo
);
var global = arguments[3];
var e3 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {
};
function t6(e1, t1, n, r) {
    Object.defineProperty(e1, t1, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
function n7(e1) {
    return e1 && e1.__esModule ? e1.default : e1;
}
var r3 = {
}, o1 = {
}, a4 = e3.parcelRequire9e1c;
function s1(e1, t1) {
    const n1 = Object.create(null), r1 = e1.split(",");
    for(let e2 = 0; e2 < r1.length; e2++)n1[r1[e2]] = !0;
    return t1 ? (e3)=>!!n1[e3.toLowerCase()]
     : (e3)=>!!n1[e3]
    ;
}
null == a4 && ((a4 = function(e1) {
    if (e1 in r3) return r3[e1].exports;
    if (e1 in o1) {
        var t1 = o1[e1];
        delete o1[e1];
        var n1 = {
            id: e1,
            exports: {
            }
        };
        return r3[e1] = n1, t1.call(n1.exports, n1, n1.exports), n1.exports;
    }
    var a1 = new Error("Cannot find module '" + e1 + "'");
    throw a1.code = "MODULE_NOT_FOUND", a1;
}).register = function(e1, t2) {
    o1[e1] = t2;
}, e3.parcelRequire9e1c = a4);
function i1(e1) {
    if (k1(e1)) {
        const t2 = {
        };
        for(let n2 = 0; n2 < e1.length; n2++){
            const r1 = e1[n2], o1 = O1(r1) ? u1(r1) : i1(r1);
            if (o1) for(const e2 in o1)t2[e2] = o1[e2];
        }
        return t2;
    }
    return O1(e1) || C1(e1) ? e1 : void 0;
}
const l3 = /;(?![^(]*\))/g, c1 = /:(.+)/;
function u1(e1) {
    const t2 = {
    };
    return e1.split(l3).forEach((e2)=>{
        if (e2) {
            const n2 = e2.split(c1);
            n2.length > 1 && (t2[n2[0].trim()] = n2[1].trim());
        }
    }), t2;
}
function f1(e1) {
    let t2 = "";
    if (O1(e1)) t2 = e1;
    else if (k1(e1)) for(let n2 = 0; n2 < e1.length; n2++){
        const r1 = f1(e1[n2]);
        r1 && (t2 += r1 + " ");
    }
    else if (C1(e1)) for(const n3 in e1)e1[n3] && (t2 += n3 + " ");
    return t2.trim();
}
const p1 = {
}, d1 = ()=>{
}, m1 = ()=>!1
, h1 = /^on[^a-z]/, g = (e1)=>h1.test(e1)
, y1 = Object.assign, b1 = (e1, t2)=>{
    const n2 = e1.indexOf(t2);
    n2 > -1 && e1.splice(n2, 1);
}, v1 = Object.prototype.hasOwnProperty, _1 = (e1, t2)=>v1.call(e1, t2)
, k1 = Array.isArray, S1 = (e1)=>"[object Map]" === T(e1)
, w1 = (e1)=>"[object Set]" === T(e1)
, x1 = (e1)=>"function" == typeof e1
, O1 = (e1)=>"string" == typeof e1
, F = (e1)=>"symbol" == typeof e1
, C1 = (e1)=>null !== e1 && "object" == typeof e1
, P1 = (e1)=>C1(e1) && x1(e1.then) && x1(e1.catch)
, L1 = Object.prototype.toString, T = (e1)=>L1.call(e1)
, j1 = (e1)=>T(e1).slice(8, -1)
, I1 = (e1)=>"[object Object]" === T(e1)
, M1 = (e1)=>O1(e1) && "NaN" !== e1 && "-" !== e1[0] && "" + parseInt(e1, 10) === e1
, A = (e1)=>{
    const t2 = Object.create(null);
    return (n2)=>t2[n2] || (t2[n2] = e1(n2))
    ;
}, N1 = /-(\w)/g, E1 = (A((e1)=>e1.replace(N1, (e2, t2)=>t2 ? t2.toUpperCase() : ""
    )
), /\B([A-Z])/g), R1 = (A((e1)=>e1.replace(E1, "-$1").toLowerCase()
), A((e1)=>e1.charAt(0).toUpperCase() + e1.slice(1)
)), D1 = (A((e1)=>e1 ? `on${R1(e1)}` : ""
), (e1, t2)=>!Object.is(e1, t2)
), $1 = (e1, t2)=>{
    for(let n2 = 0; n2 < e1.length; n2++)e1[n2](t2);
}, W1 = (e1, t2, n2)=>{
    Object.defineProperty(e1, t2, {
        configurable: !0,
        enumerable: !1,
        value: n2
    });
};
let U;
function H(e1, t2) {
    (t2 = t2 || U) && t2.active && t2.effects.push(e1);
}
const G = (e1)=>{
    const t2 = new Set(e1);
    return t2.w = 0, t2.n = 0, t2;
}, V = (e1)=>(e1.w & K) > 0
, B = (e1)=>(e1.n & K) > 0
, J = new WeakMap;
let z = 0, K = 1;
const Y = [];
let X;
const q = Symbol(""), Z = Symbol("");
class Q {
    constructor(e1, t2 = null, n2){
        this.fn = e1, this.scheduler = t2, this.active = !0, this.deps = [], H(this, n2);
    }
    run() {
        if (!this.active) return this.fn();
        if (!Y.includes(this)) try {
            return Y.push(X = this), ne.push(te), te = !0, K = 1 << ++z, z <= 30 ? (({ deps: e2  })=>{
                if (e2.length) for(let t3 = 0; t3 < e2.length; t3++)e2[t3].w |= K;
            })(this) : ee(this), this.fn();
        } finally{
            z <= 30 && ((e2)=>{
                const { deps: t3  } = e2;
                if (t3.length) {
                    let n3 = 0;
                    for(let r1 = 0; r1 < t3.length; r1++){
                        const o1 = t3[r1];
                        V(o1) && !B(o1) ? o1.delete(e2) : t3[n3++] = o1, o1.w &= ~K, o1.n &= ~K;
                    }
                    t3.length = n3;
                }
            })(this), K = 1 << --z, oe(), Y.pop();
            const e2 = Y.length;
            X = e2 > 0 ? Y[e2 - 1] : void 0;
        }
    }
    stop() {
        this.active && (ee(this), this.onStop && this.onStop(), this.active = !1);
    }
}
function ee(e2) {
    const { deps: t3  } = e2;
    if (t3.length) {
        for(let n3 = 0; n3 < t3.length; n3++)t3[n3].delete(e2);
        t3.length = 0;
    }
}
let te = !0;
const ne = [];
function re() {
    ne.push(te), te = !1;
}
function oe() {
    const e2 = ne.pop();
    te = (void 0) === e2 || e2;
}
function ae(e2, t3, n3) {
    if (!se()) return;
    let r1 = J.get(e2);
    r1 || J.set(e2, r1 = new Map);
    let o1 = r1.get(n3);
    o1 || r1.set(n3, o1 = G());
    ie(o1, undefined);
}
function se() {
    return te && (void 0) !== X;
}
function ie(e2, t3) {
    let n3 = !1;
    z <= 30 ? B(e2) || (e2.n |= K, n3 = !V(e2)) : n3 = !e2.has(X), n3 && (e2.add(X), X.deps.push(e2));
}
function le(e2, t3, n3, r1, o1, a1) {
    const s1 = J.get(e2);
    if (!s1) return;
    let i1 = [];
    if ("clear" === t3) i1 = [
        ...s1.values()
    ];
    else if ("length" === n3 && k1(e2)) s1.forEach((e3, t4)=>{
        ("length" === t4 || t4 >= r1) && i1.push(e3);
    });
    else switch((void 0) !== n3 && i1.push(s1.get(n3)), t3){
        case "add":
            k1(e2) ? M1(n3) && i1.push(s1.get("length")) : (i1.push(s1.get(q)), S1(e2) && i1.push(s1.get(Z)));
            break;
        case "delete":
            k1(e2) || (i1.push(s1.get(q)), S1(e2) && i1.push(s1.get(Z)));
            break;
        case "set":
            S1(e2) && i1.push(s1.get(q));
    }
    if (1 === i1.length) i1[0] && ce(i1[0]);
    else {
        const e3 = [];
        for (const t4 of i1)t4 && e3.push(...t4);
        ce(G(e3));
    }
}
function ce(e2, t3) {
    for (const t4 of k1(e2) ? e2 : [
        ...e2
    ])(t4 !== X || t4.allowRecurse) && (t4.scheduler ? t4.scheduler() : t4.run());
}
const ue = s1("__proto__,__v_isRef,__isVue"), fe = new Set(Object.getOwnPropertyNames(Symbol).map((e2)=>Symbol[e2]
).filter(F)), pe = ge(), de = ge(!0), me = he();
function he() {
    const e2 = {
    };
    return [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((t3)=>{
        e2[t3] = function(...e3) {
            const n3 = Ze(this);
            for(let e4 = 0, t4 = this.length; e4 < t4; e4++)ae(n3, 0, e4 + "");
            const r1 = n3[t3](...e3);
            return -1 === r1 || !1 === r1 ? n3[t3](...e3.map(Ze)) : r1;
        };
    }), [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((t3)=>{
        e2[t3] = function(...e3) {
            re();
            const n3 = Ze(this)[t3].apply(this, e3);
            return oe(), n3;
        };
    }), e2;
}
function ge(e2 = !1, t3 = !1) {
    return function(n3, r1, o1) {
        if ("__v_isReactive" === r1) return !e2;
        if ("__v_isReadonly" === r1) return e2;
        if ("__v_raw" === r1 && o1 === (e2 ? t3 ? Be : Ve : t3 ? Ge : He).get(n3)) return n3;
        const a1 = k1(n3);
        if (!e2 && a1 && _1(me, r1)) return Reflect.get(me, r1, o1);
        const s1 = Reflect.get(n3, r1, o1);
        if (F(r1) ? fe.has(r1) : ue(r1)) return s1;
        if (e2 || ae(n3, 0, r1), t3) return s1;
        if (rt(s1)) return !a1 || !M1(r1) ? s1.value : s1;
        return C1(s1) ? e2 ? ze(s1) : Je(s1) : s1;
    };
}
function ye(e2 = !1) {
    return function(t3, n3, r1, o1) {
        let a1 = t3[n3];
        if (!e2 && (r1 = Ze(r1), a1 = Ze(a1), !k1(t3) && rt(a1) && !rt(r1))) return a1.value = r1, !0;
        const s1 = k1(t3) && M1(n3) ? Number(n3) < t3.length : _1(t3, n3), i1 = Reflect.set(t3, n3, r1, o1);
        return t3 === Ze(o1) && (s1 ? D1(r1, a1) && le(t3, "set", n3, r1) : le(t3, "add", n3, r1)), i1;
    };
}
const be = {
    get: pe,
    set: ye(),
    deleteProperty: function(e2, t3) {
        const n3 = _1(e2, t3), r1 = (e2[t3], Reflect.deleteProperty(e2, t3));
        return r1 && n3 && le(e2, "delete", t3, void 0), r1;
    },
    has: function(e2, t3) {
        const n3 = Reflect.has(e2, t3);
        return F(t3) && fe.has(t3) || ae(e2, 0, t3), n3;
    },
    ownKeys: function(e2) {
        return ae(e2, 0, k1(e2) ? "length" : q), Reflect.ownKeys(e2);
    }
}, ve = {
    get: de,
    set: (e2, t3)=>!0
    ,
    deleteProperty: (e2, t3)=>!0
}, _e = (e2)=>C1(e2) ? Je(e2) : e2
, ke = (e2)=>C1(e2) ? ze(e2) : e2
, Se = (e2)=>e2
, we = (e2)=>Reflect.getPrototypeOf(e2)
;
function xe(e2, t3, n3 = !1, r1 = !1) {
    const o1 = Ze(e2 = e2.__v_raw), a1 = Ze(t3);
    t3 !== a1 && !n3 && ae(o1, 0, t3), !n3 && ae(o1, 0, a1);
    const { has: s1  } = we(o1), i1 = r1 ? Se : n3 ? ke : _e;
    return s1.call(o1, t3) ? i1(e2.get(t3)) : s1.call(o1, a1) ? i1(e2.get(a1)) : void (e2 !== o1 && e2.get(t3));
}
function Oe(e2, t3 = !1) {
    const n3 = this.__v_raw, r1 = Ze(n3), o1 = Ze(e2);
    return e2 !== o1 && !t3 && ae(r1, 0, e2), !t3 && ae(r1, 0, o1), e2 === o1 ? n3.has(e2) : n3.has(e2) || n3.has(o1);
}
function Fe(e2, t3 = !1) {
    return e2 = e2.__v_raw, !t3 && ae(Ze(e2), 0, q), Reflect.get(e2, "size", e2);
}
function Ce(e2) {
    e2 = Ze(e2);
    const t3 = Ze(this);
    return we(t3).has.call(t3, e2) || (t3.add(e2), le(t3, "add", e2, e2)), this;
}
function Pe(e2, t3) {
    t3 = Ze(t3);
    const n3 = Ze(this), { has: r1 , get: o1  } = we(n3);
    let a1 = r1.call(n3, e2);
    a1 || (e2 = Ze(e2), a1 = r1.call(n3, e2));
    const s1 = o1.call(n3, e2);
    return n3.set(e2, t3), a1 ? D1(t3, s1) && le(n3, "set", e2, t3) : le(n3, "add", e2, t3), this;
}
function Le(e2) {
    const t3 = Ze(this), { has: n3 , get: r1  } = we(t3);
    let o1 = n3.call(t3, e2);
    o1 || (e2 = Ze(e2), o1 = n3.call(t3, e2));
    r1 && r1.call(t3, e2);
    const a1 = t3.delete(e2);
    return o1 && le(t3, "delete", e2, void 0), a1;
}
function Te() {
    const e2 = Ze(this), t3 = 0 !== e2.size, n3 = e2.clear();
    return t3 && le(e2, "clear", void 0, void 0), n3;
}
function je(e2, t3) {
    return function(n3, r1) {
        const o1 = this, a1 = o1.__v_raw, s1 = Ze(a1), i1 = t3 ? Se : e2 ? ke : _e;
        return !e2 && ae(s1, 0, q), a1.forEach((e3, t4)=>n3.call(r1, i1(e3), i1(t4), o1)
        );
    };
}
function Ie(e2, t3, n3) {
    return function(...r1) {
        const o1 = this.__v_raw, a1 = Ze(o1), s1 = S1(a1), i1 = "entries" === e2 || e2 === Symbol.iterator && s1, l1 = "keys" === e2 && s1, c1 = o1[e2](...r1), u1 = n3 ? Se : t3 ? ke : _e;
        return !t3 && ae(a1, 0, l1 ? Z : q), {
            next () {
                const { value: e3 , done: t4  } = c1.next();
                return t4 ? {
                    value: e3,
                    done: t4
                } : {
                    value: i1 ? [
                        u1(e3[0]),
                        u1(e3[1])
                    ] : u1(e3),
                    done: t4
                };
            },
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function Me(e2) {
    return function(...t3) {
        return "delete" !== e2 && this;
    };
}
function Ae() {
    const e2 = {
        get (e) {
            return xe(this, e);
        },
        get size () {
            return Fe(this);
        },
        has: Oe,
        add: Ce,
        set: Pe,
        delete: Le,
        clear: Te,
        forEach: je(!1, !1)
    }, t3 = {
        get (e) {
            return xe(this, e, !1, !0);
        },
        get size () {
            return Fe(this);
        },
        has: Oe,
        add: Ce,
        set: Pe,
        delete: Le,
        clear: Te,
        forEach: je(!1, !0)
    }, n3 = {
        get (e) {
            return xe(this, e, !0);
        },
        get size () {
            return Fe(this, !0);
        },
        has (e) {
            return Oe.call(this, e, !0);
        },
        add: Me("add"),
        set: Me("set"),
        delete: Me("delete"),
        clear: Me("clear"),
        forEach: je(!0, !1)
    }, r1 = {
        get (e) {
            return xe(this, e, !0, !0);
        },
        get size () {
            return Fe(this, !0);
        },
        has (e) {
            return Oe.call(this, e, !0);
        },
        add: Me("add"),
        set: Me("set"),
        delete: Me("delete"),
        clear: Me("clear"),
        forEach: je(!0, !0)
    };
    return [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ].forEach((o1)=>{
        e2[o1] = Ie(o1, !1, !1), n3[o1] = Ie(o1, !0, !1), t3[o1] = Ie(o1, !1, !0), r1[o1] = Ie(o1, !0, !0);
    }), [
        e2,
        n3,
        t3,
        r1
    ];
}
const [Ne, Ee, Re, De] = Ae();
function $e(e2, t3) {
    const n3 = t3 ? e2 ? De : Re : e2 ? Ee : Ne;
    return (t4, r1, o1)=>"__v_isReactive" === r1 ? !e2 : "__v_isReadonly" === r1 ? e2 : "__v_raw" === r1 ? t4 : Reflect.get(_1(n3, r1) && r1 in t4 ? n3 : t4, r1, o1)
    ;
}
const We = {
    get: $e(!1, !1)
}, Ue = {
    get: $e(!0, !1)
};
const He = new WeakMap, Ge = new WeakMap, Ve = new WeakMap, Be = new WeakMap;
function Je(e2) {
    return e2 && e2.__v_isReadonly ? e2 : Ke(e2, !1, be, We, He);
}
function ze(e2) {
    return Ke(e2, !0, ve, Ue, Ve);
}
function Ke(e2, t3, n3, r1, o1) {
    if (!C1(e2)) return e2;
    if (e2.__v_raw && (!t3 || !e2.__v_isReactive)) return e2;
    const a1 = o1.get(e2);
    if (a1) return a1;
    const s1 = (i2 = e2).__v_skip || !Object.isExtensible(i2) ? 0 : function(e4) {
        switch(e4){
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0;
        }
    }(j1(i2));
    var i2;
    if (0 === s1) return e2;
    const l1 = new Proxy(e2, 2 === s1 ? r1 : n3);
    return o1.set(e2, l1), l1;
}
function Ye(e2) {
    return Xe(e2) ? Ye(e2.__v_raw) : !(!e2 || !e2.__v_isReactive);
}
function Xe(e2) {
    return !(!e2 || !e2.__v_isReadonly);
}
function qe(e2) {
    return Ye(e2) || Xe(e2);
}
function Ze(e2) {
    const t3 = e2 && e2.__v_raw;
    return t3 ? Ze(t3) : e2;
}
function Qe(e2) {
    return W1(e2, "__v_skip", !0), e2;
}
function et(e2) {
    se() && ((e2 = Ze(e2)).dep || (e2.dep = G()), ie(e2.dep));
}
function tt(e2, t3) {
    (e2 = Ze(e2)).dep && ce(e2.dep);
}
const nt = (e2)=>C1(e2) ? Je(e2) : e2
;
function rt(e2) {
    return Boolean(e2 && !0 === e2.__v_isRef);
}
function ot(e2) {
    return st(e2, !1);
}
class at {
    constructor(e2, t3){
        this._shallow = t3, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t3 ? e2 : Ze(e2), this._value = t3 ? e2 : nt(e2);
    }
    get value() {
        return et(this), this._value;
    }
    set value(e) {
        e = this._shallow ? e : Ze(e), D1(e, this._rawValue) && (this._rawValue = e, this._value = this._shallow ? e : nt(e), tt(this));
    }
}
function st(e4, t4) {
    return rt(e4) ? e4 : new at(e4, t4);
}
const it = {
    get: (e4, t4, n3)=>{
        var r1;
        return rt(r1 = Reflect.get(e4, t4, n3)) ? r1.value : r1;
    },
    set: (e4, t4, n3, r2)=>{
        const o1 = e4[t4];
        return rt(o1) && !rt(n3) ? (o1.value = n3, !0) : Reflect.set(e4, t4, n3, r2);
    }
};
function lt(e4) {
    return Ye(e4) ? e4 : new Proxy(e4, it);
}
class ct {
    constructor(e4, t4, n3){
        this._setter = t4, this.dep = void 0, this._dirty = !0, this.__v_isRef = !0, this.effect = new Q(e4, ()=>{
            this._dirty || (this._dirty = !0, tt(this));
        }), this.__v_isReadonly = n3;
    }
    get value() {
        const e5 = Ze(this);
        return et(e5), e5._dirty && (e5._dirty = !1, e5._value = e5.effect.run()), e5._value;
    }
    set value(e) {
        this._setter(e);
    }
}
function ut(e5, t5) {
    let n4, r2;
    x1(e5) ? (n4 = e5, r2 = d1) : (n4 = e5.get, r2 = e5.set);
    return new ct(n4, r2, x1(e5) || !e5.set);
}
Promise.resolve();
new Set, new Map;
let ft;
const pt = dt("component:added");
function dt(e5) {
    return (t5)=>{
        ft && ft.emit(e5, t5.appContext.app, t5.uid, t5.parent ? t5.parent.uid : void 0, t5);
    };
}
Object.create(null), Object.create(null);
let mt = null, ht = null;
function gt(e5, t5) {
    t5 && t5.pendingBranch ? k1(e5) ? t5.effects.push(...e5) : t5.effects.push(e5) : Un(e5);
}
function yt(e5, t5, n4 = !1) {
    const r2 = pn || mt;
    if (r2) {
        const o1 = null == r2.parent ? r2.vnode.appContext && r2.vnode.appContext.provides : r2.parent.provides;
        if (o1 && e5 in o1) return o1[e5];
        if (arguments.length > 1) return n4 && x1(t5) ? t5.call(r2.proxy) : t5;
    }
}
const bt = [
    Function,
    Array
];
;
function vt(e5, t5) {
    const { leavingVNodes: n4  } = e5;
    let r2 = n4.get(t5.type);
    return r2 || (r2 = Object.create(null), n4.set(t5.type, r2)), r2;
}
function _t(e5, t5, n4, r2) {
    const { appear: o1 , mode: a1 , persisted: s1 = !1 , onBeforeEnter: i2 , onEnter: l1 , onAfterEnter: c1 , onEnterCancelled: u1 , onBeforeLeave: f1 , onLeave: p1 , onAfterLeave: d1 , onLeaveCancelled: m1 , onBeforeAppear: h1 , onAppear: g1 , onAfterAppear: y1 , onAppearCancelled: b1  } = t5, v1 = String(e5.key), _1 = vt(n4, e5), k1 = (e6, t6)=>{
        e6 && Sn(e6, r2, 9, t6);
    }, S1 = {
        mode: a1,
        persisted: s1,
        beforeEnter (t) {
            let r3 = i2;
            if (!n4.isMounted) {
                if (!o1) return;
                r3 = h1 || i2;
            }
            t._leaveCb && t._leaveCb(!0);
            const a2 = _1[v1];
            a2 && Qt(e5, a2) && a2.el._leaveCb && a2.el._leaveCb(), k1(r3, [
                t
            ]);
        },
        enter (e) {
            let t7 = l1, r3 = c1, a2 = u1;
            if (!n4.isMounted) {
                if (!o1) return;
                t7 = g1 || l1, r3 = y1 || c1, a2 = b1 || u1;
            }
            let s2 = !1;
            const i3 = e._enterCb = (t8)=>{
                s2 || (s2 = !0, k1(t8 ? a2 : r3, [
                    e
                ]), S1.delayedLeave && S1.delayedLeave(), e._enterCb = void 0);
            };
            t7 ? (t7(e, i3), t7.length <= 1 && i3()) : i3();
        },
        leave (t, r) {
            const o2 = String(e5.key);
            if (t._enterCb && t._enterCb(!0), n4.isUnmounting) return r();
            k1(f1, [
                t
            ]);
            let a2 = !1;
            const s2 = t._leaveCb = (n5)=>{
                a2 || (a2 = !0, r(), k1(n5 ? m1 : d1, [
                    t
                ]), t._leaveCb = void 0, _1[o2] === e5 && delete _1[o2]);
            };
            _1[o2] = e5, p1 ? (p1(t, s2), p1.length <= 1 && s2()) : s2();
        },
        clone: (e6)=>_t(e6, t5, n4, r2)
    };
    return S1;
}
function kt(e5) {
    if (Ft(e5)) return (e5 = sn(e5)).children = null, e5;
}
function St(e5) {
    return Ft(e5) ? e5.children ? e5.children[0] : void 0 : e5;
}
function wt(e5, t5) {
    6 & e5.shapeFlag && e5.component ? wt(e5.component.subTree, t5) : 128 & e5.shapeFlag ? (e5.ssContent.transition = t5.clone(e5.ssContent), e5.ssFallback.transition = t5.clone(e5.ssFallback)) : e5.transition = t5;
}
function xt(e5, t5 = !1) {
    let n4 = [], r2 = 0;
    for(let o1 = 0; o1 < e5.length; o1++){
        const a1 = e5[o1];
        a1.type === zt ? (128 & a1.patchFlag && r2++, n4 = n4.concat(xt(a1.children, t5))) : (t5 || a1.type !== Yt) && n4.push(a1);
    }
    if (r2 > 1) for(let e6 = 0; e6 < n4.length; e6++)n4[e6].patchFlag = -2;
    return n4;
}
const Ot = (e5)=>!!e5.type.__asyncLoader
;
const Ft = (e5)=>e5.type.__isKeepAlive
;
;
function Ct(e5, t5) {
    return k1(e5) ? e5.some((e6)=>Ct(e6, t5)
    ) : O1(e5) ? e5.split(",").indexOf(t5) > -1 : !!e5.test && e5.test(t5);
}
function Pt(e5) {
    let t5 = e5.shapeFlag;
    256 & t5 && (t5 -= 256), 512 & t5 && (t5 -= 512), e5.shapeFlag = t5;
}
function Lt(e5) {
    return 128 & e5.shapeFlag ? e5.ssContent : e5;
}
function Tt(e5, t5, n4 = pn, r2 = !1) {
    if (n4) {
        const o1 = n4[e5] || (n4[e5] = []), a1 = t5.__weh || (t5.__weh = (...r4)=>{
            if (n4.isUnmounted) return;
            re(), mn(n4);
            const o2 = Sn(t5, n4, e5, r4);
            return hn(), oe(), o2;
        });
        return r2 ? o1.unshift(a1) : o1.push(a1), a1;
    }
}
const jt = (e5)=>(t5, n4 = pn)=>(!yn || "sp" === e5) && Tt(e5, t5, n4)
, It = (jt("bm"), jt("m")), Mt = (jt("bu"), jt("u")), At = jt("bum"), Nt = jt("um");
jt("sp"), jt("rtg"), jt("rtc");
function Et(e5) {
    const t5 = e5.type, { mixins: n4 , extends: r2  } = t5, { mixins: o1 , optionsCache: a1 , config: { optionMergeStrategies: s1  }  } = e5.appContext, i2 = a1.get(t5);
    let l1;
    return i2 ? l1 = i2 : o1.length || n4 || r2 ? (l1 = {
    }, o1.length && o1.forEach((e6)=>Rt(l1, e6, s1, !0)
    ), Rt(l1, t5, s1)) : l1 = t5, a1.set(t5, l1), l1;
}
function Rt(e5, t5, n4, r2 = !1) {
    const { mixins: o1 , extends: a1  } = t5;
    a1 && Rt(e5, a1, n4, !0), o1 && o1.forEach((t7)=>Rt(e5, t7, n4, !0)
    );
    for(const o2 in t5)if (r2 && "expose" === o2) ;
    else {
        const r4 = Dt[o2] || n4 && n4[o2];
        e5[o2] = r4 ? r4(e5[o2], t5[o2]) : t5[o2];
    }
    return e5;
}
const Dt = {
    data: $t,
    props: Ht,
    emits: Ht,
    methods: Ht,
    computed: Ht,
    beforeCreate: Ut,
    created: Ut,
    beforeMount: Ut,
    mounted: Ut,
    beforeUpdate: Ut,
    updated: Ut,
    beforeDestroy: Ut,
    beforeUnmount: Ut,
    destroyed: Ut,
    unmounted: Ut,
    activated: Ut,
    deactivated: Ut,
    errorCaptured: Ut,
    serverPrefetch: Ut,
    components: Ht,
    directives: Ht,
    watch: function(e5, t5) {
        if (!e5) return t5;
        if (!t5) return e5;
        const n4 = y1(Object.create(null), e5);
        for(const r2 in t5)n4[r2] = Ut(e5[r2], t5[r2]);
        return n4;
    },
    provide: $t,
    inject: function(e5, t5) {
        return Ht(Wt(e5), Wt(t5));
    }
};
function $t(e5, t5) {
    return t5 ? e5 ? function() {
        return y1(x1(e5) ? e5.call(this, this) : e5, x1(t5) ? t5.call(this, this) : t5);
    } : t5 : e5;
}
function Wt(e5) {
    if (k1(e5)) {
        const t5 = {
        };
        for(let n4 = 0; n4 < e5.length; n4++)t5[e5[n4]] = e5[n4];
        return t5;
    }
    return e5;
}
function Ut(e5, t5) {
    return e5 ? [
        ...new Set([].concat(e5, t5))
    ] : t5;
}
function Ht(e5, t5) {
    return e5 ? y1(y1(Object.create(null), e5), t5) : t5;
}
function Gt() {
    return {
        app: null,
        config: {
            isNativeTag: m1,
            performance: !1,
            globalProperties: {
            },
            optionMergeStrategies: {
            },
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {
            }
        },
        mixins: [],
        components: {
        },
        directives: {
        },
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    };
}
const Vt = gt;
function Bt(e5, t5, n4, r2 = null) {
    Sn(e5, t5, 7, [
        n4,
        r2
    ]);
}
const Jt = Symbol();
const zt = Symbol(void 0), Kt = Symbol(void 0), Yt = Symbol(void 0);
Symbol(void 0);
let Xt = null;
let qt = 1;
function Zt(e5) {
    return !!e5 && !0 === e5.__v_isVNode;
}
function Qt(e5, t5) {
    return e5.type === t5.type && e5.key === t5.key;
}
const en = "__vInternal", tn = ({ key: e5  })=>null != e5 ? e5 : null
, nn = ({ ref: e5  })=>null != e5 ? O1(e5) || rt(e5) || x1(e5) ? {
        i: mt,
        r: e5
    } : e5 : null
;
function rn(e5, t5 = null, n4 = null, r2 = 0, o1 = null, a1 = e5 === zt ? 0 : 1, s1 = !1, i2 = !1) {
    const l1 = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e5,
        props: t5,
        key: t5 && tn(t5),
        ref: t5 && nn(t5),
        scopeId: ht,
        slotScopeIds: null,
        children: n4,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a1,
        patchFlag: r2,
        dynamicProps: o1,
        dynamicChildren: null,
        appContext: null
    };
    return i2 ? (cn(l1, n4), 128 & a1 && e5.normalize(l1)) : n4 && (l1.shapeFlag |= O1(n4) ? 8 : 16), qt > 0 && !s1 && Xt && (l1.patchFlag > 0 || 6 & a1) && 32 !== l1.patchFlag && Xt.push(l1), l1;
}
const on = an;
function an(e5, t5 = null, n4 = null, r2 = 0, o1 = null, a1 = !1) {
    if (e5 && e5 !== Jt || (e5 = Yt), Zt(e5)) {
        const r4 = sn(e5, t5, !0);
        return n4 && cn(r4, n4), r4;
    }
    if (_n(e5) && (e5 = e5.__vccOpts), t5) {
        t5 = (function(e6) {
            return e6 ? qe(e6) || en in e6 ? y1({
            }, e6) : e6 : null;
        })(t5);
        let { class: e6 , style: n5  } = t5;
        e6 && !O1(e6) && (t5.class = f1(e6)), C1(n5) && (qe(n5) && !k1(n5) && (n5 = y1({
        }, n5)), t5.style = i1(n5));
    }
    return rn(e5, t5, n4, r2, o1, O1(e5) ? 1 : ((e6)=>e6.__isSuspense
    )(e5) ? 128 : ((e6)=>e6.__isTeleport
    )(e5) ? 64 : C1(e5) ? 4 : x1(e5) ? 2 : 0, a1, !0);
}
function sn(e5, t5, n4 = !1) {
    const { props: r2 , ref: o1 , patchFlag: a1 , children: s1  } = e5, l1 = t5 ? function(...e6) {
        const t7 = {
        };
        for(let n5 = 0; n5 < e6.length; n5++){
            const r4 = e6[n5];
            for(const e7 in r4)if ("class" === e7) t7.class !== r4.class && (t7.class = f1([
                t7.class,
                r4.class
            ]));
            else if ("style" === e7) t7.style = i1([
                t7.style,
                r4.style
            ]);
            else if (g(e7)) {
                const n6 = t7[e7], o2 = r4[e7];
                n6 !== o2 && (t7[e7] = n6 ? [].concat(n6, o2) : o2);
            } else "" !== e7 && (t7[e7] = r4[e7]);
        }
        return t7;
    }(r2 || {
    }, t5) : r2;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e5.type,
        props: l1,
        key: l1 && tn(l1),
        ref: t5 && t5.ref ? n4 && o1 ? k1(o1) ? o1.concat(nn(t5)) : [
            o1,
            nn(t5)
        ] : nn(t5) : o1,
        scopeId: e5.scopeId,
        slotScopeIds: e5.slotScopeIds,
        children: s1,
        target: e5.target,
        targetAnchor: e5.targetAnchor,
        staticCount: e5.staticCount,
        shapeFlag: e5.shapeFlag,
        patchFlag: t5 && e5.type !== zt ? -1 === a1 ? 16 : 16 | a1 : a1,
        dynamicProps: e5.dynamicProps,
        dynamicChildren: e5.dynamicChildren,
        appContext: e5.appContext,
        dirs: e5.dirs,
        transition: e5.transition,
        component: e5.component,
        suspense: e5.suspense,
        ssContent: e5.ssContent && sn(e5.ssContent),
        ssFallback: e5.ssFallback && sn(e5.ssFallback),
        el: e5.el,
        anchor: e5.anchor
    };
}
function ln(e5 = " ", t5 = 0) {
    return on(Kt, null, e5, t5);
}
function cn(e5, t5) {
    let n4 = 0;
    const { shapeFlag: r2  } = e5;
    if (null == t5) t5 = null;
    else if (k1(t5)) n4 = 16;
    else if ("object" == typeof t5) {
        if (65 & r2) {
            const n5 = t5.default;
            return void (n5 && (n5._c && (n5._d = !1), cn(e5, n5()), n5._c && (n5._d = !0)));
        }
        {
            n4 = 32;
            const r4 = t5._;
            r4 || en in t5 ? 3 === r4 && mt && (1 === mt.slots._ ? t5._ = 1 : (t5._ = 2, e5.patchFlag |= 1024)) : t5._ctx = mt;
        }
    } else x1(t5) ? (t5 = {
        default: t5,
        _ctx: mt
    }, n4 = 32) : (t5 = String(t5), 64 & r2 ? (n4 = 16, t5 = [
        ln(t5)
    ]) : n4 = 8);
    e5.children = t5, e5.shapeFlag |= n4;
}
const un = (e5)=>e5 ? gn(e5) ? bn(e5) || e5.proxy : un(e5.parent) : null
, fn = y1(Object.create(null), {
    $: (e5)=>e5
    ,
    $el: (e5)=>e5.vnode.el
    ,
    $data: (e5)=>e5.data
    ,
    $props: (e5)=>e5.props
    ,
    $attrs: (e5)=>e5.attrs
    ,
    $slots: (e5)=>e5.slots
    ,
    $refs: (e5)=>e5.refs
    ,
    $parent: (e5)=>un(e5.parent)
    ,
    $root: (e5)=>un(e5.root)
    ,
    $emit: (e5)=>e5.emit
    ,
    $options: (e5)=>__VUE_OPTIONS_API__ ? Et(e5) : e5.type
    ,
    $forceUpdate: (e5)=>()=>Dn(e5.update)
    ,
    $nextTick: (e5)=>Rn.bind(e5.proxy)
    ,
    $watch: (e5)=>__VUE_OPTIONS_API__ ? Yn.bind(e5) : d1
});
Gt();
let pn = null;
const dn = ()=>pn || mt
, mn = (e5)=>{
    pn = e5, e5.scope.on();
}, hn = ()=>{
    pn && pn.scope.off(), pn = null;
};
function gn(e5) {
    return 4 & e5.vnode.shapeFlag;
}
let yn = !1;
function bn(e5) {
    if (e5.exposed) return e5.exposeProxy || (e5.exposeProxy = new Proxy(lt(Qe(e5.exposed)), {
        get: (t5, n4)=>n4 in t5 ? t5[n4] : n4 in fn ? fn[n4](e5) : void 0
    }));
}
function vn(e5) {
    return x1(e5) && e5.displayName || e5.name;
}
function _n(e5) {
    return x1(e5) && "__vccOpts" in e5;
}
function kn(e5, t5, n4, r2) {
    let o1;
    try {
        o1 = r2 ? e5(...r2) : e5();
    } catch (e6) {
        wn(e6, t5, n4);
    }
    return o1;
}
function Sn(e5, t5, n4, r2) {
    if (x1(e5)) {
        const o1 = kn(e5, t5, n4, r2);
        return o1 && P1(o1) && o1.catch((e6)=>{
            wn(e6, t5, n4);
        }), o1;
    }
    const o1 = [];
    for(let a1 = 0; a1 < e5.length; a1++)o1.push(Sn(e5[a1], t5, n4, r2));
    return o1;
}
function wn(e5, t5, n4, r2 = !0) {
    t5 && t5.vnode;
    if (t5) {
        let r4 = t5.parent;
        const o1 = t5.proxy, a1 = n4;
        for(; r4;){
            const t7 = r4.ec;
            if (t7) for(let n5 = 0; n5 < t7.length; n5++)if (!1 === t7[n5](e5, o1, a1)) return;
            r4 = r4.parent;
        }
        const s1 = t5.appContext.config.errorHandler;
        if (s1) return void kn(s1, null, 10, [
            e5,
            o1,
            a1
        ]);
    }
    !function(e6, t7, n5, r4 = !0) {
        console.error(e6);
    }(e5, 0, 0, r2);
}
let xn = !1, On = !1;
const Fn = [];
let Cn = 0;
const Pn = [];
let Ln = null, Tn = 0;
const jn = [];
let In = null, Mn = 0;
const An = Promise.resolve();
let Nn = null, En = null;
function Rn(e5) {
    const t5 = Nn || An;
    return e5 ? t5.then(this ? e5.bind(this) : e5) : t5;
}
function Dn(e5) {
    Fn.length && Fn.includes(e5, xn && e5.allowRecurse ? Cn + 1 : Cn) || e5 === En || (null == e5.id ? Fn.push(e5) : Fn.splice(function(e6) {
        let t5 = Cn + 1, n4 = Fn.length;
        for(; t5 < n4;){
            const r2 = t5 + n4 >>> 1;
            Vn(Fn[r2]) < e6 ? t5 = r2 + 1 : n4 = r2;
        }
        return t5;
    }(e5.id), 0, e5), $n());
}
function $n() {
    xn || On || (On = !0, Nn = An.then(Bn));
}
function Wn(e5, t5, n4, r2) {
    k1(e5) ? n4.push(...e5) : t5 && t5.includes(e5, e5.allowRecurse ? r2 + 1 : r2) || n4.push(e5), $n();
}
function Un(e5) {
    Wn(e5, In, jn, Mn);
}
function Hn(e5, t5 = null) {
    if (Pn.length) {
        for(En = t5, Ln = [
            ...new Set(Pn)
        ], Pn.length = 0, Tn = 0; Tn < Ln.length; Tn++)Ln[Tn]();
        Ln = null, Tn = 0, En = null, Hn(e5, t5);
    }
}
function Gn(e5) {
    if (jn.length) {
        const e6 = [
            ...new Set(jn)
        ];
        if (jn.length = 0, In) return void In.push(...e6);
        for(In = e6, In.sort((e7, t5)=>Vn(e7) - Vn(t5)
        ), Mn = 0; Mn < In.length; Mn++)In[Mn]();
        In = null, Mn = 0;
    }
}
const Vn = (e5)=>null == e5.id ? 1 / 0 : e5.id
;
function Bn(e5) {
    On = !1, xn = !0, Hn(e5), Fn.sort((e6, t5)=>Vn(e6) - Vn(t5)
    );
    try {
        for(Cn = 0; Cn < Fn.length; Cn++){
            const e6 = Fn[Cn];
            e6 && !1 !== e6.active && kn(e6, null, 14);
        }
    } finally{
        Cn = 0, Fn.length = 0, Gn(), xn = !1, Nn = null, (Fn.length || Pn.length || jn.length) && Bn(e5);
    }
}
const Jn = {
};
function zn(e5, t5, n4) {
    return Kn(e5, t5, n4);
}
function Kn(e5, t5, { immediate: n4 , deep: r2 , flush: o1 , onTrack: a1 , onTrigger: s1  } = p1) {
    const i2 = pn;
    let l1, c1, u1 = !1, f1 = !1;
    if (rt(e5) ? (l1 = ()=>e5.value
    , u1 = !!e5._shallow) : Ye(e5) ? (l1 = ()=>e5
    , r2 = !0) : k1(e5) ? (f1 = !0, u1 = e5.some(Ye), l1 = ()=>e5.map((e6)=>rt(e6) ? e6.value : Ye(e6) ? qn(e6) : x1(e6) ? kn(e6, i2, 2) : void 0
        )
    ) : l1 = x1(e5) ? t5 ? ()=>kn(e5, i2, 2)
     : ()=>{
        if (!i2 || !i2.isUnmounted) return c1 && c1(), Sn(e5, i2, 3, [
            m2
        ]);
    } : d1, t5 && r2) {
        const e6 = l1;
        l1 = ()=>qn(e6())
        ;
    }
    let m2 = (e6)=>{
        c1 = v2.onStop = ()=>{
            kn(e6, i2, 4);
        };
    }, h1 = f1 ? [] : Jn;
    const g1 = ()=>{
        if (v2.active) {
            if (t5) {
                const e6 = v2.run();
                (r2 || u1 || (f1 ? e6.some((e7, t7)=>D1(e7, h1[t7])
                ) : D1(e6, h1))) && (c1 && c1(), Sn(t5, i2, 3, [
                    e6,
                    h1 === Jn ? void 0 : h1,
                    m2
                ]), h1 = e6);
            } else v2.run();
        }
    };
    let y1;
    g1.allowRecurse = !!t5, y1 = "sync" === o1 ? g1 : "post" === o1 ? ()=>Vt(g1, i2 && i2.suspense)
     : ()=>{
        !i2 || i2.isMounted ? (function(e6) {
            Wn(e6, Ln, Pn, Tn);
        })(g1) : g1();
    };
    const v2 = new Q(l1, y1);
    return t5 ? n4 ? g1() : h1 = v2.run() : "post" === o1 ? Vt(v2.run.bind(v2), i2 && i2.suspense) : v2.run(), ()=>{
        v2.stop(), i2 && i2.scope && b1(i2.scope.effects, v2);
    };
}
function Yn(e5, t5, n4) {
    const r2 = this.proxy, o1 = O1(e5) ? e5.includes(".") ? Xn(r2, e5) : ()=>r2[e5]
     : e5.bind(r2, r2);
    let a1;
    x1(t5) ? a1 = t5 : (a1 = t5.handler, n4 = t5);
    const s1 = pn;
    mn(this);
    const i2 = Kn(o1, a1.bind(r2), n4);
    return s1 ? mn(s1) : hn(), i2;
}
function Xn(e5, t5) {
    const n4 = t5.split(".");
    return ()=>{
        let t7 = e5;
        for(let e6 = 0; e6 < n4.length && t7; e6++)t7 = t7[n4[e6]];
        return t7;
    };
}
function qn(e5, t5 = new Set) {
    if (!C1(e5) || e5.__v_skip) return e5;
    if ((t5 = t5 || new Set).has(e5)) return e5;
    if (t5.add(e5), rt(e5)) qn(e5.value, t5);
    else if (k1(e5)) for(let n4 = 0; n4 < e5.length; n4++)qn(e5[n4], t5);
    else if (w1(e5) || S1(e5)) e5.forEach((e6)=>{
        qn(e6, t5);
    });
    else if (I1(e5)) for(const n5 in e5)qn(e5[n5], t5);
    return e5;
}
function Zn(e5, t5, n4) {
    const r2 = arguments.length;
    return 2 === r2 ? C1(t5) && !k1(t5) ? Zt(t5) ? on(e5, null, [
        t5
    ]) : on(e5, t5) : on(e5, null, t5) : (r2 > 3 ? n4 = Array.prototype.slice.call(arguments, 2) : 3 === r2 && Zt(n4) && (n4 = [
        n4
    ]), on(e5, t5, n4));
}
Symbol("");
function Qn() {
    return "undefined" != typeof navigator ? window : (void 0) !== e3 ? e3 : {
    };
}
function er(e5, t5) {
    const n4 = Qn().__VUE_DEVTOOLS_GLOBAL_HOOK__;
    if (n4) n4.emit("devtools-plugin:setup", e5, t5);
    else {
        const n5 = Qn();
        (n5.__VUE_DEVTOOLS_PLUGINS__ = n5.__VUE_DEVTOOLS_PLUGINS__ || []).push({
            pluginDescriptor: e5,
            setupFn: t5
        });
    }
}
function tr(e5, t5) {
    Object.keys(e5).forEach(function(n4) {
        return t5(e5[n4], n4);
    });
}
function nr(e5) {
    return null !== e5 && "object" == typeof e5;
}
function rr(e5, t5) {
    if (!e5) throw new Error("[vuex] " + t5);
}
function or(e5, t5, n4) {
    return t5.indexOf(e5) < 0 && (n4 && n4.prepend ? t5.unshift(e5) : t5.push(e5)), function() {
        var n5 = t5.indexOf(e5);
        n5 > -1 && t5.splice(n5, 1);
    };
}
function ar(e5, t5) {
    e5._actions = Object.create(null), e5._mutations = Object.create(null), e5._wrappedGetters = Object.create(null), e5._modulesNamespaceMap = Object.create(null);
    var n4 = e5.state;
    ir(e5, n4, [], e5._modules.root, !0), sr(e5, n4, t5);
}
function sr(e5, t5, n4) {
    var r2 = e5._state;
    e5.getters = {
    }, e5._makeLocalGettersCache = Object.create(null);
    var o1 = e5._wrappedGetters, a1 = {
    };
    tr(o1, function(t7, n5) {
        a1[n5] = (function(e6, t8) {
            return function() {
                return e6(t8);
            };
        })(t7, e5), Object.defineProperty(e5.getters, n5, {
            get: function() {
                return a1[n5]();
            },
            enumerable: !0
        });
    }), e5._state = Je({
        data: t5
    }), e5.strict && (function(e6) {
        zn(function() {
            return e6._state.data;
        }, function() {
            rr(e6._committing, "do not mutate vuex store state outside mutation handlers.");
        }, {
            deep: !0,
            flush: "sync"
        });
    })(e5), r2 && n4 && e5._withCommit(function() {
        r2.data = null;
    });
}
function ir(e5, t5, n4, r2, o1) {
    var a1 = !n4.length, s1 = e5._modules.getNamespace(n4);
    if (r2.namespaced && (e5._modulesNamespaceMap[s1] && console.error("[vuex] duplicate namespace " + s1 + " for the namespaced module " + n4.join("/")), e5._modulesNamespaceMap[s1] = r2), !a1 && !o1) {
        var i2 = cr(t5, n4.slice(0, -1)), l1 = n4[n4.length - 1];
        e5._withCommit(function() {
            l1 in i2 && console.warn('[vuex] state field "' + l1 + '" was overridden by a module with the same name at "' + n4.join(".") + '"'), i2[l1] = r2.state;
        });
    }
    var c1 = r2.context = function(e6, t7, n5) {
        var r4 = "" === t7, o2 = {
            dispatch: r4 ? e6.dispatch : function(n6, r5, o3) {
                var a2 = ur(n6, r5, o3), s2 = a2.payload, i3 = a2.options, l2 = a2.type;
                if (i3 && i3.root || (l2 = t7 + l2, e6._actions[l2])) return e6.dispatch(l2, s2);
                console.error("[vuex] unknown local action type: " + a2.type + ", global type: " + l2);
            },
            commit: r4 ? e6.commit : function(n6, r5, o3) {
                var a2 = ur(n6, r5, o3), s2 = a2.payload, i3 = a2.options, l2 = a2.type;
                i3 && i3.root || (l2 = t7 + l2, e6._mutations[l2]) ? e6.commit(l2, s2, i3) : console.error("[vuex] unknown local mutation type: " + a2.type + ", global type: " + l2);
            }
        };
        return Object.defineProperties(o2, {
            getters: {
                get: r4 ? function() {
                    return e6.getters;
                } : function() {
                    return lr(e6, t7);
                }
            },
            state: {
                get: function() {
                    return cr(e6.state, n5);
                }
            }
        }), o2;
    }(e5, s1, n4);
    r2.forEachMutation(function(t7, n5) {
        !function(e6, t8, n6, r4) {
            (e6._mutations[t8] || (e6._mutations[t8] = [])).push(function(t9) {
                n6.call(e6, r4.state, t9);
            });
        }(e5, s1 + n5, t7, c1);
    }), r2.forEachAction(function(t7, n5) {
        var r4 = t7.root ? n5 : s1 + n5, o2 = t7.handler || t7;
        !function(e6, t8, n6, r5) {
            (e6._actions[t8] || (e6._actions[t8] = [])).push(function(t9) {
                var o3, a2 = n6.call(e6, {
                    dispatch: r5.dispatch,
                    commit: r5.commit,
                    getters: r5.getters,
                    state: r5.state,
                    rootGetters: e6.getters,
                    rootState: e6.state
                }, t9);
                return (o3 = a2) && "function" == typeof o3.then || (a2 = Promise.resolve(a2)), e6._devtoolHook ? a2.catch(function(t10) {
                    throw e6._devtoolHook.emit("vuex:error", t10), t10;
                }) : a2;
            });
        }(e5, r4, o2, c1);
    }), r2.forEachGetter(function(t7, n5) {
        !function(e6, t8, n6, r4) {
            if (e6._wrappedGetters[t8]) return void console.error("[vuex] duplicate getter key: " + t8);
            e6._wrappedGetters[t8] = function(e7) {
                return n6(r4.state, r4.getters, e7.state, e7.getters);
            };
        }(e5, s1 + n5, t7, c1);
    }), r2.forEachChild(function(r4, a2) {
        ir(e5, t5, n4.concat(a2), r4, o1);
    });
}
function lr(e5, t5) {
    if (!e5._makeLocalGettersCache[t5]) {
        var n4 = {
        }, r2 = t5.length;
        Object.keys(e5.getters).forEach(function(o1) {
            if (o1.slice(0, r2) === t5) {
                var a1 = o1.slice(r2);
                Object.defineProperty(n4, a1, {
                    get: function() {
                        return e5.getters[o1];
                    },
                    enumerable: !0
                });
            }
        }), e5._makeLocalGettersCache[t5] = n4;
    }
    return e5._makeLocalGettersCache[t5];
}
function cr(e5, t5) {
    return t5.reduce(function(e6, t7) {
        return e6[t7];
    }, e5);
}
function ur(e5, t5, n5) {
    return nr(e5) && e5.type && (n5 = t5, t5 = e5, e5 = e5.type), rr("string" == typeof e5, "expects string as the type, but found " + typeof e5 + "."), {
        type: e5,
        payload: t5,
        options: n5
    };
}
var fr = 0;
function pr(e5, t5) {
    er({
        id: "org.vuejs.vuex",
        app: e5,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [
            "vuex bindings"
        ]
    }, function(n5) {
        n5.addTimelineLayer({
            id: "vuex:mutations",
            label: "Vuex Mutations",
            color: dr
        }), n5.addTimelineLayer({
            id: "vuex:actions",
            label: "Vuex Actions",
            color: dr
        }), n5.addInspector({
            id: "vuex",
            label: "Vuex",
            icon: "storage",
            treeFilterPlaceholder: "Filter stores..."
        }), n5.on.getInspectorTree(function(n6) {
            if (n6.app === e5 && "vuex" === n6.inspectorId) {
                if (n6.filter) {
                    var r4 = [];
                    yr(r4, t5._modules.root, n6.filter, ""), n6.rootNodes = r4;
                } else n6.rootNodes = [
                    gr(t5._modules.root, "")
                ];
            }
        }), n5.on.getInspectorState(function(n6) {
            if (n6.app === e5 && "vuex" === n6.inspectorId) {
                var r5 = n6.nodeId;
                lr(t5, r5), n6.state = (function(e6, t7, n7) {
                    t7 = "root" === n7 ? t7 : t7[n7];
                    var r6 = Object.keys(t7), o1 = {
                        state: Object.keys(e6.state).map(function(t8) {
                            return {
                                key: t8,
                                editable: !0,
                                value: e6.state[t8]
                            };
                        })
                    };
                    if (r6.length) {
                        var a2 = function(e7) {
                            var t8 = {
                            };
                            return Object.keys(e7).forEach(function(n8) {
                                var r7 = n8.split("/");
                                if (r7.length > 1) {
                                    var o2 = t8, a3 = r7.pop();
                                    r7.forEach(function(e8) {
                                        o2[e8] || (o2[e8] = {
                                            _custom: {
                                                value: {
                                                },
                                                display: e8,
                                                tooltip: "Module",
                                                abstract: !0
                                            }
                                        }), o2 = o2[e8]._custom.value;
                                    }), o2[a3] = br(function() {
                                        return e7[n8];
                                    });
                                } else t8[n8] = br(function() {
                                    return e7[n8];
                                });
                            }), t8;
                        }(t7);
                        o1.getters = Object.keys(a2).map(function(e7) {
                            return {
                                key: e7.endsWith("/") ? hr(e7) : e7,
                                editable: !1,
                                value: br(function() {
                                    return a2[e7];
                                })
                            };
                        });
                    }
                    return o1;
                })((o3 = t5._modules, (s2 = (a5 = r5).split("/").filter(function(e6) {
                    return e6;
                })).reduce(function(e6, t7, n7) {
                    var r6 = e6[t7];
                    if (!r6) throw new Error('Missing module "' + t7 + '" for path "' + a5 + '".');
                    return n7 === s2.length - 1 ? r6 : r6._children;
                }, "root" === a5 ? o3 : o3.root._children)), "root" === r5 ? t5.getters : t5._makeLocalGettersCache, r5);
            }
            var o3, a5, s2;
        }), n5.on.editInspectorState(function(n6) {
            if (n6.app === e5 && "vuex" === n6.inspectorId) {
                var r6 = n6.nodeId, o3 = n6.path;
                "root" !== r6 && (o3 = r6.split("/").filter(Boolean).concat(o3)), t5._withCommit(function() {
                    n6.set(t5._state.data, o3, n6.state.value);
                });
            }
        }), t5.subscribe(function(e6, t7) {
            var r7 = {
            };
            e6.payload && (r7.payload = e6.payload), r7.state = t7, n5.notifyComponentUpdate(), n5.sendInspectorTree("vuex"), n5.sendInspectorState("vuex"), n5.addTimelineEvent({
                layerId: "vuex:mutations",
                event: {
                    time: Date.now(),
                    title: e6.type,
                    data: r7
                }
            });
        }), t5.subscribeAction({
            before: function(e6, t7) {
                var r7 = {
                };
                e6.payload && (r7.payload = e6.payload), e6._id = fr++, e6._time = Date.now(), r7.state = t7, n5.addTimelineEvent({
                    layerId: "vuex:actions",
                    event: {
                        time: e6._time,
                        title: e6.type,
                        groupId: e6._id,
                        subtitle: "start",
                        data: r7
                    }
                });
            },
            after: function(e6, t7) {
                var r7 = {
                }, o4 = Date.now() - e6._time;
                r7.duration = {
                    _custom: {
                        type: "duration",
                        display: o4 + "ms",
                        tooltip: "Action duration",
                        value: o4
                    }
                }, e6.payload && (r7.payload = e6.payload), r7.state = t7, n5.addTimelineEvent({
                    layerId: "vuex:actions",
                    event: {
                        time: Date.now(),
                        title: e6.type,
                        groupId: e6._id,
                        subtitle: "end",
                        data: r7
                    }
                });
            }
        });
    });
}
var dr = 8702998, mr = {
    label: "namespaced",
    textColor: 16777215,
    backgroundColor: 6710886
};
function hr(e5) {
    return e5 && "root" !== e5 ? e5.split("/").slice(-2, -1)[0] : "Root";
}
function gr(e5, t5) {
    return {
        id: t5 || "root",
        label: hr(t5),
        tags: e5.namespaced ? [
            mr
        ] : [],
        children: Object.keys(e5._children).map(function(n5) {
            return gr(e5._children[n5], t5 + n5 + "/");
        })
    };
}
function yr(e5, t5, n5, r7) {
    r7.includes(n5) && e5.push({
        id: r7 || "root",
        label: r7.endsWith("/") ? r7.slice(0, r7.length - 1) : r7 || "Root",
        tags: t5.namespaced ? [
            mr
        ] : []
    }), Object.keys(t5._children).forEach(function(o4) {
        yr(e5, t5._children[o4], n5, r7 + o4 + "/");
    });
}
function br(e5) {
    try {
        return e5();
    } catch (e6) {
        return e6;
    }
}
var vr = function(e5, t5) {
    this.runtime = t5, this._children = Object.create(null), this._rawModule = e5;
    var n5 = e5.state;
    this.state = ("function" == typeof n5 ? n5() : n5) || {
    };
}, _r = {
    namespaced: {
        configurable: !0
    }
};
_r.namespaced.get = function() {
    return !!this._rawModule.namespaced;
}, vr.prototype.addChild = function(e5, t5) {
    this._children[e5] = t5;
}, vr.prototype.removeChild = function(e5) {
    delete this._children[e5];
}, vr.prototype.getChild = function(e5) {
    return this._children[e5];
}, vr.prototype.hasChild = function(e5) {
    return e5 in this._children;
}, vr.prototype.update = function(e5) {
    this._rawModule.namespaced = e5.namespaced, e5.actions && (this._rawModule.actions = e5.actions), e5.mutations && (this._rawModule.mutations = e5.mutations), e5.getters && (this._rawModule.getters = e5.getters);
}, vr.prototype.forEachChild = function(e5) {
    tr(this._children, e5);
}, vr.prototype.forEachGetter = function(e5) {
    this._rawModule.getters && tr(this._rawModule.getters, e5);
}, vr.prototype.forEachAction = function(e5) {
    this._rawModule.actions && tr(this._rawModule.actions, e5);
}, vr.prototype.forEachMutation = function(e5) {
    this._rawModule.mutations && tr(this._rawModule.mutations, e5);
}, Object.defineProperties(vr.prototype, _r);
var kr = function(e5) {
    this.register([], e5, !1);
};
function Sr(e5, t5, n5) {
    if (Or(e5, n5), t5.update(n5), n5.modules) for(var r7 in n5.modules){
        if (!t5.getChild(r7)) return void console.warn("[vuex] trying to add a new module '" + r7 + "' on hot reloading, manual reload is needed");
        Sr(e5.concat(r7), t5.getChild(r7), n5.modules[r7]);
    }
}
kr.prototype.get = function(e5) {
    return e5.reduce(function(e6, t5) {
        return e6.getChild(t5);
    }, this.root);
}, kr.prototype.getNamespace = function(e5) {
    var t5 = this.root;
    return e5.reduce(function(e6, n5) {
        return e6 + ((t5 = t5.getChild(n5)).namespaced ? n5 + "/" : "");
    }, "");
}, kr.prototype.update = function(e5) {
    Sr([], this.root, e5);
}, kr.prototype.register = function(e5, t5, n5) {
    var r7 = this;
    (void 0) === n5 && (n5 = !0), Or(e5, t5);
    var o4 = new vr(t5, n5);
    0 === e5.length ? this.root = o4 : this.get(e5.slice(0, -1)).addChild(e5[e5.length - 1], o4);
    t5.modules && tr(t5.modules, function(t7, o5) {
        r7.register(e5.concat(o5), t7, n5);
    });
}, kr.prototype.unregister = function(e5) {
    var t5 = this.get(e5.slice(0, -1)), n5 = e5[e5.length - 1], r7 = t5.getChild(n5);
    r7 ? r7.runtime && t5.removeChild(n5) : console.warn("[vuex] trying to unregister module '" + n5 + "', which is not registered");
}, kr.prototype.isRegistered = function(e5) {
    var t5 = this.get(e5.slice(0, -1)), n5 = e5[e5.length - 1];
    return !!t5 && t5.hasChild(n5);
};
var wr = {
    assert: function(e5) {
        return "function" == typeof e5;
    },
    expected: "function"
}, xr = {
    getters: wr,
    mutations: wr,
    actions: {
        assert: function(e5) {
            return "function" == typeof e5 || "object" == typeof e5 && "function" == typeof e5.handler;
        },
        expected: 'function or object with "handler" function'
    }
};
function Or(e5, t5) {
    Object.keys(xr).forEach(function(n5) {
        if (t5[n5]) {
            var r7 = xr[n5];
            tr(t5[n5], function(t7, o4) {
                rr(r7.assert(t7), function(e6, t8, n6, r8, o5) {
                    var a5 = t8 + " should be " + o5 + ' but "' + t8 + "." + n6 + '"';
                    e6.length > 0 && (a5 += ' in module "' + e6.join(".") + '"');
                    return a5 += " is " + JSON.stringify(r8) + ".";
                }(e5, n5, o4, t7, r7.expected));
            });
        }
    });
}
function Fr(e5) {
    return new Cr(e5);
}
var Cr = function e5(t5) {
    var n5 = this;
    (void 0) === t5 && (t5 = {
    }), rr("undefined" != typeof Promise, "vuex requires a Promise polyfill in this browser."), rr(this instanceof e5, "store must be called with the new operator.");
    var r8 = t5.plugins;
    (void 0) === r8 && (r8 = []);
    var o4 = t5.strict;
    (void 0) === o4 && (o4 = !1);
    var a5 = t5.devtools;
    this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new kr(t5), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._makeLocalGettersCache = Object.create(null), this._devtools = a5;
    var s2 = this, i3 = this.dispatch, l2 = this.commit;
    this.dispatch = function(e6, t7) {
        return i3.call(s2, e6, t7);
    }, this.commit = function(e6, t7, n6) {
        return l2.call(s2, e6, t7, n6);
    }, this.strict = o4;
    var c1 = this._modules.root.state;
    ir(this, c1, [], this._modules.root), sr(this, c1), r8.forEach(function(e6) {
        return e6(n5);
    });
}, Pr = {
    state: {
        configurable: !0
    }
};
Cr.prototype.install = function(e6, t5) {
    e6.provide(t5 || "store", this), e6.config.globalProperties.$store = this, ((void 0) === this._devtools || this._devtools) && pr(e6, this);
}, Pr.state.get = function() {
    return this._state.data;
}, Pr.state.set = function(e6) {
    rr(!1, "use store.replaceState() to explicit replace store state.");
}, Cr.prototype.commit = function(e6, t5, n5) {
    var r8 = this, o4 = ur(e6, t5, n5), a5 = o4.type, s2 = o4.payload, i3 = o4.options, l2 = {
        type: a5,
        payload: s2
    }, c1 = this._mutations[a5];
    c1 ? (this._withCommit(function() {
        c1.forEach(function(e7) {
            e7(s2);
        });
    }), this._subscribers.slice().forEach(function(e7) {
        return e7(l2, r8.state);
    }), i3 && i3.silent && console.warn("[vuex] mutation type: " + a5 + ". Silent option has been removed. Use the filter functionality in the vue-devtools")) : console.error("[vuex] unknown mutation type: " + a5);
}, Cr.prototype.dispatch = function(e6, t5) {
    var n5 = this, r8 = ur(e6, t5), o4 = r8.type, a5 = r8.payload, s2 = {
        type: o4,
        payload: a5
    }, i3 = this._actions[o4];
    if (i3) {
        try {
            this._actionSubscribers.slice().filter(function(e7) {
                return e7.before;
            }).forEach(function(e7) {
                return e7.before(s2, n5.state);
            });
        } catch (e7) {
            console.warn("[vuex] error in before action subscribers: "), console.error(e7);
        }
        var l2 = i3.length > 1 ? Promise.all(i3.map(function(e7) {
            return e7(a5);
        })) : i3[0](a5);
        return new Promise(function(e7, t7) {
            l2.then(function(t8) {
                try {
                    n5._actionSubscribers.filter(function(e8) {
                        return e8.after;
                    }).forEach(function(e8) {
                        return e8.after(s2, n5.state);
                    });
                } catch (e8) {
                    console.warn("[vuex] error in after action subscribers: "), console.error(e8);
                }
                e7(t8);
            }, function(e8) {
                try {
                    n5._actionSubscribers.filter(function(e9) {
                        return e9.error;
                    }).forEach(function(t8) {
                        return t8.error(s2, n5.state, e8);
                    });
                } catch (e9) {
                    console.warn("[vuex] error in error action subscribers: "), console.error(e9);
                }
                t7(e8);
            });
        });
    }
    console.error("[vuex] unknown action type: " + o4);
}, Cr.prototype.subscribe = function(e6, t5) {
    return or(e6, this._subscribers, t5);
}, Cr.prototype.subscribeAction = function(e6, t5) {
    return or("function" == typeof e6 ? {
        before: e6
    } : e6, this._actionSubscribers, t5);
}, Cr.prototype.watch = function(e6, t5, n5) {
    var r8 = this;
    return rr("function" == typeof e6, "store.watch only accepts a function."), zn(function() {
        return e6(r8.state, r8.getters);
    }, t5, Object.assign({
    }, n5));
}, Cr.prototype.replaceState = function(e6) {
    var t5 = this;
    this._withCommit(function() {
        t5._state.data = e6;
    });
}, Cr.prototype.registerModule = function(e6, t5, n5) {
    (void 0) === n5 && (n5 = {
    }), "string" == typeof e6 && (e6 = [
        e6
    ]), rr(Array.isArray(e6), "module path must be a string or an Array."), rr(e6.length > 0, "cannot register the root module by using registerModule."), this._modules.register(e6, t5), ir(this, this.state, e6, this._modules.get(e6), n5.preserveState), sr(this, this.state);
}, Cr.prototype.unregisterModule = function(e6) {
    var t5 = this;
    "string" == typeof e6 && (e6 = [
        e6
    ]), rr(Array.isArray(e6), "module path must be a string or an Array."), this._modules.unregister(e6), this._withCommit(function() {
        delete cr(t5.state, e6.slice(0, -1))[e6[e6.length - 1]];
    }), ar(this);
}, Cr.prototype.hasModule = function(e6) {
    return "string" == typeof e6 && (e6 = [
        e6
    ]), rr(Array.isArray(e6), "module path must be a string or an Array."), this._modules.isRegistered(e6);
}, Cr.prototype.hotUpdate = function(e6) {
    this._modules.update(e6), ar(this, !0);
}, Cr.prototype._withCommit = function(e6) {
    var t5 = this._committing;
    this._committing = !0, e6(), this._committing = t5;
}, Object.defineProperties(Cr.prototype, Pr);
jr(function(e6, t5) {
    var n5 = {
    };
    return Tr(t5) || console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), Lr(t5).forEach(function(t7) {
        var r8 = t7.key, o4 = t7.val;
        n5[r8] = function() {
            var t8 = this.$store.state, n6 = this.$store.getters;
            if (e6) {
                var r9 = Ir(this.$store, "mapState", e6);
                if (!r9) return;
                t8 = r9.context.state, n6 = r9.context.getters;
            }
            return "function" == typeof o4 ? o4.call(this, t8, n6) : t8[o4];
        }, n5[r8].vuex = !0;
    }), n5;
}), jr(function(e6, t5) {
    var n5 = {
    };
    return Tr(t5) || console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"), Lr(t5).forEach(function(t7) {
        var r8 = t7.key, o4 = t7.val;
        n5[r8] = function() {
            for(var t8 = [], n6 = arguments.length; n6--;)t8[n6] = arguments[n6];
            var r10 = this.$store.commit;
            if (e6) {
                var a5 = Ir(this.$store, "mapMutations", e6);
                if (!a5) return;
                r10 = a5.context.commit;
            }
            return "function" == typeof o4 ? o4.apply(this, [
                r10
            ].concat(t8)) : r10.apply(this.$store, [
                o4
            ].concat(t8));
        };
    }), n5;
}), jr(function(e6, t5) {
    var n5 = {
    };
    return Tr(t5) || console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"), Lr(t5).forEach(function(t7) {
        var r8 = t7.key, o4 = t7.val;
        o4 = e6 + o4, n5[r8] = function() {
            if (!e6 || Ir(this.$store, "mapGetters", e6)) {
                if (o4 in this.$store.getters) return this.$store.getters[o4];
                console.error("[vuex] unknown getter: " + o4);
            }
        }, n5[r8].vuex = !0;
    }), n5;
}), jr(function(e6, t5) {
    var n5 = {
    };
    return Tr(t5) || console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"), Lr(t5).forEach(function(t7) {
        var r8 = t7.key, o4 = t7.val;
        n5[r8] = function() {
            for(var t8 = [], n6 = arguments.length; n6--;)t8[n6] = arguments[n6];
            var r10 = this.$store.dispatch;
            if (e6) {
                var a6 = Ir(this.$store, "mapActions", e6);
                if (!a6) return;
                r10 = a6.context.dispatch;
            }
            return "function" == typeof o4 ? o4.apply(this, [
                r10
            ].concat(t8)) : r10.apply(this.$store, [
                o4
            ].concat(t8));
        };
    }), n5;
});
function Lr(e6) {
    return Tr(e6) ? Array.isArray(e6) ? e6.map(function(e7) {
        return {
            key: e7,
            val: e7
        };
    }) : Object.keys(e6).map(function(t5) {
        return {
            key: t5,
            val: e6[t5]
        };
    }) : [];
}
function Tr(e6) {
    return Array.isArray(e6) || nr(e6);
}
function jr(e6) {
    return function(t5, n5) {
        return "string" != typeof t5 ? (n5 = t5, t5 = "") : "/" !== t5.charAt(t5.length - 1) && (t5 += "/"), e6(t5, n5);
    };
}
function Ir(e6, t5, n5) {
    var r8 = e6._modulesNamespaceMap[n5];
    return r8 || console.error("[vuex] module namespace not found in " + t5 + "(): " + n5), r8;
}
function Mr(e6) {
    if (!e6) return null;
    try {
        return JSON.parse(JSON.stringify(e6));
    } catch (e7) {
        return null;
    }
}
function Ar(e6) {
    if (!e6 || "object" != typeof e6) throw new Error("Invalid slides data");
    for(let t5 = 0; t5 < e6.length; t5++)if (!e6[t5] || !e6[t5].src) throw new Error(`The item[${t5}] of this item is invalid.`);
}
var Nr = {
    preference: {
        general: {
            language: "en",
            hud: !0,
            hoverVisibleHud: !1,
            clickVisibleHud: !1,
            visibleHudContents: {
                menu: !0,
                thumbnail: !1,
                caption: !0,
                controller: !0,
                paginate: !0,
                autoplay: !0,
                group: !0
            }
        },
        slides: {
            initialNumber: 0,
            animationType: "horizontal",
            animationSpeed: 500,
            captionAnimationType: "none",
            captionAnimationSpeed: 40,
            autoplay: !1,
            autoplayDelay: 7000,
            autoplayDirection: !0,
            autoplayPauseOnHover: !1,
            loop: !0,
            swipe: !0
        },
        style: {
            screenColor: "system",
            imageType: "none",
            imageScale: [
                "75%",
                "75%"
            ],
            captionScale: 100,
            captionPosition: [
                "32px",
                "30px"
            ]
        },
        keyboard: {
            enabled: !0
        }
    },
    usePreference: {
        slides: !0,
        style: !0,
        data: !0,
        keyboard: !0,
        information: !0
    },
    tree: {
        default: {
            slides: []
        }
    },
    slides: [],
    group: "default",
    mode: null,
    activeSlide: void 0,
    keyboardEvent: !0,
    autoplay: !1
};
var Er = Mr(Nr), Rr = {
};
t6(Rr, "changePreference", function() {
    return Hr;
}), t6(Rr, "reset", function() {
    return Kr;
}), t6(Rr, "changeGroup", function() {
    return Yr;
}), t6(Rr, "changeTree", function() {
    return Br;
}), t6(Rr, "changeHud", function() {
    return Vr;
}), t6(Rr, "changeMode", function() {
    return Ur;
}), t6(Rr, "changeActiveSlide", function() {
    return zr;
}), t6(Rr, "changeAutoplay", function() {
    return Gr;
}), t6(Rr, "changeSlides", function() {
    return Jr;
});
let Dr = {
    preference: !1,
    tree: !1
};
function $r() {
    return !!window.localStorage;
}
function Wr(e6, t5) {
    Dr[e6] || $r() && e6 && t5 && window.localStorage.setItem(`slideshow_${e6}`, JSON.stringify(t5));
}
function Ur(e6, t5) {
    if (e6.state.mode !== t5) switch(t5){
        case "preference":
        case "group":
        case "thumbnail":
            e6.commit("updateMode", t5);
            break;
        default:
            e6.commit("updateMode", null);
    }
}
function Hr(e6, t5) {
    const n5 = Mr(t5);
    e6.commit("updatePreference", n5), Wr("preference", n5);
}
function Gr(e6, t5) {
    e6.state.preference.slides.autoplay && (t5 = (void 0) === t5 ? !e6.state.autoplay : t5, e6.commit("updateAutoplay", t5));
}
function Vr(e6, t5) {
    t5 = (void 0) === t5 ? !e6.state.preference.general.hud : t5, e6.commit("updateValueInPreference", {
        map: [
            "general",
            "hud"
        ],
        value: t5
    });
}
function Br(e6, t5) {
    try {
        Ar(t5), e6.commit("updateTree", t5), Wr("tree", t5);
    } catch (e7) {
        throw window.dev && console.error(e7.message), new Error(e7.message);
    }
}
function Jr(e6, t5) {
    e6.commit("updateSlides", t5);
}
function zr(e6, t5) {
    "number" == typeof t5 && e6.commit("updateActiveSlide", t5);
}
async function Kr(e6) {
    const t5 = Mr(Nr.preference), n5 = Mr(Nr.tree), r8 = Mr(Nr.slides);
    await e6.dispatch("changePreference", t5), await e6.dispatch("changeTree", n5), await e6.dispatch("changeSlides", r8), e6.commit("updateActiveSlide", t5.slides.initialNumber), e6.commit("updateUseKeyboardEvent", !0), e6.commit("updateMode", null);
}
function Yr(e6, t5) {
    e6.commit("updateGroup", t5), Wr("group", t5);
}
var Xr = {
};
function qr(e6, t5) {
    e6.mode = t5;
}
function Zr(e6, t5) {
    e6.activeSlide = t5;
}
function Qr(e6, t5) {
    e6.keyboardEvent = t5;
}
function eo(e6, t5) {
    e6.preference = t5;
}
function to(e6, t5) {
    const { value: n5 , map: r8  } = t5;
    if (r8 && Array.isArray(r8)) switch(r8.length){
        case 1:
            e6.preference[r8[0]] = n5;
            break;
        case 2:
            e6.preference[r8[0]][r8[1]] = n5;
            break;
        case 3:
            e6.preference[r8[0]][r8[1]][r8[2]] = n5;
    }
}
function no(e6, t5) {
    e6.tree = t5;
}
function ro(e6, t5) {
    e6.slides = t5;
}
function oo(e6, t5) {
    e6.group = t5;
}
function ao(e6, t5) {
    e6.autoplay = t5;
}
function so(e6, t5) {
    switch(t5[0]){
        case "slides":
        case "style":
        case "data":
        case "keyboard":
        case "information":
            e6.usePreference[t5[0]] = Boolean(t5[1]);
    }
}
t6(Xr, "updateGroup", function() {
    return oo;
}), t6(Xr, "updateValueInPreference", function() {
    return to;
}), t6(Xr, "updateMode", function() {
    return qr;
}), t6(Xr, "updatePreference", function() {
    return eo;
}), t6(Xr, "updateActiveSlide", function() {
    return Zr;
}), t6(Xr, "updateAutoplay", function() {
    return ao;
}), t6(Xr, "updateTree", function() {
    return no;
}), t6(Xr, "updateUsePreference", function() {
    return so;
}), t6(Xr, "updateUseKeyboardEvent", function() {
    return Qr;
}), t6(Xr, "updateSlides", function() {
    return ro;
});
var io = Fr({
    state: Er,
    mutations: Xr,
    actions: Rr
}), lo = {
};
a4.register("63CYy", function(e6, t5) {
    Object.defineProperty(e6.exports, "__esModule", {
        value: !0
    });
    var n5 = a4("53XAm"), r8 = a4("fvGXC"), o4 = a4("jLtYr"), s2 = a4("lypt6");
    const i3 = "9.1.7";
    function l3(e7, ...t7) {
        return o4.createCompileError(e7, null, void 0);
    }
    const c1 = s2.makeSymbol("__transrateVNode"), u1 = s2.makeSymbol("__datetimeParts"), f1 = s2.makeSymbol("__numberParts");
    s2.makeSymbol("__enableEmitter"), s2.makeSymbol("__disableEmitter");
    const p1 = s2.makeSymbol("__setPluralRules");
    s2.makeSymbol("__intlifyMeta");
    let d1 = 0;
    function m2(e7) {
        return (t7, n6, r10, o5)=>e7(n6, r10, dn() || void 0, o5)
        ;
    }
    function h1(e7, t7) {
        const { messages: n6 , __i18n: o5  } = t7, a7 = s2.isPlainObject(n6) ? n6 : s2.isArray(o5) ? {
        } : {
            [e7]: {
            }
        };
        if (s2.isArray(o5) && o5.forEach(({ locale: e8 , resource: t8  })=>{
            e8 ? (a7[e8] = a7[e8] || {
            }, y2(t8, a7[e8])) : y2(t8, a7);
        }), t7.flatJson) for(const e8 in a7)s2.hasOwn(a7, e8) && r8.handleFlatJson(a7[e8]);
        return a7;
    }
    const g1 = (e7)=>!s2.isObject(e7) || s2.isArray(e7)
    ;
    function y2(e7, t7) {
        if (g1(e7) || g1(t7)) throw l3(20);
        for(const n6 in e7)s2.hasOwn(e7, n6) && (g1(e7[n6]) || g1(t7[n6]) ? t7[n6] = e7[n6] : y2(e7[n6], t7[n6]));
    }
    function b1(e7 = {
    }) {
        const { __root: t7  } = e7, o5 = (void 0) === t7;
        let a7 = !s2.isBoolean(e7.inheritLocale) || e7.inheritLocale;
        const g2 = ot(t7 && a7 ? t7.locale.value : s2.isString(e7.locale) ? e7.locale : "en-US"), b2 = ot(t7 && a7 ? t7.fallbackLocale.value : s2.isString(e7.fallbackLocale) || s2.isArray(e7.fallbackLocale) || s2.isPlainObject(e7.fallbackLocale) || !1 === e7.fallbackLocale ? e7.fallbackLocale : g2.value), v2 = ot(h1(g2.value, e7)), _1 = ot(s2.isPlainObject(e7.datetimeFormats) ? e7.datetimeFormats : {
            [g2.value]: {
            }
        }), k1 = ot(s2.isPlainObject(e7.numberFormats) ? e7.numberFormats : {
            [g2.value]: {
            }
        });
        let S1 = t7 ? t7.missingWarn : !s2.isBoolean(e7.missingWarn) && !s2.isRegExp(e7.missingWarn) || e7.missingWarn, w1 = t7 ? t7.fallbackWarn : !s2.isBoolean(e7.fallbackWarn) && !s2.isRegExp(e7.fallbackWarn) || e7.fallbackWarn, x1 = t7 ? t7.fallbackRoot : !s2.isBoolean(e7.fallbackRoot) || e7.fallbackRoot, O1 = !!e7.fallbackFormat, F1 = s2.isFunction(e7.missing) ? e7.missing : null, C1 = s2.isFunction(e7.missing) ? m2(e7.missing) : null, P1 = s2.isFunction(e7.postTranslation) ? e7.postTranslation : null, L1 = !s2.isBoolean(e7.warnHtmlMessage) || e7.warnHtmlMessage, T1 = !!e7.escapeParameter;
        const j1 = t7 ? t7.modifiers : s2.isPlainObject(e7.modifiers) ? e7.modifiers : {
        };
        let I1, M1 = e7.pluralRules || t7 && t7.pluralRules;
        I1 = n5.createCoreContext({
            version: i3,
            locale: g2.value,
            fallbackLocale: b2.value,
            messages: v2.value,
            datetimeFormats: _1.value,
            numberFormats: k1.value,
            modifiers: j1,
            pluralRules: M1,
            missing: null === C1 ? void 0 : C1,
            missingWarn: S1,
            fallbackWarn: w1,
            fallbackFormat: O1,
            unresolving: !0,
            postTranslation: null === P1 ? void 0 : P1,
            warnHtmlMessage: L1,
            escapeParameter: T1,
            __datetimeFormatters: s2.isPlainObject(I1) ? I1.__datetimeFormatters : void 0,
            __numberFormatters: s2.isPlainObject(I1) ? I1.__numberFormatters : void 0,
            __v_emitter: s2.isPlainObject(I1) ? I1.__v_emitter : void 0,
            __meta: {
                framework: "vue"
            }
        }), n5.updateFallbackLocale(I1, g2.value, b2.value);
        const A1 = ut({
            get: ()=>g2.value
            ,
            set: (e8)=>{
                g2.value = e8, I1.locale = g2.value;
            }
        }), N1 = ut({
            get: ()=>b2.value
            ,
            set: (e8)=>{
                b2.value = e8, I1.fallbackLocale = b2.value, n5.updateFallbackLocale(I1, g2.value, e8);
            }
        }), E1 = ut(()=>v2.value
        ), R1 = ut(()=>_1.value
        ), D1 = ut(()=>k1.value
        );
        function $1(e8, r10, o6, a8, i4, c2) {
            let u2;
            if (g2.value, b2.value, v2.value, _1.value, k1.value, u2 = e8(I1), s2.isNumber(u2) && u2 === n5.NOT_REOSLVED) {
                const [e9, n6] = r10();
                return t7 && x1 ? a8(t7) : i4(e9);
            }
            if (c2(u2)) return u2;
            throw l3(14);
        }
        function W1(...e8) {
            return $1((t8)=>n5.translate(t8, ...e8)
            , ()=>n5.parseTranslateArgs(...e8)
            , 0, (t8)=>t8.t(...e8)
            , (e9)=>e9
            , (e9)=>s2.isString(e9)
            );
        }
        const U1 = {
            normalize: function(e8) {
                return e8.map((e9)=>s2.isString(e9) ? on(Kt, null, e9, 0) : e9
                );
            },
            interpolate: (e8)=>e8
            ,
            type: "vnode"
        };
        function H1(e8) {
            return v2.value[e8] || {
            };
        }
        d1++, t7 && (zn(t7.locale, (e8)=>{
            a7 && (g2.value = e8, I1.locale = e8, n5.updateFallbackLocale(I1, g2.value, b2.value));
        }), zn(t7.fallbackLocale, (e8)=>{
            a7 && (b2.value = e8, I1.fallbackLocale = e8, n5.updateFallbackLocale(I1, g2.value, b2.value));
        }));
        return {
            id: d1,
            locale: A1,
            fallbackLocale: N1,
            get inheritLocale () {
                return a7;
            },
            set inheritLocale (e8){
                a7 = e8, e8 && t7 && (g2.value = t7.locale.value, b2.value = t7.fallbackLocale.value, n5.updateFallbackLocale(I1, g2.value, b2.value));
            },
            get availableLocales () {
                return Object.keys(v2.value).sort();
            },
            messages: E1,
            datetimeFormats: R1,
            numberFormats: D1,
            get modifiers () {
                return j1;
            },
            get pluralRules () {
                return M1 || {
                };
            },
            get isGlobal () {
                return o5;
            },
            get missingWarn () {
                return S1;
            },
            set missingWarn (e9){
                S1 = e9, I1.missingWarn = S1;
            },
            get fallbackWarn () {
                return w1;
            },
            set fallbackWarn (e10){
                w1 = e10, I1.fallbackWarn = w1;
            },
            get fallbackRoot () {
                return x1;
            },
            set fallbackRoot (e11){
                x1 = e11;
            },
            get fallbackFormat () {
                return O1;
            },
            set fallbackFormat (e12){
                O1 = e12, I1.fallbackFormat = O1;
            },
            get warnHtmlMessage () {
                return L1;
            },
            set warnHtmlMessage (e13){
                L1 = e13, I1.warnHtmlMessage = e13;
            },
            get escapeParameter () {
                return T1;
            },
            set escapeParameter (e14){
                T1 = e14, I1.escapeParameter = e14;
            },
            t: W1,
            rt: function(...e15) {
                const [t8, n6, r10] = e15;
                if (r10 && !s2.isObject(r10)) throw l3(15);
                return W1(t8, n6, s2.assign({
                    resolvedMessage: !0
                }, r10 || {
                }));
            },
            d: function(...e15) {
                return $1((t8)=>n5.datetime(t8, ...e15)
                , ()=>n5.parseDateTimeArgs(...e15)
                , 0, (t8)=>t8.d(...e15)
                , ()=>n5.MISSING_RESOLVE_VALUE
                , (e16)=>s2.isString(e16)
                );
            },
            n: function(...e15) {
                return $1((t8)=>n5.number(t8, ...e15)
                , ()=>n5.parseNumberArgs(...e15)
                , 0, (t8)=>t8.n(...e15)
                , ()=>n5.MISSING_RESOLVE_VALUE
                , (e16)=>s2.isString(e16)
                );
            },
            te: function(e15, t8) {
                const n6 = H1(s2.isString(t8) ? t8 : g2.value);
                return null !== r8.resolveValue(n6, e15);
            },
            tm: function(e15) {
                const o6 = function(e16) {
                    let t8 = null;
                    const o7 = n5.getLocaleChain(I1, b2.value, g2.value);
                    for(let n6 = 0; n6 < o7.length; n6++){
                        const a8 = v2.value[o7[n6]] || {
                        }, s3 = r8.resolveValue(a8, e16);
                        if (null != s3) {
                            t8 = s3;
                            break;
                        }
                    }
                    return t8;
                }(e15);
                return null != o6 ? o6 : t7 && t7.tm(e15) || {
                };
            },
            getLocaleMessage: H1,
            setLocaleMessage: function(e15, t8) {
                v2.value[e15] = t8, I1.messages = v2.value;
            },
            mergeLocaleMessage: function(e15, t8) {
                v2.value[e15] = v2.value[e15] || {
                }, y2(t8, v2.value[e15]), I1.messages = v2.value;
            },
            getDateTimeFormat: function(e15) {
                return _1.value[e15] || {
                };
            },
            setDateTimeFormat: function(e15, t8) {
                _1.value[e15] = t8, I1.datetimeFormats = _1.value, n5.clearDateTimeFormat(I1, e15, t8);
            },
            mergeDateTimeFormat: function(e15, t8) {
                _1.value[e15] = s2.assign(_1.value[e15] || {
                }, t8), I1.datetimeFormats = _1.value, n5.clearDateTimeFormat(I1, e15, t8);
            },
            getNumberFormat: function(e15) {
                return k1.value[e15] || {
                };
            },
            setNumberFormat: function(e15, t8) {
                k1.value[e15] = t8, I1.numberFormats = k1.value, n5.clearNumberFormat(I1, e15, t8);
            },
            mergeNumberFormat: function(e15, t8) {
                k1.value[e15] = s2.assign(k1.value[e15] || {
                }, t8), I1.numberFormats = k1.value, n5.clearNumberFormat(I1, e15, t8);
            },
            getPostTranslationHandler: function() {
                return s2.isFunction(P1) ? P1 : null;
            },
            setPostTranslationHandler: function(e15) {
                P1 = e15, I1.postTranslation = e15;
            },
            getMissingHandler: function() {
                return F1;
            },
            setMissingHandler: function(e15) {
                null !== e15 && (C1 = m2(e15)), F1 = e15, I1.missing = C1;
            },
            [c1]: function(...e15) {
                return $1((t8)=>{
                    let r10;
                    const o6 = t8;
                    try {
                        o6.processor = U1, r10 = n5.translate(o6, ...e15);
                    } finally{
                        o6.processor = null;
                    }
                    return r10;
                }, ()=>n5.parseTranslateArgs(...e15)
                , 0, (t8)=>t8[c1](...e15)
                , (e16)=>[
                        on(Kt, null, e16, 0)
                    ]
                , (e16)=>s2.isArray(e16)
                );
            },
            [f1]: function(...e15) {
                return $1((t8)=>n5.number(t8, ...e15)
                , ()=>n5.parseNumberArgs(...e15)
                , 0, (t8)=>t8[f1](...e15)
                , ()=>[]
                , (e16)=>s2.isString(e16) || s2.isArray(e16)
                );
            },
            [u1]: function(...e15) {
                return $1((t8)=>n5.datetime(t8, ...e15)
                , ()=>n5.parseDateTimeArgs(...e15)
                , 0, (t8)=>t8[u1](...e15)
                , ()=>[]
                , (e16)=>s2.isString(e16) || s2.isArray(e16)
                );
            },
            [p1]: function(e15) {
                M1 = e15, I1.pluralRules = M1;
            }
        };
    }
    function v2(e7 = {
    }) {
        const t7 = b1(function(e8) {
            const t8 = s2.isString(e8.locale) ? e8.locale : "en-US", n6 = s2.isString(e8.fallbackLocale) || s2.isArray(e8.fallbackLocale) || s2.isPlainObject(e8.fallbackLocale) || !1 === e8.fallbackLocale ? e8.fallbackLocale : t8, r10 = s2.isFunction(e8.missing) ? e8.missing : void 0, o5 = !s2.isBoolean(e8.silentTranslationWarn) && !s2.isRegExp(e8.silentTranslationWarn) || !e8.silentTranslationWarn, a7 = !s2.isBoolean(e8.silentFallbackWarn) && !s2.isRegExp(e8.silentFallbackWarn) || !e8.silentFallbackWarn, i4 = !s2.isBoolean(e8.fallbackRoot) || e8.fallbackRoot, l4 = !!e8.formatFallbackMessages, c2 = s2.isPlainObject(e8.modifiers) ? e8.modifiers : {
            }, u2 = e8.pluralizationRules, f2 = s2.isFunction(e8.postTranslation) ? e8.postTranslation : void 0, p2 = !s2.isString(e8.warnHtmlInMessage) || "off" !== e8.warnHtmlInMessage, d2 = !!e8.escapeParameterHtml, m3 = !s2.isBoolean(e8.sync) || e8.sync;
            let h2 = e8.messages;
            if (s2.isPlainObject(e8.sharedMessages)) {
                const t9 = e8.sharedMessages;
                h2 = Object.keys(t9).reduce((e9, n7)=>{
                    const r11 = e9[n7] || (e9[n7] = {
                    });
                    return s2.assign(r11, t9[n7]), e9;
                }, h2 || {
                });
            }
            const { __i18n: g2 , __root: y3  } = e8, b2 = e8.datetimeFormats, v3 = e8.numberFormats;
            return {
                locale: t8,
                fallbackLocale: n6,
                messages: h2,
                flatJson: e8.flatJson,
                datetimeFormats: b2,
                numberFormats: v3,
                missing: r10,
                missingWarn: o5,
                fallbackWarn: a7,
                fallbackRoot: i4,
                fallbackFormat: l4,
                modifiers: c2,
                pluralRules: u2,
                postTranslation: f2,
                warnHtmlMessage: p2,
                escapeParameter: d2,
                inheritLocale: m3,
                __i18n: g2,
                __root: y3
            };
        }(e7)), n6 = {
            id: t7.id,
            get locale () {
                return t7.locale.value;
            },
            set locale (e8){
                t7.locale.value = e8;
            },
            get fallbackLocale () {
                return t7.fallbackLocale.value;
            },
            set fallbackLocale (e9){
                t7.fallbackLocale.value = e9;
            },
            get messages () {
                return t7.messages.value;
            },
            get datetimeFormats () {
                return t7.datetimeFormats.value;
            },
            get numberFormats () {
                return t7.numberFormats.value;
            },
            get availableLocales () {
                return t7.availableLocales;
            },
            get formatter () {
                return {
                    interpolate: ()=>[]
                };
            },
            set formatter (e10){
            },
            get missing () {
                return t7.getMissingHandler();
            },
            set missing (e11){
                t7.setMissingHandler(e11);
            },
            get silentTranslationWarn () {
                return s2.isBoolean(t7.missingWarn) ? !t7.missingWarn : t7.missingWarn;
            },
            set silentTranslationWarn (e12){
                t7.missingWarn = s2.isBoolean(e12) ? !e12 : e12;
            },
            get silentFallbackWarn () {
                return s2.isBoolean(t7.fallbackWarn) ? !t7.fallbackWarn : t7.fallbackWarn;
            },
            set silentFallbackWarn (e13){
                t7.fallbackWarn = s2.isBoolean(e13) ? !e13 : e13;
            },
            get modifiers () {
                return t7.modifiers;
            },
            get formatFallbackMessages () {
                return t7.fallbackFormat;
            },
            set formatFallbackMessages (e14){
                t7.fallbackFormat = e14;
            },
            get postTranslation () {
                return t7.getPostTranslationHandler();
            },
            set postTranslation (e15){
                t7.setPostTranslationHandler(e15);
            },
            get sync () {
                return t7.inheritLocale;
            },
            set sync (e16){
                t7.inheritLocale = e16;
            },
            get warnHtmlInMessage () {
                return t7.warnHtmlMessage ? "warn" : "off";
            },
            set warnHtmlInMessage (e17){
                t7.warnHtmlMessage = "off" !== e17;
            },
            get escapeParameterHtml () {
                return t7.escapeParameter;
            },
            set escapeParameterHtml (e18){
                t7.escapeParameter = e18;
            },
            get preserveDirectiveContent () {
                return !0;
            },
            set preserveDirectiveContent (e19){
            },
            get pluralizationRules () {
                return t7.pluralRules || {
                };
            },
            __composer: t7,
            t (...e) {
                const [n7, r10, o5] = e, a7 = {
                };
                let i4 = null, c2 = null;
                if (!s2.isString(n7)) throw l3(15);
                const u2 = n7;
                return s2.isString(r10) ? a7.locale = r10 : s2.isArray(r10) ? i4 = r10 : s2.isPlainObject(r10) && (c2 = r10), s2.isArray(o5) ? i4 = o5 : s2.isPlainObject(o5) && (c2 = o5), t7.t(u2, i4 || c2 || {
                }, a7);
            },
            rt: (...e20)=>t7.rt(...e20)
            ,
            tc (...e) {
                const [n7, r10, o5] = e, a7 = {
                    plural: 1
                };
                let i4 = null, c2 = null;
                if (!s2.isString(n7)) throw l3(15);
                const u2 = n7;
                return s2.isString(r10) ? a7.locale = r10 : s2.isNumber(r10) ? a7.plural = r10 : s2.isArray(r10) ? i4 = r10 : s2.isPlainObject(r10) && (c2 = r10), s2.isString(o5) ? a7.locale = o5 : s2.isArray(o5) ? i4 = o5 : s2.isPlainObject(o5) && (c2 = o5), t7.t(u2, i4 || c2 || {
                }, a7);
            },
            te: (e20, n7)=>t7.te(e20, n7)
            ,
            tm: (e20)=>t7.tm(e20)
            ,
            getLocaleMessage: (e20)=>t7.getLocaleMessage(e20)
            ,
            setLocaleMessage (e, n) {
                t7.setLocaleMessage(e, n);
            },
            mergeLocaleMessage (e, n) {
                t7.mergeLocaleMessage(e, n);
            },
            d: (...e20)=>t7.d(...e20)
            ,
            getDateTimeFormat: (e20)=>t7.getDateTimeFormat(e20)
            ,
            setDateTimeFormat (e, n) {
                t7.setDateTimeFormat(e, n);
            },
            mergeDateTimeFormat (e, n) {
                t7.mergeDateTimeFormat(e, n);
            },
            n: (...e20)=>t7.n(...e20)
            ,
            getNumberFormat: (e20)=>t7.getNumberFormat(e20)
            ,
            setNumberFormat (e, n) {
                t7.setNumberFormat(e, n);
            },
            mergeNumberFormat (e, n) {
                t7.mergeNumberFormat(e, n);
            },
            getChoiceIndex: (e20, t8)=>-1
            ,
            __onComponentInstanceCreated (t) {
                const { componentInstanceCreatedListener: r10  } = e7;
                r10 && r10(t, n6);
            }
        };
        return n6;
    }
    const _1 = {
        tag: {
            type: [
                String,
                Object
            ]
        },
        locale: {
            type: String
        },
        scope: {
            type: String,
            validator: (e7)=>"parent" === e7 || "global" === e7
            ,
            default: "parent"
        },
        i18n: {
            type: Object
        }
    }, k1 = {
        name: "i18n-t",
        props: s2.assign({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [
                    Number,
                    String
                ],
                validator: (e7)=>s2.isNumber(e7) || !isNaN(e7)
            }
        }, _1),
        setup (e, t) {
            const { slots: n6 , attrs: r10  } = t, o5 = e.i18n || L2({
                useScope: e.scope
            }), a7 = Object.keys(n6).filter((e7)=>"_" !== e7
            );
            return ()=>{
                const n8 = {
                };
                e.locale && (n8.locale = e.locale), (void 0) !== e.plural && (n8.plural = s2.isString(e.plural) ? +e.plural : e.plural);
                const i4 = function({ slots: e7  }, t7) {
                    return 1 === t7.length && "default" === t7[0] ? e7.default ? e7.default() : [] : t7.reduce((t8, n9)=>{
                        const r11 = e7[n9];
                        return r11 && (t8[n9] = r11()), t8;
                    }, {
                    });
                }(t, a7), l4 = o5[c1](e.keypath, i4, n8), u2 = s2.assign({
                }, r10);
                return s2.isString(e.tag) || s2.isObject(e.tag) ? Zn(e.tag, u2, l4) : Zn(zt, u2, l4);
            };
        }
    };
    function S1(e7, t7, n6, r10) {
        const { slots: o5 , attrs: a7  } = t7;
        return ()=>{
            const t8 = {
                part: !0
            };
            let i4 = {
            };
            e7.locale && (t8.locale = e7.locale), s2.isString(e7.format) ? t8.key = e7.format : s2.isObject(e7.format) && (s2.isString(e7.format.key) && (t8.key = e7.format.key), i4 = Object.keys(e7.format).reduce((t9, r11)=>n6.includes(r11) ? s2.assign({
                }, t9, {
                    [r11]: e7.format[r11]
                }) : t9
            , {
            }));
            const l4 = r10(e7.value, t8, i4);
            let c2 = [
                t8.key
            ];
            s2.isArray(l4) ? c2 = l4.map((e8, t9)=>{
                const n8 = o5[e8.type];
                return n8 ? n8({
                    [e8.type]: e8.value,
                    index: t9,
                    parts: l4
                }) : [
                    e8.value
                ];
            }) : s2.isString(l4) && (c2 = [
                l4
            ]);
            const u2 = s2.assign({
            }, a7);
            return s2.isString(e7.tag) || s2.isObject(e7.tag) ? Zn(e7.tag, u2, c2) : Zn(zt, u2, c2);
        };
    }
    const w1 = [
        "localeMatcher",
        "style",
        "unit",
        "unitDisplay",
        "currency",
        "currencyDisplay",
        "useGrouping",
        "numberingSystem",
        "minimumIntegerDigits",
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits",
        "notation",
        "formatMatcher"
    ], x1 = {
        name: "i18n-n",
        props: s2.assign({
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [
                    String,
                    Object
                ]
            }
        }, _1),
        setup (e, t) {
            const n6 = e.i18n || L2({
                useScope: "parent"
            });
            return S1(e, t, w1, (...e7)=>n6[f1](...e7)
            );
        }
    }, O1 = [
        "dateStyle",
        "timeStyle",
        "fractionalSecondDigits",
        "calendar",
        "dayPeriod",
        "numberingSystem",
        "localeMatcher",
        "timeZone",
        "hour12",
        "hourCycle",
        "formatMatcher",
        "weekday",
        "era",
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
        "timeZoneName"
    ], F1 = {
        name: "i18n-d",
        props: s2.assign({
            value: {
                type: [
                    Number,
                    Date
                ],
                required: !0
            },
            format: {
                type: [
                    String,
                    Object
                ]
            }
        }, _1),
        setup (e, t) {
            const n6 = e.i18n || L2({
                useScope: "parent"
            });
            return S1(e, t, O1, (...e7)=>n6[u1](...e7)
            );
        }
    };
    function C1(e7) {
        const t7 = (t8, { instance: n6 , value: r10 , modifiers: o5  })=>{
            if (!n6 || !n6.$) throw l3(22);
            const a7 = function(e8, t9) {
                const n8 = e8;
                if ("composition" === e8.mode) return n8.__getInstance(t9) || e8.global;
                {
                    const r11 = n8.__getInstance(t9);
                    return null != r11 ? r11.__composer : e8.global.__composer;
                }
            }(e7, n6.$), i4 = function(e8) {
                if (s2.isString(e8)) return {
                    path: e8
                };
                if (s2.isPlainObject(e8)) {
                    if (!("path" in e8)) throw l3(19);
                    return e8;
                }
                throw l3(20);
            }(r10);
            t8.textContent = a7.t(...function(e8) {
                const { path: t9 , locale: n8 , args: r11 , choice: o6 , plural: a8  } = e8, i5 = {
                }, l4 = r11 || {
                };
                s2.isString(n8) && (i5.locale = n8);
                s2.isNumber(o6) && (i5.plural = o6);
                s2.isNumber(a8) && (i5.plural = a8);
                return [
                    t9,
                    l4,
                    i5
                ];
            }(i4));
        };
        return {
            beforeMount: t7,
            beforeUpdate: t7
        };
    }
    function P1(e7, t7) {
        e7.locale = t7.locale || e7.locale, e7.fallbackLocale = t7.fallbackLocale || e7.fallbackLocale, e7.missing = t7.missing || e7.missing, e7.silentTranslationWarn = t7.silentTranslationWarn || e7.silentFallbackWarn, e7.silentFallbackWarn = t7.silentFallbackWarn || e7.silentFallbackWarn, e7.formatFallbackMessages = t7.formatFallbackMessages || e7.formatFallbackMessages, e7.postTranslation = t7.postTranslation || e7.postTranslation, e7.warnHtmlInMessage = t7.warnHtmlInMessage || e7.warnHtmlInMessage, e7.escapeParameterHtml = t7.escapeParameterHtml || e7.escapeParameterHtml, e7.sync = t7.sync || e7.sync, e7.__composer[p1](t7.pluralizationRules || e7.pluralizationRules);
        const n6 = h1(e7.locale, {
            messages: t7.messages,
            __i18n: t7.__i18n
        });
        return Object.keys(n6).forEach((t8)=>e7.mergeLocaleMessage(t8, n6[t8])
        ), t7.datetimeFormats && Object.keys(t7.datetimeFormats).forEach((n8)=>e7.mergeDateTimeFormat(n8, t7.datetimeFormats[n8])
        ), t7.numberFormats && Object.keys(t7.numberFormats).forEach((n8)=>e7.mergeNumberFormat(n8, t7.numberFormats[n8])
        ), e7;
    }
    function L2(e7 = {
    }) {
        const t7 = dn();
        if (null == t7) throw l3(16);
        if (!t7.appContext.app.__VUE_I18N_SYMBOL__) throw l3(17);
        const n6 = yt(t7.appContext.app.__VUE_I18N_SYMBOL__);
        if (!n6) throw l3(22);
        const r10 = "composition" === n6.mode ? n6.global : n6.global.__composer, o5 = s2.isEmptyObject(e7) ? "__i18n" in t7.type ? "local" : "global" : e7.useScope ? e7.useScope : "local";
        if ("global" === o5) {
            let n8 = s2.isObject(e7.messages) ? e7.messages : {
            };
            "__i18nGlobal" in t7.type && (n8 = h1(r10.locale.value, {
                messages: n8,
                __i18n: t7.type.__i18nGlobal
            }));
            const o6 = Object.keys(n8);
            if (o6.length && o6.forEach((e8)=>{
                r10.mergeLocaleMessage(e8, n8[e8]);
            }), s2.isObject(e7.datetimeFormats)) {
                const t8 = Object.keys(e7.datetimeFormats);
                t8.length && t8.forEach((t9)=>{
                    r10.mergeDateTimeFormat(t9, e7.datetimeFormats[t9]);
                });
            }
            if (s2.isObject(e7.numberFormats)) {
                const t8 = Object.keys(e7.numberFormats);
                t8.length && t8.forEach((t9)=>{
                    r10.mergeNumberFormat(t9, e7.numberFormats[t9]);
                });
            }
            return r10;
        }
        if ("parent" === o5) {
            let e8 = function(e9, t8) {
                let n8 = null;
                const r11 = t8.root;
                let o6 = t8.parent;
                for(; null != o6;){
                    const t9 = e9;
                    if ("composition" === e9.mode) n8 = t9.__getInstance(o6);
                    else {
                        const e10 = t9.__getInstance(o6);
                        null != e10 && (n8 = e10.__composer);
                    }
                    if (null != n8) break;
                    if (r11 === o6) break;
                    o6 = o6.parent;
                }
                return n8;
            }(n6, t7);
            return null == e8 && (e8 = r10), e8;
        }
        if ("legacy" === n6.mode) throw l3(18);
        const a7 = n6;
        let i4 = a7.__getInstance(t7);
        if (null == i4) {
            const n8 = t7.type, o6 = s2.assign({
            }, e7);
            n8.__i18n && (o6.__i18n = n8.__i18n), r10 && (o6.__root = r10), i4 = b1(o6), (function(e8, t8, n9) {
                It(()=>{
                }, t8), Nt(()=>{
                    e8.__deleteInstance(t8);
                }, t8);
            })(a7, t7), a7.__setInstance(t7, i4);
        }
        return i4;
    }
    const T1 = [
        "locale",
        "fallbackLocale",
        "availableLocales"
    ], j1 = [
        "t",
        "rt",
        "d",
        "n",
        "tm"
    ];
    n5.registerMessageCompiler(n5.compileToFunction), e6.exports.DatetimeFormat = F1, e6.exports.NumberFormat = x1, e6.exports.Translation = k1, e6.exports.VERSION = i3, e6.exports.createI18n = function(e7 = {
    }) {
        const t7 = !s2.isBoolean(e7.legacy) || e7.legacy, n6 = !!e7.globalInjection, r10 = new Map, o5 = t7 ? v2(e7) : b1(e7), a7 = s2.makeSymbol(""), i4 = {
            get mode () {
                return t7 ? "legacy" : "composition";
            },
            async install (e, ...r) {
                e.__VUE_I18N_SYMBOL__ = a7, e.provide(e.__VUE_I18N_SYMBOL__, i4), !t7 && n6 && (function(e8, t8) {
                    const n8 = Object.create(null);
                    T1.forEach((e9)=>{
                        const r11 = Object.getOwnPropertyDescriptor(t8, e9);
                        if (!r11) throw l3(22);
                        const o6 = rt(r11.value) ? {
                            get: ()=>r11.value.value
                            ,
                            set (e) {
                                r11.value.value = e;
                            }
                        } : {
                            get: ()=>r11.get && r11.get()
                        };
                        Object.defineProperty(n8, e9, o6);
                    }), e8.config.globalProperties.$i18n = n8, j1.forEach((n9)=>{
                        const r11 = Object.getOwnPropertyDescriptor(t8, n9);
                        if (!r11 || !r11.value) throw l3(22);
                        Object.defineProperty(e8.config.globalProperties, `$${n9}`, r11);
                    });
                })(e, i4.global), (function(e8, t8, ...n8) {
                    const r11 = s2.isPlainObject(n8[0]) ? n8[0] : {
                    }, o6 = !!r11.useI18nComponentName;
                    (!s2.isBoolean(r11.globalInstall) || r11.globalInstall) && (e8.component(o6 ? "i18n" : k1.name, k1), e8.component(x1.name, x1), e8.component(F1.name, F1)), e8.directive("t", C1(t8));
                })(e, i4, ...r), t7 && e.mixin(function(e8, t8, n8) {
                    return {
                        beforeCreate () {
                            const r11 = dn();
                            if (!r11) throw l3(22);
                            const o6 = this.$options;
                            if (o6.i18n) {
                                const n9 = o6.i18n;
                                o6.__i18n && (n9.__i18n = o6.__i18n), n9.__root = t8, this === this.$root ? this.$i18n = P1(e8, n9) : this.$i18n = v2(n9);
                            } else o6.__i18n ? this === this.$root ? this.$i18n = P1(e8, o6) : this.$i18n = v2({
                                __i18n: o6.__i18n,
                                __root: t8
                            }) : this.$i18n = e8;
                            e8.__onComponentInstanceCreated(this.$i18n), n8.__setInstance(r11, this.$i18n), this.$t = (...e9)=>this.$i18n.t(...e9)
                            , this.$rt = (...e9)=>this.$i18n.rt(...e9)
                            , this.$tc = (...e9)=>this.$i18n.tc(...e9)
                            , this.$te = (e9, t9)=>this.$i18n.te(e9, t9)
                            , this.$d = (...e9)=>this.$i18n.d(...e9)
                            , this.$n = (...e9)=>this.$i18n.n(...e9)
                            , this.$tm = (e9)=>this.$i18n.tm(e9)
                            ;
                        },
                        mounted () {
                        },
                        beforeUnmount () {
                            const e9 = dn();
                            if (!e9) throw l3(22);
                            delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, n8.__deleteInstance(e9), delete this.$i18n;
                        }
                    };
                }(o5, o5.__composer, i4));
            },
            get global () {
                return o5;
            },
            __instances: r10,
            __getInstance: (e8)=>r10.get(e8) || null
            ,
            __setInstance (e, t) {
                r10.set(e, t);
            },
            __deleteInstance (e) {
                r10.delete(e);
            }
        };
        return i4;
    }, e6.exports.useI18n = L2, e6.exports.vTDirective = C1;
}), a4.register("53XAm", function(e6, n5) {
    t6(e6.exports, "NOT_REOSLVED", function() {
        return p2;
    }), t6(e6.exports, "datetime", function() {
        return N2;
    }), t6(e6.exports, "getLocaleChain", function() {
        return _2;
    }), t6(e6.exports, "parseDateTimeArgs", function() {
        return E2;
    }), t6(e6.exports, "MISSING_RESOLVE_VALUE", function() {
        return d2;
    }), t6(e6.exports, "translate", function() {
        return j2;
    }), t6(e6.exports, "compileToFunction", function() {
        return C2;
    }), t6(e6.exports, "parseTranslateArgs", function() {
        return M2;
    }), t6(e6.exports, "clearNumberFormat", function() {
        return W2;
    }), t6(e6.exports, "number", function() {
        return D2;
    }), t6(e6.exports, "clearDateTimeFormat", function() {
        return R2;
    }), t6(e6.exports, "parseNumberArgs", function() {
        return $2;
    }), t6(e6.exports, "updateFallbackLocale", function() {
        return x2;
    }), t6(e6.exports, "registerMessageCompiler", function() {
        return h2;
    }), t6(e6.exports, "createCoreContext", function() {
        return b2;
    }), t6(e6.exports, "createCompileError", function() {
        return a4("jLtYr").createCompileError;
    }), t6(e6.exports, "handleFlatJson", function() {
        return a4("fvGXC").handleFlatJson;
    }), t6(e6.exports, "resolveValue", function() {
        return a4("fvGXC").resolveValue;
    }), t6(e6.exports, "createMessageContext", function() {
        return a4("bSonI").createMessageContext;
    });
    var r8 = a4("lypt6"), o4 = a4("fvGXC"), s2 = (o4 = a4("fvGXC"), a4("bSonI")), i3 = (s2 = a4("bSonI"), a4("jLtYr")), l3 = (i3 = a4("jLtYr"), a4("bF9s8"));
    let c1 = null;
    const u1 = f2(l3.IntlifyDevToolsHooks.FunctionTranslate);
    function f2(e7) {
        return (t5)=>c1 && c1.emit(e7, t5)
        ;
    }
    const p2 = -1, d2 = "";
    let m2;
    function h2(e7) {
        m2 = e7;
    }
    let g1 = null;
    let y2 = 0;
    function b2(e7 = {
    }) {
        const t5 = r8.isString(e7.version) ? e7.version : "9.1.7", n6 = r8.isString(e7.locale) ? e7.locale : "en-US", o5 = r8.isArray(e7.fallbackLocale) || r8.isPlainObject(e7.fallbackLocale) || r8.isString(e7.fallbackLocale) || !1 === e7.fallbackLocale ? e7.fallbackLocale : n6, a7 = r8.isPlainObject(e7.messages) ? e7.messages : {
            [n6]: {
            }
        }, s3 = r8.isPlainObject(e7.datetimeFormats) ? e7.datetimeFormats : {
            [n6]: {
            }
        }, i4 = r8.isPlainObject(e7.numberFormats) ? e7.numberFormats : {
            [n6]: {
            }
        }, u2 = r8.assign({
        }, e7.modifiers || {
        }, {
            upper: (e8)=>r8.isString(e8) ? e8.toUpperCase() : e8
            ,
            lower: (e8)=>r8.isString(e8) ? e8.toLowerCase() : e8
            ,
            capitalize: (e8)=>r8.isString(e8) ? `${e8.charAt(0).toLocaleUpperCase()}${e8.substr(1)}` : e8
        }), f3 = e7.pluralRules || {
        }, p3 = r8.isFunction(e7.missing) ? e7.missing : null, d3 = !r8.isBoolean(e7.missingWarn) && !r8.isRegExp(e7.missingWarn) || e7.missingWarn, h3 = !r8.isBoolean(e7.fallbackWarn) && !r8.isRegExp(e7.fallbackWarn) || e7.fallbackWarn, g2 = !!e7.fallbackFormat, b3 = !!e7.unresolving, v2 = r8.isFunction(e7.postTranslation) ? e7.postTranslation : null, _2 = r8.isPlainObject(e7.processor) ? e7.processor : null, k1 = !r8.isBoolean(e7.warnHtmlMessage) || e7.warnHtmlMessage, S1 = !!e7.escapeParameter, w1 = r8.isFunction(e7.messageCompiler) ? e7.messageCompiler : m2, x2 = r8.isFunction(e7.onWarn) ? e7.onWarn : r8.warn, O1 = e7, F1 = r8.isObject(O1.__datetimeFormatters) ? O1.__datetimeFormatters : new Map, C2 = r8.isObject(O1.__numberFormatters) ? O1.__numberFormatters : new Map, P1 = r8.isObject(O1.__meta) ? O1.__meta : {
        };
        y2++;
        const L2 = {
            version: t5,
            cid: y2,
            locale: n6,
            fallbackLocale: o5,
            messages: a7,
            datetimeFormats: s3,
            numberFormats: i4,
            modifiers: u2,
            pluralRules: f3,
            missing: p3,
            missingWarn: d3,
            fallbackWarn: h3,
            fallbackFormat: g2,
            unresolving: b3,
            postTranslation: v2,
            processor: _2,
            warnHtmlMessage: k1,
            escapeParameter: S1,
            messageCompiler: w1,
            onWarn: x2,
            __datetimeFormatters: F1,
            __numberFormatters: C2,
            __meta: P1
        };
        return __INTLIFY_PROD_DEVTOOLS__ && (function(e8, t7, n8) {
            c1 && c1.emit(l3.IntlifyDevToolsHooks.I18nInit, {
                timestamp: Date.now(),
                i18n: e8,
                version: t7,
                meta: n8
            });
        })(L2, t5, P1), L2;
    }
    function v2(e7, t5, n6, o5, a7) {
        const { missing: s3 , onWarn: i4  } = e7;
        if (null !== s3) {
            const o6 = s3(e7, n6, t5, a7);
            return r8.isString(o6) ? o6 : t5;
        }
        return t5;
    }
    function _2(e7, t5, n6) {
        const o5 = e7;
        o5.__localeChainCache || (o5.__localeChainCache = new Map);
        let a7 = o5.__localeChainCache.get(n6);
        if (!a7) {
            a7 = [];
            let e8 = [
                n6
            ];
            for(; r8.isArray(e8);)e8 = k2(a7, e8, t5);
            const s3 = r8.isArray(t5) ? t5 : r8.isPlainObject(t5) ? t5.default ? t5.default : null : t5;
            e8 = r8.isString(s3) ? [
                s3
            ] : s3, r8.isArray(e8) && k2(a7, e8, !1), o5.__localeChainCache.set(n6, a7);
        }
        return a7;
    }
    function k2(e7, t5, n6) {
        let o5 = !0;
        for(let a7 = 0; a7 < t5.length && r8.isBoolean(o5); a7++){
            const s3 = t5[a7];
            r8.isString(s3) && (o5 = S2(e7, t5[a7], n6));
        }
        return o5;
    }
    function S2(e7, t5, n6) {
        let r10;
        const o5 = t5.split("-");
        do r10 = w2(e7, o5.join("-"), n6), o5.splice(-1, 1);
        while (o5.length && !0 === r10)
        return r10;
    }
    function w2(e7, t5, n6) {
        let o5 = !1;
        if (!e7.includes(t5) && (o5 = !0, t5)) {
            o5 = "!" !== t5[t5.length - 1];
            const a7 = t5.replace(/!/g, "");
            e7.push(a7), (r8.isArray(n6) || r8.isPlainObject(n6)) && n6[a7] && (o5 = n6[a7]);
        }
        return o5;
    }
    function x2(e7, t5, n6) {
        e7.__localeChainCache = new Map, _2(e7, n6, t5);
    }
    const O1 = (e7)=>e7
    ;
    let F1 = Object.create(null);
    function C2(e7, t5 = {
    }) {
        {
            const n6 = (t5.onCacheKey || O1)(e7), r10 = F1[n6];
            if (r10) return r10;
            let o5 = !1;
            const a7 = t5.onError || i3.defaultOnError;
            t5.onError = (e8)=>{
                o5 = !0, a7(e8);
            };
            const { code: s3  } = i3.baseCompile(e7, t5), l4 = new Function(`return ${s3}`)();
            return o5 ? l4 : F1[n6] = l4;
        }
    }
    function P1(e7) {
        return i3.createCompileError(e7, null, void 0);
    }
    const L2 = ()=>""
    , T1 = (e7)=>r8.isFunction(e7)
    ;
    function j2(e7, ...t5) {
        const { fallbackFormat: n6 , postTranslation: a7 , unresolving: i4 , fallbackLocale: l4 , messages: c2  } = e7, [f3, d3] = M2(...t5), m3 = (r8.isBoolean(d3.missingWarn) ? d3.missingWarn : e7.missingWarn, r8.isBoolean(d3.fallbackWarn) ? d3.fallbackWarn : e7.fallbackWarn, r8.isBoolean(d3.escapeParameter) ? d3.escapeParameter : e7.escapeParameter), h3 = !!d3.resolvedMessage, y3 = r8.isString(d3.default) || r8.isBoolean(d3.default) ? r8.isBoolean(d3.default) ? f3 : d3.default : n6 ? f3 : "", b3 = n6 || "" !== y3, k3 = r8.isString(d3.locale) ? d3.locale : e7.locale;
        m3 && (function(e8) {
            r8.isArray(e8.list) ? e8.list = e8.list.map((e9)=>r8.isString(e9) ? r8.escapeHtml(e9) : e9
            ) : r8.isObject(e8.named) && Object.keys(e8.named).forEach((t7)=>{
                r8.isString(e8.named[t7]) && (e8.named[t7] = r8.escapeHtml(e8.named[t7]));
            });
        })(d3);
        let [S3, w3, x3] = h3 ? [
            f3,
            k3,
            c2[k3] || {
            }
        ] : function(e8, t7, n8, a8, s3, i5) {
            const { messages: l5 , onWarn: c3  } = e8, u2 = _2(e8, a8, n8);
            let f4, p3 = {
            }, d4 = null, m4 = n8, h4 = null;
            const g2 = "translate";
            for(let n9 = 0; n9 < u2.length; n9++){
                f4 = h4 = u2[n9], p3 = l5[f4] || {
                };
                if (null === (d4 = o4.resolveValue(p3, t7)) && (d4 = p3[t7]), r8.isString(d4) || r8.isFunction(d4)) break;
                const a9 = v2(e8, t7, f4, 0, g2);
                a9 !== t7 && (d4 = a9), m4 = h4;
            }
            return [
                d4,
                f4,
                p3
            ];
        }(e7, f3, k3, l4), O2 = f3;
        if (h3 || r8.isString(S3) || T1(S3) || b3 && (S3 = y3, O2 = S3), !(h3 || (r8.isString(S3) || T1(S3)) && r8.isString(w3))) return i4 ? p2 : f3;
        let F2 = !1;
        const C3 = T1(S3) ? S3 : I2(e7, f3, w3, S3, O2, ()=>{
            F2 = !0;
        });
        if (F2) return S3;
        const P2 = function(e8, t7, n8, a8) {
            const { modifiers: s3 , pluralRules: i5  } = e8, l5 = (a9)=>{
                const s4 = o4.resolveValue(n8, a9);
                if (r8.isString(s4)) {
                    let n9 = !1;
                    const r10 = I2(e8, a9, t7, s4, a9, ()=>{
                        n9 = !0;
                    });
                    return n9 ? L2 : r10;
                }
                return T1(s4) ? s4 : L2;
            }, c3 = {
                locale: t7,
                modifiers: s3,
                pluralRules: i5,
                messages: l5
            };
            e8.processor && (c3.processor = e8.processor);
            a8.list && (c3.list = a8.list);
            a8.named && (c3.named = a8.named);
            r8.isNumber(a8.plural) && (c3.pluralIndex = a8.plural);
            return c3;
        }(e7, w3, x3, d3), j3 = function(e8, t7, n8) {
            return t7(n8);
        }(0, C3, s2.createMessageContext(P2)), A1 = a7 ? a7(j3) : j3;
        if (__INTLIFY_PROD_DEVTOOLS__) {
            const t7 = {
                timestamp: Date.now(),
                key: r8.isString(f3) ? f3 : T1(S3) ? S3.key : "",
                locale: w3 || (T1(S3) ? S3.locale : ""),
                format: r8.isString(S3) ? S3 : T1(S3) ? S3.source : "",
                message: A1
            };
            t7.meta = r8.assign({
            }, e7.__meta, g1 || {
            }), u1(t7);
        }
        return A1;
    }
    function I2(e7, t5, n6, o5, a7, s3) {
        const { messageCompiler: i4 , warnHtmlMessage: l4  } = e7;
        if (T1(o5)) {
            const e8 = o5;
            return e8.locale = e8.locale || n6, e8.key = e8.key || t5, e8;
        }
        const c2 = i4(o5, function(e8, t7, n8, o6, a8, s4) {
            return {
                warnHtmlMessage: a8,
                onError: (e9)=>{
                    throw s4 && s4(e9), e9;
                },
                onCacheKey: (e9)=>r8.generateFormatCacheKey(t7, n8, e9)
            };
        }(0, n6, a7, 0, l4, s3));
        return c2.locale = n6, c2.key = t5, c2.source = o5, c2;
    }
    function M2(...e7) {
        const [t5, n6, o5] = e7, a7 = {
        };
        if (!r8.isString(t5) && !r8.isNumber(t5) && !T1(t5)) throw P1(14);
        const s3 = r8.isNumber(t5) ? String(t5) : (T1(t5), t5);
        return r8.isNumber(n6) ? a7.plural = n6 : r8.isString(n6) ? a7.default = n6 : r8.isPlainObject(n6) && !r8.isEmptyObject(n6) ? a7.named = n6 : r8.isArray(n6) && (a7.list = n6), r8.isNumber(o5) ? a7.plural = o5 : r8.isString(o5) ? a7.default = o5 : r8.isPlainObject(o5) && r8.assign(a7, o5), [
            s3,
            a7
        ];
    }
    const A1 = "undefined" != typeof Intl;
    A1 && Intl.DateTimeFormat, A1 && Intl.NumberFormat;
    function N2(e7, ...t5) {
        const { datetimeFormats: n6 , unresolving: o5 , fallbackLocale: a7 , onWarn: s3  } = e7, { __datetimeFormatters: i4  } = e7, [l4, c2, u2, f3] = E2(...t5), d3 = (r8.isBoolean(u2.missingWarn) ? u2.missingWarn : e7.missingWarn, r8.isBoolean(u2.fallbackWarn) ? u2.fallbackWarn : e7.fallbackWarn, !!u2.part), m3 = r8.isString(u2.locale) ? u2.locale : e7.locale, h3 = _2(e7, a7, m3);
        if (!r8.isString(l4) || "" === l4) return new Intl.DateTimeFormat(m3).format(c2);
        let g2, y3 = {
        }, b3 = null, k3 = m3, S3 = null;
        for(let t7 = 0; t7 < h3.length && (g2 = S3 = h3[t7], y3 = n6[g2] || {
        }, b3 = y3[l4], !r8.isPlainObject(b3)); t7++)v2(e7, l4, g2, 0, "datetime format"), k3 = S3;
        if (!r8.isPlainObject(b3) || !r8.isString(g2)) return o5 ? p2 : l4;
        let w3 = `${g2}__${l4}`;
        r8.isEmptyObject(f3) || (w3 = `${w3}__${JSON.stringify(f3)}`);
        let x3 = i4.get(w3);
        return x3 || (x3 = new Intl.DateTimeFormat(g2, r8.assign({
        }, b3, f3)), i4.set(w3, x3)), d3 ? x3.formatToParts(c2) : x3.format(c2);
    }
    function E2(...e7) {
        const [t5, n6, o5, a7] = e7;
        let s3, i4 = {
        }, l4 = {
        };
        if (r8.isString(t5)) {
            if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t5)) throw P1(16);
            s3 = new Date(t5);
            try {
                s3.toISOString();
            } catch (e8) {
                throw P1(16);
            }
        } else if (r8.isDate(t5)) {
            if (isNaN(t5.getTime())) throw P1(15);
            s3 = t5;
        } else {
            if (!r8.isNumber(t5)) throw P1(14);
            s3 = t5;
        }
        return r8.isString(n6) ? i4.key = n6 : r8.isPlainObject(n6) && (i4 = n6), r8.isString(o5) ? i4.locale = o5 : r8.isPlainObject(o5) && (l4 = o5), r8.isPlainObject(a7) && (l4 = a7), [
            i4.key || "",
            s3,
            i4,
            l4
        ];
    }
    function R2(e7, t5, n6) {
        const r10 = e7;
        for(const e8 in n6){
            const n8 = `${t5}__${e8}`;
            r10.__datetimeFormatters.has(n8) && r10.__datetimeFormatters.delete(n8);
        }
    }
    function D2(e7, ...t5) {
        const { numberFormats: n6 , unresolving: o5 , fallbackLocale: a7 , onWarn: s3  } = e7, { __numberFormatters: i4  } = e7, [l4, c2, u2, f3] = $2(...t5), d3 = (r8.isBoolean(u2.missingWarn) ? u2.missingWarn : e7.missingWarn, r8.isBoolean(u2.fallbackWarn) ? u2.fallbackWarn : e7.fallbackWarn, !!u2.part), m3 = r8.isString(u2.locale) ? u2.locale : e7.locale, h3 = _2(e7, a7, m3);
        if (!r8.isString(l4) || "" === l4) return new Intl.NumberFormat(m3).format(c2);
        let g2, y3 = {
        }, b3 = null, k3 = m3, S3 = null;
        for(let t7 = 0; t7 < h3.length && (g2 = S3 = h3[t7], y3 = n6[g2] || {
        }, b3 = y3[l4], !r8.isPlainObject(b3)); t7++)v2(e7, l4, g2, 0, "number format"), k3 = S3;
        if (!r8.isPlainObject(b3) || !r8.isString(g2)) return o5 ? p2 : l4;
        let w3 = `${g2}__${l4}`;
        r8.isEmptyObject(f3) || (w3 = `${w3}__${JSON.stringify(f3)}`);
        let x3 = i4.get(w3);
        return x3 || (x3 = new Intl.NumberFormat(g2, r8.assign({
        }, b3, f3)), i4.set(w3, x3)), d3 ? x3.formatToParts(c2) : x3.format(c2);
    }
    function $2(...e7) {
        const [t5, n6, o5, a7] = e7;
        let s3 = {
        }, i4 = {
        };
        if (!r8.isNumber(t5)) throw P1(14);
        const l4 = t5;
        return r8.isString(n6) ? s3.key = n6 : r8.isPlainObject(n6) && (s3 = n6), r8.isString(o5) ? s3.locale = o5 : r8.isPlainObject(o5) && (i4 = o5), r8.isPlainObject(a7) && (i4 = a7), [
            s3.key || "",
            l4,
            s3,
            i4
        ];
    }
    function W2(e7, t5, n6) {
        const r10 = e7;
        for(const e8 in n6){
            const n8 = `${t5}__${e8}`;
            r10.__numberFormatters.has(n8) && r10.__numberFormatters.delete(n8);
        }
    }
    "boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ && (r8.getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = !1);
}), a4.register("lypt6", function(n5, r8) {
    t6(n5.exports, "format", function() {
        return a7;
    }), t6(n5.exports, "makeSymbol", function() {
        return i3;
    }), t6(n5.exports, "getGlobalThis", function() {
        return y2;
    }), t6(n5.exports, "isRegExp", function() {
        return p2;
    }), t6(n5.exports, "isArray", function() {
        return k2;
    }), t6(n5.exports, "toDisplayString", function() {
        return L2;
    }), t6(n5.exports, "hasOwn", function() {
        return _2;
    }), t6(n5.exports, "generateFormatCacheKey", function() {
        return l4;
    }), t6(n5.exports, "isDate", function() {
        return f2;
    }), t6(n5.exports, "isNumber", function() {
        return u2;
    }), t6(n5.exports, "isEmptyObject", function() {
        return d2;
    }), t6(n5.exports, "warn", function() {
        return m2;
    }), t6(n5.exports, "isObject", function() {
        return O2;
    }), t6(n5.exports, "isString", function() {
        return w2;
    }), t6(n5.exports, "isFunction", function() {
        return S2;
    }), t6(n5.exports, "escapeHtml", function() {
        return b2;
    }), t6(n5.exports, "isBoolean", function() {
        return x2;
    }), t6(n5.exports, "isPlainObject", function() {
        return P2;
    }), t6(n5.exports, "assign", function() {
        return h2;
    });
    const o4 = /\{([0-9a-zA-Z]+)\}/g;
    function a7(e6, ...t5) {
        return 1 === t5.length && O2(t5[0]) && (t5 = t5[0]), t5 && t5.hasOwnProperty || (t5 = {
        }), e6.replace(o4, (e7, n6)=>t5.hasOwnProperty(n6) ? t5[n6] : ""
        );
    }
    const s2 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, i3 = (e6)=>s2 ? Symbol(e6) : e6
    , l4 = (e6, t5, n6)=>c2({
            l: e6,
            k: t5,
            s: n6
        })
    , c2 = (e6)=>JSON.stringify(e6).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
    , u2 = (e6)=>"number" == typeof e6 && isFinite(e6)
    , f2 = (e6)=>"[object Date]" === C2(e6)
    , p2 = (e6)=>"[object RegExp]" === C2(e6)
    , d2 = (e6)=>P2(e6) && 0 === Object.keys(e6).length
    ;
    function m2(e6, t5) {
        "undefined" != typeof console && (console.warn("[intlify] " + e6), t5 && console.warn(t5.stack));
    }
    const h2 = Object.assign;
    let g1;
    const y2 = ()=>g1 || (g1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : (void 0) !== e3 ? e3 : {
        })
    ;
    function b2(e6) {
        return e6.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    }
    const v2 = Object.prototype.hasOwnProperty;
    function _2(e6, t5) {
        return v2.call(e6, t5);
    }
    const k2 = Array.isArray, S2 = (e6)=>"function" == typeof e6
    , w2 = (e6)=>"string" == typeof e6
    , x2 = (e6)=>"boolean" == typeof e6
    , O2 = (e6)=>null !== e6 && "object" == typeof e6
    , F1 = Object.prototype.toString, C2 = (e6)=>F1.call(e6)
    , P2 = (e6)=>"[object Object]" === C2(e6)
    , L2 = (e6)=>null == e6 ? "" : k2(e6) || P2(e6) && e6.toString === F1 ? JSON.stringify(e6, null, 2) : String(e6)
    ;
}), a4.register("fvGXC", function(e6, n5) {
    t6(e6.exports, "resolveValue", function() {
        return f2;
    }), t6(e6.exports, "handleFlatJson", function() {
        return p2;
    });
    const r8 = Object.prototype.hasOwnProperty;
    function o4(e7, t5) {
        return r8.call(e7, t5);
    }
    const a7 = (e7)=>null !== e7 && "object" == typeof e7
    , s2 = [];
    s2[0] = {
        w: [
            0
        ],
        i: [
            3,
            0
        ],
        "[": [
            4
        ],
        o: [
            7
        ]
    }, s2[1] = {
        w: [
            1
        ],
        ".": [
            2
        ],
        "[": [
            4
        ],
        o: [
            7
        ]
    }, s2[2] = {
        w: [
            2
        ],
        i: [
            3,
            0
        ],
        0: [
            3,
            0
        ]
    }, s2[3] = {
        i: [
            3,
            0
        ],
        0: [
            3,
            0
        ],
        w: [
            1,
            1
        ],
        ".": [
            2,
            1
        ],
        "[": [
            4,
            1
        ],
        o: [
            7,
            1
        ]
    }, s2[4] = {
        "'": [
            5,
            0
        ],
        '"': [
            6,
            0
        ],
        "[": [
            4,
            2
        ],
        "]": [
            1,
            3
        ],
        o: 8,
        l: [
            4,
            0
        ]
    }, s2[5] = {
        "'": [
            4,
            0
        ],
        o: 8,
        l: [
            5,
            0
        ]
    }, s2[6] = {
        '"': [
            4,
            0
        ],
        o: 8,
        l: [
            6,
            0
        ]
    };
    const i3 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
    function l4(e7) {
        if (null == e7) return "o";
        switch(e7.charCodeAt(0)){
            case 91:
            case 93:
            case 46:
            case 34:
            case 39:
                return e7;
            case 95:
            case 36:
            case 45:
                return "i";
            case 9:
            case 10:
            case 13:
            case 160:
            case 65279:
            case 8232:
            case 8233:
                return "w";
        }
        return "i";
    }
    function c2(e7) {
        const t5 = e7.trim();
        var n6;
        return ("0" !== e7.charAt(0) || !isNaN(parseInt(e7))) && (n6 = t5, i3.test(n6) ? (function(e8) {
            const t7 = e8.charCodeAt(0);
            return t7 !== e8.charCodeAt(e8.length - 1) || 34 !== t7 && 39 !== t7 ? e8 : e8.slice(1, -1);
        })(t5) : "*" + t5);
    }
    const u2 = new Map;
    function f2(e7, t5) {
        if (!a7(e7)) return null;
        let n6 = u2.get(t5);
        if (n6 || (n6 = (function(e8) {
            const t7 = [];
            let n8, r10, o5, a8, i4, u3, f3, p2 = -1, d2 = 0, m2 = 0;
            const h2 = [];
            function g1() {
                const t8 = e8[p2 + 1];
                if (5 === d2 && "'" === t8 || 6 === d2 && '"' === t8) return p2++, o5 = "\\" + t8, h2[0](), !0;
            }
            for(h2[0] = ()=>{
                (void 0) === r10 ? r10 = o5 : r10 += o5;
            }, h2[1] = ()=>{
                (void 0) !== r10 && (t7.push(r10), r10 = void 0);
            }, h2[2] = ()=>{
                h2[0](), m2++;
            }, h2[3] = ()=>{
                if (m2 > 0) m2--, d2 = 4, h2[0]();
                else {
                    if (m2 = 0, (void 0) === r10) return !1;
                    if (r10 = c2(r10), !1 === r10) return !1;
                    h2[1]();
                }
            }; null !== d2;)if (p2++, n8 = e8[p2], "\\" !== n8 || !g1()) {
                if (a8 = l4(n8), f3 = s2[d2], i4 = f3[a8] || f3.l || 8, 8 === i4) return;
                if (d2 = i4[0], (void 0) !== i4[1] && (u3 = h2[i4[1]], u3 && (o5 = n8, !1 === u3()))) return;
                if (7 === d2) return t7;
            }
        })(t5), n6 && u2.set(t5, n6)), !n6) return null;
        const r10 = n6.length;
        let o5 = e7, i4 = 0;
        for(; i4 < r10;){
            const e8 = o5[n6[i4]];
            if ((void 0) === e8) return null;
            o5 = e8, i4++;
        }
        return o5;
    }
    function p2(e7) {
        if (!a7(e7)) return e7;
        for(const t5 in e7)if (o4(e7, t5)) {
            if (t5.includes(".")) {
                const n6 = t5.split("."), r10 = n6.length - 1;
                let o5 = e7;
                for(let e8 = 0; e8 < r10; e8++)n6[e8] in o5 || (o5[n6[e8]] = {
                }), o5 = o5[n6[e8]];
                o5[n6[r10]] = e7[t5], delete e7[t5], a7(o5[n6[r10]]) && p2(o5[n6[r10]]);
            } else a7(e7[t5]) && p2(e7[t5]);
        }
        return e7;
    }
}), a4.register("bSonI", function(e6, n5) {
    t6(e6.exports, "createMessageContext", function() {
        return u2;
    });
    var r8 = a4("lypt6");
    const o4 = (e7)=>e7
    , s2 = (e7)=>""
    , i3 = (e7)=>0 === e7.length ? "" : e7.join("")
    , l4 = r8.toDisplayString;
    function c2(e7, t5) {
        return e7 = Math.abs(e7), 2 === t5 ? e7 ? e7 > 1 ? 1 : 0 : 1 : e7 ? Math.min(e7, 2) : 0;
    }
    function u2(e7 = {
    }) {
        const t5 = e7.locale, n6 = function(e8) {
            const t7 = r8.isNumber(e8.pluralIndex) ? e8.pluralIndex : -1;
            return e8.named && (r8.isNumber(e8.named.count) || r8.isNumber(e8.named.n)) ? r8.isNumber(e8.named.count) ? e8.named.count : r8.isNumber(e8.named.n) ? e8.named.n : t7 : t7;
        }(e7), a7 = r8.isObject(e7.pluralRules) && r8.isString(t5) && r8.isFunction(e7.pluralRules[t5]) ? e7.pluralRules[t5] : c2, u3 = r8.isObject(e7.pluralRules) && r8.isString(t5) && r8.isFunction(e7.pluralRules[t5]) ? c2 : void 0, f2 = e7.list || [], p2 = e7.named || {
        };
        r8.isNumber(e7.pluralIndex) && (function(e8, t7) {
            t7.count || (t7.count = e8), t7.n || (t7.n = e8);
        })(n6, p2);
        function d2(t7) {
            const n8 = r8.isFunction(e7.messages) ? e7.messages(t7) : !!r8.isObject(e7.messages) && e7.messages[t7];
            return n8 || (e7.parent ? e7.parent.message(t7) : s2);
        }
        const m2 = r8.isPlainObject(e7.processor) && r8.isFunction(e7.processor.normalize) ? e7.processor.normalize : i3, h2 = r8.isPlainObject(e7.processor) && r8.isFunction(e7.processor.interpolate) ? e7.processor.interpolate : l4, g1 = {
            list: (e8)=>f2[e8]
            ,
            named: (e8)=>p2[e8]
            ,
            plural: (e8)=>e8[a7(n6, e8.length, u3)]
            ,
            linked: (t7, n8)=>{
                const a8 = d2(t7)(g1);
                var s3;
                return r8.isString(n8) ? (s3 = n8, e7.modifiers ? e7.modifiers[s3] : o4)(a8) : a8;
            },
            message: d2,
            type: r8.isPlainObject(e7.processor) && r8.isString(e7.processor.type) ? e7.processor.type : "text",
            interpolate: h2,
            normalize: m2
        };
        return g1;
    }
}), a4.register("jLtYr", function(e6, n5) {
    t6(e6.exports, "defaultOnError", function() {
        return s2;
    }), t6(e6.exports, "baseCompile", function() {
        return w2;
    }), t6(e6.exports, "createCompileError", function() {
        return o4;
    });
    var r8 = a4("lypt6");
    function o4(e7, t5, n6 = {
    }) {
        const { domain: r10 , messages: o5 , args: a7  } = n6, s2 = new SyntaxError(String(e7));
        return s2.code = e7, t5 && (s2.location = t5), s2.domain = r10, s2;
    }
    function s2(e7) {
        throw e7;
    }
    function i3(e7, t5, n6) {
        const r10 = {
            start: e7,
            end: t5
        };
        return null != n6 && (r10.source = n6), r10;
    }
    const l4 = " ", c2 = "\n", u2 = String.fromCharCode(8232), f2 = String.fromCharCode(8233);
    function p2(e7) {
        const t5 = e7;
        let n6 = 0, r10 = 1, o5 = 1, a7 = 0;
        const s4 = (e8)=>"\r" === t5[e8] && t5[e8 + 1] === c2
        , i4 = (e8)=>t5[e8] === f2
        , l5 = (e8)=>t5[e8] === u2
        , p3 = (e8)=>s4(e8) || ((e9)=>t5[e9] === c2
            )(e8) || i4(e8) || l5(e8)
        , d2 = (e8)=>s4(e8) || i4(e8) || l5(e8) ? c2 : t5[e8]
        ;
        function m2() {
            return a7 = 0, p3(n6) && (r10++, o5 = 0), s4(n6) && n6++, n6++, o5++, t5[n6];
        }
        return {
            index: ()=>n6
            ,
            line: ()=>r10
            ,
            column: ()=>o5
            ,
            peekOffset: ()=>a7
            ,
            charAt: d2,
            currentChar: ()=>d2(n6)
            ,
            currentPeek: ()=>d2(n6 + a7)
            ,
            next: m2,
            peek: function() {
                return s4(n6 + a7) && a7++, a7++, t5[n6 + a7];
            },
            reset: function() {
                n6 = 0, r10 = 1, o5 = 1, a7 = 0;
            },
            resetPeek: function(e8 = 0) {
                a7 = e8;
            },
            skipToPeek: function() {
                const e8 = n6 + a7;
                for(; e8 !== n6;)m2();
                a7 = 0;
            }
        };
    }
    const d2 = void 0;
    function m2(e7, t5 = {
    }) {
        const n6 = !1 !== t5.location, r10 = p2(e7), a7 = ()=>r10.index()
        , s4 = ()=>{
            var e8, t7, n8;
            return e8 = r10.line(), t7 = r10.column(), n8 = r10.index(), {
                line: e8,
                column: t7,
                offset: n8
            };
        }, u3 = s4(), f3 = a7(), m3 = {
            currentType: 14,
            offset: f3,
            startLoc: u3,
            endLoc: u3,
            lastType: 14,
            lastOffset: f3,
            lastStartLoc: u3,
            lastEndLoc: u3,
            braceNest: 0,
            inLinked: !1,
            text: ""
        }, h2 = ()=>m3
        , { onError: g1  } = t5;
        function y2(e9, t8, n9, ...r11) {
            const a8 = h2();
            if (t8.column += n9, t8.offset += n9, g1) {
                const n10 = o4(e9, i3(a8.startLoc, t8), {
                    domain: "tokenizer",
                    args: r11
                });
                g1(n10);
            }
        }
        function b2(e9, t8, r11) {
            e9.endLoc = s4(), e9.currentType = t8;
            const o5 = {
                type: t8
            };
            return n6 && (o5.loc = i3(e9.startLoc, e9.endLoc)), null != r11 && (o5.value = r11), o5;
        }
        const v2 = (e9)=>b2(e9, 14)
        ;
        function _2(e9, t8) {
            return e9.currentChar() === t8 ? (e9.next(), t8) : (y2(0, s4(), 0, t8), "");
        }
        function k2(e9) {
            let t8 = "";
            for(; e9.currentPeek() === l4 || e9.currentPeek() === c2;)t8 += e9.currentPeek(), e9.peek();
            return t8;
        }
        function S2(e9) {
            const t8 = k2(e9);
            return e9.skipToPeek(), t8;
        }
        function w2(e9) {
            if (e9 === d2) return !1;
            const t8 = e9.charCodeAt(0);
            return t8 >= 97 && t8 <= 122 || t8 >= 65 && t8 <= 90 || 95 === t8;
        }
        function x2(e9, t8) {
            const { currentType: n9  } = t8;
            if (2 !== n9) return !1;
            k2(e9);
            const r11 = function(e10) {
                if (e10 === d2) return !1;
                const t9 = e10.charCodeAt(0);
                return t9 >= 48 && t9 <= 57;
            }("-" === e9.currentPeek() ? e9.peek() : e9.currentPeek());
            return e9.resetPeek(), r11;
        }
        function O2(e9) {
            k2(e9);
            const t8 = "|" === e9.currentPeek();
            return e9.resetPeek(), t8;
        }
        function F1(e9, t8 = !0) {
            const n9 = (t9 = !1, r11 = "", o5 = !1)=>{
                const a8 = e9.currentPeek();
                return "{" === a8 ? "%" !== r11 && t9 : "@" !== a8 && a8 ? "%" === a8 ? (e9.peek(), n9(t9, "%", !0)) : "|" === a8 ? !("%" !== r11 && !o5) || !(r11 === l4 || r11 === c2) : a8 === l4 ? (e9.peek(), n9(!0, l4, o5)) : a8 !== c2 || (e9.peek(), n9(!0, c2, o5)) : "%" === r11 || t9;
            }, r11 = n9();
            return t8 && e9.resetPeek(), r11;
        }
        function C2(e9, t8) {
            const n9 = e9.currentChar();
            return n9 === d2 ? d2 : t8(n9) ? (e9.next(), n9) : null;
        }
        function P2(e9) {
            return C2(e9, (e10)=>{
                const t8 = e10.charCodeAt(0);
                return t8 >= 97 && t8 <= 122 || t8 >= 65 && t8 <= 90 || t8 >= 48 && t8 <= 57 || 95 === t8 || 36 === t8;
            });
        }
        function L2(e9) {
            return C2(e9, (e10)=>{
                const t8 = e10.charCodeAt(0);
                return t8 >= 48 && t8 <= 57;
            });
        }
        function T1(e9) {
            return C2(e9, (e10)=>{
                const t8 = e10.charCodeAt(0);
                return t8 >= 48 && t8 <= 57 || t8 >= 65 && t8 <= 70 || t8 >= 97 && t8 <= 102;
            });
        }
        function j2(e9) {
            let t8 = "", n9 = "";
            for(; t8 = L2(e9);)n9 += t8;
            return n9;
        }
        function I2(e9) {
            const t8 = e9.currentChar();
            switch(t8){
                case "\\":
                case "'":
                    return e9.next(), `\\${t8}`;
                case "u":
                    return M2(e9, t8, 4);
                case "U":
                    return M2(e9, t8, 6);
                default:
                    return y2(3, s4(), 0, t8), "";
            }
        }
        function M2(e9, t8, n9) {
            _2(e9, t8);
            let r11 = "";
            for(let o5 = 0; o5 < n9; o5++){
                const n10 = T1(e9);
                if (!n10) {
                    y2(4, s4(), 0, `\\${t8}${r11}${e9.currentChar()}`);
                    break;
                }
                r11 += n10;
            }
            return `\\${t8}${r11}`;
        }
        function A1(e9) {
            S2(e9);
            const t8 = _2(e9, "|");
            return S2(e9), t8;
        }
        function N2(e9, t8) {
            let n9 = null;
            switch(e9.currentChar()){
                case "{":
                    return t8.braceNest >= 1 && y2(8, s4(), 0), e9.next(), n9 = b2(t8, 2, "{"), S2(e9), t8.braceNest++, n9;
                case "}":
                    return t8.braceNest > 0 && 2 === t8.currentType && y2(7, s4(), 0), e9.next(), n9 = b2(t8, 3, "}"), t8.braceNest--, t8.braceNest > 0 && S2(e9), t8.inLinked && 0 === t8.braceNest && (t8.inLinked = !1), n9;
                case "@":
                    return t8.braceNest > 0 && y2(6, s4(), 0), n9 = E2(e9, t8) || v2(t8), t8.braceNest = 0, n9;
                default:
                    let r11 = !0, o5 = !0, a8 = !0;
                    if (O2(e9)) return t8.braceNest > 0 && y2(6, s4(), 0), n9 = b2(t8, 1, A1(e9)), t8.braceNest = 0, t8.inLinked = !1, n9;
                    if (t8.braceNest > 0 && (5 === t8.currentType || 6 === t8.currentType || 7 === t8.currentType)) return y2(6, s4(), 0), t8.braceNest = 0, R2(e9, t8);
                    if (r11 = (function(e10, t9) {
                        const { currentType: n10  } = t9;
                        if (2 !== n10) return !1;
                        k2(e10);
                        const r12 = w2(e10.currentPeek());
                        return e10.resetPeek(), r12;
                    })(e9, t8)) return n9 = b2(t8, 5, function(e10) {
                        S2(e10);
                        let t9 = "", n10 = "";
                        for(; t9 = P2(e10);)n10 += t9;
                        return e10.currentChar() === d2 && y2(6, s4(), 0), n10;
                    }(e9)), S2(e9), n9;
                    if (o5 = x2(e9, t8)) return n9 = b2(t8, 6, function(e10) {
                        S2(e10);
                        let t9 = "";
                        return "-" === e10.currentChar() ? (e10.next(), t9 += `-${j2(e10)}`) : t9 += j2(e10), e10.currentChar() === d2 && y2(6, s4(), 0), t9;
                    }(e9)), S2(e9), n9;
                    if (a8 = (function(e10, t9) {
                        const { currentType: n10  } = t9;
                        if (2 !== n10) return !1;
                        k2(e10);
                        const r12 = "'" === e10.currentPeek();
                        return e10.resetPeek(), r12;
                    })(e9, t8)) return n9 = b2(t8, 7, function(e10) {
                        S2(e10), _2(e10, "'");
                        let t9 = "", n10 = "";
                        const r12 = (e11)=>"'" !== e11 && e11 !== c2
                        ;
                        for(; t9 = C2(e10, r12);)n10 += "\\" === t9 ? I2(e10) : t9;
                        const o6 = e10.currentChar();
                        return o6 === c2 || o6 === d2 ? (y2(2, s4(), 0), o6 === c2 && (e10.next(), _2(e10, "'")), n10) : (_2(e10, "'"), n10);
                    }(e9)), S2(e9), n9;
                    if (!r11 && !o5 && !a8) return n9 = b2(t8, 13, function(e10) {
                        S2(e10);
                        let t9 = "", n10 = "";
                        const r12 = (e11)=>"{" !== e11 && "}" !== e11 && e11 !== l4 && e11 !== c2
                        ;
                        for(; t9 = C2(e10, r12);)n10 += t9;
                        return n10;
                    }(e9)), y2(1, s4(), 0, n9.value), S2(e9), n9;
            }
            return n9;
        }
        function E2(e9, t8) {
            const { currentType: n9  } = t8;
            let r11 = null;
            const o5 = e9.currentChar();
            switch(8 !== n9 && 9 !== n9 && 12 !== n9 && 10 !== n9 || o5 !== c2 && o5 !== l4 || y2(9, s4(), 0), o5){
                case "@":
                    return e9.next(), r11 = b2(t8, 8, "@"), t8.inLinked = !0, r11;
                case ".":
                    return S2(e9), e9.next(), b2(t8, 9, ".");
                case ":":
                    return S2(e9), e9.next(), b2(t8, 10, ":");
                default:
                    return O2(e9) ? (r11 = b2(t8, 1, A1(e9)), t8.braceNest = 0, t8.inLinked = !1, r11) : (function(e10, t9) {
                        const { currentType: n10  } = t9;
                        if (8 !== n10) return !1;
                        k2(e10);
                        const r12 = "." === e10.currentPeek();
                        return e10.resetPeek(), r12;
                    })(e9, t8) || (function(e10, t9) {
                        const { currentType: n10  } = t9;
                        if (8 !== n10 && 12 !== n10) return !1;
                        k2(e10);
                        const r12 = ":" === e10.currentPeek();
                        return e10.resetPeek(), r12;
                    })(e9, t8) ? (S2(e9), E2(e9, t8)) : (function(e10, t9) {
                        const { currentType: n10  } = t9;
                        if (9 !== n10) return !1;
                        k2(e10);
                        const r12 = w2(e10.currentPeek());
                        return e10.resetPeek(), r12;
                    })(e9, t8) ? (S2(e9), b2(t8, 12, function(e10) {
                        let t9 = "", n10 = "";
                        for(; t9 = P2(e10);)n10 += t9;
                        return n10;
                    }(e9))) : (function(e10, t9) {
                        const { currentType: n10  } = t9;
                        if (10 !== n10) return !1;
                        const r12 = ()=>{
                            const t10 = e10.currentPeek();
                            return "{" === t10 ? w2(e10.peek()) : !("@" === t10 || "%" === t10 || "|" === t10 || ":" === t10 || "." === t10 || t10 === l4 || !t10) && (t10 === c2 ? (e10.peek(), r12()) : w2(t10));
                        }, o6 = r12();
                        return e10.resetPeek(), o6;
                    })(e9, t8) ? (S2(e9), "{" === o5 ? N2(e9, t8) || r11 : b2(t8, 11, function(e10) {
                        const t9 = (n10 = !1, r12)=>{
                            const o6 = e10.currentChar();
                            return "{" !== o6 && "%" !== o6 && "@" !== o6 && "|" !== o6 && o6 ? o6 === l4 ? r12 : o6 === c2 ? (r12 += o6, e10.next(), t9(n10, r12)) : (r12 += o6, e10.next(), t9(!0, r12)) : r12;
                        };
                        return t9(!1, "");
                    }(e9))) : (8 === n9 && y2(9, s4(), 0), t8.braceNest = 0, t8.inLinked = !1, R2(e9, t8));
            }
        }
        function R2(e9, t8) {
            let n9 = {
                type: 14
            };
            if (t8.braceNest > 0) return N2(e9, t8) || v2(t8);
            if (t8.inLinked) return E2(e9, t8) || v2(t8);
            const r11 = e9.currentChar();
            switch(r11){
                case "{":
                    return N2(e9, t8) || v2(t8);
                case "}":
                    return y2(5, s4(), 0), e9.next(), b2(t8, 3, "}");
                case "@":
                    return E2(e9, t8) || v2(t8);
                default:
                    if (O2(e9)) return n9 = b2(t8, 1, A1(e9)), t8.braceNest = 0, t8.inLinked = !1, n9;
                    if (F1(e9)) return b2(t8, 0, function(e10) {
                        const t9 = (n10)=>{
                            const r12 = e10.currentChar();
                            return "{" !== r12 && "}" !== r12 && "@" !== r12 && r12 ? "%" === r12 ? F1(e10) ? (n10 += r12, e10.next(), t9(n10)) : n10 : "|" === r12 ? n10 : r12 === l4 || r12 === c2 ? F1(e10) ? (n10 += r12, e10.next(), t9(n10)) : O2(e10) ? n10 : (n10 += r12, e10.next(), t9(n10)) : (n10 += r12, e10.next(), t9(n10)) : n10;
                        };
                        return t9("");
                    }(e9));
                    if ("%" === r11) return e9.next(), b2(t8, 4, "%");
            }
            return n9;
        }
        return {
            nextToken: function() {
                const { currentType: e9 , offset: t8 , startLoc: n9 , endLoc: o5  } = m3;
                return m3.lastType = e9, m3.lastOffset = t8, m3.lastStartLoc = n9, m3.lastEndLoc = o5, m3.offset = a7(), m3.startLoc = s4(), r10.currentChar() === d2 ? b2(m3, 14) : R2(r10, m3);
            },
            currentOffset: a7,
            currentPosition: s4,
            context: h2
        };
    }
    const h2 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
    function g1(e7, t5, n6) {
        switch(e7){
            case "\\\\":
                return "\\";
            case "\\'":
                return "'";
            default:
                {
                    const e9 = parseInt(t5 || n6, 16);
                    return e9 <= 55295 || e9 >= 57344 ? String.fromCodePoint(e9) : "�";
                }
        }
    }
    function y2(e7 = {
    }) {
        const t5 = !1 !== e7.location, { onError: n6  } = e7;
        function a7(e9, t8, r10, a8, ...s4) {
            const l5 = e9.currentPosition();
            if (l5.offset += a8, l5.column += a8, n6) {
                const e10 = o4(t8, i3(r10, l5), {
                    domain: "parser",
                    args: s4
                });
                n6(e10);
            }
        }
        function s4(e9, n9, r10) {
            const o5 = {
                type: e9,
                start: n9,
                end: n9
            };
            return t5 && (o5.loc = {
                start: r10,
                end: r10
            }), o5;
        }
        function l5(e9, n9, r10, o5) {
            e9.end = n9, o5 && (e9.type = o5), t5 && e9.loc && (e9.loc.end = r10);
        }
        function c3(e9, t8) {
            const n9 = e9.context(), r10 = s4(3, n9.offset, n9.startLoc);
            return r10.value = t8, l5(r10, e9.currentOffset(), e9.currentPosition()), r10;
        }
        function u3(e9, t8) {
            const n9 = e9.context(), { lastOffset: r10 , lastStartLoc: o5  } = n9, a8 = s4(5, r10, o5);
            return a8.index = parseInt(t8, 10), e9.nextToken(), l5(a8, e9.currentOffset(), e9.currentPosition()), a8;
        }
        function f3(e9, t8) {
            const n9 = e9.context(), { lastOffset: r10 , lastStartLoc: o5  } = n9, a8 = s4(4, r10, o5);
            return a8.key = t8, e9.nextToken(), l5(a8, e9.currentOffset(), e9.currentPosition()), a8;
        }
        function p3(e9, t8) {
            const n9 = e9.context(), { lastOffset: r10 , lastStartLoc: o5  } = n9, a8 = s4(9, r10, o5);
            return a8.value = t8.replace(h2, g1), e9.nextToken(), l5(a8, e9.currentOffset(), e9.currentPosition()), a8;
        }
        function d3(e9) {
            const t8 = e9.context(), n9 = s4(6, t8.offset, t8.startLoc);
            let r10 = e9.nextToken();
            if (9 === r10.type) {
                const t9 = function(e10) {
                    const t10 = e10.nextToken(), n10 = e10.context(), { lastOffset: r11 , lastStartLoc: o5  } = n10, i4 = s4(8, r11, o5);
                    return 12 !== t10.type ? (a7(e10, 11, n10.lastStartLoc, 0), i4.value = "", l5(i4, r11, o5), {
                        nextConsumeToken: t10,
                        node: i4
                    }) : (null == t10.value && a7(e10, 13, n10.lastStartLoc, 0, b2(t10)), i4.value = t10.value || "", l5(i4, e10.currentOffset(), e10.currentPosition()), {
                        node: i4
                    });
                }(e9);
                n9.modifier = t9.node, r10 = t9.nextConsumeToken || e9.nextToken();
            }
            switch(10 !== r10.type && a7(e9, 13, t8.lastStartLoc, 0, b2(r10)), r10 = e9.nextToken(), 2 === r10.type && (r10 = e9.nextToken()), r10.type){
                case 11:
                    null == r10.value && a7(e9, 13, t8.lastStartLoc, 0, b2(r10)), n9.key = (function(e10, t9) {
                        const n10 = e10.context(), r11 = s4(7, n10.offset, n10.startLoc);
                        return r11.value = t9, l5(r11, e10.currentOffset(), e10.currentPosition()), r11;
                    })(e9, r10.value || "");
                    break;
                case 5:
                    null == r10.value && a7(e9, 13, t8.lastStartLoc, 0, b2(r10)), n9.key = f3(e9, r10.value || "");
                    break;
                case 6:
                    null == r10.value && a7(e9, 13, t8.lastStartLoc, 0, b2(r10)), n9.key = u3(e9, r10.value || "");
                    break;
                case 7:
                    null == r10.value && a7(e9, 13, t8.lastStartLoc, 0, b2(r10)), n9.key = p3(e9, r10.value || "");
                    break;
                default:
                    a7(e9, 12, t8.lastStartLoc, 0);
                    const o5 = e9.context(), i4 = s4(7, o5.offset, o5.startLoc);
                    return i4.value = "", l5(i4, o5.offset, o5.startLoc), n9.key = i4, l5(n9, o5.offset, o5.startLoc), {
                        nextConsumeToken: r10,
                        node: n9
                    };
            }
            return l5(n9, e9.currentOffset(), e9.currentPosition()), {
                node: n9
            };
        }
        function y3(e9) {
            const t8 = e9.context(), n9 = s4(2, 1 === t8.currentType ? e9.currentOffset() : t8.offset, 1 === t8.currentType ? t8.endLoc : t8.startLoc);
            n9.items = [];
            let r10 = null;
            do {
                const o5 = r10 || e9.nextToken();
                switch(r10 = null, o5.type){
                    case 0:
                        null == o5.value && a7(e9, 13, t8.lastStartLoc, 0, b2(o5)), n9.items.push(c3(e9, o5.value || ""));
                        break;
                    case 6:
                        null == o5.value && a7(e9, 13, t8.lastStartLoc, 0, b2(o5)), n9.items.push(u3(e9, o5.value || ""));
                        break;
                    case 5:
                        null == o5.value && a7(e9, 13, t8.lastStartLoc, 0, b2(o5)), n9.items.push(f3(e9, o5.value || ""));
                        break;
                    case 7:
                        null == o5.value && a7(e9, 13, t8.lastStartLoc, 0, b2(o5)), n9.items.push(p3(e9, o5.value || ""));
                        break;
                    case 8:
                        const s5 = d3(e9);
                        n9.items.push(s5.node), r10 = s5.nextConsumeToken || null;
                }
            }while (14 !== t8.currentType && 1 !== t8.currentType)
            return l5(n9, 1 === t8.currentType ? t8.lastOffset : e9.currentOffset(), 1 === t8.currentType ? t8.lastEndLoc : e9.currentPosition()), n9;
        }
        function v2(e9) {
            const t8 = e9.context(), { offset: n9 , startLoc: r10  } = t8, o5 = y3(e9);
            return 14 === t8.currentType ? o5 : (function(e10, t9, n10, r11) {
                const o6 = e10.context();
                let i4 = 0 === r11.items.length;
                const c4 = s4(1, t9, n10);
                c4.cases = [], c4.cases.push(r11);
                do {
                    const t10 = y3(e10);
                    i4 || (i4 = 0 === t10.items.length), c4.cases.push(t10);
                }while (14 !== o6.currentType)
                return i4 && a7(e10, 10, n10, 0), l5(c4, e10.currentOffset(), e10.currentPosition()), c4;
            })(e9, n9, r10, o5);
        }
        return {
            parse: function(n9) {
                const o5 = m2(n9, r8.assign({
                }, e7)), i4 = o5.context(), c4 = s4(0, i4.offset, i4.startLoc);
                return t5 && c4.loc && (c4.loc.source = n9), c4.body = v2(o5), 14 !== i4.currentType && a7(o5, 13, i4.lastStartLoc, 0, n9[i4.offset] || ""), l5(c4, o5.currentOffset(), o5.currentPosition()), c4;
            }
        };
    }
    function b2(e7) {
        if (14 === e7.type) return "EOF";
        const t5 = (e7.value || "").replace(/\r?\n/gu, "\\n");
        return t5.length > 10 ? t5.slice(0, 9) + "…" : t5;
    }
    function v2(e7, t5) {
        for(let n6 = 0; n6 < e7.length; n6++)_2(e7[n6], t5);
    }
    function _2(e7, t5) {
        switch(e7.type){
            case 1:
                v2(e7.cases, t5), t5.helper("plural");
                break;
            case 2:
                v2(e7.items, t5);
                break;
            case 6:
                _2(e7.key, t5), t5.helper("linked");
                break;
            case 5:
                t5.helper("interpolate"), t5.helper("list");
                break;
            case 4:
                t5.helper("interpolate"), t5.helper("named");
        }
    }
    function k2(e7, t5 = {
    }) {
        const n6 = function(e9, t8 = {
        }) {
            const n9 = {
                ast: e9,
                helpers: new Set
            };
            return {
                context: ()=>n9
                ,
                helper: (e10)=>(n9.helpers.add(e10), e10)
            };
        }(e7);
        n6.helper("normalize"), e7.body && _2(e7.body, n6);
        const r10 = n6.context();
        e7.helpers = Array.from(r10.helpers);
    }
    function S2(e7, t5) {
        const { helper: n6  } = e7;
        switch(t5.type){
            case 0:
                !function(e9, t8) {
                    t8.body ? S2(e9, t8.body) : e9.push("null");
                }(e7, t5);
                break;
            case 1:
                !function(e9, t8) {
                    const { helper: n9 , needIndent: r10  } = e9;
                    if (t8.cases.length > 1) {
                        e9.push(`${n9("plural")}([`), e9.indent(r10());
                        const o5 = t8.cases.length;
                        for(let n10 = 0; n10 < o5 && (S2(e9, t8.cases[n10]), n10 !== o5 - 1); n10++)e9.push(", ");
                        e9.deindent(r10()), e9.push("])");
                    }
                }(e7, t5);
                break;
            case 2:
                !function(e9, t8) {
                    const { helper: n9 , needIndent: r10  } = e9;
                    e9.push(`${n9("normalize")}([`), e9.indent(r10());
                    const o5 = t8.items.length;
                    for(let n10 = 0; n10 < o5 && (S2(e9, t8.items[n10]), n10 !== o5 - 1); n10++)e9.push(", ");
                    e9.deindent(r10()), e9.push("])");
                }(e7, t5);
                break;
            case 6:
                !function(e9, t8) {
                    const { helper: n9  } = e9;
                    e9.push(`${n9("linked")}(`), S2(e9, t8.key), t8.modifier && (e9.push(", "), S2(e9, t8.modifier)), e9.push(")");
                }(e7, t5);
                break;
            case 8:
            case 7:
                e7.push(JSON.stringify(t5.value), t5);
                break;
            case 5:
                e7.push(`${n6("interpolate")}(${n6("list")}(${t5.index}))`, t5);
                break;
            case 4:
                e7.push(`${n6("interpolate")}(${n6("named")}(${JSON.stringify(t5.key)}))`, t5);
                break;
            case 9:
            case 3:
                e7.push(JSON.stringify(t5.value), t5);
        }
    }
    function w2(e7, t5 = {
    }) {
        const n6 = r8.assign({
        }, t5), o5 = y2(n6).parse(e7);
        return k2(o5, n6), ((e9, t8 = {
        })=>{
            const n9 = r8.isString(t8.mode) ? t8.mode : "normal", o6 = r8.isString(t8.filename) ? t8.filename : "message.intl", a7 = !!t8.sourceMap, s4 = null != t8.breakLineCode ? t8.breakLineCode : "arrow" === n9 ? ";" : "\n", i4 = t8.needIndent ? t8.needIndent : "arrow" !== n9, l5 = e9.helpers || [], c3 = function(e10, t9) {
                const { sourceMap: n10 , filename: r10 , breakLineCode: o7 , needIndent: a8  } = t9, s5 = {
                    source: e10.loc.source,
                    filename: r10,
                    code: "",
                    column: 1,
                    line: 1,
                    offset: 0,
                    map: void 0,
                    breakLineCode: o7,
                    needIndent: a8,
                    indentLevel: 0
                };
                function i5(e11, t10) {
                    s5.code += e11;
                }
                function l6(e11, t10 = !0) {
                    const n11 = t10 ? o7 : "";
                    i5(a8 ? n11 + "  ".repeat(e11) : n11);
                }
                return {
                    context: ()=>s5
                    ,
                    push: i5,
                    indent: function(e11 = !0) {
                        const t10 = ++s5.indentLevel;
                        e11 && l6(t10);
                    },
                    deindent: function(e11 = !0) {
                        const t10 = --s5.indentLevel;
                        e11 && l6(t10);
                    },
                    newline: function() {
                        l6(s5.indentLevel);
                    },
                    helper: (e11)=>`_${e11}`
                    ,
                    needIndent: ()=>s5.needIndent
                };
            }(e9, {
                mode: n9,
                filename: o6,
                sourceMap: a7,
                breakLineCode: s4,
                needIndent: i4
            });
            c3.push("normal" === n9 ? "function __msg__ (ctx) {" : "(ctx) => {"), c3.indent(i4), l5.length > 0 && (c3.push(`const { ${l5.map((e10)=>`${e10}: _${e10}`
            ).join(", ")} } = ctx`), c3.newline()), c3.push("return "), S2(c3, e9), c3.deindent(i4), c3.push("}");
            const { code: u3 , map: f3  } = c3.context();
            return {
                ast: e9,
                code: u3,
                map: f3 ? f3.toJSON() : void 0
            };
        })(o5, n6);
    }
}), a4.register("bF9s8", function(e6, n5) {
    t6(e6.exports, "IntlifyDevToolsHooks", function() {
        return r8;
    });
    /*!
  * @intlify/devtools-if v9.1.7
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */ const r8 = {
        I18nInit: "i18n:init",
        FunctionTranslate: "function:translate"
    };
}), lo = a4("63CYy");
var co;
co = JSON.parse('{"alert":{"completeRestore":"Restore complete.","errorSubmit":"There was a problem with processing.","failedApply":"Failed to apply due to an error.","failedGetData":"Failed get data.","failedRestore":"Restore failed.","invalidAddress":"The address is invalid. ","invalidData":"The data is invalid.","noSelectedFile":"There is no file selected."},"base":{"ShortcutKey":"Shortcut key","add":"Add","address":"Address","advanced":"Advanced","apply":"Apply","array":"Array","author":"Author","autoplay":"Autoplay","backup":"Backup","basic":"Basic","caption":"Caption","close":"Close","contain":"Contain","controller":"Controller","cover":"Cover","darkMode":"Dark mode","data":"Data","description":"Description","edit":"Edit","file":"File","fullscreen":"Fullscreen","general":"General","group":"Group","groupKey":"Group key","guide":"Guide","hud":"HUD","image":"Image","imageUrl":"Image URL","information":"Information","inputAddress":"Please input address.","inputKey":"Please enter the key.","inputText":"Please input text.","inputUrl":"Please input URL.","keyboard":"Keyboard","language":"Language","leftKey":"Left key","lightMode":"Light mode","menu":"Menu","name":"Name","next":"Next","none":"None","openUrl":"Open URL","paginate":"Slide number","preference":"Preference","previous":"Previous","processing":"Processing..","remove":"Remove","repeat":"Repeat","reset":"Reset","resetSlideshow":"Reset slideshow","restore":"Restore","rightKey":"Right key","shuffleText":"Shuffle text","slides":"Slides","style":"Style","subject":"Subject","submitEdit":"Edit","swipe":"Swipe","system":"System","thumbnail":"Thumbnail","urlThumbnailUrl":"Thumbnail image URL","version":"Version"},"confirm":{"applyRestart":"The slideshow restarts.\\nWould you like to apply?","backup":"Do you really want to back up all your data?\\nThe backed up content is saved as a `JSON` file.","remove":"Do you really want to delete it?","reset":"Do you really want to reset all settings and slide data?\\nOnce initialized, it cannot be recovered.","restart":"Do you really want to restart?","restore":"Would you really want to restore all your data?\\nThis operation will delete all current data.","selectGroup":"Would you like to use it as the slide of your choice?\\nIf you change the slide, it starts over."},"description":{"addSlides":"Please add slides in preferences.","autoplay":"Autoplay the slide.","autoplayDelay":"The amount of time to wait before the slide automatically transitions.","autoplayDirection":"Set the direction in which the slide automatically transitions.","autoplayPauseOnHover":"If you place the mouse over the slide area, autoplay is paused.","backup":"Import or export all data in the slideshow.","captionAnimationSpeed":"The higher the value, the faster the animation.","captionAnimationType":"Select the caption transition when the slide changes.","captionPosition":"Set position of the caption. ex) left,top","captionScale":"Set size of the caption.","empty":"Empty","emptySlides":"No slides.","getDataByRestAPI":"Get data by RestAPI address.","getJsonFile":"Upload the JSON file to get the data.","group":"Opens the slide group selection window.","hoverVisibleHud":"If you overlay mouse, HUD will be hidden.","hud":"It shows controller and status.","imageScale":"Set the size of the slide image. ex) horizontal,vertical","imageType":"Choose slide image type","importDataMethod":"Select how to import your data.","information":"If you have any comments on problems or improvements, please use the %{link} page.","initialNumber":"This is the slide number displayed at the start. (Numbers from 0)","inputDescriptionSlide":"Input description of the slide.","inputImageUrl":"Input image address.","inputKeyOnGroup":"Enter the key value for the slide group.","inputSlideDataCode":"Please input slides data code.","inputSlideTitle":"Input title for the slide.","inputSlidesUrl":"Please enter the slide URL address.","inputThumbnailUrl":"Input thumbnail image address.","keyboardGuide":"Pressing a keyboard shortcut as follows executes the function.","language":"Set the language.","openPreference":"Open preference","repeat":"Moves the slide from last to first.","reset":"Reset all settings and slide data.","restart":"Restart the slideshow","screenMode":"Select a screen mode.","selectGroup":"Select the slide you want to use.","selectJsonFile":"Please select a JSON file.","selectSlidesType":"Select the slide data type.","selectSlidesType2":"If you change and apply the URL address method, the slide data will be lost.","setCategoryDescription":"Set the description of the category.","setCategoryName":"Set the name of the category.","swipe":"Use swipe operations on touch devices","thumbnail":"Open the thumbnail image list screen","touchHud":"Toggles the HUD when clicking the mouse or touching the screen.","transitionSpeed":"Change transition animation speed.","transitionType":"Select the transition type when the slide changes.","usingKeyboard":"Use keyboard shortcuts.","visibleContents":"Set the display of each controller and status."},"label":{"addGroup":"Add group","addSlide":"Add slide","editGroup":"Edit group","editSlide":"Edit slide","fadeInOut":"Fade in/out","getData":"Import data","imageType":"Image type","moveHorizontal":"Move horizontally","nextSlide":"Go to next slide","prevSlide":"Go to previous slide","removeGroup":"Remove group"},"language":{"en":"English","ko":"Korean"},"preference":{"header":{"data":"Manage slide data.","general":"Set the basic items.","information":"You can check information about the slideshow.","keyboard":"Settings related to keyboard shortcuts.","slides":"Set the parts related to the slide.","style":"Set the parts displayed on the screen."}},"title":{"autoplayDelay":"Autoplay delay","autoplayDirection":"Autoplay direction","autoplayPauseOnHover":"Autoplay pause on hover","backupOrRestore":"Backup & Restore","captionAnimationSpeed":"Caption animation speed","captionAnimationType":"Caption animation type","captionPosition":"Caption position","captionScale":"Caption scale","changeMode":"Change the editing mode.","emptySlide":"Empty slide","fold":"Fold and unfold","getSlideItems":"Get slide items","hoverVisibleHud":"Visible Hover HUD","imageScale":"Image scale","importDataByAddress":"Import by address","importDataByFile":"Import to file","importSlideData":"Import slide data.","initialNumber":"Initial slide number","loading":"Ready Slideshow..","manageSlideData":"Manage slides data","screenMode":"Screen mode","selectGroup":"Select group","selectSlidesType":"Select slide type","slidesUrlAddress":"Slide URL address","thumbnailView":"Thumbnail view","touchHud":"Toggle HUD on click or touch","transitionSpeed":"Transition speed","transitionType":"Transition type","usingKeyboard":"Using keyboard shortcut","visibleContents":"Visible contents"}}');
var uo;
uo = JSON.parse('{"alert":{"completeRestore":"복원을 완료했습니다.","errorSubmit":"처리에 문제가 생겼습니다.","failedApply":"오류가 발생하여 적용하지 못했습니다.","failedGetData":"데이터를 가져오는데 실패했습니다.","failedRestore":"복원에 실패했습니다.","invalidAddress":"주소가 잘못되었습니다.","invalidData":"데이터가 잘못되었습니다.","noSelectedFile":"선택한 파일이 없습니다."},"base":{"ShortcutKey":"단축키","add":"추가하기","address":"주소","advanced":"전문가","apply":"적용하기","array":"배열","author":"제작자","autoplay":"자동재생","backup":"백업","basic":"기본","caption":"캡션","close":"닫기","contain":"전부 보이기","controller":"컨트롤러","cover":"꽉채우기","darkMode":"다크 모드","data":"데이터","description":"설명","edit":"수정","file":"파일","fullscreen":"전체화면","general":"기본","group":"그룹","groupKey":"그룹 키","guide":"가이드","hud":"HUD","image":"이미지","imageUrl":"이미지 URL","information":"정보","inputAddress":"주소를 입력해주세요.","inputKey":"키를 입력해주세요.","inputText":"글자를 입력해주세요.","inputUrl":"URL을 입력하세요.","keyboard":"키보드","language":"언어","leftKey":"왼쪽 방향키","lightMode":"라이트 모드","menu":"메뉴","name":"이름","next":"다음","none":"없음","openUrl":"URL 열기","paginate":"슬라이드 번호","preference":"환경설정","previous":"이전","processing":"처리중..","remove":"삭제","repeat":"반복","reset":"재설정","resetSlideshow":"슬라이드쇼 재설정","restore":"복원","rightKey":"오른쪽 방향키","shuffleText":"무작위로 변하는 글자","slides":"슬라이드","style":"스타일","subject":"제목","submitEdit":"수정하기","swipe":"밀어 넘기기","system":"시스템","thumbnail":"썸네일","urlThumbnailUrl":"썸네일 이미지 URL","version":"버전"},"confirm":{"applyRestart":"슬라이드쇼가 재시작됩니다.\\n적용하시겠습니까?","backup":"정말 모든 데이터를 백업할까요?\\n백업한 내용은 `JSON` 파일로 저장됩니다.","remove":"정말 삭제할까요?","reset":"정말로 모든 설정과 슬라이드 데이터를 초기화 하겠습니까?\\n초기화하면 복구할 수 없습니다.","restart":"정말로 재시작 하겠습니까?","restore":"정말 모든 데이터를 복원할까요?\\n이 작업은 현재 데이터가 모두 삭제됩니다.","selectGroup":"선택한 슬라이드로 사용할까요?\\n슬라이드를 변경하면 다시 시작합니다."},"description":{"addSlides":"환경설정에서 슬라이드를 추가해주세요.","autoplay":"슬라이드를 자동재생 합니다.","autoplayDelay":"슬라이드가 자동으로 전환하기 전에 대기하는 시간입니다.","autoplayDirection":"슬라이드가 자동으로 전환하는 방향을 설정합니다.","autoplayPauseOnHover":"슬라이드 영역에 마우스를 갖다대면 자동재생을 일시정지 합니다.","backup":"슬라이드쇼의 모든 데이터를 가져오거나 내보냅니다.","captionAnimationSpeed":"값이 높을수록 애니메이션 속도가 빨라집니다.","captionAnimationType":"슬라이드가 바뀔때의 캡션 트랜지션을 선택합니다.","captionPosition":"캡션의 위치를 설정합니다. 예)왼쪽,상단","captionScale":"캡션의 크기를 설정합니다.","empty":"비었습니다.","emptySlides":"슬라이드가 없습니다.","getDataByRestAPI":"RestAPI 주소로 데이터를 가져옵니다.","getJsonFile":"JSON 파일을 업로드하여 데이터를 가져옵니다.","group":"슬라이드 그룹 선택창을 엽니다.","hoverVisibleHud":"슬라이드 영역에 마우스를 갖다대면 조작과 상태요소를 숨깁니다.","hud":"조작과 상태요소들을 보여줍니다.","imageScale":"슬라이드 이미지 크기를 정합니다. 예) 가로,세로","imageType":"슬라이드 이미지 표시방식을 선택합니다.","importDataMethod":"데이터를 가져오는 방법을 선택합니다.","information":"문제점이나 개선에 관한 의견이 있으면 %{link} 페이지를 이용해주세요.","initialNumber":"시작할때 표시되는 슬라이드 번호입니다. (번호는 0부터)","inputDescriptionSlide":"슬라이드 설명을 입력합니다.","inputImageUrl":"이미지 주소를 입력합니다.","inputKeyOnGroup":"슬라이드 그룹의 키값을 입력합니다.","inputSlideDataCode":"슬라이드 데이터 코드를 입력해주세요.","inputSlideTitle":"슬라이드 제목을 입력합니다.","inputSlidesUrl":"슬라이드 URL 주소를 입력해주세요.","inputThumbnailUrl":"썸네일 이미지 주소를 입력합니다.","keyboardGuide":"다음과 같이 키보드 단축키를 누르면 해당 기능을 실행합니다.","language":"언어를 설정합니다.","openPreference":"환경설정 열기","repeat":"슬라이드를 마지막에서 처음으로 이동합니다.","reset":"모든 설정과 슬라이드 데이터를 재설정합니다.","restart":"슬라이드쇼 재실행","screenMode":"화면모드를 선택합니다.","selectGroup":"사용할 슬라이드를 선택합니다.","selectJsonFile":"JSON 파일을 선택해주세요.","selectSlidesType":"슬라이드 데이터의 타입을 선택합니다.","selectSlidesType2":"URL 주소방식으로 변경하고 적용하면 슬라이드 데이터가 없어집니다.","setCategoryDescription":"카테고리에 대한 설명을 입력합니다.","setCategoryName":"카테고리의 이름을 설정합니다.","swipe":"터치 디바이스에서 밀어 넘기는 조작을 사용합니다.","thumbnail":"썸네일 이미지 목록화면을 엽니다.","touchHud":"마우스를 클릭하거나 화면을 터치할때 HUD를 토글링합니다.","transitionSpeed":"트랜지션 애니메이션 속도를 변경합니다.","transitionType":"슬라이드가 바뀔때의 트랜지션을 선택합니다.","usingKeyboard":"키보드 단축키를 사용합니다.","visibleContents":"각 조작과 상태요소들 표시를 설정합니다."},"label":{"addGroup":"그룹 추가","addSlide":"슬라이드 추가","editGroup":"그룹 수정","editSlide":"슬라이드 수정","fadeInOut":"투명도 전환","getData":"데이터 가져오기","imageType":"이미지 표시방식","moveHorizontal":"가로방향으로 이동","nextSlide":"다음 슬라이드로 이동하기","prevSlide":"이전 슬라이드로 이동하기","removeGroup":"그룹 삭제"},"language":{"en":"영어","ko":"한국어"},"preference":{"header":{"data":"슬라이드 데이터를 관리합니다.","general":"기초적인 항목들을 설정합니다.","information":"슬라이드쇼에 관한 정보를 확인할 수 있습니다.","keyboard":"키보드 단축키에 관한 설정입니다.","slides":"슬라이드와 관련된 부분들을 설정합니다.","style":"화면에 표시되는 부분들을 설정합니다."}},"title":{"autoplayDelay":"자동재생 딜레이","autoplayDirection":"자동재생 방향","autoplayPauseOnHover":"마우스 오버시 자동재생 일시정지","backupOrRestore":"백업 및 복원","captionAnimationSpeed":"캡션 애니메이션 속도","captionAnimationType":"캡션 애니메이션 종류","captionPosition":"캡션 위치","captionScale":"캡션 크기","changeMode":"편집모드를 변경합니다.","emptySlide":"빈 슬라이드","fold":"접고 펼치기","getSlideItems":"슬라이드 아이템 가져오기","hoverVisibleHud":"마우스 오버시 HUD 보이기","imageScale":"이미지 크기","importDataByAddress":"주소로 가져오기","importDataByFile":"파일로 가져오기","importSlideData":"슬라이드 데이터를 가져옵니다.","initialNumber":"기본 슬라이드 번호","loading":"슬라이드쇼 준비중..","manageSlideData":"슬라이드 데이터 관리","screenMode":"화면모드","selectGroup":"그룹 선택하기","selectSlidesType":"슬라이드 타입 선택","slidesUrlAddress":"슬라이드 URL 주소","thumbnailView":"썸네일 보기","touchHud":"클릭, 터치시 HUD 토글","transitionSpeed":"트랜지션 속도","transitionType":"트랜지션 종류","usingKeyboard":"키보드 단축키 사용","visibleContents":"요소들 표시"}}');
var fo = lo.createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en: n7(co),
        ko: n7(uo)
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"8nIIs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * index page
 *
 */ function index() {
    console.log('call index page');
}
exports.default = index;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"4N8i7"}],"1njeh":[function() {},{}]},["lY6TI","2vhQy"], "2vhQy", "parcelRequire5d43")

