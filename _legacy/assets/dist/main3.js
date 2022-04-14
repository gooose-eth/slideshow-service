var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { E as EffectScope, R as ReactiveEffect, c as customRef, e as effect, a as effectScope, g as getCurrentScope, i as isProxy, b as isReactive, d as isReadonly, f as isRef, h as isShallow, m as markRaw, o as onScopeDispose, p as proxyRefs, r as reactive, j as readonly, k as ref, s as shallowReactive, l as shallowReadonly, n as shallowRef, q as stop, t as toRaw, u as toRef, v as toRefs, w as triggerRef, x as unref, y as camelize, z as capitalize, A as normalizeClass, B as normalizeProps, C as normalizeStyle, D as toDisplayString$1, F as toHandlerKey, G as BaseTransition, H as Comment, I as Fragment, K as KeepAlive, S as Static, J as Suspense, T as Teleport, L as Text, M as callWithAsyncErrorHandling, N as callWithErrorHandling, O as cloneVNode, P as compatUtils, Q as computed, U as createBlock, V as createCommentVNode, W as createElementBlock, X as createBaseVNode, Y as createHydrationRenderer, Z as createPropsRestProxy, _ as createRenderer, $ as createSlots, a0 as createStaticVNode, a1 as createTextVNode, a2 as createVNode, a3 as defineAsyncComponent, a4 as defineComponent, a5 as defineEmits, a6 as defineExpose, a7 as defineProps, a8 as devtools$1, a9 as getCurrentInstance, aa as getTransitionRawChildren, ab as guardReactiveProps, ac as h, ad as handleError, ae as initCustomFormatter, af as inject, ag as isMemoSame, ah as isRuntimeOnly, ai as isVNode, aj as mergeDefaults, ak as mergeProps, al as nextTick, am as onActivated, an as onBeforeMount, ao as onBeforeUnmount, ap as onBeforeUpdate, aq as onDeactivated, ar as onErrorCaptured, as as onMounted, at as onRenderTracked, au as onRenderTriggered, av as onServerPrefetch, aw as onUnmounted, ax as onUpdated, ay as openBlock, az as popScopeId, aA as provide, aB as pushScopeId, aC as queuePostFlushCb, aD as registerRuntimeCompiler, aE as renderList, aF as renderSlot, aG as resolveComponent, aH as resolveDirective, aI as resolveDynamicComponent, aJ as resolveFilter, aK as resolveTransitionHooks, aL as setBlockTracking, aM as setDevtoolsHook, aN as setTransitionHooks, aO as ssrContextKey, aP as ssrUtils, aQ as toHandlers, aR as transformVNodeArgs, aS as useAttrs, aT as useSSRContext, aU as useSlots, aV as useTransitionState, aW as version, aX as warn$1, aY as watch, aZ as watchEffect, a_ as watchPostEffect, a$ as watchSyncEffect, b0 as withAsyncContext, b1 as withCtx, b2 as withDefaults, b3 as withDirectives, b4 as withMemo, b5 as withScopeId, b6 as Transition, b7 as TransitionGroup, b8 as VueElement, b9 as createApp, ba as createSSRApp, bb as defineCustomElement, bc as defineSSRCustomElement, bd as hydrate, be as initDirectivesForSSR, bf as render, bg as useCssModule, bh as useCssVars, bi as vModelCheckbox, bj as vModelDynamic, bk as vModelRadio, bl as vModelSelect, bm as vModelText, bn as vShow, bo as withKeys, bp as withModifiers } from "./main2.js";
import { g as getFormData, p as post, _ as _sfc_main$l, a as _sfc_main$m } from "./authorization.js";
const compile = () => {
};
var vue_runtime_esmBundler = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  compile,
  EffectScope,
  ReactiveEffect,
  customRef,
  effect,
  effectScope,
  getCurrentScope,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isShallow,
  markRaw,
  onScopeDispose,
  proxyRefs,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  stop,
  toRaw,
  toRef,
  toRefs,
  triggerRef,
  unref,
  camelize,
  capitalize,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  toDisplayString: toDisplayString$1,
  toHandlerKey,
  BaseTransition,
  Comment,
  Fragment,
  KeepAlive,
  Static,
  Suspense,
  Teleport,
  Text,
  callWithAsyncErrorHandling,
  callWithErrorHandling,
  cloneVNode,
  compatUtils,
  computed,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createElementVNode: createBaseVNode,
  createHydrationRenderer,
  createPropsRestProxy,
  createRenderer,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineAsyncComponent,
  defineComponent,
  defineEmits,
  defineExpose,
  defineProps,
  get devtools() {
    return devtools$1;
  },
  getCurrentInstance,
  getTransitionRawChildren,
  guardReactiveProps,
  h,
  handleError,
  initCustomFormatter,
  inject,
  isMemoSame,
  isRuntimeOnly,
  isVNode,
  mergeDefaults,
  mergeProps,
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
  openBlock,
  popScopeId,
  provide,
  pushScopeId,
  queuePostFlushCb,
  registerRuntimeCompiler,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  resolveFilter,
  resolveTransitionHooks,
  setBlockTracking,
  setDevtoolsHook,
  setTransitionHooks,
  ssrContextKey,
  ssrUtils,
  toHandlers,
  transformVNodeArgs,
  useAttrs,
  useSSRContext,
  useSlots,
  useTransitionState,
  version,
  warn: warn$1,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  withAsyncContext,
  withCtx,
  withDefaults,
  withDirectives,
  withMemo,
  withScopeId,
  Transition,
  TransitionGroup,
  VueElement,
  createApp,
  createSSRApp,
  defineCustomElement,
  defineSSRCustomElement,
  hydrate,
  initDirectivesForSSR,
  render,
  useCssModule,
  useCssVars,
  vModelCheckbox,
  vModelDynamic,
  vModelRadio,
  vModelSelect,
  vModelText,
  vShow,
  withKeys,
  withModifiers
});
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {
        }
        currentSettings = value;
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy)
      setupFn(proxy.proxiedTarget);
  }
}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var storeKey = "store";
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function(key) {
    return fn(obj[key], key);
  });
}
function isObject$1(obj) {
  return obj !== null && typeof obj === "object";
}
function isPromise$1(val) {
  return val && typeof val.then === "function";
}
function partial(fn, arg) {
  return function() {
    return fn(arg);
  };
}
function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ? subs.unshift(fn) : subs.push(fn);
  }
  return function() {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}
function resetStore(store2, hot) {
  store2._actions = /* @__PURE__ */ Object.create(null);
  store2._mutations = /* @__PURE__ */ Object.create(null);
  store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
  store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var state2 = store2.state;
  installModule(store2, state2, [], store2._modules.root, true);
  resetStoreState(store2, state2, hot);
}
function resetStoreState(store2, state2, hot) {
  var oldState = store2._state;
  store2.getters = {};
  store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var wrappedGetters = store2._wrappedGetters;
  var computedObj = {};
  forEachValue(wrappedGetters, function(fn, key) {
    computedObj[key] = partial(fn, store2);
    Object.defineProperty(store2.getters, key, {
      get: function() {
        return computedObj[key]();
      },
      enumerable: true
    });
  });
  store2._state = reactive({
    data: state2
  });
  if (store2.strict) {
    enableStrictMode(store2);
  }
  if (oldState) {
    if (hot) {
      store2._withCommit(function() {
        oldState.data = null;
      });
    }
  }
}
function installModule(store2, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store2._modules.getNamespace(path);
  if (module.namespaced) {
    if (store2._modulesNamespaceMap[namespace] && false) {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
    }
    store2._modulesNamespaceMap[namespace] = module;
  }
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store2._withCommit(function() {
      parentState[moduleName] = module.state;
    });
  }
  var local = module.context = makeLocalContext(store2, namespace, path);
  module.forEachMutation(function(mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store2, namespacedType, mutation, local);
  });
  module.forEachAction(function(action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store2, type, handler, local);
  });
  module.forEachGetter(function(getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store2, namespacedType, getter, local);
  });
  module.forEachChild(function(child, key) {
    installModule(store2, rootState, path.concat(key), child, hot);
  });
}
function makeLocalContext(store2, namespace, path) {
  var noNamespace = namespace === "";
  var local = {
    dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
      }
      return store2.dispatch(type, payload);
    },
    commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
      }
      store2.commit(type, payload, options);
    }
  };
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function() {
        return store2.getters;
      } : function() {
        return makeLocalGetters(store2, namespace);
      }
    },
    state: {
      get: function() {
        return getNestedState(store2.state, path);
      }
    }
  });
  return local;
}
function makeLocalGetters(store2, namespace) {
  if (!store2._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store2.getters).forEach(function(type) {
      if (type.slice(0, splitPos) !== namespace) {
        return;
      }
      var localType = type.slice(splitPos);
      Object.defineProperty(gettersProxy, localType, {
        get: function() {
          return store2.getters[type];
        },
        enumerable: true
      });
    });
    store2._makeLocalGettersCache[namespace] = gettersProxy;
  }
  return store2._makeLocalGettersCache[namespace];
}
function registerMutation(store2, type, handler, local) {
  var entry = store2._mutations[type] || (store2._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store2, local.state, payload);
  });
}
function registerAction(store2, type, handler, local) {
  var entry = store2._actions[type] || (store2._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store2, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store2.getters,
      rootState: store2.state
    }, payload);
    if (!isPromise$1(res)) {
      res = Promise.resolve(res);
    }
    if (store2._devtoolHook) {
      return res.catch(function(err) {
        store2._devtoolHook.emit("vuex:error", err);
        throw err;
      });
    } else {
      return res;
    }
  });
}
function registerGetter(store2, type, rawGetter, local) {
  if (store2._wrappedGetters[type]) {
    return;
  }
  store2._wrappedGetters[type] = function wrappedGetter(store3) {
    return rawGetter(local.state, local.getters, store3.state, store3.getters);
  };
}
function enableStrictMode(store2) {
  watch(function() {
    return store2._state.data;
  }, function() {
  }, { deep: true, flush: "sync" });
}
function getNestedState(state2, path) {
  return path.reduce(function(state3, key) {
    return state3[key];
  }, state2);
}
function unifyObjectStyle(type, payload, options) {
  if (isObject$1(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }
  return { type, payload, options };
}
var LABEL_VUEX_BINDINGS = "vuex bindings";
var MUTATIONS_LAYER_ID = "vuex:mutations";
var ACTIONS_LAYER_ID = "vuex:actions";
var INSPECTOR_ID = "vuex";
var actionId = 0;
function addDevtools(app, store2) {
  setupDevtoolsPlugin({
    id: "org.vuejs.vuex",
    app,
    label: "Vuex",
    homepage: "https://next.vuex.vuejs.org/",
    logo: "https://vuejs.org/images/icons/favicon-96x96.png",
    packageName: "vuex",
    componentStateTypes: [LABEL_VUEX_BINDINGS]
  }, function(api) {
    api.addTimelineLayer({
      id: MUTATIONS_LAYER_ID,
      label: "Vuex Mutations",
      color: COLOR_LIME_500
    });
    api.addTimelineLayer({
      id: ACTIONS_LAYER_ID,
      label: "Vuex Actions",
      color: COLOR_LIME_500
    });
    api.addInspector({
      id: INSPECTOR_ID,
      label: "Vuex",
      icon: "storage",
      treeFilterPlaceholder: "Filter stores..."
    });
    api.on.getInspectorTree(function(payload) {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        if (payload.filter) {
          var nodes = [];
          flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
          payload.rootNodes = nodes;
        } else {
          payload.rootNodes = [
            formatStoreForInspectorTree(store2._modules.root, "")
          ];
        }
      }
    });
    api.on.getInspectorState(function(payload) {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        var modulePath = payload.nodeId;
        makeLocalGetters(store2, modulePath);
        payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
      }
    });
    api.on.editInspectorState(function(payload) {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        var modulePath = payload.nodeId;
        var path = payload.path;
        if (modulePath !== "root") {
          path = modulePath.split("/").filter(Boolean).concat(path);
        }
        store2._withCommit(function() {
          payload.set(store2._state.data, path, payload.state.value);
        });
      }
    });
    store2.subscribe(function(mutation, state2) {
      var data = {};
      if (mutation.payload) {
        data.payload = mutation.payload;
      }
      data.state = state2;
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: Date.now(),
          title: mutation.type,
          data
        }
      });
    });
    store2.subscribeAction({
      before: function(action, state2) {
        var data = {};
        if (action.payload) {
          data.payload = action.payload;
        }
        action._id = actionId++;
        action._time = Date.now();
        data.state = state2;
        api.addTimelineEvent({
          layerId: ACTIONS_LAYER_ID,
          event: {
            time: action._time,
            title: action.type,
            groupId: action._id,
            subtitle: "start",
            data
          }
        });
      },
      after: function(action, state2) {
        var data = {};
        var duration = Date.now() - action._time;
        data.duration = {
          _custom: {
            type: "duration",
            display: duration + "ms",
            tooltip: "Action duration",
            value: duration
          }
        };
        if (action.payload) {
          data.payload = action.payload;
        }
        data.state = state2;
        api.addTimelineEvent({
          layerId: ACTIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: action.type,
            groupId: action._id,
            subtitle: "end",
            data
          }
        });
      }
    });
  });
}
var COLOR_LIME_500 = 8702998;
var COLOR_DARK = 6710886;
var COLOR_WHITE = 16777215;
var TAG_NAMESPACED = {
  label: "namespaced",
  textColor: COLOR_WHITE,
  backgroundColor: COLOR_DARK
};
function extractNameFromPath(path) {
  return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
}
function formatStoreForInspectorTree(module, path) {
  return {
    id: path || "root",
    label: extractNameFromPath(path),
    tags: module.namespaced ? [TAG_NAMESPACED] : [],
    children: Object.keys(module._children).map(function(moduleName) {
      return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
    })
  };
}
function flattenStoreForInspectorTree(result, module, filter, path) {
  if (path.includes(filter)) {
    result.push({
      id: path || "root",
      label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
      tags: module.namespaced ? [TAG_NAMESPACED] : []
    });
  }
  Object.keys(module._children).forEach(function(moduleName) {
    flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
  });
}
function formatStoreForInspectorState(module, getters, path) {
  getters = path === "root" ? getters : getters[path];
  var gettersKeys = Object.keys(getters);
  var storeState = {
    state: Object.keys(module.state).map(function(key) {
      return {
        key,
        editable: true,
        value: module.state[key]
      };
    })
  };
  if (gettersKeys.length) {
    var tree = transformPathsToObjectTree(getters);
    storeState.getters = Object.keys(tree).map(function(key) {
      return {
        key: key.endsWith("/") ? extractNameFromPath(key) : key,
        editable: false,
        value: canThrow(function() {
          return tree[key];
        })
      };
    });
  }
  return storeState;
}
function transformPathsToObjectTree(getters) {
  var result = {};
  Object.keys(getters).forEach(function(key) {
    var path = key.split("/");
    if (path.length > 1) {
      var target = result;
      var leafKey = path.pop();
      path.forEach(function(p) {
        if (!target[p]) {
          target[p] = {
            _custom: {
              value: {},
              display: p,
              tooltip: "Module",
              abstract: true
            }
          };
        }
        target = target[p]._custom.value;
      });
      target[leafKey] = canThrow(function() {
        return getters[key];
      });
    } else {
      result[key] = canThrow(function() {
        return getters[key];
      });
    }
  });
  return result;
}
function getStoreModule(moduleMap, path) {
  var names = path.split("/").filter(function(n) {
    return n;
  });
  return names.reduce(function(module, moduleName, i) {
    var child = module[moduleName];
    if (!child) {
      throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
    }
    return i === names.length - 1 ? child : child._children;
  }, path === "root" ? moduleMap : moduleMap.root._children);
}
function canThrow(cb) {
  try {
    return cb();
  } catch (e) {
    return e;
  }
}
var Module = function Module2(rawModule, runtime) {
  this.runtime = runtime;
  this._children = /* @__PURE__ */ Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
};
var prototypeAccessors$1 = { namespaced: { configurable: true } };
prototypeAccessors$1.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};
Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};
Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};
Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};
Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};
Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};
Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};
Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};
Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};
Object.defineProperties(Module.prototype, prototypeAccessors$1);
var ModuleCollection = function ModuleCollection2(rawRootModule) {
  this.register([], rawRootModule, false);
};
ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function(module, key) {
    return module.getChild(key);
  }, this.root);
};
ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function(namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + "/" : "");
  }, "");
};
ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update2([], this.root, rawRootModule);
};
ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1$1 = this;
  if (runtime === void 0)
    runtime = true;
  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function(rawChildModule, key) {
      this$1$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};
ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);
  if (!child) {
    return;
  }
  if (!child.runtime) {
    return;
  }
  parent.removeChild(key);
};
ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (parent) {
    return parent.hasChild(key);
  }
  return false;
};
function update2(path, targetModule, newModule) {
  targetModule.update(newModule);
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        return;
      }
      update2(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
    }
  }
}
function createStore(options) {
  return new Store(options);
}
var Store = function Store2(options) {
  var this$1$1 = this;
  if (options === void 0)
    options = {};
  var plugins = options.plugins;
  if (plugins === void 0)
    plugins = [];
  var strict = options.strict;
  if (strict === void 0)
    strict = false;
  var devtools2 = options.devtools;
  this._committing = false;
  this._actions = /* @__PURE__ */ Object.create(null);
  this._actionSubscribers = [];
  this._mutations = /* @__PURE__ */ Object.create(null);
  this._wrappedGetters = /* @__PURE__ */ Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  this._subscribers = [];
  this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  this._devtools = devtools2;
  var store2 = this;
  var ref2 = this;
  var dispatch2 = ref2.dispatch;
  var commit2 = ref2.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch2.call(store2, type, payload);
  };
  this.commit = function boundCommit(type, payload, options2) {
    return commit2.call(store2, type, payload, options2);
  };
  this.strict = strict;
  var state2 = this._modules.root.state;
  installModule(this, state2, [], this._modules.root);
  resetStoreState(this, state2);
  plugins.forEach(function(plugin) {
    return plugin(this$1$1);
  });
};
var prototypeAccessors = { state: { configurable: true } };
Store.prototype.install = function install(app, injectKey) {
  app.provide(injectKey || storeKey, this);
  app.config.globalProperties.$store = this;
  var useDevtools = this._devtools !== void 0 ? this._devtools : false;
  if (useDevtools) {
    addDevtools(app, this);
  }
};
prototypeAccessors.state.get = function() {
  return this._state.data;
};
prototypeAccessors.state.set = function(v) {
};
Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1$1 = this;
  var ref2 = unifyObjectStyle(_type, _payload, _options);
  var type = ref2.type;
  var payload = ref2.payload;
  var mutation = { type, payload };
  var entry = this._mutations[type];
  if (!entry) {
    return;
  }
  this._withCommit(function() {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.slice().forEach(function(sub) {
    return sub(mutation, this$1$1.state);
  });
};
Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1$1 = this;
  var ref2 = unifyObjectStyle(_type, _payload);
  var type = ref2.type;
  var payload = ref2.payload;
  var action = { type, payload };
  var entry = this._actions[type];
  if (!entry) {
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(sub) {
      return sub.before;
    }).forEach(function(sub) {
      return sub.before(action, this$1$1.state);
    });
  } catch (e) {
  }
  var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
    return handler(payload);
  })) : entry[0](payload);
  return new Promise(function(resolve, reject) {
    result.then(function(res) {
      try {
        this$1$1._actionSubscribers.filter(function(sub) {
          return sub.after;
        }).forEach(function(sub) {
          return sub.after(action, this$1$1.state);
        });
      } catch (e) {
      }
      resolve(res);
    }, function(error) {
      try {
        this$1$1._actionSubscribers.filter(function(sub) {
          return sub.error;
        }).forEach(function(sub) {
          return sub.error(action, this$1$1.state, error);
        });
      } catch (e) {
      }
      reject(error);
    });
  });
};
Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};
Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === "function" ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};
Store.prototype.watch = function watch$1(getter, cb, options) {
  var this$1$1 = this;
  return watch(function() {
    return getter(this$1$1.state, this$1$1.getters);
  }, cb, Object.assign({}, options));
};
Store.prototype.replaceState = function replaceState(state2) {
  var this$1$1 = this;
  this._withCommit(function() {
    this$1$1._state.data = state2;
  });
};
Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0)
    options = {};
  if (typeof path === "string") {
    path = [path];
  }
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  resetStoreState(this, this.state);
};
Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1$1 = this;
  if (typeof path === "string") {
    path = [path];
  }
  this._modules.unregister(path);
  this._withCommit(function() {
    var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
    delete parentState[path[path.length - 1]];
  });
  resetStore(this);
};
Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === "string") {
    path = [path];
  }
  return this._modules.isRegistered(path);
};
Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};
Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};
Object.defineProperties(Store.prototype, prototypeAccessors);
function checkNestedKeys(src, type, keys) {
  const address = keys.join(".");
  const message_errorType = `The type(${address}) is wrong.`;
  for (let i = 0; i < keys.length; i++) {
    if (!src || !src.hasOwnProperty(keys[i])) {
      throw new Error(`The item(${address}) is missing or invalid.`);
    }
    src = src[keys[i]];
  }
  switch (type) {
    case "array":
      if (!Array.isArray(src))
        throw new Error(message_errorType);
      break;
    case "string":
      if (typeof src !== "string")
        throw new Error(message_errorType);
      break;
    case "number":
      if (typeof src !== "number")
        throw new Error(message_errorType);
      break;
    case "boolean":
      if (typeof src !== "boolean")
        throw new Error(message_errorType);
      break;
    case "object":
      if (typeof src !== "object")
        throw new Error(message_errorType);
      break;
  }
}
function convertPureObject$1(src) {
  if (!src)
    return null;
  try {
    return JSON.parse(JSON.stringify(src));
  } catch (_) {
    return null;
  }
}
function checkSlideItems(items) {
  if (!(items && typeof items === "object"))
    throw new Error("Invalid slides data");
  for (let i = 0; i < items.length; i++) {
    if (!(items[i] && items[i].src)) {
      throw new Error(`The item[${i}] of this item is invalid.`);
    }
  }
}
function checkTree(src) {
  if (!src)
    throw new Error("No value");
  if (typeof src !== "object")
    throw new Error("This value is not an object.");
  let keys = Object.keys(src);
  for (let i = 0; i < keys.length; i++) {
    if (typeof src[keys[i]].slides === "string")
      continue;
    if (!Array.isArray(src[keys[i]].slides)) {
      throw new Error(`not array item: item.${keys[i]}`);
    }
    if (src[keys[i]].length <= 0)
      continue;
    checkSlideItems(src[keys[i]]);
  }
  return true;
}
function checkPreference(item) {
  try {
    if (!item)
      throw new Error("no item");
    if (!(item.general && item.slides && item.style && item.keyboard))
      throw new Error("no item property");
    checkNestedKeys(item, "string", ["general", "language"]);
    checkNestedKeys(item, "boolean", ["general", "hud"]);
    checkNestedKeys(item, "boolean", ["general", "hoverVisibleHud"]);
    checkNestedKeys(item, "boolean", ["general", "visibleHudContents", "menu"]);
    checkNestedKeys(item, "boolean", ["general", "visibleHudContents", "caption"]);
    checkNestedKeys(item, "boolean", ["general", "visibleHudContents", "controller"]);
    checkNestedKeys(item, "boolean", ["general", "visibleHudContents", "paginate"]);
    checkNestedKeys(item, "boolean", ["general", "visibleHudContents", "autoplay"]);
    checkNestedKeys(item, "boolean", ["general", "visibleHudContents", "group"]);
    checkNestedKeys(item, "number", ["slides", "initialNumber"]);
    checkNestedKeys(item, "string", ["slides", "animationType"]);
    checkNestedKeys(item, "number", ["slides", "animationSpeed"]);
    checkNestedKeys(item, "string", ["slides", "captionAnimationType"]);
    checkNestedKeys(item, "number", ["slides", "captionAnimationSpeed"]);
    checkNestedKeys(item, "boolean", ["slides", "autoplay"]);
    checkNestedKeys(item, "number", ["slides", "autoplayDelay"]);
    checkNestedKeys(item, "boolean", ["slides", "autoplayDirection"]);
    checkNestedKeys(item, "boolean", ["slides", "autoplayPauseOnHover"]);
    checkNestedKeys(item, "boolean", ["slides", "loop"]);
    checkNestedKeys(item, "boolean", ["slides", "swipe"]);
    checkNestedKeys(item, "string", ["style", "screenColor"]);
    checkNestedKeys(item, "string", ["style", "imageType"]);
    checkNestedKeys(item, "array", ["style", "imageScale"]);
    checkNestedKeys(item, "number", ["style", "captionScale"]);
    checkNestedKeys(item, "array", ["style", "captionPosition"]);
    checkNestedKeys(item, "boolean", ["keyboard", "enabled"]);
    return true;
  } catch (e) {
    if (window.dev)
      console.error(e.message);
    return false;
  }
}
var defaults = {
  preference: {
    general: {
      language: "ko",
      hud: true,
      hoverVisibleHud: false,
      clickVisibleHud: false,
      visibleHudContents: {
        menu: true,
        thumbnail: false,
        caption: true,
        controller: true,
        paginate: true,
        autoplay: true,
        group: true
      }
    },
    slides: {
      initialNumber: 0,
      animationType: "horizontal",
      animationSpeed: 500,
      captionAnimationType: "none",
      captionAnimationSpeed: 40,
      autoplay: false,
      autoplayDelay: 7e3,
      autoplayDirection: true,
      autoplayPauseOnHover: false,
      loop: true,
      swipe: true
    },
    style: {
      screenColor: "system",
      imageType: "none",
      imageScale: ["75%", "75%"],
      captionScale: 100,
      captionPosition: ["32px", "30px"]
    },
    keyboard: {
      enabled: true
    }
  },
  usePreference: {
    slides: true,
    style: true,
    data: true,
    keyboard: true,
    information: true
  },
  tree: {
    default: {
      name: "\uAE30\uBCF8 \uC2AC\uB77C\uC774\uB4DC\uC1FC",
      description: "\uC2DC\uC791\uC758 \uC2AC\uB77C\uC774\uB4DC\uC1FC",
      slides: []
    }
  },
  slides: [],
  group: "default",
  mode: null,
  activeSlide: void 0,
  keyboardEvent: true,
  autoplay: false,
  serviceMode: void 0
};
let state = convertPureObject$1(defaults);
let prefix$1 = "slideshow";
let disableStorage = {
  preference: false,
  tree: false
};
function checkObject$1() {
  return !!window.localStorage;
}
function get$1(key) {
  if (disableStorage[key])
    return;
  if (!(checkObject$1() && key))
    return void 0;
  try {
    return JSON.parse(window.localStorage.getItem(`${prefix$1}_${key}`));
  } catch (e) {
    return void 0;
  }
}
function set$1(key, value) {
  if (disableStorage[key])
    return;
  if (!(checkObject$1() && key && value))
    return;
  window.localStorage.setItem(`${prefix$1}_${key}`, JSON.stringify(value));
}
function disabled(key) {
  switch (key) {
    case "preference":
    case "usePreference":
    case "tree":
    case "group":
      disableStorage[key] = true;
      break;
  }
}
function changeMode(context, value) {
  if (context.state.mode === value)
    return;
  switch (value) {
    case "preference":
    case "group":
    case "thumbnail":
      context.commit("updateMode", value);
      break;
    default:
      context.commit("updateMode", null);
      break;
  }
}
function changePreference(context, value) {
  const pref = convertPureObject$1(value);
  context.commit("updatePreference", pref);
  set$1("preference", pref);
}
function changeUsePreference$1(context, value) {
  const pref = convertPureObject$1(value);
  context.commit("changeUsePreference", pref);
  set$1("usePreference", pref);
}
function changeAutoplay(context, sw = void 0) {
  if (!context.state.preference.slides.autoplay)
    return;
  sw = sw === void 0 ? !context.state.autoplay : sw;
  context.commit("updateAutoplay", sw);
}
function changeHud(context, sw = void 0) {
  sw = sw === void 0 ? !context.state.preference.general.hud : sw;
  context.commit("updateValueInPreference", {
    map: ["general", "hud"],
    value: sw
  });
}
function changeTree(context, tree) {
  try {
    checkSlideItems(tree);
    context.commit("updateTree", tree);
    set$1("tree", tree);
  } catch (e) {
    if (window.dev)
      console.error(e.message);
    throw new Error(e.message);
  }
}
function changeSlides(context, newSlides) {
  context.commit("updateSlides", newSlides);
}
function changeActiveSlide(context, active) {
  if (typeof active !== "number")
    return;
  context.commit("updateActiveSlide", active);
}
async function reset(context) {
  const preference2 = convertPureObject$1(defaults.preference);
  const tree = convertPureObject$1(defaults.tree);
  const slides2 = convertPureObject$1(defaults.slides);
  await context.dispatch("changePreference", preference2);
  await context.dispatch("changeTree", tree);
  await context.dispatch("changeSlides", slides2);
  context.commit("updateActiveSlide", preference2.slides.initialNumber);
  context.commit("updateUseKeyboardEvent", true);
  context.commit("updateMode", null);
}
function changeGroup(context, key) {
  context.commit("updateGroup", key);
  set$1("group", key);
}
var actions = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  changeMode,
  changePreference,
  changeUsePreference: changeUsePreference$1,
  changeAutoplay,
  changeHud,
  changeTree,
  changeSlides,
  changeActiveSlide,
  reset,
  changeGroup
});
function updateMode(state2, value) {
  state2.mode = value;
}
function updateActiveSlide(state2, n) {
  state2.activeSlide = n;
}
function updateUseKeyboardEvent(state2, sw) {
  state2.keyboardEvent = sw;
}
function updatePreference(state2, value) {
  state2.preference = value;
}
function changeUsePreference(state2, value) {
  state2.usePreference = value;
}
function updateValueInPreference(state2, src) {
  const { value, map } = src;
  if (!(map && Array.isArray(map)))
    return;
  switch (map.length) {
    case 1:
      state2.preference[map[0]] = value;
      break;
    case 2:
      state2.preference[map[0]][map[1]] = value;
      break;
    case 3:
      state2.preference[map[0]][map[1]][map[2]] = value;
      break;
  }
}
function updateTree(state2, value) {
  state2.tree = value;
}
function updateSlides(state2, value) {
  state2.slides = value;
}
function updateGroup(state2, value) {
  state2.group = value;
}
function updateAutoplay(state2, value) {
  state2.autoplay = value;
}
function updateUsePreference(state2, value) {
  switch (value[0]) {
    case "slides":
    case "style":
    case "data":
    case "keyboard":
    case "information":
      state2.usePreference[value[0]] = Boolean(value[1]);
      break;
  }
}
function setServiceMode(state2, value) {
  state2.serviceMode = value;
}
var mutations = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  updateMode,
  updateActiveSlide,
  updateUseKeyboardEvent,
  updatePreference,
  changeUsePreference,
  updateValueInPreference,
  updateTree,
  updateSlides,
  updateGroup,
  updateAutoplay,
  updateUsePreference,
  setServiceMode
});
var store = createStore({
  state,
  mutations,
  actions
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var vueI18n = { exports: {} };
var vueI18n_cjs_prod = {};
var coreBase$1 = { exports: {} };
var coreBase_cjs_prod = {};
var messageCompiler$1 = { exports: {} };
var messageCompiler_cjs_prod = {};
var shared$3 = { exports: {} };
var shared_cjs_prod = {};
/*!
  * shared v9.2.0-beta.30
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
const inBrowser = typeof window !== "undefined";
let mark;
let measure;
const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
function format(message, ...args) {
  if (args.length === 1 && isObject(args[0])) {
    args = args[0];
  }
  if (!args || !args.hasOwnProperty) {
    args = {};
  }
  return message.replace(RE_ARGS, (match, identifier) => {
    return args.hasOwnProperty(identifier) ? args[identifier] : "";
  });
}
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
const RANGE = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        if (j === i) {
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
function createEmitter() {
  const events = /* @__PURE__ */ new Map();
  const emitter = {
    events,
    on(event, handler) {
      const handlers = events.get(event);
      const added = handlers && handlers.push(handler);
      if (!added) {
        events.set(event, [handler]);
      }
    },
    off(event, handler) {
      const handlers = events.get(event);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },
    emit(event, payload) {
      (events.get(event) || []).slice().map((handler) => handler(payload));
      (events.get("*") || []).slice().map((handler) => handler(event, payload));
    }
  };
  return emitter;
}
shared_cjs_prod.assign = assign;
shared_cjs_prod.createEmitter = createEmitter;
shared_cjs_prod.escapeHtml = escapeHtml;
shared_cjs_prod.format = format;
shared_cjs_prod.friendlyJSONstringify = friendlyJSONstringify;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.generateFormatCacheKey = generateFormatCacheKey;
shared_cjs_prod.getGlobalThis = getGlobalThis;
shared_cjs_prod.hasOwn = hasOwn;
shared_cjs_prod.inBrowser = inBrowser;
shared_cjs_prod.isArray = isArray;
shared_cjs_prod.isBoolean = isBoolean;
shared_cjs_prod.isDate = isDate;
shared_cjs_prod.isEmptyObject = isEmptyObject;
shared_cjs_prod.isFunction = isFunction;
shared_cjs_prod.isNumber = isNumber;
shared_cjs_prod.isObject = isObject;
shared_cjs_prod.isPlainObject = isPlainObject;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isRegExp = isRegExp;
shared_cjs_prod.isString = isString;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.makeSymbol = makeSymbol;
shared_cjs_prod.mark = mark;
shared_cjs_prod.measure = measure;
shared_cjs_prod.objectToString = objectToString;
shared_cjs_prod.toDisplayString = toDisplayString;
shared_cjs_prod.toTypeString = toTypeString;
shared_cjs_prod.warn = warn;
{
  shared$3.exports = shared_cjs_prod;
}
var sourceMap$1 = {};
var sourceMapGenerator = {};
var base64Vlq = {};
var base64$1 = {};
var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
base64$1.encode = function(number2) {
  if (0 <= number2 && number2 < intToCharMap.length) {
    return intToCharMap[number2];
  }
  throw new TypeError("Must be between 0 and 63: " + number2);
};
base64$1.decode = function(charCode) {
  var bigA = 65;
  var bigZ = 90;
  var littleA = 97;
  var littleZ = 122;
  var zero = 48;
  var nine = 57;
  var plus = 43;
  var slash = 47;
  var littleOffset = 26;
  var numberOffset = 52;
  if (bigA <= charCode && charCode <= bigZ) {
    return charCode - bigA;
  }
  if (littleA <= charCode && charCode <= littleZ) {
    return charCode - littleA + littleOffset;
  }
  if (zero <= charCode && charCode <= nine) {
    return charCode - zero + numberOffset;
  }
  if (charCode == plus) {
    return 62;
  }
  if (charCode == slash) {
    return 63;
  }
  return -1;
};
var base64 = base64$1;
var VLQ_BASE_SHIFT = 5;
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
var VLQ_BASE_MASK = VLQ_BASE - 1;
var VLQ_CONTINUATION_BIT = VLQ_BASE;
function toVLQSigned(aValue) {
  return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative ? -shifted : shifted;
}
base64Vlq.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;
  var vlq = toVLQSigned(aValue);
  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);
  return encoded;
};
base64Vlq.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;
  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }
    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }
    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);
  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};
var util$5 = {};
(function(exports) {
  function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) {
      return aArgs[aName];
    } else if (arguments.length === 3) {
      return aDefaultValue;
    } else {
      throw new Error('"' + aName + '" is a required argument.');
    }
  }
  exports.getArg = getArg;
  var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
  var dataUrlRegexp = /^data:.+\,.+$/;
  function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) {
      return null;
    }
    return {
      scheme: match[1],
      auth: match[2],
      host: match[3],
      port: match[4],
      path: match[5]
    };
  }
  exports.urlParse = urlParse;
  function urlGenerate(aParsedUrl) {
    var url = "";
    if (aParsedUrl.scheme) {
      url += aParsedUrl.scheme + ":";
    }
    url += "//";
    if (aParsedUrl.auth) {
      url += aParsedUrl.auth + "@";
    }
    if (aParsedUrl.host) {
      url += aParsedUrl.host;
    }
    if (aParsedUrl.port) {
      url += ":" + aParsedUrl.port;
    }
    if (aParsedUrl.path) {
      url += aParsedUrl.path;
    }
    return url;
  }
  exports.urlGenerate = urlGenerate;
  function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
      if (!url.path) {
        return aPath;
      }
      path = url.path;
    }
    var isAbsolute = exports.isAbsolute(path);
    var parts = path.split(/\/+/);
    for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
      part = parts[i];
      if (part === ".") {
        parts.splice(i, 1);
      } else if (part === "..") {
        up++;
      } else if (up > 0) {
        if (part === "") {
          parts.splice(i + 1, up);
          up = 0;
        } else {
          parts.splice(i, 2);
          up--;
        }
      }
    }
    path = parts.join("/");
    if (path === "") {
      path = isAbsolute ? "/" : ".";
    }
    if (url) {
      url.path = path;
      return urlGenerate(url);
    }
    return path;
  }
  exports.normalize = normalize;
  function join(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    if (aPath === "") {
      aPath = ".";
    }
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) {
      aRoot = aRootUrl.path || "/";
    }
    if (aPathUrl && !aPathUrl.scheme) {
      if (aRootUrl) {
        aPathUrl.scheme = aRootUrl.scheme;
      }
      return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) {
      return aPath;
    }
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
      aRootUrl.host = aPath;
      return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
    if (aRootUrl) {
      aRootUrl.path = joined;
      return urlGenerate(aRootUrl);
    }
    return joined;
  }
  exports.join = join;
  exports.isAbsolute = function(aPath) {
    return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
  };
  function relative(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    aRoot = aRoot.replace(/\/$/, "");
    var level = 0;
    while (aPath.indexOf(aRoot + "/") !== 0) {
      var index = aRoot.lastIndexOf("/");
      if (index < 0) {
        return aPath;
      }
      aRoot = aRoot.slice(0, index);
      if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
        return aPath;
      }
      ++level;
    }
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
  }
  exports.relative = relative;
  var supportsNullProto = function() {
    var obj = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in obj);
  }();
  function identity(s) {
    return s;
  }
  function toSetString(aStr) {
    if (isProtoString(aStr)) {
      return "$" + aStr;
    }
    return aStr;
  }
  exports.toSetString = supportsNullProto ? identity : toSetString;
  function fromSetString(aStr) {
    if (isProtoString(aStr)) {
      return aStr.slice(1);
    }
    return aStr;
  }
  exports.fromSetString = supportsNullProto ? identity : fromSetString;
  function isProtoString(s) {
    if (!s) {
      return false;
    }
    var length = s.length;
    if (length < 9) {
      return false;
    }
    if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
      return false;
    }
    for (var i = length - 10; i >= 0; i--) {
      if (s.charCodeAt(i) !== 36) {
        return false;
      }
    }
    return true;
  }
  function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByOriginalPositions = compareByOriginalPositions;
  function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) {
      return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
  function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) {
      return 0;
    }
    if (aStr1 === null) {
      return 1;
    }
    if (aStr2 === null) {
      return -1;
    }
    if (aStr1 > aStr2) {
      return 1;
    }
    return -1;
  }
  function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
  function parseSourceMapInput(str) {
    return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
  }
  exports.parseSourceMapInput = parseSourceMapInput;
  function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
    sourceURL = sourceURL || "";
    if (sourceRoot) {
      if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
        sourceRoot += "/";
      }
      sourceURL = sourceRoot + sourceURL;
    }
    if (sourceMapURL) {
      var parsed = urlParse(sourceMapURL);
      if (!parsed) {
        throw new Error("sourceMapURL could not be parsed");
      }
      if (parsed.path) {
        var index = parsed.path.lastIndexOf("/");
        if (index >= 0) {
          parsed.path = parsed.path.substring(0, index + 1);
        }
      }
      sourceURL = join(urlGenerate(parsed), sourceURL);
    }
    return normalize(sourceURL);
  }
  exports.computeSourceURL = computeSourceURL;
})(util$5);
var arraySet = {};
var util$4 = util$5;
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
function ArraySet$2() {
  this._array = [];
  this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
}
ArraySet$2.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set2 = new ArraySet$2();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set2.add(aArray[i], aAllowDuplicates);
  }
  return set2;
};
ArraySet$2.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
ArraySet$2.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util$4.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};
ArraySet$2.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util$4.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};
ArraySet$2.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
      return idx;
    }
  } else {
    var sStr = util$4.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }
  throw new Error('"' + aStr + '" is not in the set.');
};
ArraySet$2.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error("No element indexed by " + aIdx);
};
ArraySet$2.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};
arraySet.ArraySet = ArraySet$2;
var mappingList = {};
var util$3 = util$5;
function generatedPositionAfter(mappingA, mappingB) {
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA || util$3.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
function MappingList$1() {
  this._array = [];
  this._sorted = true;
  this._last = { generatedLine: -1, generatedColumn: 0 };
}
MappingList$1.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
  this._array.forEach(aCallback, aThisArg);
};
MappingList$1.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};
MappingList$1.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util$3.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};
mappingList.MappingList = MappingList$1;
var base64VLQ$1 = base64Vlq;
var util$2 = util$5;
var ArraySet$1 = arraySet.ArraySet;
var MappingList = mappingList.MappingList;
function SourceMapGenerator$1(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util$2.getArg(aArgs, "file", null);
  this._sourceRoot = util$2.getArg(aArgs, "sourceRoot", null);
  this._skipValidation = util$2.getArg(aArgs, "skipValidation", false);
  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}
SourceMapGenerator$1.prototype._version = 3;
SourceMapGenerator$1.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
  var sourceRoot = aSourceMapConsumer.sourceRoot;
  var generator = new SourceMapGenerator$1({
    file: aSourceMapConsumer.file,
    sourceRoot
  });
  aSourceMapConsumer.eachMapping(function(mapping) {
    var newMapping = {
      generated: {
        line: mapping.generatedLine,
        column: mapping.generatedColumn
      }
    };
    if (mapping.source != null) {
      newMapping.source = mapping.source;
      if (sourceRoot != null) {
        newMapping.source = util$2.relative(sourceRoot, newMapping.source);
      }
      newMapping.original = {
        line: mapping.originalLine,
        column: mapping.originalColumn
      };
      if (mapping.name != null) {
        newMapping.name = mapping.name;
      }
    }
    generator.addMapping(newMapping);
  });
  aSourceMapConsumer.sources.forEach(function(sourceFile) {
    var sourceRelative = sourceFile;
    if (sourceRoot !== null) {
      sourceRelative = util$2.relative(sourceRoot, sourceFile);
    }
    if (!generator._sources.has(sourceRelative)) {
      generator._sources.add(sourceRelative);
    }
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);
    if (content != null) {
      generator.setSourceContent(sourceFile, content);
    }
  });
  return generator;
};
SourceMapGenerator$1.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
  var generated = util$2.getArg(aArgs, "generated");
  var original = util$2.getArg(aArgs, "original", null);
  var source = util$2.getArg(aArgs, "source", null);
  var name = util$2.getArg(aArgs, "name", null);
  if (!this._skipValidation) {
    this._validateMapping(generated, original, source, name);
  }
  if (source != null) {
    source = String(source);
    if (!this._sources.has(source)) {
      this._sources.add(source);
    }
  }
  if (name != null) {
    name = String(name);
    if (!this._names.has(name)) {
      this._names.add(name);
    }
  }
  this._mappings.add({
    generatedLine: generated.line,
    generatedColumn: generated.column,
    originalLine: original != null && original.line,
    originalColumn: original != null && original.column,
    source,
    name
  });
};
SourceMapGenerator$1.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
  var source = aSourceFile;
  if (this._sourceRoot != null) {
    source = util$2.relative(this._sourceRoot, source);
  }
  if (aSourceContent != null) {
    if (!this._sourcesContents) {
      this._sourcesContents = /* @__PURE__ */ Object.create(null);
    }
    this._sourcesContents[util$2.toSetString(source)] = aSourceContent;
  } else if (this._sourcesContents) {
    delete this._sourcesContents[util$2.toSetString(source)];
    if (Object.keys(this._sourcesContents).length === 0) {
      this._sourcesContents = null;
    }
  }
};
SourceMapGenerator$1.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
  var sourceFile = aSourceFile;
  if (aSourceFile == null) {
    if (aSourceMapConsumer.file == null) {
      throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
    }
    sourceFile = aSourceMapConsumer.file;
  }
  var sourceRoot = this._sourceRoot;
  if (sourceRoot != null) {
    sourceFile = util$2.relative(sourceRoot, sourceFile);
  }
  var newSources = new ArraySet$1();
  var newNames = new ArraySet$1();
  this._mappings.unsortedForEach(function(mapping) {
    if (mapping.source === sourceFile && mapping.originalLine != null) {
      var original = aSourceMapConsumer.originalPositionFor({
        line: mapping.originalLine,
        column: mapping.originalColumn
      });
      if (original.source != null) {
        mapping.source = original.source;
        if (aSourceMapPath != null) {
          mapping.source = util$2.join(aSourceMapPath, mapping.source);
        }
        if (sourceRoot != null) {
          mapping.source = util$2.relative(sourceRoot, mapping.source);
        }
        mapping.originalLine = original.line;
        mapping.originalColumn = original.column;
        if (original.name != null) {
          mapping.name = original.name;
        }
      }
    }
    var source = mapping.source;
    if (source != null && !newSources.has(source)) {
      newSources.add(source);
    }
    var name = mapping.name;
    if (name != null && !newNames.has(name)) {
      newNames.add(name);
    }
  }, this);
  this._sources = newSources;
  this._names = newNames;
  aSourceMapConsumer.sources.forEach(function(sourceFile2) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
    if (content != null) {
      if (aSourceMapPath != null) {
        sourceFile2 = util$2.join(aSourceMapPath, sourceFile2);
      }
      if (sourceRoot != null) {
        sourceFile2 = util$2.relative(sourceRoot, sourceFile2);
      }
      this.setSourceContent(sourceFile2, content);
    }
  }, this);
};
SourceMapGenerator$1.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
  if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
    throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
  }
  if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
    return;
  } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
    return;
  } else {
    throw new Error("Invalid mapping: " + JSON.stringify({
      generated: aGenerated,
      source: aSource,
      original: aOriginal,
      name: aName
    }));
  }
};
SourceMapGenerator$1.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
  var previousGeneratedColumn = 0;
  var previousGeneratedLine = 1;
  var previousOriginalColumn = 0;
  var previousOriginalLine = 0;
  var previousName = 0;
  var previousSource = 0;
  var result = "";
  var next;
  var mapping;
  var nameIdx;
  var sourceIdx;
  var mappings = this._mappings.toArray();
  for (var i = 0, len = mappings.length; i < len; i++) {
    mapping = mappings[i];
    next = "";
    if (mapping.generatedLine !== previousGeneratedLine) {
      previousGeneratedColumn = 0;
      while (mapping.generatedLine !== previousGeneratedLine) {
        next += ";";
        previousGeneratedLine++;
      }
    } else {
      if (i > 0) {
        if (!util$2.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
          continue;
        }
        next += ",";
      }
    }
    next += base64VLQ$1.encode(mapping.generatedColumn - previousGeneratedColumn);
    previousGeneratedColumn = mapping.generatedColumn;
    if (mapping.source != null) {
      sourceIdx = this._sources.indexOf(mapping.source);
      next += base64VLQ$1.encode(sourceIdx - previousSource);
      previousSource = sourceIdx;
      next += base64VLQ$1.encode(mapping.originalLine - 1 - previousOriginalLine);
      previousOriginalLine = mapping.originalLine - 1;
      next += base64VLQ$1.encode(mapping.originalColumn - previousOriginalColumn);
      previousOriginalColumn = mapping.originalColumn;
      if (mapping.name != null) {
        nameIdx = this._names.indexOf(mapping.name);
        next += base64VLQ$1.encode(nameIdx - previousName);
        previousName = nameIdx;
      }
    }
    result += next;
  }
  return result;
};
SourceMapGenerator$1.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
  return aSources.map(function(source) {
    if (!this._sourcesContents) {
      return null;
    }
    if (aSourceRoot != null) {
      source = util$2.relative(aSourceRoot, source);
    }
    var key = util$2.toSetString(source);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
  }, this);
};
SourceMapGenerator$1.prototype.toJSON = function SourceMapGenerator_toJSON() {
  var map = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  if (this._file != null) {
    map.file = this._file;
  }
  if (this._sourceRoot != null) {
    map.sourceRoot = this._sourceRoot;
  }
  if (this._sourcesContents) {
    map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
  }
  return map;
};
SourceMapGenerator$1.prototype.toString = function SourceMapGenerator_toString() {
  return JSON.stringify(this.toJSON());
};
sourceMapGenerator.SourceMapGenerator = SourceMapGenerator$1;
var sourceMapConsumer = {};
var binarySearch$1 = {};
(function(exports) {
  exports.GREATEST_LOWER_BOUND = 1;
  exports.LEAST_UPPER_BOUND = 2;
  function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) {
      return mid;
    } else if (cmp > 0) {
      if (aHigh - mid > 1) {
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
      }
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return aHigh < aHaystack.length ? aHigh : -1;
      } else {
        return mid;
      }
    } else {
      if (mid - aLow > 1) {
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
      }
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return mid;
      } else {
        return aLow < 0 ? -1 : aLow;
      }
    }
  }
  exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) {
      return -1;
    }
    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
    if (index < 0) {
      return -1;
    }
    while (index - 1 >= 0) {
      if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
        break;
      }
      --index;
    }
    return index;
  };
})(binarySearch$1);
var quickSort$1 = {};
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}
function randomIntInRange(low, high) {
  return Math.round(low + Math.random() * (high - low));
}
function doQuickSort(ary, comparator, p, r) {
  if (p < r) {
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;
    swap(ary, pivotIndex, r);
    var pivot = ary[r];
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }
    swap(ary, i + 1, j);
    var q = i + 1;
    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}
quickSort$1.quickSort = function(ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};
var util$1 = util$5;
var binarySearch = binarySearch$1;
var ArraySet = arraySet.ArraySet;
var base64VLQ = base64Vlq;
var quickSort = quickSort$1.quickSort;
function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap2 = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap2 = util$1.parseSourceMapInput(aSourceMap);
  }
  return sourceMap2.sections != null ? new IndexedSourceMapConsumer(sourceMap2, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap2, aSourceMapURL);
}
SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
SourceMapConsumer.prototype._version = 3;
SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
  configurable: true,
  enumerable: true,
  get: function() {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__generatedMappings;
  }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
  configurable: true,
  enumerable: true,
  get: function() {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__originalMappings;
  }
});
SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
  var c = aStr.charAt(index);
  return c === ";" || c === ",";
};
SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
  var context = aContext || null;
  var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
  var mappings;
  switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
  }
  var sourceRoot = this.sourceRoot;
  mappings.map(function(mapping) {
    var source = mapping.source === null ? null : this._sources.at(mapping.source);
    source = util$1.computeSourceURL(sourceRoot, source, this._sourceMapURL);
    return {
      source,
      generatedLine: mapping.generatedLine,
      generatedColumn: mapping.generatedColumn,
      originalLine: mapping.originalLine,
      originalColumn: mapping.originalColumn,
      name: mapping.name === null ? null : this._names.at(mapping.name)
    };
  }, this).forEach(aCallback, context);
};
SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
  var line = util$1.getArg(aArgs, "line");
  var needle = {
    source: util$1.getArg(aArgs, "source"),
    originalLine: line,
    originalColumn: util$1.getArg(aArgs, "column", 0)
  };
  needle.source = this._findSourceIndex(needle.source);
  if (needle.source < 0) {
    return [];
  }
  var mappings = [];
  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util$1.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
  if (index >= 0) {
    var mapping = this._originalMappings[index];
    if (aArgs.column === void 0) {
      var originalLine = mapping.originalLine;
      while (mapping && mapping.originalLine === originalLine) {
        mappings.push({
          line: util$1.getArg(mapping, "generatedLine", null),
          column: util$1.getArg(mapping, "generatedColumn", null),
          lastColumn: util$1.getArg(mapping, "lastGeneratedColumn", null)
        });
        mapping = this._originalMappings[++index];
      }
    } else {
      var originalColumn = mapping.originalColumn;
      while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
        mappings.push({
          line: util$1.getArg(mapping, "generatedLine", null),
          column: util$1.getArg(mapping, "generatedColumn", null),
          lastColumn: util$1.getArg(mapping, "lastGeneratedColumn", null)
        });
        mapping = this._originalMappings[++index];
      }
    }
  }
  return mappings;
};
sourceMapConsumer.SourceMapConsumer = SourceMapConsumer;
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap2 = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap2 = util$1.parseSourceMapInput(aSourceMap);
  }
  var version2 = util$1.getArg(sourceMap2, "version");
  var sources = util$1.getArg(sourceMap2, "sources");
  var names = util$1.getArg(sourceMap2, "names", []);
  var sourceRoot = util$1.getArg(sourceMap2, "sourceRoot", null);
  var sourcesContent = util$1.getArg(sourceMap2, "sourcesContent", null);
  var mappings = util$1.getArg(sourceMap2, "mappings");
  var file = util$1.getArg(sourceMap2, "file", null);
  if (version2 != this._version) {
    throw new Error("Unsupported version: " + version2);
  }
  if (sourceRoot) {
    sourceRoot = util$1.normalize(sourceRoot);
  }
  sources = sources.map(String).map(util$1.normalize).map(function(source) {
    return sourceRoot && util$1.isAbsolute(sourceRoot) && util$1.isAbsolute(source) ? util$1.relative(sourceRoot, source) : source;
  });
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);
  this._absoluteSources = this._sources.toArray().map(function(s) {
    return util$1.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });
  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util$1.relative(this.sourceRoot, relativeSource);
  }
  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }
  return -1;
};
BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
  var smc = Object.create(BasicSourceMapConsumer.prototype);
  var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
  var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
  smc.sourceRoot = aSourceMap._sourceRoot;
  smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
  smc.file = aSourceMap._file;
  smc._sourceMapURL = aSourceMapURL;
  smc._absoluteSources = smc._sources.toArray().map(function(s) {
    return util$1.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
  });
  var generatedMappings = aSourceMap._mappings.toArray().slice();
  var destGeneratedMappings = smc.__generatedMappings = [];
  var destOriginalMappings = smc.__originalMappings = [];
  for (var i = 0, length = generatedMappings.length; i < length; i++) {
    var srcMapping = generatedMappings[i];
    var destMapping = new Mapping();
    destMapping.generatedLine = srcMapping.generatedLine;
    destMapping.generatedColumn = srcMapping.generatedColumn;
    if (srcMapping.source) {
      destMapping.source = sources.indexOf(srcMapping.source);
      destMapping.originalLine = srcMapping.originalLine;
      destMapping.originalColumn = srcMapping.originalColumn;
      if (srcMapping.name) {
        destMapping.name = names.indexOf(srcMapping.name);
      }
      destOriginalMappings.push(destMapping);
    }
    destGeneratedMappings.push(destMapping);
  }
  quickSort(smc.__originalMappings, util$1.compareByOriginalPositions);
  return smc;
};
BasicSourceMapConsumer.prototype._version = 3;
Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
  get: function() {
    return this._absoluteSources.slice();
  }
});
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings2(aStr, aSourceRoot) {
  var generatedLine = 1;
  var previousGeneratedColumn = 0;
  var previousOriginalLine = 0;
  var previousOriginalColumn = 0;
  var previousSource = 0;
  var previousName = 0;
  var length = aStr.length;
  var index = 0;
  var cachedSegments = {};
  var temp = {};
  var originalMappings = [];
  var generatedMappings = [];
  var mapping, str, segment, end, value;
  while (index < length) {
    if (aStr.charAt(index) === ";") {
      generatedLine++;
      index++;
      previousGeneratedColumn = 0;
    } else if (aStr.charAt(index) === ",") {
      index++;
    } else {
      mapping = new Mapping();
      mapping.generatedLine = generatedLine;
      for (end = index; end < length; end++) {
        if (this._charIsMappingSeparator(aStr, end)) {
          break;
        }
      }
      str = aStr.slice(index, end);
      segment = cachedSegments[str];
      if (segment) {
        index += str.length;
      } else {
        segment = [];
        while (index < end) {
          base64VLQ.decode(aStr, index, temp);
          value = temp.value;
          index = temp.rest;
          segment.push(value);
        }
        if (segment.length === 2) {
          throw new Error("Found a source, but no line and column");
        }
        if (segment.length === 3) {
          throw new Error("Found a source and line, but no column");
        }
        cachedSegments[str] = segment;
      }
      mapping.generatedColumn = previousGeneratedColumn + segment[0];
      previousGeneratedColumn = mapping.generatedColumn;
      if (segment.length > 1) {
        mapping.source = previousSource + segment[1];
        previousSource += segment[1];
        mapping.originalLine = previousOriginalLine + segment[2];
        previousOriginalLine = mapping.originalLine;
        mapping.originalLine += 1;
        mapping.originalColumn = previousOriginalColumn + segment[3];
        previousOriginalColumn = mapping.originalColumn;
        if (segment.length > 4) {
          mapping.name = previousName + segment[4];
          previousName += segment[4];
        }
      }
      generatedMappings.push(mapping);
      if (typeof mapping.originalLine === "number") {
        originalMappings.push(mapping);
      }
    }
  }
  quickSort(generatedMappings, util$1.compareByGeneratedPositionsDeflated);
  this.__generatedMappings = generatedMappings;
  quickSort(originalMappings, util$1.compareByOriginalPositions);
  this.__originalMappings = originalMappings;
};
BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
  if (aNeedle[aLineName] <= 0) {
    throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
  }
  if (aNeedle[aColumnName] < 0) {
    throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
  }
  return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
  for (var index = 0; index < this._generatedMappings.length; ++index) {
    var mapping = this._generatedMappings[index];
    if (index + 1 < this._generatedMappings.length) {
      var nextMapping = this._generatedMappings[index + 1];
      if (mapping.generatedLine === nextMapping.generatedLine) {
        mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
        continue;
      }
    }
    mapping.lastGeneratedColumn = Infinity;
  }
};
BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util$1.getArg(aArgs, "line"),
    generatedColumn: util$1.getArg(aArgs, "column")
  };
  var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util$1.compareByGeneratedPositionsDeflated, util$1.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
  if (index >= 0) {
    var mapping = this._generatedMappings[index];
    if (mapping.generatedLine === needle.generatedLine) {
      var source = util$1.getArg(mapping, "source", null);
      if (source !== null) {
        source = this._sources.at(source);
        source = util$1.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
      }
      var name = util$1.getArg(mapping, "name", null);
      if (name !== null) {
        name = this._names.at(name);
      }
      return {
        source,
        line: util$1.getArg(mapping, "originalLine", null),
        column: util$1.getArg(mapping, "originalColumn", null),
        name
      };
    }
  }
  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
  if (!this.sourcesContent) {
    return false;
  }
  return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
    return sc == null;
  });
};
BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  if (!this.sourcesContent) {
    return null;
  }
  var index = this._findSourceIndex(aSource);
  if (index >= 0) {
    return this.sourcesContent[index];
  }
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util$1.relative(this.sourceRoot, relativeSource);
  }
  var url;
  if (this.sourceRoot != null && (url = util$1.urlParse(this.sourceRoot))) {
    var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
    if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
      return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
    }
    if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
      return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
  }
  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + relativeSource + '" is not in the SourceMap.');
  }
};
BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
  var source = util$1.getArg(aArgs, "source");
  source = this._findSourceIndex(source);
  if (source < 0) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }
  var needle = {
    source,
    originalLine: util$1.getArg(aArgs, "line"),
    originalColumn: util$1.getArg(aArgs, "column")
  };
  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util$1.compareByOriginalPositions, util$1.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
  if (index >= 0) {
    var mapping = this._originalMappings[index];
    if (mapping.source === needle.source) {
      return {
        line: util$1.getArg(mapping, "generatedLine", null),
        column: util$1.getArg(mapping, "generatedColumn", null),
        lastColumn: util$1.getArg(mapping, "lastGeneratedColumn", null)
      };
    }
  }
  return {
    line: null,
    column: null,
    lastColumn: null
  };
};
sourceMapConsumer.BasicSourceMapConsumer = BasicSourceMapConsumer;
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap2 = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap2 = util$1.parseSourceMapInput(aSourceMap);
  }
  var version2 = util$1.getArg(sourceMap2, "version");
  var sections = util$1.getArg(sourceMap2, "sections");
  if (version2 != this._version) {
    throw new Error("Unsupported version: " + version2);
  }
  this._sources = new ArraySet();
  this._names = new ArraySet();
  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function(s) {
    if (s.url) {
      throw new Error("Support for url field in sections not implemented.");
    }
    var offset = util$1.getArg(s, "offset");
    var offsetLine = util$1.getArg(offset, "line");
    var offsetColumn = util$1.getArg(offset, "column");
    if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
      throw new Error("Section offsets must be ordered and non-overlapping.");
    }
    lastOffset = offset;
    return {
      generatedOffset: {
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util$1.getArg(s, "map"), aSourceMapURL)
    };
  });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
IndexedSourceMapConsumer.prototype._version = 3;
Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
  get: function() {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});
IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util$1.getArg(aArgs, "line"),
    generatedColumn: util$1.getArg(aArgs, "column")
  };
  var sectionIndex = binarySearch.search(needle, this._sections, function(needle2, section2) {
    var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
    if (cmp) {
      return cmp;
    }
    return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
  });
  var section = this._sections[sectionIndex];
  if (!section) {
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }
  return section.consumer.originalPositionFor({
    line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
    column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
    bias: aArgs.bias
  });
};
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
  return this._sections.every(function(s) {
    return s.consumer.hasContentsOfAllSources();
  });
};
IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var content = section.consumer.sourceContentFor(aSource, true);
    if (content) {
      return content;
    }
  }
  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    if (section.consumer._findSourceIndex(util$1.getArg(aArgs, "source")) === -1) {
      continue;
    }
    var generatedPosition = section.consumer.generatedPositionFor(aArgs);
    if (generatedPosition) {
      var ret = {
        line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
        column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
      };
      return ret;
    }
  }
  return {
    line: null,
    column: null
  };
};
IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  this.__generatedMappings = [];
  this.__originalMappings = [];
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var sectionMappings = section.consumer._generatedMappings;
    for (var j = 0; j < sectionMappings.length; j++) {
      var mapping = sectionMappings[j];
      var source = section.consumer._sources.at(mapping.source);
      source = util$1.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
      this._sources.add(source);
      source = this._sources.indexOf(source);
      var name = null;
      if (mapping.name) {
        name = section.consumer._names.at(mapping.name);
        this._names.add(name);
        name = this._names.indexOf(name);
      }
      var adjustedMapping = {
        source,
        generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
        generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name
      };
      this.__generatedMappings.push(adjustedMapping);
      if (typeof adjustedMapping.originalLine === "number") {
        this.__originalMappings.push(adjustedMapping);
      }
    }
  }
  quickSort(this.__generatedMappings, util$1.compareByGeneratedPositionsDeflated);
  quickSort(this.__originalMappings, util$1.compareByOriginalPositions);
};
sourceMapConsumer.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
var sourceNode = {};
var SourceMapGenerator = sourceMapGenerator.SourceMapGenerator;
var util = util$5;
var REGEX_NEWLINE = /(\r?\n)/;
var NEWLINE_CODE = 10;
var isSourceNode = "$$$isSourceNode$$$";
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null)
    this.add(aChunks);
}
SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
  var node = new SourceNode();
  var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
  var remainingLinesIndex = 0;
  var shiftNextLine = function() {
    var lineContents = getNextLine();
    var newLine = getNextLine() || "";
    return lineContents + newLine;
    function getNextLine() {
      return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
    }
  };
  var lastGeneratedLine = 1, lastGeneratedColumn = 0;
  var lastMapping = null;
  aSourceMapConsumer.eachMapping(function(mapping) {
    if (lastMapping !== null) {
      if (lastGeneratedLine < mapping.generatedLine) {
        addMappingWithCode(lastMapping, shiftNextLine());
        lastGeneratedLine++;
        lastGeneratedColumn = 0;
      } else {
        var nextLine = remainingLines[remainingLinesIndex] || "";
        var code2 = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
        addMappingWithCode(lastMapping, code2);
        lastMapping = mapping;
        return;
      }
    }
    while (lastGeneratedLine < mapping.generatedLine) {
      node.add(shiftNextLine());
      lastGeneratedLine++;
    }
    if (lastGeneratedColumn < mapping.generatedColumn) {
      var nextLine = remainingLines[remainingLinesIndex] || "";
      node.add(nextLine.substr(0, mapping.generatedColumn));
      remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
      lastGeneratedColumn = mapping.generatedColumn;
    }
    lastMapping = mapping;
  }, this);
  if (remainingLinesIndex < remainingLines.length) {
    if (lastMapping) {
      addMappingWithCode(lastMapping, shiftNextLine());
    }
    node.add(remainingLines.splice(remainingLinesIndex).join(""));
  }
  aSourceMapConsumer.sources.forEach(function(sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);
    if (content != null) {
      if (aRelativePath != null) {
        sourceFile = util.join(aRelativePath, sourceFile);
      }
      node.setSourceContent(sourceFile, content);
    }
  });
  return node;
  function addMappingWithCode(mapping, code2) {
    if (mapping === null || mapping.source === void 0) {
      node.add(code2);
    } else {
      var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
      node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code2, mapping.name));
    }
  }
};
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function(chunk) {
      this.add(chunk);
    }, this);
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  } else {
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
  }
  return this;
};
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length - 1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  } else {
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
  }
  return this;
};
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    } else {
      if (chunk !== "") {
        aFn(chunk, {
          source: this.source,
          line: this.line,
          column: this.column,
          name: this.name
        });
      }
    }
  }
};
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len - 1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  } else if (typeof lastChild === "string") {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  } else {
    this.children.push("".replace(aPattern, aReplacement));
  }
  return this;
};
SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
  this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
  for (var i = 0, len = this.children.length; i < len; i++) {
    if (this.children[i][isSourceNode]) {
      this.children[i].walkSourceContents(aFn);
    }
  }
  var sources = Object.keys(this.sourceContents);
  for (var i = 0, len = sources.length; i < len; i++) {
    aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
  }
};
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function(chunk) {
    str += chunk;
  });
  return str;
};
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function(chunk, original) {
    generated.code += chunk;
    if (original.source !== null && original.line !== null && original.column !== null) {
      if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function(sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });
  return { code: generated.code, map };
};
sourceNode.SourceNode = SourceNode;
sourceMap$1.SourceMapGenerator = sourceMapGenerator.SourceMapGenerator;
sourceMap$1.SourceMapConsumer = sourceMapConsumer.SourceMapConsumer;
sourceMap$1.SourceNode = sourceNode.SourceNode;
/*!
  * message-compiler v9.2.0-beta.30
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(messageCompiler_cjs_prod, "__esModule", { value: true });
var shared$2 = shared$3.exports;
var sourceMap = sourceMap$1;
const CompileErrorCodes = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15
};
const errorMessages = {
  [CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
  [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
  [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
  [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
  [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
  [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
  [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
  [CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
  [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
  [CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
  [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
  [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`
};
function createCompileError(code2, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = code2;
  const error = new SyntaxError(String(msg));
  error.code = code2;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
function defaultOnError(error) {
  throw error;
}
const LocationStub = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 }
};
function createPosition(line, column, offset) {
  return { line, column, offset };
}
function createLocation(start, end, source) {
  const loc = { start, end };
  if (source != null) {
    loc.source = source;
  }
  return loc;
}
const CHAR_SP = " ";
const CHAR_CR = "\r";
const CHAR_LF = "\n";
const CHAR_LS = String.fromCharCode(8232);
const CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
  const _buf = str;
  let _index = 0;
  let _line = 1;
  let _column = 1;
  let _peekOffset = 0;
  const isCRLF = (index2) => _buf[index2] === CHAR_CR && _buf[index2 + 1] === CHAR_LF;
  const isLF = (index2) => _buf[index2] === CHAR_LF;
  const isPS = (index2) => _buf[index2] === CHAR_PS;
  const isLS = (index2) => _buf[index2] === CHAR_LS;
  const isLineEnd = (index2) => isCRLF(index2) || isLF(index2) || isPS(index2) || isLS(index2);
  const index = () => _index;
  const line = () => _line;
  const column = () => _column;
  const peekOffset = () => _peekOffset;
  const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
  const currentChar = () => charAt(_index);
  const currentPeek = () => charAt(_index + _peekOffset);
  function next() {
    _peekOffset = 0;
    if (isLineEnd(_index)) {
      _line++;
      _column = 0;
    }
    if (isCRLF(_index)) {
      _index++;
    }
    _index++;
    _column++;
    return _buf[_index];
  }
  function peek() {
    if (isCRLF(_index + _peekOffset)) {
      _peekOffset++;
    }
    _peekOffset++;
    return _buf[_index + _peekOffset];
  }
  function reset2() {
    _index = 0;
    _line = 1;
    _column = 1;
    _peekOffset = 0;
  }
  function resetPeek(offset = 0) {
    _peekOffset = offset;
  }
  function skipToPeek() {
    const target = _index + _peekOffset;
    while (target !== _index) {
      next();
    }
    _peekOffset = 0;
  }
  return {
    index,
    line,
    column,
    peekOffset,
    charAt,
    currentChar,
    currentPeek,
    next,
    peek,
    reset: reset2,
    resetPeek,
    skipToPeek
  };
}
const EOF = void 0;
const LITERAL_DELIMITER = "'";
const ERROR_DOMAIN$1 = "tokenizer";
function createTokenizer(source, options = {}) {
  const location2 = options.location !== false;
  const _scnr = createScanner(source);
  const currentOffset = () => _scnr.index();
  const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
  const _initLoc = currentPosition();
  const _initOffset = currentOffset();
  const _context = {
    currentType: 14,
    offset: _initOffset,
    startLoc: _initLoc,
    endLoc: _initLoc,
    lastType: 14,
    lastOffset: _initOffset,
    lastStartLoc: _initLoc,
    lastEndLoc: _initLoc,
    braceNest: 0,
    inLinked: false,
    text: ""
  };
  const context = () => _context;
  const { onError } = options;
  function emitError(code2, pos, offset, ...args) {
    const ctx = context();
    pos.column += offset;
    pos.offset += offset;
    if (onError) {
      const loc = createLocation(ctx.startLoc, pos);
      const err = createCompileError(code2, loc, {
        domain: ERROR_DOMAIN$1,
        args
      });
      onError(err);
    }
  }
  function getToken(context2, type, value) {
    context2.endLoc = currentPosition();
    context2.currentType = type;
    const token = { type };
    if (location2) {
      token.loc = createLocation(context2.startLoc, context2.endLoc);
    }
    if (value != null) {
      token.value = value;
    }
    return token;
  }
  const getEndToken = (context2) => getToken(context2, 14);
  function eat(scnr, ch) {
    if (scnr.currentChar() === ch) {
      scnr.next();
      return ch;
    } else {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      return "";
    }
  }
  function peekSpaces(scnr) {
    let buf = "";
    while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
      buf += scnr.currentPeek();
      scnr.peek();
    }
    return buf;
  }
  function skipSpaces(scnr) {
    const buf = peekSpaces(scnr);
    scnr.skipToPeek();
    return buf;
  }
  function isIdentifierStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc === 95;
  }
  function isNumberStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function isNamedIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isListIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ch = scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek();
    const ret = isNumberStart(ch);
    scnr.resetPeek();
    return ret;
  }
  function isLiteralStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === LITERAL_DELIMITER;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDotStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 8) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ".";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedModifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 9) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDelimiterStart(scnr, context2) {
    const { currentType } = context2;
    if (!(currentType === 8 || currentType === 12)) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ":";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedReferStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 10) {
      return false;
    }
    const fn = () => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return isIdentifierStart(scnr.peek());
      } else if (ch === "@" || ch === "%" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) {
        return false;
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn();
      } else {
        return isIdentifierStart(ch);
      }
    };
    const ret = fn();
    scnr.resetPeek();
    return ret;
  }
  function isPluralStart(scnr) {
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === "|";
    scnr.resetPeek();
    return ret;
  }
  function isTextStart(scnr, reset2 = true) {
    const fn = (hasSpace = false, prev = "", detectModulo = false) => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return prev === "%" ? false : hasSpace;
      } else if (ch === "@" || !ch) {
        return prev === "%" ? true : hasSpace;
      } else if (ch === "%") {
        scnr.peek();
        return fn(hasSpace, "%", true);
      } else if (ch === "|") {
        return prev === "%" || detectModulo ? true : !(prev === CHAR_SP || prev === CHAR_LF);
      } else if (ch === CHAR_SP) {
        scnr.peek();
        return fn(true, CHAR_SP, detectModulo);
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn(true, CHAR_LF, detectModulo);
      } else {
        return true;
      }
    };
    const ret = fn();
    reset2 && scnr.resetPeek();
    return ret;
  }
  function takeChar(scnr, fn) {
    const ch = scnr.currentChar();
    if (ch === EOF) {
      return EOF;
    }
    if (fn(ch)) {
      scnr.next();
      return ch;
    }
    return null;
  }
  function takeIdentifierChar(scnr) {
    const closure = (ch) => {
      const cc = ch.charCodeAt(0);
      return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95 || cc === 36;
    };
    return takeChar(scnr, closure);
  }
  function takeDigit(scnr) {
    const closure = (ch) => {
      const cc = ch.charCodeAt(0);
      return cc >= 48 && cc <= 57;
    };
    return takeChar(scnr, closure);
  }
  function takeHexDigit(scnr) {
    const closure = (ch) => {
      const cc = ch.charCodeAt(0);
      return cc >= 48 && cc <= 57 || cc >= 65 && cc <= 70 || cc >= 97 && cc <= 102;
    };
    return takeChar(scnr, closure);
  }
  function getDigits(scnr) {
    let ch = "";
    let num = "";
    while (ch = takeDigit(scnr)) {
      num += ch;
    }
    return num;
  }
  function readText(scnr) {
    let buf = "";
    while (true) {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) {
        break;
      } else if (ch === "%") {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else {
          break;
        }
      } else if (ch === CHAR_SP || ch === CHAR_LF) {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else if (isPluralStart(scnr)) {
          break;
        } else {
          buf += ch;
          scnr.next();
        }
      } else {
        buf += ch;
        scnr.next();
      }
    }
    return buf;
  }
  function readNamedIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let name = "";
    while (ch = takeIdentifierChar(scnr)) {
      name += ch;
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return name;
  }
  function readListIdentifier(scnr) {
    skipSpaces(scnr);
    let value = "";
    if (scnr.currentChar() === "-") {
      scnr.next();
      value += `-${getDigits(scnr)}`;
    } else {
      value += getDigits(scnr);
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return value;
  }
  function readLiteral(scnr) {
    skipSpaces(scnr);
    eat(scnr, `'`);
    let ch = "";
    let literal = "";
    const fn = (x) => x !== LITERAL_DELIMITER && x !== CHAR_LF;
    while (ch = takeChar(scnr, fn)) {
      if (ch === "\\") {
        literal += readEscapeSequence(scnr);
      } else {
        literal += ch;
      }
    }
    const current = scnr.currentChar();
    if (current === CHAR_LF || current === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
      if (current === CHAR_LF) {
        scnr.next();
        eat(scnr, `'`);
      }
      return literal;
    }
    eat(scnr, `'`);
    return literal;
  }
  function readEscapeSequence(scnr) {
    const ch = scnr.currentChar();
    switch (ch) {
      case "\\":
      case `'`:
        scnr.next();
        return `\\${ch}`;
      case "u":
        return readUnicodeEscapeSequence(scnr, ch, 4);
      case "U":
        return readUnicodeEscapeSequence(scnr, ch, 6);
      default:
        emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
        return "";
    }
  }
  function readUnicodeEscapeSequence(scnr, unicode, digits) {
    eat(scnr, unicode);
    let sequence = "";
    for (let i = 0; i < digits; i++) {
      const ch = takeHexDigit(scnr);
      if (!ch) {
        emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
        break;
      }
      sequence += ch;
    }
    return `\\${unicode}${sequence}`;
  }
  function readInvalidIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let identifiers = "";
    const closure = (ch2) => ch2 !== "{" && ch2 !== "}" && ch2 !== CHAR_SP && ch2 !== CHAR_LF;
    while (ch = takeChar(scnr, closure)) {
      identifiers += ch;
    }
    return identifiers;
  }
  function readLinkedModifier(scnr) {
    let ch = "";
    let name = "";
    while (ch = takeIdentifierChar(scnr)) {
      name += ch;
    }
    return name;
  }
  function readLinkedRefer(scnr) {
    const fn = (detect = false, buf) => {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "%" || ch === "@" || ch === "|" || !ch) {
        return buf;
      } else if (ch === CHAR_SP) {
        return buf;
      } else if (ch === CHAR_LF) {
        buf += ch;
        scnr.next();
        return fn(detect, buf);
      } else {
        buf += ch;
        scnr.next();
        return fn(true, buf);
      }
    };
    return fn(false, "");
  }
  function readPlural(scnr) {
    skipSpaces(scnr);
    const plural = eat(scnr, "|");
    skipSpaces(scnr);
    return plural;
  }
  function readTokenInPlaceholder(scnr, context2) {
    let token = null;
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        if (context2.braceNest >= 1) {
          emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(context2, 2, "{");
        skipSpaces(scnr);
        context2.braceNest++;
        return token;
      case "}":
        if (context2.braceNest > 0 && context2.currentType === 2) {
          emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(context2, 3, "}");
        context2.braceNest--;
        context2.braceNest > 0 && skipSpaces(scnr);
        if (context2.inLinked && context2.braceNest === 0) {
          context2.inLinked = false;
        }
        return token;
      case "@":
        if (context2.braceNest > 0) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        token = readTokenInLinked(scnr, context2) || getEndToken(context2);
        context2.braceNest = 0;
        return token;
      default:
        let validNamedIdentifier = true;
        let validListIdentifier = true;
        let validLiteral = true;
        if (isPluralStart(scnr)) {
          if (context2.braceNest > 0) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (context2.braceNest > 0 && (context2.currentType === 5 || context2.currentType === 6 || context2.currentType === 7)) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          context2.braceNest = 0;
          return readToken(scnr, context2);
        }
        if (validNamedIdentifier = isNamedIdentifierStart(scnr, context2)) {
          token = getToken(context2, 5, readNamedIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validListIdentifier = isListIdentifierStart(scnr, context2)) {
          token = getToken(context2, 6, readListIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validLiteral = isLiteralStart(scnr, context2)) {
          token = getToken(context2, 7, readLiteral(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
          token = getToken(context2, 13, readInvalidIdentifier(scnr));
          emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
          skipSpaces(scnr);
          return token;
        }
        break;
    }
    return token;
  }
  function readTokenInLinked(scnr, context2) {
    const { currentType } = context2;
    let token = null;
    const ch = scnr.currentChar();
    if ((currentType === 8 || currentType === 9 || currentType === 12 || currentType === 10) && (ch === CHAR_LF || ch === CHAR_SP)) {
      emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
    }
    switch (ch) {
      case "@":
        scnr.next();
        token = getToken(context2, 8, "@");
        context2.inLinked = true;
        return token;
      case ".":
        skipSpaces(scnr);
        scnr.next();
        return getToken(context2, 9, ".");
      case ":":
        skipSpaces(scnr);
        scnr.next();
        return getToken(context2, 10, ":");
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isLinkedDotStart(scnr, context2) || isLinkedDelimiterStart(scnr, context2)) {
          skipSpaces(scnr);
          return readTokenInLinked(scnr, context2);
        }
        if (isLinkedModifierStart(scnr, context2)) {
          skipSpaces(scnr);
          return getToken(context2, 12, readLinkedModifier(scnr));
        }
        if (isLinkedReferStart(scnr, context2)) {
          skipSpaces(scnr);
          if (ch === "{") {
            return readTokenInPlaceholder(scnr, context2) || token;
          } else {
            return getToken(context2, 11, readLinkedRefer(scnr));
          }
        }
        if (currentType === 8) {
          emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
        }
        context2.braceNest = 0;
        context2.inLinked = false;
        return readToken(scnr, context2);
    }
  }
  function readToken(scnr, context2) {
    let token = { type: 14 };
    if (context2.braceNest > 0) {
      return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
    }
    if (context2.inLinked) {
      return readTokenInLinked(scnr, context2) || getEndToken(context2);
    }
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
      case "}":
        emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
        scnr.next();
        return getToken(context2, 3, "}");
      case "@":
        return readTokenInLinked(scnr, context2) || getEndToken(context2);
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isTextStart(scnr)) {
          return getToken(context2, 0, readText(scnr));
        }
        if (ch === "%") {
          scnr.next();
          return getToken(context2, 4, "%");
        }
        break;
    }
    return token;
  }
  function nextToken() {
    const { currentType, offset, startLoc, endLoc } = _context;
    _context.lastType = currentType;
    _context.lastOffset = offset;
    _context.lastStartLoc = startLoc;
    _context.lastEndLoc = endLoc;
    _context.offset = currentOffset();
    _context.startLoc = currentPosition();
    if (_scnr.currentChar() === EOF) {
      return getToken(_context, 14);
    }
    return readToken(_scnr, _context);
  }
  return {
    nextToken,
    currentOffset,
    currentPosition,
    context
  };
}
const ERROR_DOMAIN = "parser";
const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
  switch (match) {
    case `\\\\`:
      return `\\`;
    case `\\'`:
      return `'`;
    default: {
      const codePoint = parseInt(codePoint4 || codePoint6, 16);
      if (codePoint <= 55295 || codePoint >= 57344) {
        return String.fromCodePoint(codePoint);
      }
      return "\uFFFD";
    }
  }
}
function createParser(options = {}) {
  const location2 = options.location !== false;
  const { onError } = options;
  function emitError(tokenzer, code2, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onError) {
      const loc = createLocation(start, end);
      const err = createCompileError(code2, loc, {
        domain: ERROR_DOMAIN,
        args
      });
      onError(err);
    }
  }
  function startNode(type, offset, loc) {
    const node = {
      type,
      start: offset,
      end: offset
    };
    if (location2) {
      node.loc = { start: loc, end: loc };
    }
    return node;
  }
  function endNode(node, offset, pos, type) {
    node.end = offset;
    if (type) {
      node.type = type;
    }
    if (location2 && node.loc) {
      node.loc.end = pos;
    }
  }
  function parseText(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(3, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseList(tokenizer, index) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(5, offset, loc);
    node.index = parseInt(index, 10);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseNamed(tokenizer, key) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(4, offset, loc);
    node.key = key;
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLiteral(tokenizer, value) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(9, offset, loc);
    node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinkedModifier(tokenizer) {
    const token = tokenizer.nextToken();
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(8, offset, loc);
    if (token.type !== 12) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
      node.value = "";
      endNode(node, offset, loc);
      return {
        nextConsumeToken: token,
        node
      };
    }
    if (token.value == null) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    node.value = token.value || "";
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node
    };
  }
  function parseLinkedKey(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(7, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinked(tokenizer) {
    const context = tokenizer.context();
    const linkedNode = startNode(6, context.offset, context.startLoc);
    let token = tokenizer.nextToken();
    if (token.type === 9) {
      const parsed = parseLinkedModifier(tokenizer);
      linkedNode.modifier = parsed.node;
      token = parsed.nextConsumeToken || tokenizer.nextToken();
    }
    if (token.type !== 10) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    token = tokenizer.nextToken();
    if (token.type === 2) {
      token = tokenizer.nextToken();
    }
    switch (token.type) {
      case 11:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
        break;
      case 5:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseNamed(tokenizer, token.value || "");
        break;
      case 6:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseList(tokenizer, token.value || "");
        break;
      case 7:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLiteral(tokenizer, token.value || "");
        break;
      default:
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
        const nextContext = tokenizer.context();
        const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
        emptyLinkedKeyNode.value = "";
        endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
        linkedNode.key = emptyLinkedKeyNode;
        endNode(linkedNode, nextContext.offset, nextContext.startLoc);
        return {
          nextConsumeToken: token,
          node: linkedNode
        };
    }
    endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node: linkedNode
    };
  }
  function parseMessage(tokenizer) {
    const context = tokenizer.context();
    const startOffset = context.currentType === 1 ? tokenizer.currentOffset() : context.offset;
    const startLoc = context.currentType === 1 ? context.endLoc : context.startLoc;
    const node = startNode(2, startOffset, startLoc);
    node.items = [];
    let nextToken = null;
    do {
      const token = nextToken || tokenizer.nextToken();
      nextToken = null;
      switch (token.type) {
        case 0:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseText(tokenizer, token.value || ""));
          break;
        case 6:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseList(tokenizer, token.value || ""));
          break;
        case 5:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseNamed(tokenizer, token.value || ""));
          break;
        case 7:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseLiteral(tokenizer, token.value || ""));
          break;
        case 8:
          const parsed = parseLinked(tokenizer);
          node.items.push(parsed.node);
          nextToken = parsed.nextConsumeToken || null;
          break;
      }
    } while (context.currentType !== 14 && context.currentType !== 1);
    const endOffset = context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset();
    const endLoc = context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition();
    endNode(node, endOffset, endLoc);
    return node;
  }
  function parsePlural(tokenizer, offset, loc, msgNode) {
    const context = tokenizer.context();
    let hasEmptyMessage = msgNode.items.length === 0;
    const node = startNode(1, offset, loc);
    node.cases = [];
    node.cases.push(msgNode);
    do {
      const msg = parseMessage(tokenizer);
      if (!hasEmptyMessage) {
        hasEmptyMessage = msg.items.length === 0;
      }
      node.cases.push(msg);
    } while (context.currentType !== 14);
    if (hasEmptyMessage) {
      emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseResource(tokenizer) {
    const context = tokenizer.context();
    const { offset, startLoc } = context;
    const msgNode = parseMessage(tokenizer);
    if (context.currentType === 14) {
      return msgNode;
    } else {
      return parsePlural(tokenizer, offset, startLoc, msgNode);
    }
  }
  function parse2(source) {
    const tokenizer = createTokenizer(source, shared$2.assign({}, options));
    const context = tokenizer.context();
    const node = startNode(0, context.offset, context.startLoc);
    if (location2 && node.loc) {
      node.loc.source = source;
    }
    node.body = parseResource(tokenizer);
    if (context.currentType !== 14) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  return { parse: parse2 };
}
function getTokenCaption(token) {
  if (token.type === 14) {
    return "EOF";
  }
  const name = (token.value || "").replace(/\r?\n/gu, "\\n");
  return name.length > 10 ? name.slice(0, 9) + "\u2026" : name;
}
function createTransformer(ast, options = {}) {
  const _context = {
    ast,
    helpers: /* @__PURE__ */ new Set()
  };
  const context = () => _context;
  const helper = (name) => {
    _context.helpers.add(name);
    return name;
  };
  return { context, helper };
}
function traverseNodes(nodes, transformer) {
  for (let i = 0; i < nodes.length; i++) {
    traverseNode(nodes[i], transformer);
  }
}
function traverseNode(node, transformer) {
  switch (node.type) {
    case 1:
      traverseNodes(node.cases, transformer);
      transformer.helper("plural");
      break;
    case 2:
      traverseNodes(node.items, transformer);
      break;
    case 6:
      const linked = node;
      traverseNode(linked.key, transformer);
      transformer.helper("linked");
      break;
    case 5:
      transformer.helper("interpolate");
      transformer.helper("list");
      break;
    case 4:
      transformer.helper("interpolate");
      transformer.helper("named");
      break;
  }
}
function transform(ast, options = {}) {
  const transformer = createTransformer(ast);
  transformer.helper("normalize");
  ast.body && traverseNode(ast.body, transformer);
  const context = transformer.context();
  ast.helpers = Array.from(context.helpers);
}
function createCodeGenerator(ast, options) {
  const { sourceMap: sourceMap$12, filename, breakLineCode, needIndent: _needIndent } = options;
  const _context = {
    source: ast.loc.source,
    filename,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode,
    needIndent: _needIndent,
    indentLevel: 0
  };
  const context = () => _context;
  function push(code2, node) {
    _context.code += code2;
    if (_context.map) {
      if (node && node.loc && node.loc !== LocationStub) {
        addMapping(node.loc.start, getMappingName(node));
      }
      advancePositionWithSource(_context, code2);
    }
  }
  function _newline(n, withBreakLine = true) {
    const _breakLineCode = withBreakLine ? breakLineCode : "";
    push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
  }
  function indent(withNewLine = true) {
    const level = ++_context.indentLevel;
    withNewLine && _newline(level);
  }
  function deindent(withNewLine = true) {
    const level = --_context.indentLevel;
    withNewLine && _newline(level);
  }
  function newline() {
    _newline(_context.indentLevel);
  }
  const helper = (key) => `_${key}`;
  const needIndent = () => _context.needIndent;
  function addMapping(loc, name) {
    _context.map.addMapping({
      name,
      source: _context.filename,
      original: {
        line: loc.line,
        column: loc.column - 1
      },
      generated: {
        line: _context.line,
        column: _context.column - 1
      }
    });
  }
  if (sourceMap$12) {
    _context.map = new sourceMap.SourceMapGenerator();
    _context.map.setSourceContent(filename, _context.source);
  }
  return {
    context,
    push,
    indent,
    deindent,
    newline,
    helper,
    needIndent
  };
}
function generateLinkedNode(generator, node) {
  const { helper } = generator;
  generator.push(`${helper("linked")}(`);
  generateNode(generator, node.key);
  if (node.modifier) {
    generator.push(`, `);
    generateNode(generator, node.modifier);
  }
  generator.push(`)`);
}
function generateMessageNode(generator, node) {
  const { helper, needIndent } = generator;
  generator.push(`${helper("normalize")}([`);
  generator.indent(needIndent());
  const length = node.items.length;
  for (let i = 0; i < length; i++) {
    generateNode(generator, node.items[i]);
    if (i === length - 1) {
      break;
    }
    generator.push(", ");
  }
  generator.deindent(needIndent());
  generator.push("])");
}
function generatePluralNode(generator, node) {
  const { helper, needIndent } = generator;
  if (node.cases.length > 1) {
    generator.push(`${helper("plural")}([`);
    generator.indent(needIndent());
    const length = node.cases.length;
    for (let i = 0; i < length; i++) {
      generateNode(generator, node.cases[i]);
      if (i === length - 1) {
        break;
      }
      generator.push(", ");
    }
    generator.deindent(needIndent());
    generator.push(`])`);
  }
}
function generateResource(generator, node) {
  if (node.body) {
    generateNode(generator, node.body);
  } else {
    generator.push("null");
  }
}
function generateNode(generator, node) {
  const { helper } = generator;
  switch (node.type) {
    case 0:
      generateResource(generator, node);
      break;
    case 1:
      generatePluralNode(generator, node);
      break;
    case 2:
      generateMessageNode(generator, node);
      break;
    case 6:
      generateLinkedNode(generator, node);
      break;
    case 8:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 7:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 5:
      generator.push(`${helper("interpolate")}(${helper("list")}(${node.index}))`, node);
      break;
    case 4:
      generator.push(`${helper("interpolate")}(${helper("named")}(${JSON.stringify(node.key)}))`, node);
      break;
    case 9:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 3:
      generator.push(JSON.stringify(node.value), node);
      break;
  }
}
const generate = (ast, options = {}) => {
  const mode = shared$2.isString(options.mode) ? options.mode : "normal";
  const filename = shared$2.isString(options.filename) ? options.filename : "message.intl";
  const sourceMap2 = !!options.sourceMap;
  const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
  const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
  const helpers = ast.helpers || [];
  const generator = createCodeGenerator(ast, {
    mode,
    filename,
    sourceMap: sourceMap2,
    breakLineCode,
    needIndent
  });
  generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
  generator.indent(needIndent);
  if (helpers.length > 0) {
    generator.push(`const { ${helpers.map((s) => `${s}: _${s}`).join(", ")} } = ctx`);
    generator.newline();
  }
  generator.push(`return `);
  generateNode(generator, ast);
  generator.deindent(needIndent);
  generator.push(`}`);
  const { code: code2, map } = generator.context();
  return {
    ast,
    code: code2,
    map: map ? map.toJSON() : void 0
  };
};
function getMappingName(node) {
  switch (node.type) {
    case 3:
      return node.value;
    case 5:
      return node.index.toString();
    case 4:
      return node.key;
    case 9:
      return node.value;
    case 8:
      return node.value;
    case 7:
      return node.value;
    default:
      return void 0;
  }
}
function advancePositionWithSource(pos, source, numberOfCharacters = source.length) {
  let linesCount = 0;
  let lastNewLinePos = -1;
  for (let i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10) {
      linesCount++;
      lastNewLinePos = i;
    }
  }
  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}
function baseCompile(source, options = {}) {
  const assignedOptions = shared$2.assign({}, options);
  const parser = createParser(assignedOptions);
  const ast = parser.parse(source);
  transform(ast, assignedOptions);
  return generate(ast, assignedOptions);
}
messageCompiler_cjs_prod.CompileErrorCodes = CompileErrorCodes;
messageCompiler_cjs_prod.ERROR_DOMAIN = ERROR_DOMAIN;
messageCompiler_cjs_prod.LocationStub = LocationStub;
messageCompiler_cjs_prod.baseCompile = baseCompile;
messageCompiler_cjs_prod.createCompileError = createCompileError;
messageCompiler_cjs_prod.createLocation = createLocation;
messageCompiler_cjs_prod.createParser = createParser;
messageCompiler_cjs_prod.createPosition = createPosition;
messageCompiler_cjs_prod.defaultOnError = defaultOnError;
messageCompiler_cjs_prod.errorMessages = errorMessages;
{
  messageCompiler$1.exports = messageCompiler_cjs_prod;
}
var devtoolsIf$1 = { exports: {} };
var devtoolsIf_cjs_prod = {};
/*!
  * devtools-if v9.2.0-beta.30
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(devtoolsIf_cjs_prod, "__esModule", { value: true });
const IntlifyDevToolsHooks = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
devtoolsIf_cjs_prod.IntlifyDevToolsHooks = IntlifyDevToolsHooks;
{
  devtoolsIf$1.exports = devtoolsIf_cjs_prod;
}
/*!
  * core-base v9.2.0-beta.30
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(coreBase_cjs_prod, "__esModule", { value: true });
var messageCompiler = messageCompiler$1.exports;
var shared$1 = shared$3.exports;
var devtoolsIf = devtoolsIf$1.exports;
const pathStateMachine = [];
pathStateMachine[0] = {
  ["w"]: [0],
  ["i"]: [3, 0],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[1] = {
  ["w"]: [1],
  ["."]: [2],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[2] = {
  ["w"]: [2],
  ["i"]: [3, 0],
  ["0"]: [3, 0]
};
pathStateMachine[3] = {
  ["i"]: [3, 0],
  ["0"]: [3, 0],
  ["w"]: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  ["o"]: [7, 1]
};
pathStateMachine[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  ["o"]: 8,
  ["l"]: [4, 0]
};
pathStateMachine[5] = {
  ["'"]: [4, 0],
  ["o"]: 8,
  ["l"]: [5, 0]
};
pathStateMachine[6] = {
  ['"']: [4, 0],
  ["o"]: 8,
  ["l"]: [6, 0]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
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
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions2 = [];
  actions2[0] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions2[1] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions2[2] = () => {
    actions2[0]();
    subPathDepth++;
  };
  actions2[3] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions2[0]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions2[1]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index++;
      newChar = "\\" + nextChar;
      actions2[0]();
      return true;
    }
  }
  while (mode !== null) {
    index++;
    c = path[index];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap["l"] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions2[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return shared$1.isObject(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!shared$1.isObject(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === void 0) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
const DEFAULT_INTERPOLATE = shared$1.toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index = shared$1.isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (shared$1.isNumber(options.named.count) || shared$1.isNumber(options.named.n)) ? shared$1.isNumber(options.named.count) ? options.named.count : shared$1.isNumber(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = shared$1.isObject(options.pluralRules) && shared$1.isString(locale) && shared$1.isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = shared$1.isObject(options.pluralRules) && shared$1.isString(locale) && shared$1.isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages) => messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  const _list = options.list || [];
  const list = (index) => _list[index];
  const _named = options.named || {};
  shared$1.isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key) {
    const msg = shared$1.isFunction(options.messages) ? options.messages(key) : shared$1.isObject(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = shared$1.isPlainObject(options.processor) && shared$1.isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = shared$1.isPlainObject(options.processor) && shared$1.isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = shared$1.isPlainObject(options.processor) && shared$1.isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const ctx = {
    ["list"]: list,
    ["named"]: named,
    ["plural"]: plural,
    ["linked"]: (key, modifier) => {
      const msg = message(key)(ctx);
      return shared$1.isString(modifier) ? _modifier(modifier)(msg) : msg;
    },
    ["message"]: message,
    ["type"]: type,
    ["interpolate"]: interpolate,
    ["normalize"]: normalize
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function getDevToolsHook() {
  return devtools;
}
function initI18nDevTools(i18n2, version2, meta) {
  devtools && devtools.emit(devtoolsIf.IntlifyDevToolsHooks.I18nInit, {
    timestamp: Date.now(),
    i18n: i18n2,
    version: version2,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(devtoolsIf.IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const CoreWarnCodes = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
};
const warnMessages = {
  [CoreWarnCodes.NOT_FOUND_KEY]: `Not found '{key}' key in '{locale}' locale messages.`,
  [CoreWarnCodes.FALLBACK_TO_TRANSLATE]: `Fall back to translate '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_NUMBER]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
  [CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: `Fall back to number format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_DATE]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
  [CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: `Fall back to datetime format '{key}' key with '{target}' locale.`
};
function getWarnMessage(code2, ...args) {
  return shared$1.format(warnMessages[code2], ...args);
}
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...shared$1.isArray(fallback) ? fallback : shared$1.isObject(fallback) ? Object.keys(fallback) : shared$1.isString(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = shared$1.isString(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (shared$1.isArray(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults2 = shared$1.isArray(fallback) || !shared$1.isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = shared$1.isString(defaults2) ? [defaults2] : defaults2;
    if (shared$1.isArray(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && shared$1.isBoolean(follow); i++) {
    const locale = block[i];
    if (shared$1.isString(locale)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((shared$1.isArray(blocks) || shared$1.isPlainObject(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const VERSION$1 = "9.2.0-beta.30";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
function getDefaultLinkedModifiers() {
  return {
    upper: (val) => shared$1.isString(val) ? val.toUpperCase() : val,
    lower: (val) => shared$1.isString(val) ? val.toLowerCase() : val,
    capitalize: (val) => shared$1.isString(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
  };
}
let _compiler;
function registerMessageCompiler(compiler) {
  _compiler = compiler;
}
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = () => _additionalMeta;
let _cid = 0;
function createCoreContext(options = {}) {
  const version2 = shared$1.isString(options.version) ? options.version : VERSION$1;
  const locale = shared$1.isString(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = shared$1.isArray(options.fallbackLocale) || shared$1.isPlainObject(options.fallbackLocale) || shared$1.isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const messages = shared$1.isPlainObject(options.messages) ? options.messages : { [locale]: {} };
  const datetimeFormats = shared$1.isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
  const numberFormats = shared$1.isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
  const modifiers = shared$1.assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = shared$1.isFunction(options.missing) ? options.missing : null;
  const missingWarn = shared$1.isBoolean(options.missingWarn) || shared$1.isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = shared$1.isBoolean(options.fallbackWarn) || shared$1.isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = shared$1.isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = shared$1.isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = shared$1.isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler2 = shared$1.isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  const messageResolver = shared$1.isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = shared$1.isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const onWarn = shared$1.isFunction(options.onWarn) ? options.onWarn : shared$1.warn;
  const internalOptions = options;
  const __datetimeFormatters = shared$1.isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = shared$1.isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = shared$1.isObject(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler: messageCompiler2,
    messageResolver,
    localeFallbacker,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  return context;
}
function isTranslateFallbackWarn(fallback, key) {
  return fallback instanceof RegExp ? fallback.test(key) : fallback;
}
function isTranslateMissingWarn(missing, key) {
  return missing instanceof RegExp ? missing.test(key) : missing;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return shared$1.isString(ret) ? ret : key;
  } else {
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
const defaultOnCacheKey = (source) => source;
let compileCache = /* @__PURE__ */ Object.create(null);
function clearCompileCache() {
  compileCache = /* @__PURE__ */ Object.create(null);
}
function compileToFunction(source, options = {}) {
  {
    const onCacheKey = options.onCacheKey || defaultOnCacheKey;
    const key = onCacheKey(source);
    const cached = compileCache[key];
    if (cached) {
      return cached;
    }
    let occurred = false;
    const onError = options.onError || messageCompiler.defaultOnError;
    options.onError = (err) => {
      occurred = true;
      onError(err);
    };
    const { code: code2 } = messageCompiler.baseCompile(source, options);
    const msg = new Function(`return ${code2}`)();
    return !occurred ? compileCache[key] = msg : msg;
  }
}
let code$1 = messageCompiler.CompileErrorCodes.__EXTEND_POINT__;
const inc$1 = () => ++code$1;
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$1,
  INVALID_DATE_ARGUMENT: inc$1(),
  INVALID_ISO_DATE_ARGUMENT: inc$1(),
  __EXTEND_POINT__: inc$1()
};
function createCoreError(code2) {
  return messageCompiler.createCompileError(code2, null, void 0);
}
({
  [CoreErrorCodes.INVALID_ARGUMENT]: "Invalid arguments",
  [CoreErrorCodes.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
});
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => shared$1.isFunction(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler: messageCompiler2, fallbackLocale, messages } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = shared$1.isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = shared$1.isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = shared$1.isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = shared$1.isString(options.default) || shared$1.isBoolean(options.default) ? !shared$1.isBoolean(options.default) ? options.default : key : fallbackFormat ? !messageCompiler2 ? () => key : key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = shared$1.isString(options.locale) ? options.locale : context.locale;
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages[locale] || {}
  ];
  let format2 = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(shared$1.isString(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(shared$1.isString(format2) || isMessageFunction(format2)) || !shared$1.isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const errorDetector = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged) : messaged;
  return ret;
}
function escapeParams(options) {
  if (shared$1.isArray(options.list)) {
    options.list = options.list.map((item) => shared$1.isString(item) ? shared$1.escapeHtml(item) : item);
  } else if (shared$1.isObject(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (shared$1.isString(options.named[key])) {
        options.named[key] = shared$1.escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format2 = null;
  const type = "translate";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    message = messages[targetLocale] || {};
    if ((format2 = resolveValue2(message, key)) === null) {
      format2 = message[key];
    }
    if (shared$1.isString(format2) || shared$1.isFunction(format2))
      break;
    const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
    if (missingRet !== key) {
      format2 = missingRet;
    }
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) {
  const { messageCompiler: messageCompiler2, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  const msg = messageCompiler2(format2, getCompileOptions(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, errorDetector));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!shared$1.isString(arg1) && !shared$1.isNumber(arg1) && !isMessageFunction(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = shared$1.isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (shared$1.isNumber(arg2)) {
    options.plural = arg2;
  } else if (shared$1.isString(arg2)) {
    options.default = arg2;
  } else if (shared$1.isPlainObject(arg2) && !shared$1.isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (shared$1.isArray(arg2)) {
    options.list = arg2;
  }
  if (shared$1.isNumber(arg3)) {
    options.plural = arg3;
  } else if (shared$1.isString(arg3)) {
    options.default = arg3;
  } else if (shared$1.isPlainObject(arg3)) {
    shared$1.assign(options, arg3);
  }
  return [key, options];
}
function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
  return {
    warnHtmlMessage,
    onError: (err) => {
      errorDetector && errorDetector(err);
      {
        throw err;
      }
    },
    onCacheKey: (source2) => shared$1.generateFormatCacheKey(locale, key, source2)
  };
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2 } = context;
  const resolveMessage = (key) => {
    const val = resolveValue2(message, key);
    if (shared$1.isString(val)) {
      let occurred = false;
      const errorDetector = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (shared$1.isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = shared$1.isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  shared$1.isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = shared$1.isString(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  if (!shared$1.isString(key) || key === "") {
    return new Intl.DateTimeFormat(locale).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "datetime format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (shared$1.isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!shared$1.isPlainObject(format2) || !shared$1.isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!shared$1.isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, shared$1.assign({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  let value;
  if (shared$1.isString(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch (e) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (shared$1.isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (shared$1.isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (shared$1.isString(arg2)) {
    options.key = arg2;
  } else if (shared$1.isPlainObject(arg2)) {
    options = arg2;
  }
  if (shared$1.isString(arg3)) {
    options.locale = arg3;
  } else if (shared$1.isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (shared$1.isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = shared$1.isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  shared$1.isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = shared$1.isString(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  if (!shared$1.isString(key) || key === "") {
    return new Intl.NumberFormat(locale).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "number format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (shared$1.isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!shared$1.isPlainObject(format2) || !shared$1.isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!shared$1.isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, shared$1.assign({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  if (!shared$1.isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (shared$1.isString(arg2)) {
    options.key = arg2;
  } else if (shared$1.isPlainObject(arg2)) {
    options = arg2;
  }
  if (shared$1.isString(arg3)) {
    options.locale = arg3;
  } else if (shared$1.isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (shared$1.isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
coreBase_cjs_prod.CompileErrorCodes = messageCompiler.CompileErrorCodes;
coreBase_cjs_prod.createCompileError = messageCompiler.createCompileError;
coreBase_cjs_prod.CoreErrorCodes = CoreErrorCodes;
coreBase_cjs_prod.CoreWarnCodes = CoreWarnCodes;
coreBase_cjs_prod.DEFAULT_LOCALE = DEFAULT_LOCALE;
coreBase_cjs_prod.DEFAULT_MESSAGE_DATA_TYPE = DEFAULT_MESSAGE_DATA_TYPE;
coreBase_cjs_prod.MISSING_RESOLVE_VALUE = MISSING_RESOLVE_VALUE;
coreBase_cjs_prod.NOT_REOSLVED = NOT_REOSLVED;
coreBase_cjs_prod.VERSION = VERSION$1;
coreBase_cjs_prod.clearCompileCache = clearCompileCache;
coreBase_cjs_prod.clearDateTimeFormat = clearDateTimeFormat;
coreBase_cjs_prod.clearNumberFormat = clearNumberFormat;
coreBase_cjs_prod.compileToFunction = compileToFunction;
coreBase_cjs_prod.createCoreContext = createCoreContext;
coreBase_cjs_prod.createCoreError = createCoreError;
coreBase_cjs_prod.createMessageContext = createMessageContext;
coreBase_cjs_prod.datetime = datetime;
coreBase_cjs_prod.fallbackWithLocaleChain = fallbackWithLocaleChain;
coreBase_cjs_prod.fallbackWithSimple = fallbackWithSimple;
coreBase_cjs_prod.getAdditionalMeta = getAdditionalMeta;
coreBase_cjs_prod.getDevToolsHook = getDevToolsHook;
coreBase_cjs_prod.getWarnMessage = getWarnMessage;
coreBase_cjs_prod.handleMissing = handleMissing;
coreBase_cjs_prod.initI18nDevTools = initI18nDevTools;
coreBase_cjs_prod.isMessageFunction = isMessageFunction;
coreBase_cjs_prod.isTranslateFallbackWarn = isTranslateFallbackWarn;
coreBase_cjs_prod.isTranslateMissingWarn = isTranslateMissingWarn;
coreBase_cjs_prod.number = number;
coreBase_cjs_prod.parse = parse;
coreBase_cjs_prod.parseDateTimeArgs = parseDateTimeArgs;
coreBase_cjs_prod.parseNumberArgs = parseNumberArgs;
coreBase_cjs_prod.parseTranslateArgs = parseTranslateArgs;
coreBase_cjs_prod.registerLocaleFallbacker = registerLocaleFallbacker;
coreBase_cjs_prod.registerMessageCompiler = registerMessageCompiler;
coreBase_cjs_prod.registerMessageResolver = registerMessageResolver;
coreBase_cjs_prod.resolveValue = resolveValue;
coreBase_cjs_prod.resolveWithKeyValue = resolveWithKeyValue;
coreBase_cjs_prod.setAdditionalMeta = setAdditionalMeta;
coreBase_cjs_prod.setDevToolsHook = setDevToolsHook;
coreBase_cjs_prod.translate = translate;
coreBase_cjs_prod.translateDevTools = translateDevTools;
coreBase_cjs_prod.updateFallbackLocale = updateFallbackLocale;
{
  coreBase$1.exports = coreBase_cjs_prod;
}
var require$$1 = /* @__PURE__ */ getAugmentedNamespace(vue_runtime_esmBundler);
/*!
  * vue-i18n v9.2.0-beta.30
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
Object.defineProperty(vueI18n_cjs_prod, "__esModule", { value: true });
var coreBase = coreBase$1.exports;
var vue = require$$1;
var shared = shared$3.exports;
const VERSION = "9.2.0-beta.30";
let code = coreBase.CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
  UNEXPECTED_RETURN_TYPE: code,
  INVALID_ARGUMENT: inc(),
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSLALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSLALLED_WITH_PROVIDE: inc(),
  UNEXPECTED_ERROR: inc(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  __EXTEND_POINT__: inc()
};
function createI18nError(code2, ...args) {
  return coreBase.createCompileError(code2, null, void 0);
}
const TransrateVNodeSymbol = /* @__PURE__ */ shared.makeSymbol("__transrateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ shared.makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ shared.makeSymbol("__numberParts");
const SetPluralRulesSymbol = shared.makeSymbol("__setPluralRules");
shared.makeSymbol("__intlifyMeta");
const InejctWithOption = /* @__PURE__ */ shared.makeSymbol("__injectWithOption");
const __VUE_I18N_BRIDGE__ = "__VUE_I18N_BRIDGE__";
function handleFlatJson(obj) {
  if (!shared.isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!shared.hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (shared.isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        currentObj = currentObj[subKeys[i]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (shared.isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = shared.isPlainObject(messages) ? messages : shared.isArray(__i18n) ? {} : { [locale]: {} };
  if (shared.isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        shared.isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (shared.hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !shared.isObject(val) || shared.isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (shared.hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(global2, options, componentOptions) {
  let messages = shared.isObject(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(global2.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (shared.isObject(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (shared.isObject(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return vue.createVNode(vue.Text, null, key, 0);
}
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, vue.getCurrentInstance() || void 0, type);
  };
}
function createComposer(options = {}, VueI18nLegacy) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = shared.isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = vue.ref(__root && _inheritLocale ? __root.locale.value : shared.isString(options.locale) ? options.locale : coreBase.DEFAULT_LOCALE);
  const _fallbackLocale = vue.ref(__root && _inheritLocale ? __root.fallbackLocale.value : shared.isString(options.fallbackLocale) || shared.isArray(options.fallbackLocale) || shared.isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
  const _messages = vue.ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = vue.ref(shared.isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = vue.ref(shared.isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : shared.isBoolean(options.missingWarn) || shared.isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : shared.isBoolean(options.fallbackWarn) || shared.isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : shared.isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = shared.isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = shared.isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = shared.isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : shared.isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : shared.isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  function getCoreContext() {
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = shared.isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = shared.isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    return coreBase.createCoreContext(ctxOptions);
  }
  _context = getCoreContext();
  coreBase.updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = vue.computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = vue.computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      coreBase.updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = vue.computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ vue.computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ vue.computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return shared.isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
    trackReactivityValues();
    let ret;
    {
      ret = fn(_context);
    }
    if (shared.isNumber(ret) && ret === coreBase.NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  }
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(coreBase.translate, null, [context, ...args]), () => coreBase.parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => shared.isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !shared.isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, shared.assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(coreBase.datetime, null, [context, ...args]), () => coreBase.parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => coreBase.MISSING_RESOLVE_VALUE, (val) => shared.isString(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(coreBase.number, null, [context, ...args]), () => coreBase.parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => coreBase.MISSING_RESOLVE_VALUE, (val) => shared.isString(val));
  }
  function normalize(values) {
    return values.map((val) => shared.isString(val) ? createTextNode(val) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps((context) => {
      let ret;
      const _context2 = context;
      try {
        _context2.processor = processor;
        ret = Reflect.apply(coreBase.translate, null, [_context2, ...args]);
      } finally {
        _context2.processor = null;
      }
      return ret;
    }, () => coreBase.parseTranslateArgs(...args), "translate", (root) => root[TransrateVNodeSymbol](...args), (key) => [createTextNode(key)], (val) => shared.isArray(val));
  }
  function numberParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(coreBase.number, null, [context, ...args]), () => coreBase.parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), () => [], (val) => shared.isString(val) || shared.isArray(val));
  }
  function datetimeParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(coreBase.datetime, null, [context, ...args]), () => coreBase.parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), () => [], (val) => shared.isString(val) || shared.isArray(val));
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    const targetLocale = shared.isString(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = coreBase.fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    coreBase.clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = shared.assign(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    coreBase.clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    coreBase.clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = shared.assign(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    coreBase.clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  if (__root) {
    vue.watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        coreBase.updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    vue.watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        coreBase.updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        coreBase.updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOption] = options.__injectWithOption;
    composer[TransrateVNodeSymbol] = transrateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
function convertComposerOptions(options) {
  const locale = shared.isString(options.locale) ? options.locale : coreBase.DEFAULT_LOCALE;
  const fallbackLocale = shared.isString(options.fallbackLocale) || shared.isArray(options.fallbackLocale) || shared.isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const missing = shared.isFunction(options.missing) ? options.missing : void 0;
  const missingWarn = shared.isBoolean(options.silentTranslationWarn) || shared.isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
  const fallbackWarn = shared.isBoolean(options.silentFallbackWarn) || shared.isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
  const fallbackRoot = shared.isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const fallbackFormat = !!options.formatFallbackMessages;
  const modifiers = shared.isPlainObject(options.modifiers) ? options.modifiers : {};
  const pluralizationRules = options.pluralizationRules;
  const postTranslation = shared.isFunction(options.postTranslation) ? options.postTranslation : void 0;
  const warnHtmlMessage = shared.isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
  const escapeParameter = !!options.escapeParameterHtml;
  const inheritLocale = shared.isBoolean(options.sync) ? options.sync : true;
  let messages = options.messages;
  if (shared.isPlainObject(options.sharedMessages)) {
    const sharedMessages = options.sharedMessages;
    const locales = Object.keys(sharedMessages);
    messages = locales.reduce((messages2, locale2) => {
      const message = messages2[locale2] || (messages2[locale2] = {});
      shared.assign(message, sharedMessages[locale2]);
      return messages2;
    }, messages || {});
  }
  const { __i18n, __root, __injectWithOption } = options;
  const datetimeFormats = options.datetimeFormats;
  const numberFormats = options.numberFormats;
  const flatJson = options.flatJson;
  return {
    locale,
    fallbackLocale,
    messages,
    flatJson,
    datetimeFormats,
    numberFormats,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackRoot,
    fallbackFormat,
    modifiers,
    pluralRules: pluralizationRules,
    postTranslation,
    warnHtmlMessage,
    escapeParameter,
    messageResolver: options.messageResolver,
    inheritLocale,
    __i18n,
    __root,
    __injectWithOption
  };
}
function createVueI18n(options = {}, VueI18nLegacy) {
  {
    const composer = createComposer(convertComposerOptions(options));
    const vueI18n2 = {
      id: composer.id,
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      get messages() {
        return composer.messages.value;
      },
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      get numberFormats() {
        return composer.numberFormats.value;
      },
      get availableLocales() {
        return composer.availableLocales;
      },
      get formatter() {
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
      },
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      get silentTranslationWarn() {
        return shared.isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = shared.isBoolean(val) ? !val : val;
      },
      get silentFallbackWarn() {
        return shared.isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = shared.isBoolean(val) ? !val : val;
      },
      get modifiers() {
        return composer.modifiers;
      },
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      get preserveDirectiveContent() {
        return true;
      },
      set preserveDirectiveContent(val) {
      },
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      __composer: composer,
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!shared.isString(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (shared.isString(arg2)) {
          options2.locale = arg2;
        } else if (shared.isArray(arg2)) {
          list = arg2;
        } else if (shared.isPlainObject(arg2)) {
          named = arg2;
        }
        if (shared.isArray(arg3)) {
          list = arg3;
        } else if (shared.isPlainObject(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      rt(...args) {
        return Reflect.apply(composer.rt, composer, [...args]);
      },
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!shared.isString(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (shared.isString(arg2)) {
          options2.locale = arg2;
        } else if (shared.isNumber(arg2)) {
          options2.plural = arg2;
        } else if (shared.isArray(arg2)) {
          list = arg2;
        } else if (shared.isPlainObject(arg2)) {
          named = arg2;
        }
        if (shared.isString(arg3)) {
          options2.locale = arg3;
        } else if (shared.isArray(arg3)) {
          list = arg3;
        } else if (shared.isPlainObject(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      te(key, locale) {
        return composer.te(key, locale);
      },
      tm(key) {
        return composer.tm(key);
      },
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      d(...args) {
        return Reflect.apply(composer.d, composer, [...args]);
      },
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      setDateTimeFormat(locale, format2) {
        composer.setDateTimeFormat(locale, format2);
      },
      mergeDateTimeFormat(locale, format2) {
        composer.mergeDateTimeFormat(locale, format2);
      },
      n(...args) {
        return Reflect.apply(composer.n, composer, [...args]);
      },
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      setNumberFormat(locale, format2) {
        composer.setNumberFormat(locale, format2);
      },
      mergeNumberFormat(locale, format2) {
        composer.mergeNumberFormat(locale, format2);
      },
      getChoiceIndex(choice, choicesLength) {
        return -1;
      },
      __onComponentInstanceCreated(target) {
        const { componentInstanceCreatedListener } = options;
        if (componentInstanceCreatedListener) {
          componentInstanceCreatedListener(target, vueI18n2);
        }
      }
    };
    return vueI18n2;
  }
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return slot = [
        ...slot,
        ...shared.isArray(current.children) ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return vue.Fragment;
}
const Translation = {
  name: "i18n-t",
  props: shared.assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => shared.isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n2 = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    const keys = Object.keys(slots).filter((key) => key !== "_");
    return () => {
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = shared.isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n2[TransrateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = shared.assign({}, attrs);
      const tag = shared.isString(props.tag) || shared.isObject(props.tag) ? props.tag : getFragmentableTag();
      return vue.h(tag, assignedAttrs, children);
    };
  }
};
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (shared.isString(props.format)) {
      options.key = props.format;
    } else if (shared.isObject(props.format)) {
      if (shared.isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? shared.assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (shared.isArray(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        return slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
      });
    } else if (shared.isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = shared.assign({}, attrs);
    const tag = shared.isString(props.tag) || shared.isObject(props.tag) ? props.tag : getFragmentableTag();
    return vue.h(tag, assignedAttrs, children);
  };
}
const NUMBER_FORMAT_KEYS = [
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
];
const NumberFormat = {
  name: "i18n-n",
  props: shared.assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => i18n2[NumberPartsSymbol](...args));
  }
};
const DATETIME_FORMAT_KEYS = [
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
];
const DatetimeFormat = {
  name: "i18n-d",
  props: shared.assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => i18n2[DatetimePartsSymbol](...args));
  }
};
function getComposer$1(i18n2, instance) {
  const i18nInternal = i18n2;
  if (i18n2.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n2.global;
  } else {
    const vueI18n2 = i18nInternal.__getInstance(instance);
    return vueI18n2 != null ? vueI18n2.__composer : i18n2.global.__composer;
  }
}
function vTDirective(i18n2) {
  const bind = (el, { instance, value, modifiers }) => {
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$1(i18n2, instance.$);
    const parsedValue = parseValue(value);
    el.textContent = Reflect.apply(composer.t, composer, [
      ...makeParams(parsedValue)
    ]);
  };
  return {
    beforeMount: bind,
    beforeUpdate: bind
  };
}
function parseValue(value) {
  if (shared.isString(value)) {
    return { path: value };
  } else if (shared.isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (shared.isString(locale)) {
    options.locale = locale;
  }
  if (shared.isNumber(choice)) {
    options.plural = choice;
  }
  if (shared.isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n2, ...options) {
  const pluginOptions = shared.isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = shared.isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  {
    app.directive("t", vTDirective(i18n2));
  }
}
function defineMixin(vuei18n, composer, i18n2) {
  return {
    beforeCreate() {
      const instance = vue.getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const options = this.$options;
      if (options.i18n) {
        const optionsI18n = options.i18n;
        if (options.__i18n) {
          optionsI18n.__i18n = options.__i18n;
        }
        optionsI18n.__root = composer;
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, optionsI18n);
        } else {
          optionsI18n.__injectWithOption = true;
          this.$i18n = createVueI18n(optionsI18n);
        }
      } else if (options.__i18n) {
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, options);
        } else {
          this.$i18n = createVueI18n({
            __i18n: options.__i18n,
            __injectWithOption: true,
            __root: composer
          });
        }
      } else {
        this.$i18n = vuei18n;
      }
      if (options.__i18nGlobal) {
        adjustI18nResources(composer, options, options);
      }
      vuei18n.__onComponentInstanceCreated(this.$i18n);
      i18n2.__setInstance(instance, this.$i18n);
      this.$t = (...args) => this.$i18n.t(...args);
      this.$rt = (...args) => this.$i18n.rt(...args);
      this.$tc = (...args) => this.$i18n.tc(...args);
      this.$te = (key, locale) => this.$i18n.te(key, locale);
      this.$d = (...args) => this.$i18n.d(...args);
      this.$n = (...args) => this.$i18n.n(...args);
      this.$tm = (key) => this.$i18n.tm(key);
    },
    mounted() {
    },
    unmounted() {
      const instance = vue.getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      delete this.$t;
      delete this.$rt;
      delete this.$tc;
      delete this.$te;
      delete this.$d;
      delete this.$n;
      delete this.$tm;
      i18n2.__deleteInstance(instance);
      delete this.$i18n;
    }
  };
}
function mergeToRoot(root, options) {
  root.locale = options.locale || root.locale;
  root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
  root.missing = options.missing || root.missing;
  root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
  root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
  root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
  root.postTranslation = options.postTranslation || root.postTranslation;
  root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
  root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
  root.sync = options.sync || root.sync;
  root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
  const messages = getLocaleMessages(root.locale, {
    messages: options.messages,
    __i18n: options.__i18n
  });
  Object.keys(messages).forEach((locale) => root.mergeLocaleMessage(locale, messages[locale]));
  if (options.datetimeFormats) {
    Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
  }
  if (options.numberFormats) {
    Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
  }
  return root;
}
const I18nInjectionKey = /* @__PURE__ */ shared.makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __legacyMode = shared.isBoolean(options.legacy) ? options.legacy : true;
  const __globalInjection = !!options.globalInjection;
  const __instances = /* @__PURE__ */ new Map();
  const __global = createGlobal(options, __legacyMode);
  const symbol = shared.makeSymbol("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n2 = {
      get mode() {
        return __legacyMode ? "legacy" : "composition";
      },
      async install(app, ...options2) {
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n2);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app, i18n2.global);
        }
        {
          apply(app, i18n2, ...options2);
        }
        if (__legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n2));
        }
      },
      get global() {
        return __global;
      },
      __instances,
      __getInstance,
      __setInstance,
      __deleteInstance
    };
    return i18n2;
  }
}
function useI18n(options = {}) {
  const instance = vue.getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
  }
  const i18n2 = getI18nInstance(instance);
  const global2 = getGlobalComposer(i18n2);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(global2, options, componentOptions);
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n2, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = global2;
    }
    return composer2;
  }
  if (i18n2.mode === "legacy") {
    throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE);
  }
  const i18nInternal = i18n2;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = shared.assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
const castToVueI18n = (i18n2) => {
  if (!(__VUE_I18N_BRIDGE__ in i18n2)) {
    throw createI18nError(I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N);
  }
  return i18n2;
};
function createGlobal(options, legacyMode, VueI18nLegacy) {
  {
    return legacyMode ? createVueI18n(options) : createComposer(options);
  }
}
function getI18nInstance(instance) {
  {
    const i18n2 = vue.inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n2) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
    }
    return i18n2;
  }
}
function getScope(options, componentOptions) {
  return shared.isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n2) {
  return i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
}
function getComposer(i18n2, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    } else {
      {
        const vueI18n2 = i18nInternal.__getInstance(current);
        if (vueI18n2 != null) {
          composer = vueI18n2.__composer;
          if (useComponent && composer && !composer[InejctWithOption]) {
            composer = null;
          }
        }
      }
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n2, target, composer) {
  {
    vue.onMounted(() => {
    }, target);
    vue.onUnmounted(() => {
      i18n2.__deleteInstance(target);
    }, target);
  }
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app, composer) {
  const i18n2 = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = vue.isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n2, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n2;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
coreBase.registerMessageCompiler(coreBase.compileToFunction);
coreBase.registerMessageResolver(coreBase.resolveValue);
coreBase.registerLocaleFallbacker(coreBase.fallbackWithLocaleChain);
vueI18n_cjs_prod.DatetimeFormat = DatetimeFormat;
vueI18n_cjs_prod.I18nInjectionKey = I18nInjectionKey;
vueI18n_cjs_prod.NumberFormat = NumberFormat;
vueI18n_cjs_prod.Translation = Translation;
vueI18n_cjs_prod.VERSION = VERSION;
vueI18n_cjs_prod.castToVueI18n = castToVueI18n;
vueI18n_cjs_prod.createI18n = createI18n;
vueI18n_cjs_prod.useI18n = useI18n;
vueI18n_cjs_prod.vTDirective = vTDirective;
{
  vueI18n.exports = vueI18n_cjs_prod;
}
const alert$1 = {
  completeRestore: "\uBCF5\uC6D0\uC744 \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4.",
  errorSubmit: "\uCC98\uB9AC\uC5D0 \uBB38\uC81C\uAC00 \uC0DD\uACBC\uC2B5\uB2C8\uB2E4.",
  failedApply: "\uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC5EC \uC801\uC6A9\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",
  failedGetData: "\uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uB294\uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.",
  failedRestore: "\uBCF5\uC6D0\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.",
  invalidAddress: "\uC8FC\uC18C\uAC00 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
  invalidData: "\uB370\uC774\uD130\uAC00 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
  noSelectedFile: "\uC120\uD0DD\uD55C \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
};
const base = {
  ShortcutKey: "\uB2E8\uCD95\uD0A4",
  add: "\uCD94\uAC00\uD558\uAE30",
  address: "\uC8FC\uC18C",
  advanced: "\uC804\uBB38\uAC00",
  apply: "\uC801\uC6A9\uD558\uAE30",
  array: "\uBC30\uC5F4",
  author: "\uC81C\uC791\uC790",
  autoplay: "\uC790\uB3D9\uC7AC\uC0DD",
  backup: "\uBC31\uC5C5",
  basic: "\uAE30\uBCF8",
  caption: "\uCEA1\uC158",
  close: "\uB2EB\uAE30",
  contain: "\uC804\uBD80 \uBCF4\uC774\uAE30",
  controller: "\uCEE8\uD2B8\uB864\uB7EC",
  cover: "\uAF49\uCC44\uC6B0\uAE30",
  darkMode: "\uB2E4\uD06C \uBAA8\uB4DC",
  data: "\uB370\uC774\uD130",
  description: "\uC124\uBA85",
  edit: "\uC218\uC815",
  file: "\uD30C\uC77C",
  fullscreen: "\uC804\uCCB4\uD654\uBA74",
  general: "\uAE30\uBCF8",
  group: "\uADF8\uB8F9",
  groupKey: "\uADF8\uB8F9 \uD0A4",
  guide: "\uAC00\uC774\uB4DC",
  hud: "HUD",
  image: "\uC774\uBBF8\uC9C0",
  imageUrl: "\uC774\uBBF8\uC9C0 URL",
  information: "\uC815\uBCF4",
  inputAddress: "\uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
  inputKey: "\uD0A4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
  inputText: "\uAE00\uC790\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
  inputUrl: "URL\uC744 \uC785\uB825\uD558\uC138\uC694.",
  keyboard: "\uD0A4\uBCF4\uB4DC",
  language: "\uC5B8\uC5B4",
  leftKey: "\uC67C\uCABD \uBC29\uD5A5\uD0A4",
  lightMode: "\uB77C\uC774\uD2B8 \uBAA8\uB4DC",
  menu: "\uBA54\uB274",
  name: "\uC774\uB984",
  next: "\uB2E4\uC74C",
  none: "\uC5C6\uC74C",
  openUrl: "URL \uC5F4\uAE30",
  paginate: "\uC2AC\uB77C\uC774\uB4DC \uBC88\uD638",
  preference: "\uD658\uACBD\uC124\uC815",
  previous: "\uC774\uC804",
  processing: "\uCC98\uB9AC\uC911..",
  remove: "\uC0AD\uC81C",
  repeat: "\uBC18\uBCF5",
  reset: "\uC7AC\uC124\uC815",
  resetSlideshow: "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC7AC\uC124\uC815",
  restore: "\uBCF5\uC6D0",
  rightKey: "\uC624\uB978\uCABD \uBC29\uD5A5\uD0A4",
  shuffleText: "\uBB34\uC791\uC704\uB85C \uBCC0\uD558\uB294 \uAE00\uC790",
  slides: "\uC2AC\uB77C\uC774\uB4DC",
  style: "\uC2A4\uD0C0\uC77C",
  subject: "\uC81C\uBAA9",
  submitEdit: "\uC218\uC815\uD558\uAE30",
  swipe: "\uBC00\uC5B4 \uB118\uAE30\uAE30",
  system: "\uC2DC\uC2A4\uD15C",
  thumbnail: "\uC378\uB124\uC77C",
  urlThumbnailUrl: "\uC378\uB124\uC77C \uC774\uBBF8\uC9C0 URL",
  version: "\uBC84\uC804",
  save: "\uC800\uC7A5\uD558\uAE30",
  slideshowService: "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC11C\uBE44\uC2A4",
  createSlideshow: "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uB9CC\uB4E4\uAE30",
  editSlideshow: "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC218\uC815\uD558\uAE30",
  preview: "\uBBF8\uB9AC\uBCF4\uAE30",
  share: "\uACF5\uC720\uD558\uAE30",
  "delete": "\uC0AD\uC81C\uD558\uAE30",
  logout: "\uB85C\uADF8\uC544\uC6C3"
};
const confirm$1 = {
  applyRestart: "\uC2AC\uB77C\uC774\uB4DC\uC1FC\uAC00 \uC7AC\uC2DC\uC791\uB429\uB2C8\uB2E4.\n\uC801\uC6A9\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
  backup: "\uC815\uB9D0 \uBAA8\uB4E0 \uB370\uC774\uD130\uB97C \uBC31\uC5C5\uD560\uAE4C\uC694?\n\uBC31\uC5C5\uD55C \uB0B4\uC6A9\uC740 `JSON` \uD30C\uC77C\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4.",
  remove: "\uC815\uB9D0 \uC0AD\uC81C\uD560\uAE4C\uC694?",
  reset: "\uC815\uB9D0\uB85C \uBAA8\uB4E0 \uC124\uC815\uACFC \uC2AC\uB77C\uC774\uB4DC \uB370\uC774\uD130\uB97C \uCD08\uAE30\uD654 \uD558\uACA0\uC2B5\uB2C8\uAE4C?\n\uCD08\uAE30\uD654\uD558\uBA74 \uBCF5\uAD6C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
  restart: "\uC815\uB9D0\uB85C \uC7AC\uC2DC\uC791 \uD558\uACA0\uC2B5\uB2C8\uAE4C?",
  restore: "\uC815\uB9D0 \uBAA8\uB4E0 \uB370\uC774\uD130\uB97C \uBCF5\uC6D0\uD560\uAE4C\uC694?\n\uC774 \uC791\uC5C5\uC740 \uD604\uC7AC \uB370\uC774\uD130\uAC00 \uBAA8\uB450 \uC0AD\uC81C\uB429\uB2C8\uB2E4.",
  selectGroup: "\uC120\uD0DD\uD55C \uC2AC\uB77C\uC774\uB4DC\uB85C \uC0AC\uC6A9\uD560\uAE4C\uC694?\n\uC2AC\uB77C\uC774\uB4DC\uB97C \uBCC0\uACBD\uD558\uBA74 \uB2E4\uC2DC \uC2DC\uC791\uD569\uB2C8\uB2E4."
};
const description = {
  addSlides: "\uD658\uACBD\uC124\uC815\uC5D0\uC11C \uC2AC\uB77C\uC774\uB4DC\uB97C \uCD94\uAC00\uD574\uC8FC\uC138\uC694.",
  autoplay: "\uC2AC\uB77C\uC774\uB4DC\uB97C \uC790\uB3D9\uC7AC\uC0DD \uD569\uB2C8\uB2E4.",
  autoplayDelay: "\uC2AC\uB77C\uC774\uB4DC\uAC00 \uC790\uB3D9\uC73C\uB85C \uC804\uD658\uD558\uAE30 \uC804\uC5D0 \uB300\uAE30\uD558\uB294 \uC2DC\uAC04\uC785\uB2C8\uB2E4.",
  autoplayDirection: "\uC2AC\uB77C\uC774\uB4DC\uAC00 \uC790\uB3D9\uC73C\uB85C \uC804\uD658\uD558\uB294 \uBC29\uD5A5\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
  autoplayPauseOnHover: "\uC2AC\uB77C\uC774\uB4DC \uC601\uC5ED\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uAC16\uB2E4\uB300\uBA74 \uC790\uB3D9\uC7AC\uC0DD\uC744 \uC77C\uC2DC\uC815\uC9C0 \uD569\uB2C8\uB2E4.",
  backup: "\uC2AC\uB77C\uC774\uB4DC\uC1FC\uC758 \uBAA8\uB4E0 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uAC70\uB098 \uB0B4\uBCF4\uB0C5\uB2C8\uB2E4.",
  captionAnimationSpeed: "\uAC12\uC774 \uB192\uC744\uC218\uB85D \uC560\uB2C8\uBA54\uC774\uC158 \uC18D\uB3C4\uAC00 \uBE68\uB77C\uC9D1\uB2C8\uB2E4.",
  captionAnimationType: "\uC2AC\uB77C\uC774\uB4DC\uAC00 \uBC14\uB014\uB54C\uC758 \uCEA1\uC158 \uD2B8\uB79C\uC9C0\uC158\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.",
  captionPosition: "\uCEA1\uC158\uC758 \uC704\uCE58\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. \uC608)\uC67C\uCABD,\uC0C1\uB2E8",
  captionScale: "\uCEA1\uC158\uC758 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
  empty: "\uBE44\uC5C8\uC2B5\uB2C8\uB2E4.",
  emptySlides: "\uC2AC\uB77C\uC774\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
  getDataByRestAPI: "RestAPI \uC8FC\uC18C\uB85C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",
  getJsonFile: "JSON \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD558\uC5EC \uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",
  group: "\uC2AC\uB77C\uC774\uB4DC \uADF8\uB8F9 \uC120\uD0DD\uCC3D\uC744 \uC5FD\uB2C8\uB2E4.",
  hoverVisibleHud: "\uC2AC\uB77C\uC774\uB4DC \uC601\uC5ED\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uAC16\uB2E4\uB300\uBA74 \uC870\uC791\uACFC \uC0C1\uD0DC\uC694\uC18C\uB97C \uC228\uAE41\uB2C8\uB2E4.",
  hud: "\uC870\uC791\uACFC \uC0C1\uD0DC\uC694\uC18C\uB4E4\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.",
  imageScale: "\uC2AC\uB77C\uC774\uB4DC \uC774\uBBF8\uC9C0 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4. \uC608) \uAC00\uB85C,\uC138\uB85C",
  imageType: "\uC2AC\uB77C\uC774\uB4DC \uC774\uBBF8\uC9C0 \uD45C\uC2DC\uBC29\uC2DD\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.",
  importDataMethod: "\uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uB294 \uBC29\uBC95\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.",
  information: "\uBB38\uC81C\uC810\uC774\uB098 \uAC1C\uC120\uC5D0 \uAD00\uD55C \uC758\uACAC\uC774 \uC788\uC73C\uBA74 %{link} \uD398\uC774\uC9C0\uB97C \uC774\uC6A9\uD574\uC8FC\uC138\uC694.",
  initialNumber: "\uC2DC\uC791\uD560\uB54C \uD45C\uC2DC\uB418\uB294 \uC2AC\uB77C\uC774\uB4DC \uBC88\uD638\uC785\uB2C8\uB2E4. (\uBC88\uD638\uB294 0\uBD80\uD130)",
  inputDescriptionSlide: "\uC2AC\uB77C\uC774\uB4DC \uC124\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
  inputImageUrl: "\uC774\uBBF8\uC9C0 \uC8FC\uC18C\uB97C \uC785\uB825\uD569\uB2C8\uB2E4.",
  inputKeyOnGroup: "\uC2AC\uB77C\uC774\uB4DC \uADF8\uB8F9\uC758 \uD0A4\uAC12\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
  inputSlideDataCode: "\uC2AC\uB77C\uC774\uB4DC \uB370\uC774\uD130 \uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
  inputSlideTitle: "\uC2AC\uB77C\uC774\uB4DC \uC81C\uBAA9\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
  inputSlidesUrl: "\uC2AC\uB77C\uC774\uB4DC URL \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
  inputThumbnailUrl: "\uC378\uB124\uC77C \uC774\uBBF8\uC9C0 \uC8FC\uC18C\uB97C \uC785\uB825\uD569\uB2C8\uB2E4.",
  keyboardGuide: "\uB2E4\uC74C\uACFC \uAC19\uC774 \uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4\uB97C \uB204\uB974\uBA74 \uD574\uB2F9 \uAE30\uB2A5\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.",
  language: "\uC5B8\uC5B4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
  openPreference: "\uD658\uACBD\uC124\uC815 \uC5F4\uAE30",
  repeat: "\uC2AC\uB77C\uC774\uB4DC\uB97C \uB9C8\uC9C0\uB9C9\uC5D0\uC11C \uCC98\uC74C\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.",
  reset: "\uBAA8\uB4E0 \uC124\uC815\uACFC \uC2AC\uB77C\uC774\uB4DC \uB370\uC774\uD130\uB97C \uC7AC\uC124\uC815\uD569\uB2C8\uB2E4.",
  restart: "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC7AC\uC2E4\uD589",
  screenMode: "\uD654\uBA74\uBAA8\uB4DC\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.",
  selectGroup: "\uC0AC\uC6A9\uD560 \uC2AC\uB77C\uC774\uB4DC\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.",
  selectJsonFile: "JSON \uD30C\uC77C\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",
  selectSlidesType: "\uC2AC\uB77C\uC774\uB4DC \uB370\uC774\uD130\uC758 \uD0C0\uC785\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.",
  selectSlidesType2: "URL \uC8FC\uC18C\uBC29\uC2DD\uC73C\uB85C \uBCC0\uACBD\uD558\uACE0 \uC801\uC6A9\uD558\uBA74 \uC2AC\uB77C\uC774\uB4DC \uB370\uC774\uD130\uAC00 \uC5C6\uC5B4\uC9D1\uB2C8\uB2E4.",
  setCategoryDescription: "\uCE74\uD14C\uACE0\uB9AC\uC5D0 \uB300\uD55C \uC124\uBA85\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.",
  setCategoryName: "\uCE74\uD14C\uACE0\uB9AC\uC758 \uC774\uB984\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
  swipe: "\uD130\uCE58 \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C \uBC00\uC5B4 \uB118\uAE30\uB294 \uC870\uC791\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.",
  thumbnail: "\uC378\uB124\uC77C \uC774\uBBF8\uC9C0 \uBAA9\uB85D\uD654\uBA74\uC744 \uC5FD\uB2C8\uB2E4.",
  touchHud: "\uB9C8\uC6B0\uC2A4\uB97C \uD074\uB9AD\uD558\uAC70\uB098 \uD654\uBA74\uC744 \uD130\uCE58\uD560\uB54C HUD\uB97C \uD1A0\uAE00\uB9C1\uD569\uB2C8\uB2E4.",
  transitionSpeed: "\uD2B8\uB79C\uC9C0\uC158 \uC560\uB2C8\uBA54\uC774\uC158 \uC18D\uB3C4\uB97C \uBCC0\uACBD\uD569\uB2C8\uB2E4.",
  transitionType: "\uC2AC\uB77C\uC774\uB4DC\uAC00 \uBC14\uB014\uB54C\uC758 \uD2B8\uB79C\uC9C0\uC158\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4.",
  usingKeyboard: "\uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.",
  visibleContents: "\uAC01 \uC870\uC791\uACFC \uC0C1\uD0DC\uC694\uC18C\uB4E4 \uD45C\uC2DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",
  saveSlideshow: "\uC2AC\uB77C\uC774\uB4DC\uC1FC\uB97C \uC800\uC7A5\uD569\uB2C8\uB2E4.",
  slideshowAddress: "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC11C\uBE44\uC2A4\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uC8FC\uC18C\uC785\uB2C8\uB2E4."
};
const label = {
  addGroup: "\uADF8\uB8F9 \uCD94\uAC00",
  addSlide: "\uC2AC\uB77C\uC774\uB4DC \uCD94\uAC00",
  editGroup: "\uADF8\uB8F9 \uC218\uC815",
  editSlide: "\uC2AC\uB77C\uC774\uB4DC \uC218\uC815",
  fadeInOut: "\uD22C\uBA85\uB3C4 \uC804\uD658",
  getData: "\uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30",
  imageType: "\uC774\uBBF8\uC9C0 \uD45C\uC2DC\uBC29\uC2DD",
  moveHorizontal: "\uAC00\uB85C\uBC29\uD5A5\uC73C\uB85C \uC774\uB3D9",
  nextSlide: "\uB2E4\uC74C \uC2AC\uB77C\uC774\uB4DC\uB85C \uC774\uB3D9\uD558\uAE30",
  prevSlide: "\uC774\uC804 \uC2AC\uB77C\uC774\uB4DC\uB85C \uC774\uB3D9\uD558\uAE30",
  removeGroup: "\uADF8\uB8F9 \uC0AD\uC81C"
};
const language = {
  en: "\uC601\uC5B4",
  ko: "\uD55C\uAD6D\uC5B4"
};
const preference = {
  header: {
    data: "\uC2AC\uB77C\uC774\uB4DC \uB370\uC774\uD130\uB97C \uAD00\uB9AC\uD569\uB2C8\uB2E4.",
    general: "\uAE30\uCD08\uC801\uC778 \uD56D\uBAA9\uB4E4\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
    information: "\uC2AC\uB77C\uC774\uB4DC\uC1FC\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    keyboard: "\uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4\uC5D0 \uAD00\uD55C \uC124\uC815\uC785\uB2C8\uB2E4.",
    slides: "\uC2AC\uB77C\uC774\uB4DC\uC640 \uAD00\uB828\uB41C \uBD80\uBD84\uB4E4\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",
    style: "\uD654\uBA74\uC5D0 \uD45C\uC2DC\uB418\uB294 \uBD80\uBD84\uB4E4\uC744 \uC124\uC815\uD569\uB2C8\uB2E4."
  }
};
const title = {
  autoplayDelay: "\uC790\uB3D9\uC7AC\uC0DD \uB51C\uB808\uC774",
  autoplayDirection: "\uC790\uB3D9\uC7AC\uC0DD \uBC29\uD5A5",
  autoplayPauseOnHover: "\uB9C8\uC6B0\uC2A4 \uC624\uBC84\uC2DC \uC790\uB3D9\uC7AC\uC0DD \uC77C\uC2DC\uC815\uC9C0",
  backupOrRestore: "\uBC31\uC5C5 \uBC0F \uBCF5\uC6D0",
  captionAnimationSpeed: "\uCEA1\uC158 \uC560\uB2C8\uBA54\uC774\uC158 \uC18D\uB3C4",
  captionAnimationType: "\uCEA1\uC158 \uC560\uB2C8\uBA54\uC774\uC158 \uC885\uB958",
  captionPosition: "\uCEA1\uC158 \uC704\uCE58",
  captionScale: "\uCEA1\uC158 \uD06C\uAE30",
  changeMode: "\uD3B8\uC9D1\uBAA8\uB4DC\uB97C \uBCC0\uACBD\uD569\uB2C8\uB2E4.",
  emptySlide: "\uBE48 \uC2AC\uB77C\uC774\uB4DC",
  fold: "\uC811\uACE0 \uD3BC\uCE58\uAE30",
  getSlideItems: "\uC2AC\uB77C\uC774\uB4DC \uC544\uC774\uD15C \uAC00\uC838\uC624\uAE30",
  hoverVisibleHud: "\uB9C8\uC6B0\uC2A4 \uC624\uBC84\uC2DC HUD \uBCF4\uC774\uAE30",
  imageScale: "\uC774\uBBF8\uC9C0 \uD06C\uAE30",
  importDataByAddress: "\uC8FC\uC18C\uB85C \uAC00\uC838\uC624\uAE30",
  importDataByFile: "\uD30C\uC77C\uB85C \uAC00\uC838\uC624\uAE30",
  importSlideData: "\uC2AC\uB77C\uC774\uB4DC \uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",
  initialNumber: "\uAE30\uBCF8 \uC2AC\uB77C\uC774\uB4DC \uBC88\uD638",
  loading: "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC900\uBE44\uC911..",
  manageSlideData: "\uC2AC\uB77C\uC774\uB4DC \uB370\uC774\uD130 \uAD00\uB9AC",
  screenMode: "\uD654\uBA74\uBAA8\uB4DC",
  selectGroup: "\uADF8\uB8F9 \uC120\uD0DD\uD558\uAE30",
  selectSlidesType: "\uC2AC\uB77C\uC774\uB4DC \uD0C0\uC785 \uC120\uD0DD",
  slidesUrlAddress: "\uC2AC\uB77C\uC774\uB4DC URL \uC8FC\uC18C",
  thumbnailView: "\uC378\uB124\uC77C \uBCF4\uAE30",
  touchHud: "\uD074\uB9AD, \uD130\uCE58\uC2DC HUD \uD1A0\uAE00",
  transitionSpeed: "\uD2B8\uB79C\uC9C0\uC158 \uC18D\uB3C4",
  transitionType: "\uD2B8\uB79C\uC9C0\uC158 \uC885\uB958",
  usingKeyboard: "\uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4 \uC0AC\uC6A9",
  visibleContents: "\uC694\uC18C\uB4E4 \uD45C\uC2DC",
  slideshowAddress: "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC8FC\uC18C"
};
var ko = {
  alert: alert$1,
  base,
  confirm: confirm$1,
  description,
  label,
  language,
  preference,
  title
};
var i18n = vueI18n.exports.createI18n({
  legacy: false,
  locale: "ko",
  fallbackLocale: "ko",
  messages: {
    ko
  }
});
let baseOptions = {
  preference: void 0,
  tree: []
};
let main$1 = null;
let slides = null;
let useProps = null;
function setup(o, use) {
  main$1 = o;
  useProps = use;
}
function setupSlides(o) {
  slides = o;
}
function sleep(ms = 1e3) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function convertPureObject(src) {
  if (!src)
    return null;
  return JSON.parse(JSON.stringify(src));
}
function initCustomEvent() {
  const events = {
    on(event, cb, opts) {
      if (!this.namespaces)
        this.namespaces = {};
      this.namespaces[event] = cb;
      const options = opts || false;
      this.addEventListener(event.split(".")[0], cb, options);
      return this;
    },
    off(event) {
      if (!(this.namespaces && this.namespaces[event]))
        return;
      this.removeEventListener(event.split(".")[0], this.namespaces[event]);
      delete this.namespaces[event];
      return this;
    }
  };
  window.on = document.on = Element.prototype.on = events.on;
  window.off = document.off = Element.prototype.off = events.off;
}
function setAreaTrue(src, total, current, loop) {
  function setTrue(sw) {
    if (sw) {
      if (src[current + 1] !== void 0)
        src[current + 1] = true;
    } else {
      if (src[current - 1] !== void 0)
        src[current - 1] = true;
    }
  }
  src = convertPureObject(src);
  if (loop) {
    if (current === 0) {
      src[total - 1] = true;
      setTrue(true);
    } else if (current === total - 1) {
      src[0] = true;
      setTrue(false);
    } else {
      setTrue(true);
      setTrue(false);
    }
  } else {
    setTrue(true);
    setTrue(false);
  }
  return src;
}
function fullscreen(sw) {
  const doc = window.document;
  const docEl = doc.documentElement;
  if (sw) {
    const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    requestFullScreen.call(docEl);
  } else {
    const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    cancelFullScreen.call(doc);
  }
}
function getValueFromType(type, value) {
  switch (type) {
    case "boolean":
      return value === "true";
    case "number":
      return Number(value);
    default:
      return value;
  }
}
function getApiData(url, parse2 = true) {
  return new Promise((resolve, reject) => {
    try {
      const httpRequest = new XMLHttpRequest();
      if (!httpRequest)
        throw new Error("no XMLHttpRequest");
      httpRequest.onreadystatechange = () => {
        try {
          if (httpRequest.readyState !== XMLHttpRequest.DONE)
            return;
          if (httpRequest.status === 200) {
            resolve(parse2 ? JSON.parse(httpRequest.responseText) : httpRequest.responseText);
          } else {
            throw new Error("failed request url");
          }
        } catch (e) {
          reject(new Error(e.message));
        }
      };
      httpRequest.open("get", url);
      httpRequest.send();
    } catch (e) {
      reject(new Error(e.message || "failed request url"));
    }
  });
}
function getFileData(file, parse2 = true) {
  return new Promise((resolve, reject) => {
    try {
      if (!file)
        throw new Error("no file");
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          resolve(parse2 ? JSON.parse(e.target.result) : e.target.result);
        } catch (e2) {
          reject(new Error(e2.message || "failed get file data"));
        }
      };
      reader.readAsText(file);
    } catch (e) {
      reject(new Error(e.message || "failed get file data"));
    }
  });
}
function move(total = 0, value = 0, loop = true) {
  if (total - 1 < value) {
    if (!loop)
      return total - 1;
    return 0;
  } else if (value < 0) {
    if (!loop)
      return 0;
    return total - 1;
  } else {
    return Number(value);
  }
}
var index_vue_vue_type_style_index_0_lang$3 = "";
const _hoisted_1$g = ["aria-labelledby"];
const _sfc_main$k = {
  props: {
    iconName: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    let state2 = reactive({
      computedIconComponent: computed(() => {
        switch (props.iconName) {
          case "menu":
            return defineAsyncComponent(() => import("./icon-menu.js"));
          case "menu-flat":
            return defineAsyncComponent(() => import("./icon-menu-flat.js"));
          case "arrow-left":
            return defineAsyncComponent(() => import("./icon-arrow-left.js"));
          case "arrow-right":
            return defineAsyncComponent(() => import("./icon-arrow-right.js"));
          case "arrow-up":
            return defineAsyncComponent(() => import("./icon-arrow-up.js"));
          case "arrow-down":
            return defineAsyncComponent(() => import("./icon-arrow-down.js"));
          case "frown":
            return defineAsyncComponent(() => import("./icon-frown.js"));
          case "tool":
            return defineAsyncComponent(() => import("./icon-tool.js"));
          case "droplet":
            return defineAsyncComponent(() => import("./icon-droplet.js"));
          case "copy":
            return defineAsyncComponent(() => import("./icon-copy.js"));
          case "database":
            return defineAsyncComponent(() => import("./icon-database.js"));
          case "command":
            return defineAsyncComponent(() => import("./icon-command.js"));
          case "check":
            return defineAsyncComponent(() => import("./icon-check.js"));
          case "x":
            return defineAsyncComponent(() => import("./icon-x.js"));
          case "upload":
            return defineAsyncComponent(() => import("./icon-upload.js"));
          case "file":
            return defineAsyncComponent(() => import("./icon-file.js"));
          case "info":
            return defineAsyncComponent(() => import("./icon-info.js"));
          case "play-circle":
            return defineAsyncComponent(() => import("./icon-play-circle.js"));
          case "download":
            return defineAsyncComponent(() => import("./icon-download.js"));
          case "edit":
            return defineAsyncComponent(() => import("./icon-edit.js"));
          case "plus":
            return defineAsyncComponent(() => import("./icon-plus.js"));
          case "folder":
            return defineAsyncComponent(() => import("./icon-folder.js"));
          case "minus":
            return defineAsyncComponent(() => import("./icon-minus.js"));
          case "home":
            return defineAsyncComponent(() => import("./icon-home.js"));
          case "save":
            return defineAsyncComponent(() => import("./icon-save.js"));
          case "settings":
            return defineAsyncComponent(() => import("./icon-settings.js"));
          case "cast":
            return defineAsyncComponent(() => import("./icon-cast.js"));
          default:
            return null;
        }
      })
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-labelledby": props.iconName,
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: "slideshow-icon"
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(unref(state2).computedIconComponent)))
      ], 8, _hoisted_1$g);
    };
  }
};
var Images_scss_vue_type_style_index_0_src_153702b0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId$2 = (n) => (pushScopeId("data-v-153702b0"), n = n(), popScopeId(), n);
const _hoisted_1$f = {
  key: 0,
  class: "first"
};
const _hoisted_2$c = ["src", "alt"];
const _hoisted_3$a = {
  key: 0,
  class: "empty-image"
};
const _hoisted_4$8 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("strong", null, "no image", -1));
const _hoisted_5$7 = ["src", "alt", "onError"];
const _hoisted_6$5 = {
  key: 1,
  class: "last"
};
const _hoisted_7$4 = ["src", "alt"];
const _hoisted_8$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("i", { class: "overlay" }, null, -1));
const _sfc_main$j = {
  props: {
    items: { type: Array, required: true },
    initialActive: { type: Number, default: 0 },
    animationType: { type: String, default: "none" },
    imageType: { type: String, default: null },
    duration: { type: Number, default: 800 },
    imageSize: { type: Array, default: [100, 100] },
    loop: { type: Boolean },
    movePos: { type: Number, default: void 0 }
  },
  emits: {
    "animation-control": null,
    "change-active": null
  },
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    let state2 = reactive({
      loaded: new Array(props.items.length).fill(false),
      error: new Array(props.items.length).fill(false),
      active: props.initialActive,
      activeClassName: "current",
      nextKey: void 0,
      nextClassName: void 0,
      playAnimation: false,
      cancelAnimation: false,
      computedContainerStyle: computed(() => {
        let result = {
          "--speed-slide-animation": `${props.duration}ms`,
          "--image-size-width": props.imageSize[0],
          "--image-size-height": props.imageSize[1]
        };
        if (props.animationType === "horizontal") {
          result[`--active-column`] = state2.nextKey !== void 0 ? state2.nextKey : state2.active;
          if (props.movePos !== void 0) {
            result["--move-pos"] = `${props.movePos}vw`;
          }
        }
        return result;
      }),
      computedShowFirstItem: computed(() => {
        if (!props.loop)
          return false;
        if (props.items.length <= 1)
          return false;
        return props.items[props.items.length - 1] && props.animationType === "horizontal";
      }),
      computedShowLastItem: computed(() => {
        if (!props.loop)
          return false;
        if (props.items.length <= 1)
          return false;
        return props.items[0] && props.animationType === "horizontal";
      })
    });
    let _active = props.initialActive;
    const figures = ref([]);
    const wrap = ref(null);
    let targetElement = null;
    state2.loaded[props.initialActive] = true;
    state2.loaded = setAreaTrue(state2.loaded, props.items.length, props.initialActive, props.loop);
    async function play(n = null, userAnimationType = void 0) {
      if (typeof n !== "number")
        return;
      _active = Number(n);
      const type = userAnimationType !== void 0 ? userAnimationType : props.animationType;
      if (!state2.loaded[_active]) {
        try {
          await checkLoadImage(props.items[_active].src);
          state2.loaded[_active] = true;
        } catch (e) {
          state2.error[_active] = true;
        }
      }
      switch (type) {
        case "fade":
          if (targetElement) {
            targetElement.removeEventListener("transitionend", onTransitionEnd);
            targetElement = null;
          }
          emits("animation-control", true);
          state2.playAnimation = true;
          state2.activeClassName = "fadeout ready";
          state2.nextKey = _active;
          state2.nextClassName = "fadein ready";
          await sleep(20);
          state2.nextClassName = "fadein";
          targetElement = figures.value[_active];
          targetElement.addEventListener("transitionend", onTransitionEnd);
          break;
        case "horizontal":
          emits("animation-control", true);
          state2.playAnimation = true;
          if (props.loop) {
            if (state2.active === 0 && _active >= props.items.length - 1) {
              state2.nextKey = -1;
            } else if (state2.active >= props.items.length - 1 && _active === 0) {
              state2.nextKey = props.items.length;
            }
            state2.active = _active;
          } else {
            state2.active = _active;
          }
          wrap.value.addEventListener("transitionend", onTransitionEnd);
          break;
        case "none":
        default:
          state2.active = _active;
          state2.loaded = setAreaTrue(state2.loaded, props.items.length, props.initialActive, props.loop);
          break;
      }
    }
    function onTransitionEnd() {
      switch (props.animationType) {
        case "fade":
          state2.playAnimation = false;
          state2.nextKey = void 0;
          state2.nextClassName = void 0;
          state2.active = _active;
          state2.activeClassName = "current";
          state2.loaded = setAreaTrue(state2.loaded, props.items.length, props.initialActive, props.loop);
          if (targetElement) {
            targetElement.removeEventListener("transitionend", onTransitionEnd);
            targetElement = null;
          }
          emits("animation-control", false);
          break;
        case "horizontal":
          state2.playAnimation = false;
          state2.nextKey = void 0;
          state2.loaded = setAreaTrue(state2.loaded, props.items.length, props.initialActive, props.loop);
          wrap.value.removeEventListener("transitionend", onTransitionEnd);
          emits("animation-control", false);
          break;
      }
    }
    async function cancel() {
      if (state2.playAnimation)
        return;
      emits("animation-control", true);
      state2.cancelAnimation = true;
      wrap.value.addEventListener("transitionend", onCancelTransitionEnd);
    }
    function onCancelTransitionEnd() {
      state2.cancelAnimation = false;
      wrap.value.removeEventListener("transitionend", onCancelTransitionEnd);
      emits("animation-control", false);
    }
    function onErrorImage(key) {
      state2.error[key] = true;
    }
    function checkLoadImage(src) {
      return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = () => resolve();
        image.onerror = () => reject();
        image.src = src;
      });
    }
    expose({
      play,
      cancel
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "slideshow-images",
          `animation--${__props.animationType}`,
          __props.imageType && `type--${__props.imageType}`,
          unref(state2).playAnimation && "play-animation",
          unref(state2).cancelAnimation && "cancel-animation"
        ]),
        style: normalizeStyle(unref(state2).computedContainerStyle)
      }, [
        createBaseVNode("div", {
          ref_key: "wrap",
          ref: wrap,
          class: "wrap"
        }, [
          unref(state2).computedShowFirstItem ? (openBlock(), createElementBlock("figure", _hoisted_1$f, [
            unref(state2).loaded[__props.items.length - 1] ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: __props.items[__props.items.length - 1].src,
              alt: __props.items[__props.items.length - 1].title
            }, null, 8, _hoisted_2$c)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, key) => {
            return openBlock(), createElementBlock("figure", {
              ref_for: true,
              ref: (el) => {
                figures.value[key] = el;
              },
              class: normalizeClass([
                unref(state2).active === key && !!unref(state2).activeClassName && unref(state2).activeClassName,
                unref(state2).nextKey === key && !!unref(state2).nextClassName && unref(state2).nextClassName
              ])
            }, [
              unref(state2).error[key] ? (openBlock(), createElementBlock("div", _hoisted_3$a, [
                createVNode(_sfc_main$k, { "icon-name": "x" }),
                _hoisted_4$8
              ])) : unref(state2).loaded[key] ? (openBlock(), createElementBlock("img", {
                key: 1,
                src: item.src,
                alt: item.title,
                onError: ($event) => onErrorImage(key)
              }, null, 40, _hoisted_5$7)) : createCommentVNode("", true)
            ], 2);
          }), 256)),
          unref(state2).computedShowLastItem ? (openBlock(), createElementBlock("figure", _hoisted_6$5, [
            unref(state2).loaded[0] ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: __props.items[0].src,
              alt: __props.items[0].title
            }, null, 8, _hoisted_7$4)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 512),
        _hoisted_8$2
      ], 6);
    };
  }
};
var Images = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-153702b0"]]);
function shuffle($el, options) {
  options = Object.assign({}, {
    text: "",
    waitChar: "-",
    charSpeed: 1,
    moveFix: 25,
    moveRange: 10,
    moveTrigger: 25,
    fps: 60,
    pattern: "abcdefghijklmnopqrstuvwxyz0123456789-_!@#$%^&*()+~<>",
    randomTextType: null,
    retry: true,
    callback: null
  }, options);
  options.text = options.text.trim();
  let textKeys = [];
  let frame;
  let position;
  let currentText;
  let checkLast;
  let checkPlay = false;
  function stack() {
    let str = currentText;
    checkLast = true;
    for (let tick = position; tick <= frame; tick++) {
      if (textKeys[tick] !== 0 && textKeys[tick] != null) {
        checkLast = false;
        const selectKey = textKeys[tick];
        if (Math.abs(selectKey) <= options.moveTrigger) {
          let txt = "";
          switch (options.randomTextType) {
            case "pattern":
              txt = randomWord(options.pattern);
              break;
            case "unicode":
            default:
              const unicode = Math.min(Math.max(options.text.charCodeAt(tick) + selectKey, 33), 126);
              txt = String.fromCharCode(unicode);
              break;
          }
          str += txt;
        } else {
          str += options.waitChar;
        }
        selectKey > 0 ? textKeys[tick] -= 1 : textKeys[tick] += 1;
      } else {
        if (position === tick - 1) {
          position = tick;
          currentText = options.text.substring(0, position);
        }
        str += options.text.charAt(tick);
      }
      $el.textContent = str;
    }
    if (frame <= options.text.length) {
      frame += options.charSpeed;
    } else {
      checkPlay = true;
    }
    if (checkLast && checkPlay) {
      if ($el.dataset.id)
        clearInterval(parseInt($el.dataset.id));
      $el.textContent = currentText;
      $el.dataset.run = "false";
      if (options.callback)
        options.callback();
    }
  }
  function randomWord(pattern) {
    const n = Math.floor(Math.random() * pattern.length);
    return pattern.substring(n, n + 1);
  }
  if (options.text || options.text && !options.retry && $el.dataset.run !== "true") {
    $el.dataset.run = "true";
    $el.textContent = options.waitChar;
    for (let i = 0; i <= options.text.length - 1; i++) {
      if (options.text.charAt(0) !== " ") {
        textKeys[i] = (options.moveFix + Math.round(Math.random() * options.moveRange)) * (Math.round(Math.random()) - 0.5) * 2;
      } else {
        textKeys[i] = 0;
      }
    }
    frame = 0;
    position = 0;
    currentText = "";
    if ($el.dataset.id)
      clearInterval(parseInt($el.dataset.id));
    const intervalId = setInterval(stack, 1e3 / options.fps);
    $el.dataset.id = intervalId.toString();
  }
}
var Caption_scss_vue_type_style_index_0_src_0d330e4b_scoped_true_lang = "";
const _hoisted_1$e = { key: 0 };
const _hoisted_2$b = { key: 1 };
const _sfc_main$i = {
  props: {
    active: { type: Number, required: true },
    title: { type: String, default: "Untitled" },
    description: { type: String, default: null },
    animationType: { type: String, default: null },
    animationSpeed: { type: Number, default: 40 },
    position: { type: Array, default: [] },
    scale: { type: Number, default: 100 }
  },
  setup(__props) {
    const props = __props;
    const elementTitle = ref(null);
    const elementDescription = ref(null);
    reactive({
      computedRealText: computed(() => {
        switch (props.animationType) {
          case "shuffle":
            return false;
          default:
            return true;
        }
      })
    });
    let interval = void 0;
    function playTransition(type) {
      switch (type) {
        case "shuffle":
          clearTimer();
          if (elementDescription.value.dataset.id) {
            clearInterval(Number(elementDescription.value.dataset.id));
            elementDescription.value.innerText = "";
          }
          if (props.title) {
            shuffle(elementTitle.value, {
              text: props.title,
              fps: props.animationSpeed,
              randomTextType: "pattern"
            });
          }
          if (props.description) {
            interval = setTimeout(() => {
              clearTimer();
              shuffle(elementDescription.value, {
                text: props.description,
                fps: props.animationSpeed
              });
            }, 300);
          }
          break;
      }
    }
    function clearTimer() {
      if (!interval)
        return;
      clearTimeout(interval);
      interval = void 0;
    }
    switch (props.animationType) {
      case "shuffle":
        onMounted(() => setTimeout(() => playTransition("shuffle"), 100));
        watch(() => props.active, () => playTransition("shuffle"));
        break;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", {
        class: "slideshow-caption",
        style: normalizeStyle({
          "--caption-position-left": __props.position[0],
          "--caption-position-top": __props.position[1],
          "--caption-scale": __props.scale
        })
      }, [
        __props.animationType === "shuffle" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          __props.title ? (openBlock(), createElementBlock("h1", {
            key: 0,
            ref_key: "elementTitle",
            ref: elementTitle
          }, null, 512)) : createCommentVNode("", true),
          __props.description ? (openBlock(), createElementBlock("pre", {
            key: 1,
            ref_key: "elementDescription",
            ref: elementDescription
          }, null, 512)) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          __props.title ? (openBlock(), createElementBlock("h1", _hoisted_1$e, toDisplayString$1(__props.title), 1)) : createCommentVNode("", true),
          __props.description ? (openBlock(), createElementBlock("pre", _hoisted_2$b, toDisplayString$1(__props.description), 1)) : createCommentVNode("", true)
        ], 64))
      ], 4);
    };
  }
};
var Caption = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-0d330e4b"]]);
var Paginate_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$d = { class: "slideshow-paginate" };
const _sfc_main$h = {
  props: {
    total: { type: Number, default: 0 },
    current: { type: Number, default: 0 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("em", _hoisted_1$d, toDisplayString$1(__props.current + 1) + " / " + toDisplayString$1(__props.total), 1);
    };
  }
};
var Paginate = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-6a79e958"]]);
var Controller_scss_vue_type_style_index_0_src_4ab80943_scoped_true_lang = "";
const _hoisted_1$c = { class: "controller" };
const _hoisted_2$a = ["disabled", "title"];
const _hoisted_3$9 = ["disabled", "title"];
const _sfc_main$g = {
  props: {
    showPrev: { type: Boolean, default: true },
    showNext: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false }
  },
  emits: {
    "click-prev": null,
    "click-next": null
  },
  setup(__props, { emit: emits }) {
    const { t } = i18n.global;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", _hoisted_1$c, [
        __props.showPrev ? (openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          disabled: __props.disabled,
          title: unref(t)("label.prevSlide"),
          class: "prev",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click-prev"))
        }, [
          createVNode(_sfc_main$k, { "icon-name": "arrow-left" })
        ], 8, _hoisted_2$a)) : createCommentVNode("", true),
        __props.showNext ? (openBlock(), createElementBlock("button", {
          key: 1,
          type: "button",
          disabled: __props.disabled,
          title: unref(t)("label.nextSlide"),
          class: "next",
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("click-next"))
        }, [
          createVNode(_sfc_main$k, { "icon-name": "arrow-right" })
        ], 8, _hoisted_3$9)) : createCommentVNode("", true)
      ]);
    };
  }
};
var Controller = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-4ab80943"]]);
var index_scss_vue_type_style_index_0_src_940a7e2c_lang = "";
const _sfc_main$f = {
  setup(__props, { expose }) {
    const images = ref(null);
    let state2 = reactive({
      animated: false,
      swipePos: void 0,
      swipeMove: false,
      computedImages: computed(() => {
        return store.state.slides.map((item) => item);
      }),
      computedShowPrevButton: computed(() => {
        if (store.state.preference.slides.loop)
          return true;
        return 0 < store.state.activeSlide;
      }),
      computedShowNextButton: computed(() => {
        if (store.state.preference.slides.loop)
          return true;
        return state2.computedImages.length - 1 > store.state.activeSlide;
      }),
      computedCaption: computed(() => {
        const item = state2.computedImages[store.state.activeSlide];
        return {
          title: item.title,
          description: item.description
        };
      }),
      computedVisibleCaption: computed(() => {
        const { hud, visibleHudContents } = store.state.preference.general;
        return hud && visibleHudContents.caption;
      }),
      computedVisibleController: computed(() => {
        const { hud, visibleHudContents } = store.state.preference.general;
        if (state2.computedImages.length <= 1)
          return false;
        return hud && visibleHudContents.controller;
      }),
      computedVisiblePaginate: computed(() => {
        const { hud, visibleHudContents } = store.state.preference.general;
        return hud && visibleHudContents.paginate;
      })
    });
    let computes = reactive({
      transitionType: computed(() => {
        switch (store.state.preference.slides.animationType) {
          case "fade":
          case "horizontal":
            return store.state.preference.slides.animationType;
          default:
            return "none";
        }
      })
    });
    let swipeMeta = null;
    let autoplayTimer = void 0;
    let autoplayPause = false;
    let mounted = false;
    let touched = false;
    let active = store.state.preference.slides.initialNumber;
    onChangeActive(!!checkActive(active) ? active : 0);
    function onAnimationControl(sw) {
      state2.animated = sw;
      if (!sw) {
        let autoplay2 = store.state.autoplay && !autoplayPause;
        if (autoplay2)
          runAutoplay(true);
      }
    }
    function onChangeActive(n) {
      store.dispatch("changeActiveSlide", n);
    }
    function checkActive(n) {
      return !!state2.computedImages[n];
    }
    function onStart(e) {
      e.stopPropagation();
      if (e.touches)
        touched = true;
      if (!e.touches && touched)
        return;
      if (e.touches && e.touches.length > 1)
        e.preventDefault();
      if (state2.animated)
        return;
      if (!store.state.preference.slides.swipe)
        return;
      if (store.state.preference.slides.animationType !== "horizontal")
        return;
      if (state2.computedImages.length <= 2)
        return;
      runAutoplay(false);
      swipeMeta = {
        dist: 0,
        startX: e.touches && e.touches[0] ? Math.floor(e.touches[0].clientX) : e.clientX || e.pageX,
        startTime: new Date().getTime()
      };
      state2.swipeMove = true;
    }
    function onMove(e) {
      e.stopPropagation();
      if (!e.touches && touched)
        return;
      if (state2.animated || !state2.swipeMove)
        return;
      if (state2.computedImages.length <= 2)
        return;
      swipeMeta.moveX = e.touches && e.touches[0] ? Math.floor(e.touches[0].clientX) : e.clientX || e.pageX;
      const screenWidth = window.innerWidth;
      const dist = swipeMeta.moveX - swipeMeta.startX;
      state2.swipePos = dist / screenWidth * 100 + (0 - 100 * store.state.activeSlide);
    }
    function onEnd(e) {
      e.stopPropagation();
      function action(dir2) {
        if (dir2)
          next();
        else
          prev();
      }
      function cancel() {
        images.value.cancel();
      }
      if (!e.touches && touched)
        return;
      if (state2.animated || !state2.swipeMove)
        return;
      if (e.touches && e.touches.length > 0)
        return;
      if (state2.computedImages.length <= 2)
        return;
      const screenWidth = window.innerWidth;
      swipeMeta.endX = e.changedTouches && e.changedTouches[0] ? Math.floor(e.changedTouches[0].clientX) : e.clientX || e.pageX;
      let dir = swipeMeta.startX > swipeMeta.endX;
      let elapsedTime = new Date().getTime() - swipeMeta.startTime;
      let distPos = swipeMeta.endX - swipeMeta.startX;
      let percent = Math.abs(distPos) / screenWidth * 100;
      state2.swipePos = void 0;
      state2.swipeMove = false;
      swipeMeta = void 0;
      if (elapsedTime < 60 || percent < 1) {
        if (!autoplayPause)
          runAutoplay(true);
        if (store.state.preference.general.clickVisibleHud && !e.target.closest(".controller")) {
          store.dispatch("changeHud");
        }
        return;
      }
      if (elapsedTime > 300) {
        if (percent > 30)
          action(dir);
        else
          cancel();
      } else {
        if (percent > 5)
          action(dir);
        else
          cancel();
      }
    }
    function onTouchCancel(e) {
      if (store.state.mode)
        return;
      e.stopPropagation();
      if (state2.swipeMove)
        images.value.cancel();
      state2.swipePos = void 0;
      state2.swipeMove = false;
      if (store.state.preference.slides.autoplayPauseOnHover) {
        autoplayPause = false;
        if (store.state.autoplay)
          pause(false, true);
      }
    }
    function onMouseEnter() {
      if (store.state.preference.slides.autoplayPauseOnHover) {
        autoplayPause = true;
        if (store.state.autoplay)
          pause(true, true);
      }
    }
    function onContextMenu() {
      state2.swipePos = void 0;
      state2.swipeMove = false;
    }
    function runAutoplay(sw) {
      if (!mounted)
        return;
      if (sw && !store.state.autoplay)
        return;
      if (sw && !autoplayTimer) {
        if (!store.state.autoplay)
          return;
        const delay = store.state.preference.slides.autoplayDelay;
        const dir = store.state.preference.slides.autoplayDirection;
        const loop = store.state.preference.slides.loop;
        const side = isActiveSide(dir);
        if (!loop && (!loop && side))
          return;
        autoplayTimer = setTimeout(() => {
          if (!dir)
            prev();
          else
            next();
        }, delay);
      } else if (autoplayTimer) {
        clearTimeout(autoplayTimer);
        autoplayTimer = void 0;
      }
    }
    function isActiveSide(dir) {
      if (!(state2.computedImages && state2.computedImages.length > 0))
        return;
      return !dir && store.state.activeSlide === 0 || dir && store.state.activeSlide >= state2.computedImages.length - 1;
    }
    function change(n, userAnimationType = void 0) {
      if (state2.animated || !checkActive(n) || !images.value)
        return;
      onChangeActive(n);
      runAutoplay(false);
      images.value.play(n, userAnimationType);
    }
    function prev() {
      if (!(state2.computedImages && state2.computedImages.length > 0))
        return;
      let n = move(state2.computedImages.length, store.state.activeSlide - 1, store.state.preference.slides.loop);
      change(n);
    }
    function next() {
      if (!(state2.computedImages && state2.computedImages.length > 0))
        return;
      let n = move(state2.computedImages.length, store.state.activeSlide + 1, store.state.preference.slides.loop);
      change(n);
    }
    function autoplay(sw = void 0) {
      store.dispatch("changeAutoplay", sw);
    }
    function pause(sw = void 0, inside = false) {
      if (sw === void 0)
        return;
      if (!store.state.autoplay)
        return;
      if (!inside)
        autoplayPause = sw;
      if (!sw || sw && !state2.animated)
        runAutoplay(!sw);
    }
    onMounted(() => {
      mounted = true;
      if (store.state.autoplay)
        runAutoplay(true);
    });
    onUnmounted(() => {
      mounted = false;
      if (autoplayTimer) {
        clearTimeout(autoplayTimer);
        autoplayTimer = void 0;
      }
    });
    watch(() => store.state.autoplay, (sw) => {
      if (sw) {
        if (!autoplayPause)
          runAutoplay(sw);
      } else {
        runAutoplay(sw);
      }
    });
    expose({
      change,
      prev,
      next,
      autoplay,
      pause
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", {
        class: normalizeClass([
          "slideshow-slides",
          unref(state2).swipeMove && "swipe-move",
          `slideshow-slides--${unref(computes).transitionType}`
        ]),
        onTouchstart: onStart,
        onTouchmove: onMove,
        onTouchend: onEnd,
        onMousedown: onStart,
        onMousemove: onMove,
        onMouseup: onEnd,
        onMouseleave: onTouchCancel,
        onMouseenter: onMouseEnter,
        onContextmenu: onContextMenu
      }, [
        createVNode(Images, {
          ref_key: "images",
          ref: images,
          "initial-active": unref(store).state.activeSlide,
          items: unref(state2).computedImages,
          "animation-type": unref(computes).transitionType,
          duration: unref(store).state.preference.slides.animationSpeed,
          "image-type": unref(store).state.preference.style.imageType,
          "image-size": unref(store).state.preference.style.imageScale,
          loop: unref(store).state.preference.slides.loop,
          "move-pos": unref(state2).swipePos,
          onAnimationControl,
          onChangeActive
        }, null, 8, ["initial-active", "items", "animation-type", "duration", "image-type", "image-size", "loop", "move-pos"]),
        unref(state2).computedVisibleCaption ? (openBlock(), createBlock(Caption, {
          key: 0,
          active: unref(store).state.activeSlide,
          title: unref(state2).computedCaption.title,
          description: unref(state2).computedCaption.description,
          "animation-type": unref(store).state.preference.slides.captionAnimationType,
          "animation-speed": unref(store).state.preference.slides.captionAnimationSpeed,
          position: unref(store).state.preference.style.captionPosition,
          scale: unref(store).state.preference.style.captionScale
        }, null, 8, ["active", "title", "description", "animation-type", "animation-speed", "position", "scale"])) : createCommentVNode("", true),
        unref(state2).computedVisibleController ? (openBlock(), createBlock(Controller, {
          key: 1,
          disabled: unref(state2).animated,
          "show-prev": unref(state2).computedShowPrevButton,
          "show-next": unref(state2).computedShowNextButton,
          class: "slideshow-slides__controller",
          onClickPrev: prev,
          onClickNext: next
        }, null, 8, ["disabled", "show-prev", "show-next"])) : createCommentVNode("", true),
        unref(state2).computedVisiblePaginate ? (openBlock(), createBlock(Paginate, {
          key: 2,
          total: unref(state2).computedImages.length,
          current: unref(store).state.activeSlide,
          class: "slideshow-slides__paginate"
        }, null, 8, ["total", "current"])) : createCommentVNode("", true)
      ], 34);
    };
  }
};
var Empty_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$b = { class: "slideshow-empty__wrap" };
const _hoisted_2$9 = { class: "slideshow-empty__title" };
const _hoisted_3$8 = { class: "slideshow-empty__description" };
const _sfc_main$e = {
  props: {
    title: String,
    description: String
  },
  setup(__props) {
    const { t } = i18n.global;
    function onClickWrapper() {
      if (store.state.preference.general.clickVisibleHud) {
        store.dispatch("changeHud");
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", {
        class: "slideshow-empty",
        onClick: onClickWrapper
      }, [
        createBaseVNode("div", _hoisted_1$b, [
          createVNode(_sfc_main$k, {
            "icon-name": "frown",
            class: "slideshow-empty__icon"
          }),
          createBaseVNode("h2", _hoisted_2$9, toDisplayString$1(__props.title || unref(t)("title.emptySlide")), 1),
          createBaseVNode("p", _hoisted_3$8, toDisplayString$1(__props.description || unref(t)("description.addSlides")), 1)
        ])
      ]);
    };
  }
};
function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
function copyToClipboard(str) {
  return new Promise((resolve, reject) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(str).then(resolve);
    } else {
      reject();
    }
  });
}
var index_vue_vue_type_style_index_0_lang$2 = "";
const _hoisted_1$a = {
  key: 0,
  class: "slideshow-navigation__item"
};
const _hoisted_2$8 = ["title"];
const _hoisted_3$7 = {
  key: 1,
  class: "slideshow-navigation__item"
};
const _hoisted_4$7 = ["title"];
const _hoisted_5$6 = {
  key: 2,
  class: "slideshow-navigation__item"
};
const _hoisted_6$4 = ["title"];
const _hoisted_7$3 = {
  key: 3,
  class: "slideshow-navigation__item"
};
const _hoisted_8$1 = ["title"];
const _hoisted_9$1 = {
  key: 4,
  class: "slideshow-navigation__item"
};
const _hoisted_10$1 = ["title"];
const _hoisted_11$1 = { key: 0 };
const _hoisted_12$1 = { key: 1 };
const _hoisted_13$1 = { key: 2 };
const _hoisted_14$1 = { key: 3 };
const _hoisted_15$1 = { key: 4 };
const _hoisted_16$1 = {
  key: 5,
  class: "slideshow-navigation__item"
};
const _hoisted_17$1 = ["title"];
const _sfc_main$d = {
  setup(__props, { expose }) {
    const { t } = i18n.global;
    const { Custom } = window;
    let state2 = reactive({
      activeMenu: false,
      activeFullscreen: false
    });
    let computes = reactive({
      visibleThumbnail: computed(() => {
        var _a;
        return ((_a = store.state.slides) == null ? void 0 : _a.length) > 0;
      }),
      visibleAutoplay: computed(() => {
        const { slides: slides2, preference: preference2 } = store.state;
        if (!preference2.slides.autoplay)
          return false;
        return slides2 && slides2.length > 0;
      }),
      visibleGroup: computed(() => {
        if (!store.state.preference.general.visibleHudContents.group)
          return false;
        return store.state.tree && Object.keys(store.state.tree).length > 1;
      }),
      buttonTitleSave: computed(() => {
        switch (store.state.serviceMode) {
          case "create":
            return t("base.createSlideshow");
          case "manage":
            return t("base.editSlideshow");
        }
      })
    });
    const form = getFormData(Custom.form);
    function onClickAutoplayButton() {
      if (slides)
        slides.autoplay();
    }
    function onClickMenuButton(e) {
      if (e)
        e.stopPropagation();
      if (state2.activeMenu) {
        switchActiveMenu(false);
      } else {
        window.on("click.navigationMenu", () => switchActiveMenu(false));
        switchActiveMenu(true);
      }
    }
    function switchActiveMenu(sw) {
      state2.activeMenu = sw;
      if (!sw)
        window.off("click.navigationMenu");
    }
    function onClickContextItem(key) {
      switchActiveMenu(false);
      switch (key) {
        case "preference":
          route("preference");
          break;
        case "thumbnail":
          store.dispatch("changeMode", "thumbnail");
          break;
        case "fullscreen":
          fullscreen(!state2.activeFullscreen);
          state2.activeFullscreen = !state2.activeFullscreen;
          break;
        case "slideshowService":
        case "slideshowServiceNewWindow":
        case "preview":
          route(key);
          break;
        case "share":
          let url = `${Custom.url.replace(/\/$/, "")}/watch/${form.address}/`;
          copyToClipboard(url).then(() => alert("\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."));
          break;
        case "delete":
          main$1.deleteSlideshow();
          break;
        case "logout":
          logout().then();
          break;
      }
    }
    function onTouchStart(e) {
      if (e.touches && e.touches.length > 1)
        e.preventDefault();
    }
    function onClickWrapper(e) {
      e.stopPropagation();
    }
    function onClickGroup() {
      store.dispatch("changeMode", "group");
    }
    function onClickSave() {
      main$1.save();
    }
    function route(address) {
      switch (address) {
        case "preference":
          store.dispatch("changeMode", "preference");
          break;
        case "slideshowService":
          location.href = Custom.path;
          break;
        case "slideshowServiceNewWindow":
          window.open(Custom.path);
          break;
        case "preview":
          window.open(`${Custom.path}watch/${form.address}/`);
          break;
      }
    }
    function blur() {
      switchActiveMenu(false);
    }
    async function logout() {
      await post(`${Custom.path}logout/${form.address}/`, {});
      location.reload();
    }
    onMounted(() => {
      document.on("fullscreenchange.slideshow", () => {
        state2.activeFullscreen = !!document.fullscreenElement;
      });
    });
    onUnmounted(() => {
      document.off("fullscreenchange.slideshow");
    });
    expose({
      blur
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("nav", {
        class: "slideshow-navigation",
        onTouchstart: onTouchStart,
        onClick: onClickWrapper
      }, [
        unref(computes).visibleAutoplay ? (openBlock(), createElementBlock("div", _hoisted_1$a, [
          createBaseVNode("button", {
            type: "button",
            title: unref(t)("base.autoplay"),
            class: normalizeClass(unref(store).state.autoplay ? "active" : ""),
            onClick: onClickAutoplayButton
          }, [
            createVNode(_sfc_main$k, { "icon-name": "play-circle" })
          ], 10, _hoisted_2$8)
        ])) : createCommentVNode("", true),
        unref(computes).visibleGroup ? (openBlock(), createElementBlock("div", _hoisted_3$7, [
          createBaseVNode("button", {
            type: "button",
            title: unref(t)("base.group"),
            onClick: onClickGroup
          }, [
            createVNode(_sfc_main$k, {
              "icon-name": "folder",
              class: "folder"
            })
          ], 8, _hoisted_4$7)
        ])) : createCommentVNode("", true),
        unref(store).state.serviceMode !== "watch" ? (openBlock(), createElementBlock("div", _hoisted_5$6, [
          createBaseVNode("button", {
            type: "button",
            title: unref(t)("base.preference"),
            onClick: _cache[0] || (_cache[0] = ($event) => route("preference"))
          }, [
            createVNode(_sfc_main$k, {
              "icon-name": "settings",
              class: "folder"
            })
          ], 8, _hoisted_6$4)
        ])) : createCommentVNode("", true),
        unref(store).state.serviceMode === "manage" && ((_a = unref(form)) == null ? void 0 : _a.address) ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
          createBaseVNode("button", {
            type: "button",
            title: unref(t)("base.preview"),
            onClick: _cache[1] || (_cache[1] = ($event) => route("preview"))
          }, [
            createVNode(_sfc_main$k, {
              "icon-name": "cast",
              class: "folder"
            })
          ], 8, _hoisted_8$1)
        ])) : createCommentVNode("", true),
        unref(store).state.preference.general.visibleHudContents.menu ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
          createBaseVNode("button", {
            type: "button",
            title: unref(t)("base.menu"),
            class: normalizeClass(unref(state2).activeMenu ? "on" : ""),
            onClick: onClickMenuButton
          }, [
            createVNode(_sfc_main$k, { "icon-name": "menu" })
          ], 10, _hoisted_10$1),
          createBaseVNode("div", {
            class: normalizeClass([
              "slideshow-navigation-context",
              unref(state2).activeMenu && "slideshow-navigation-context--on"
            ])
          }, [
            createBaseVNode("ul", null, [
              unref(store).state.serviceMode === "watch" ? (openBlock(), createElementBlock("li", _hoisted_11$1, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[2] || (_cache[2] = ($event) => onClickContextItem("preference"))
                }, toDisplayString$1(unref(t)("base.preference")), 1)
              ])) : createCommentVNode("", true),
              unref(computes).visibleThumbnail ? (openBlock(), createElementBlock("li", _hoisted_12$1, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[3] || (_cache[3] = ($event) => onClickContextItem("thumbnail"))
                }, toDisplayString$1(unref(t)("title.thumbnailView")), 1)
              ])) : createCommentVNode("", true),
              createBaseVNode("li", null, [
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(state2).activeFullscreen && "on"]),
                  onClick: _cache[4] || (_cache[4] = ($event) => onClickContextItem("fullscreen"))
                }, toDisplayString$1(unref(t)("base.fullscreen")), 3)
              ]),
              ((_b = unref(form)) == null ? void 0 : _b.address) ? (openBlock(), createElementBlock("li", _hoisted_13$1, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[5] || (_cache[5] = ($event) => onClickContextItem("share"))
                }, toDisplayString$1(unref(t)("base.share")), 1)
              ])) : createCommentVNode("", true),
              unref(store).state.serviceMode === "manage" ? (openBlock(), createElementBlock("li", _hoisted_14$1, [
                createBaseVNode("button", {
                  type: "button",
                  class: "danger",
                  onClick: _cache[6] || (_cache[6] = ($event) => onClickContextItem("delete"))
                }, toDisplayString$1(unref(t)("base.delete")), 1)
              ])) : createCommentVNode("", true),
              unref(store).state.serviceMode === "watch" && !unref(form).visible ? (openBlock(), createElementBlock("li", _hoisted_15$1, [
                createBaseVNode("button", {
                  type: "button",
                  class: "danger",
                  onClick: _cache[7] || (_cache[7] = ($event) => onClickContextItem("logout"))
                }, toDisplayString$1(unref(t)("base.logout")), 1)
              ])) : createCommentVNode("", true)
            ])
          ], 2)
        ])) : createCommentVNode("", true),
        unref(store).state.serviceMode !== "watch" ? (openBlock(), createElementBlock("div", _hoisted_16$1, [
          createBaseVNode("button", {
            type: "button",
            title: unref(computes).buttonTitleSave,
            class: "active",
            onClick: onClickSave
          }, [
            createVNode(_sfc_main$k, { "icon-name": "save" })
          ], 8, _hoisted_17$1)
        ])) : createCommentVNode("", true)
      ], 32);
    };
  }
};
var Side_scss_vue_type_style_index_0_src_10bceea3_scoped_true_lang = "";
const _hoisted_1$9 = { class: "preference-side" };
const _hoisted_2$7 = ["title", "disabled"];
const _hoisted_3$6 = ["title", "disabled"];
const _hoisted_4$6 = ["title", "disabled"];
const _hoisted_5$5 = ["title", "disabled"];
const _hoisted_6$3 = ["title", "disabled"];
const _hoisted_7$2 = ["title", "disabled"];
const _sfc_main$c = {
  props: {
    mode: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const { t } = i18n.global;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1$9, [
        createBaseVNode("nav", null, [
          createBaseVNode("button", {
            type: "button",
            title: unref(t)("base.general"),
            disabled: props.mode === "general",
            class: "preference-side__button",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click-menu", "general"))
          }, [
            createBaseVNode("span", null, [
              createVNode(_sfc_main$k, { "icon-name": "tool" }),
              createBaseVNode("em", null, toDisplayString$1(unref(t)("base.general")), 1)
            ])
          ], 8, _hoisted_2$7),
          unref(store).state.usePreference.slides ? (openBlock(), createElementBlock("button", {
            key: 0,
            type: "button",
            title: unref(t)("base.slides"),
            disabled: props.mode === "slides",
            class: "preference-side__button",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("click-menu", "slides"))
          }, [
            createBaseVNode("span", null, [
              createVNode(_sfc_main$k, { "icon-name": "copy" }),
              createBaseVNode("em", null, toDisplayString$1(unref(t)("base.slides")), 1)
            ])
          ], 8, _hoisted_3$6)) : createCommentVNode("", true),
          unref(store).state.usePreference.style ? (openBlock(), createElementBlock("button", {
            key: 1,
            type: "button",
            title: unref(t)("base.style"),
            disabled: props.mode === "style",
            class: "preference-side__button",
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("click-menu", "style"))
          }, [
            createBaseVNode("span", null, [
              createVNode(_sfc_main$k, { "icon-name": "droplet" }),
              createBaseVNode("em", null, toDisplayString$1(unref(t)("base.style")), 1)
            ])
          ], 8, _hoisted_4$6)) : createCommentVNode("", true),
          unref(store).state.usePreference.data ? (openBlock(), createElementBlock("button", {
            key: 2,
            type: "button",
            title: unref(t)("base.data"),
            disabled: props.mode === "data",
            class: "preference-side__button",
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("click-menu", "data"))
          }, [
            createBaseVNode("span", null, [
              createVNode(_sfc_main$k, { "icon-name": "database" }),
              createBaseVNode("em", null, toDisplayString$1(unref(t)("base.data")), 1)
            ])
          ], 8, _hoisted_5$5)) : createCommentVNode("", true),
          unref(store).state.usePreference.keyboard ? (openBlock(), createElementBlock("button", {
            key: 3,
            type: "button",
            title: unref(t)("base.keyboard"),
            disabled: props.mode === "keyboard",
            class: "preference-side__button",
            onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("click-menu", "keyboard"))
          }, [
            createBaseVNode("span", null, [
              createVNode(_sfc_main$k, { "icon-name": "command" }),
              createBaseVNode("em", null, toDisplayString$1(unref(t)("base.keyboard")), 1)
            ])
          ], 8, _hoisted_6$3)) : createCommentVNode("", true),
          unref(store).state.usePreference.information ? (openBlock(), createElementBlock("button", {
            key: 4,
            type: "button",
            title: unref(t)("base.information"),
            disabled: props.mode === "information",
            class: "preference-side__button",
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("click-menu", "information"))
          }, [
            createBaseVNode("span", null, [
              createVNode(_sfc_main$k, { "icon-name": "info" }),
              createBaseVNode("em", null, toDisplayString$1(unref(t)("base.information")), 1)
            ])
          ], 8, _hoisted_7$2)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
};
var Side = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-10bceea3"]]);
var index_scss_vue_type_style_index_0_src_38efed1e_scoped_true_lang = "";
const _hoisted_1$8 = { class: "preference-header" };
const _hoisted_2$6 = { class: "preference-header__body" };
const _hoisted_3$5 = { class: "preference-header__nav" };
const _hoisted_4$5 = ["title"];
const _hoisted_5$4 = ["title"];
const _sfc_main$b = {
  setup(__props) {
    const { t } = i18n.global;
    const preference2 = convertPureObject$1(store.state.preference);
    const tree = convertPureObject$1(store.state.tree);
    let state2 = reactive({
      tab: "general",
      structure: {
        general: preference2.general,
        slides: preference2.slides,
        style: preference2.style,
        data: { tree },
        keyboard: preference2.keyboard
      },
      computedContentComponent: computed(() => {
        switch (state2.tab) {
          case "general":
          default:
            return defineAsyncComponent(() => import("./General.js"));
          case "slides":
            if (!store.state.usePreference.slides)
              return;
            return defineAsyncComponent(() => import("./Slides.js"));
          case "style":
            if (!store.state.usePreference.style)
              return;
            return defineAsyncComponent(() => import("./Style.js"));
          case "data":
            if (!store.state.usePreference.data)
              return;
            return defineAsyncComponent(() => import("./index2.js"));
          case "keyboard":
            if (!store.state.usePreference.keyboard)
              return;
            return defineAsyncComponent(() => import("./Keyboard.js"));
          case "information":
            if (!store.state.usePreference.information)
              return;
            return defineAsyncComponent(() => import("./Information.js"));
        }
      }),
      computedHeaderContent: computed(() => {
        switch (state2.tab) {
          case "general":
          default:
            return {
              title: t("base.general"),
              description: t("preference.header.general")
            };
          case "slides":
            return {
              title: t("base.slides"),
              description: t("preference.header.slides")
            };
          case "style":
            return {
              title: t("base.style"),
              description: t("preference.header.style")
            };
          case "data":
            return {
              title: t("base.data"),
              description: t("preference.header.data")
            };
          case "keyboard":
            return {
              title: t("base.keyboard"),
              description: t("preference.header.keyboard")
            };
          case "information":
            return {
              title: t("base.information"),
              description: t("preference.header.information")
            };
        }
      })
    });
    const content = ref(null);
    function onTouchStart(e) {
      if (e.touches && e.touches.length > 1)
        e.preventDefault();
    }
    function onClose() {
      store.dispatch("changeMode", null);
    }
    function onChangeTab(name) {
      state2.tab = name;
    }
    function onUpdateFields(structure) {
      state2.structure[state2.tab] = structure;
    }
    function onSubmit(e) {
      e.preventDefault();
      if (!confirm(t("confirm.applyRestart")))
        return;
      try {
        let tree2 = convertPureObject$1(state2.structure.data.tree);
        checkTree(tree2);
        let preference3 = {
          general: convertPureObject$1(state2.structure.general),
          slides: convertPureObject$1(state2.structure.slides),
          style: convertPureObject$1(state2.structure.style),
          keyboard: convertPureObject$1(state2.structure.keyboard)
        };
        if (!checkPreference(preference3))
          throw new Error("Bad preference data.");
        store.dispatch("changePreference", preference3);
        store.dispatch("changeMode", null);
        store.dispatch("changeActiveSlide", store.state.preference.slides.initialNumber);
        store.dispatch("changeAutoplay", false);
        store.commit("updateUseKeyboardEvent", true);
        store.dispatch("changeTree", tree2);
        if (!Object.keys(tree2).filter((key) => key === store.state.group).length) {
          store.dispatch("changeGroup", Object.keys(tree2)[0]);
        }
        if (useProps.preference || useProps.tree) {
          main$1.update("preference");
          main$1.update("tree");
        } else {
          main$1.restart().then();
        }
      } catch (e2) {
        if (window.dev)
          console.error(e2.message);
        alert(t("alert.failedApply"));
      }
    }
    onMounted(() => {
      if (slides)
        slides.pause(true);
    });
    onUnmounted(() => {
      if (slides)
        slides.pause(false);
    });
    watch(() => state2.tab, () => content.value.scrollTo(0, 0));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", {
        class: "preference",
        onClick: onClose,
        onTouchstart: onTouchStart
      }, [
        createBaseVNode("div", {
          class: "preference__wrap",
          onClick: _cache[0] || (_cache[0] = (e) => {
            e.stopPropagation();
          })
        }, [
          createVNode(Side, {
            mode: unref(state2).tab,
            onClickMenu: onChangeTab
          }, null, 8, ["mode"]),
          createBaseVNode("form", {
            class: "preference__body",
            onSubmit
          }, [
            createBaseVNode("header", _hoisted_1$8, [
              createBaseVNode("div", _hoisted_2$6, [
                createBaseVNode("h2", null, toDisplayString$1(unref(state2).computedHeaderContent.title), 1),
                createBaseVNode("p", null, toDisplayString$1(unref(state2).computedHeaderContent.description), 1)
              ]),
              createBaseVNode("nav", _hoisted_3$5, [
                createBaseVNode("button", {
                  type: "submit",
                  title: unref(t)("base.apply"),
                  onClick: onSubmit
                }, [
                  createVNode(_sfc_main$k, { "icon-name": "check" })
                ], 8, _hoisted_4$5),
                createBaseVNode("button", {
                  type: "button",
                  title: unref(t)("base.close"),
                  onClick: onClose
                }, [
                  createVNode(_sfc_main$k, { "icon-name": "x" })
                ], 8, _hoisted_5$4)
              ])
            ]),
            createBaseVNode("div", {
              ref_key: "content",
              ref: content,
              class: "preference__content"
            }, [
              (openBlock(), createBlock(resolveDynamicComponent(unref(state2).computedContentComponent), {
                structure: unref(state2).structure[unref(state2).tab],
                onUpdate: onUpdateFields
              }, null, 8, ["structure"]))
            ], 512)
          ], 32)
        ])
      ], 32);
    };
  }
};
var Preference = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-38efed1e"]]);
var Item_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$7 = { class: "group-item" };
const _hoisted_2$5 = { class: "group-item__image" };
const _hoisted_3$4 = ["src", "alt"];
const _hoisted_4$4 = { class: "group-item__body" };
const _hoisted_5$3 = {
  key: 0,
  class: "group-item__meta"
};
const _sfc_main$a = {
  props: {
    src: String,
    name: String,
    description: String,
    count: Number,
    selected: Boolean
  },
  emits: ["select"],
  setup(__props, { emit: emits }) {
    const props = __props;
    function onSelectItem(e) {
      e.preventDefault();
      emits("select");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("a", {
          class: normalizeClass(["group-item-wrap", props.selected && "group-item-wrap--selected"]),
          onClick: onSelectItem
        }, [
          createBaseVNode("figure", _hoisted_2$5, [
            props.src ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: props.src,
              alt: props.name
            }, null, 8, _hoisted_3$4)) : (openBlock(), createBlock(_sfc_main$k, {
              key: 1,
              "icon-name": "x"
            }))
          ]),
          createBaseVNode("div", _hoisted_4$4, [
            createBaseVNode("h3", {
              class: normalizeClass([!props.name && "none"])
            }, toDisplayString$1(props.name ? props.name : "None"), 3),
            createBaseVNode("p", null, toDisplayString$1(props.description), 1),
            props.count !== void 0 ? (openBlock(), createElementBlock("ul", _hoisted_5$3, [
              createBaseVNode("li", null, [
                createBaseVNode("b", null, "Count: " + toDisplayString$1(props.count), 1)
              ])
            ])) : createCommentVNode("", true)
          ])
        ], 2)
      ]);
    };
  }
};
var Item = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-3c9f0abc"]]);
var index_vue_vue_type_style_index_0_lang$1 = "";
const _hoisted_1$6 = { class: "groups-header" };
const _hoisted_2$4 = { class: "groups-header__body" };
const _hoisted_3$3 = { class: "groups-header__nav" };
const _hoisted_4$3 = ["title"];
const _hoisted_5$2 = { class: "groups__body" };
const _hoisted_6$2 = { class: "groups-index" };
const _sfc_main$9 = {
  setup(__props) {
    const { t } = i18n.global;
    let computes = reactive({
      index: computed(() => {
        const { tree, group } = store.state;
        return Object.keys(tree).map((key) => {
          switch (typeof tree[key]) {
            case "object":
              const slide = tree[key].slides;
              if (!slide)
                return false;
              const firstSlide = slide && slide.length > 0 ? slide[0] : null;
              let src = firstSlide ? firstSlide.thumbnail || firstSlide.src : null;
              return {
                key,
                name: tree[key].name,
                description: tree[key].description,
                count: Array.isArray(tree[key].slides) ? tree[key].slides.length : void 0,
                src,
                selected: key === group
              };
            default:
              return false;
          }
        }).filter(Boolean);
      })
    });
    function onTouchStart(e) {
      if (e.touches && e.touches.length > 1)
        e.preventDefault();
    }
    function onClose() {
      store.dispatch("changeMode", null);
    }
    function onSelectSlide(key) {
      if (!confirm(t("confirm.selectGroup")))
        return;
      store.dispatch("changeGroup", key);
      store.dispatch("changeMode", null);
      main$1.update("group");
      main$1.restart();
    }
    onMounted(() => {
      if (slides)
        slides.pause(true);
    });
    onUnmounted(() => {
      if (slides)
        slides.pause(false);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", {
        class: "groups",
        onTouchstart: onTouchStart,
        onClick: onClose
      }, [
        createBaseVNode("div", {
          class: "groups__wrap",
          onClick: _cache[0] || (_cache[0] = (e) => {
            e.stopPropagation();
          })
        }, [
          createBaseVNode("header", _hoisted_1$6, [
            createBaseVNode("div", _hoisted_2$4, [
              createBaseVNode("h2", null, toDisplayString$1(unref(t)("title.selectGroup")), 1),
              createBaseVNode("p", null, toDisplayString$1(unref(t)("description.selectGroup")), 1)
            ]),
            createBaseVNode("nav", _hoisted_3$3, [
              createBaseVNode("button", {
                type: "button",
                title: unref(t)("base.close"),
                onClick: onClose
              }, [
                createVNode(_sfc_main$k, { "icon-name": "x" })
              ], 8, _hoisted_4$3)
            ])
          ]),
          createBaseVNode("div", _hoisted_5$2, [
            createBaseVNode("ul", _hoisted_6$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(computes).index, (item) => {
                return openBlock(), createElementBlock("li", null, [
                  (openBlock(), createBlock(Item, {
                    key: item.key,
                    src: item.src,
                    name: item.name,
                    description: item.description,
                    count: item.count,
                    selected: item.selected,
                    onSelect: ($event) => onSelectSlide(item.key)
                  }, null, 8, ["src", "name", "description", "count", "selected", "onSelect"]))
                ]);
              }), 256))
            ])
          ])
        ])
      ], 32);
    };
  }
};
var Close_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$5 = ["title"];
const _sfc_main$8 = {
  props: { title: String },
  emits: { "close": null },
  setup(__props, { emit: emits }) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        title: __props.title,
        class: "button-close",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
      }, [
        createVNode(_sfc_main$k, { "icon-name": "x" })
      ], 8, _hoisted_1$5);
    };
  }
};
var ButtonClose = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-bb92cd88"]]);
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = {
  key: 0,
  class: "thumbnail__header"
};
const _hoisted_2$3 = { key: 0 };
const _hoisted_3$2 = { class: "thumbnail__body" };
const _hoisted_4$2 = {
  key: 0,
  class: "thumbnail__index"
};
const _hoisted_5$1 = ["disabled", "onClick"];
const _hoisted_6$1 = ["src", "alt"];
const _hoisted_7$1 = {
  key: 1,
  class: "thumbnail__empty"
};
const _sfc_main$7 = {
  setup(__props) {
    const { t } = i18n.global;
    let computes = reactive({
      index: computed(() => {
        return store.state.slides.map((o) => __spreadProps(__spreadValues({}, o), {
          thumbnail: o.thumbnail || o.src
        }));
      }),
      title: computed(() => {
        return store.state.tree[store.state.group].name;
      }),
      description: computed(() => {
        return store.state.tree[store.state.group].description;
      })
    });
    function onSelect(n) {
      if (slides)
        slides.change(n, "none");
      store.dispatch("changeMode", null);
    }
    function onClose() {
      store.dispatch("changeMode", null);
    }
    function onTouchStart(e) {
      if (e.touches && e.touches.length > 1)
        e.preventDefault();
    }
    onMounted(() => {
      if (slides)
        slides.pause(true);
    });
    onUnmounted(() => {
      if (slides)
        slides.pause(false);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", {
        class: "thumbnail",
        onTouchstart: onTouchStart
      }, [
        unref(computes).title ? (openBlock(), createElementBlock("header", _hoisted_1$4, [
          createBaseVNode("h2", null, toDisplayString$1(unref(computes).title), 1),
          unref(computes).description ? (openBlock(), createElementBlock("p", _hoisted_2$3, toDisplayString$1(unref(computes).description), 1)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3$2, [
          unref(computes).index && unref(computes).index.length > 0 ? (openBlock(), createElementBlock("ul", _hoisted_4$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(computes).index, (o, k) => {
              return openBlock(), createElementBlock("li", null, [
                createBaseVNode("button", {
                  type: "button",
                  disabled: k === unref(store).state.activeSlide,
                  onClick: ($event) => onSelect(k)
                }, [
                  createBaseVNode("img", {
                    src: o.thumbnail,
                    alt: o.title
                  }, null, 8, _hoisted_6$1)
                ], 8, _hoisted_5$1)
              ]);
            }), 256))
          ])) : (openBlock(), createElementBlock("div", _hoisted_7$1, [
            createVNode(_sfc_main$k, { "icon-name": "frown" }),
            createBaseVNode("p", null, toDisplayString$1(unref(t)("thumbnail.empty")), 1)
          ]))
        ]),
        createVNode(ButtonClose, {
          title: unref(t)("base.close"),
          class: "thumbnail__close",
          onClick: onClose
        }, null, 8, ["title"])
      ], 32);
    };
  }
};
var Container_scss_vue_type_style_index_0_src_7c979666_lang = "";
const _sfc_main$6 = {
  props: { error: Object },
  setup(__props) {
    const props = __props;
    const { t } = i18n.global;
    const slides$1 = ref(null);
    const navigation = ref(null);
    let computes = reactive({
      mode: computed(() => {
        switch (store.state.mode) {
          case "preference":
          case "group":
          case "thumbnail":
            return store.state.mode;
          default:
            return null;
        }
      }),
      existSlides: computed(() => {
        return store.state.slides && store.state.slides.length > 0;
      }),
      showThumbnail: computed(() => computes.mode === "thumbnail"),
      showPreference: computed(() => computes.mode === "preference"),
      showGroup: computed(() => computes.mode === "group"),
      emptyTitle: computed(() => {
        return props.error ? props.error.title : void 0;
      }),
      emptyDescription: computed(() => {
        return props.error ? props.error.description : void 0;
      })
    });
    let keys = [];
    function onKeyup(e) {
      if (!store.state.keyboardEvent)
        return;
      if (keys.length > 1) {
        const idx = keys.indexOf(e.keyCode);
        if (idx > -1)
          keys.splice(idx);
        return;
      }
      if (navigation.value)
        navigation.value.blur();
      if (computes.mode) {
        switch (e.keyCode) {
          case 27:
            store.dispatch("changeMode", null);
            break;
        }
      } else {
        switch (e.keyCode) {
          case 37:
            if (slides)
              slides.prev();
            break;
          case 39:
            if (slides)
              slides.next();
            break;
          case 65:
            if (slides && store.state.preference.slides.autoplay) {
              slides.autoplay();
            }
            break;
          case 80:
            store.dispatch("changeMode", "preference");
            break;
          case 84:
            store.dispatch("changeMode", "thumbnail");
            break;
          case 82:
            if (confirm(t("confirm.restart")) && main$1) {
              main$1.restart().then();
            }
            break;
          case 71:
            if (store.state.tree && Object.keys(store.state.tree).length > 1) {
              store.dispatch("changeMode", "group");
            }
            break;
          case 72:
            store.dispatch("changeHud");
            break;
          case 83:
            switch (store.state.serviceMode) {
              case "create":
              case "manage":
                main$1.save();
                break;
            }
            break;
        }
      }
      keys = [];
    }
    function onKeydown(e) {
      if (!store.state.keyboardEvent)
        return;
      if (keys.indexOf(e.keyCode) > -1)
        return;
      keys.push(e.keyCode);
    }
    onMounted(() => {
      setupSlides(slides$1.value);
      if (store.state.preference.keyboard.enabled) {
        window.on("keyup.slideshow-keyboard", onKeyup);
        window.on("keydown.slideshow-keyboard", onKeydown);
      } else {
        window.off("keyup.slideshow-keyboard");
        window.off("keydown.slideshow-keyboard");
      }
    });
    onUnmounted(() => {
      if (store.state.preference.keyboard.enabled) {
        window.off("keyup.slideshow-keyboard");
        window.off("keydown.slideshow-keyboard");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "slideshow",
          unref(store).state.preference.general.hoverVisibleHud && "slideshow--hover"
        ])
      }, [
        unref(computes).existSlides ? (openBlock(), createBlock(_sfc_main$f, {
          key: 0,
          ref_key: "slides",
          ref: slides$1,
          class: "slideshow__slides"
        }, null, 512)) : (openBlock(), createBlock(_sfc_main$e, {
          key: 1,
          title: unref(computes).emptyTitle,
          description: unref(computes).emptyDescription
        }, null, 8, ["title", "description"])),
        unref(store).state.preference.general.hud ? (openBlock(), createBlock(_sfc_main$d, {
          key: 2,
          ref_key: "navigation",
          ref: navigation,
          class: "slideshow__navigation"
        }, null, 512)) : createCommentVNode("", true),
        (openBlock(), createBlock(Teleport, { to: "#slideshowModal" }, [
          unref(computes).showGroup ? (openBlock(), createBlock(_sfc_main$9, { key: 0 })) : createCommentVNode("", true),
          unref(computes).showThumbnail ? (openBlock(), createBlock(_sfc_main$7, { key: 1 })) : createCommentVNode("", true),
          unref(computes).showPreference ? (openBlock(), createBlock(Preference, { key: 2 })) : createCommentVNode("", true)
        ]))
      ], 2);
    };
  }
};
var Unit_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = {};
const _withScopeId$1 = (n) => (pushScopeId("data-v-0ed25ebf"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "loading-unit" };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", null, null, -1));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("em", null, null, -1));
const _hoisted_4$1 = [
  _hoisted_2$2,
  _hoisted_3$1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("p", _hoisted_1$3, _hoisted_4$1);
}
var LoadingUnit = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__scopeId", "data-v-0ed25ebf"]]);
var Intro_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = { class: "loading-intro loading-intro--move" };
const _sfc_main$4 = {
  setup(__props) {
    const { t } = i18n.global;
    let state2 = reactive({ show: false });
    let mounted = false;
    onMounted(() => {
      mounted = true;
      sleep(50).then(() => {
        if (mounted)
          state2.show = true;
      });
    });
    onUnmounted(() => {
      mounted = false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        unref(state2).show ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(LoadingUnit, { class: "unit" }),
          createBaseVNode("strong", null, toDisplayString$1(unref(t)("title.loading")), 1)
        ], 64)) : createCommentVNode("", true)
      ]);
    };
  }
};
var LoadingIntro = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-45331494"]]);
const _sfc_main$3 = {
  props: {
    mode: String,
    preference: Object,
    usePreference: Object,
    group: String,
    tree: [Object, Array]
  },
  emits: [
    "update-preference",
    "update-tree",
    "update-group",
    "save",
    "delete"
  ],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    if (window)
      window.dev = false;
    const { locale } = i18n.global;
    let state2 = reactive({
      dev: false,
      loading: true,
      error: void 0
    });
    let restarting = false;
    function updateTheme(color) {
      let theme;
      switch (color) {
        case "light":
        case "dark":
          theme = color;
          break;
        default:
          theme = "system";
          break;
      }
      const $html = document.querySelector("html");
      $html.dataset["color"] = theme;
    }
    function error(sw) {
      if (sw) {
        state2.error = {
          title: "Error slides",
          description: "\uC2AC\uB77C\uC774\uB4DC\uB97C \uAC00\uC838\uC624\uB294\uB370 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."
        };
      } else {
        state2.error = void 0;
      }
    }
    function fetchPreference() {
      if (props.preference) {
        disabled("preference");
        if (checkPreference(props.preference)) {
          let preference2 = convertPureObject$1(props.preference);
          store.dispatch("changePreference", preference2);
          store.dispatch("changeActiveSlide", preference2.slides.initialNumber);
        }
      } else {
        const storagePreference = get$1("preference") || baseOptions.preference;
        if (storagePreference && checkPreference(storagePreference)) {
          store.dispatch("changePreference", storagePreference);
          store.dispatch("changeActiveSlide", storagePreference.slides.initialNumber);
        } else {
          set$1("preference", convertPureObject$1(store.state.preference));
        }
      }
      if (props.usePreference) {
        disabled("usePreference");
        store.dispatch("changeUsePreference", props.usePreference);
      }
    }
    function fetchGroup() {
      let group;
      if (props.group) {
        disabled("group");
        group = props.group;
      } else {
        let storageGroup = get$1("group");
        group = storageGroup || "default";
      }
      if (!store.state.tree[group]) {
        if (Object.keys(store.state.tree)[0])
          group = Object.keys(store.state.tree)[0];
      }
      store.dispatch("changeGroup", group);
    }
    function fetchTree() {
      try {
        let tree;
        if (props.tree) {
          disabled("tree");
          tree = props.tree;
        } else {
          const storageSlides = get$1("tree");
          tree = !!storageSlides ? storageSlides : baseOptions.tree;
        }
        if (Array.isArray(tree)) {
          tree = {
            default: { slides: tree }
          };
        }
        store.dispatch("changeTree", tree);
        error(false);
      } catch (e) {
        if (window.dev)
          console.error(e.message);
        error(true);
      }
    }
    async function fetchSlides() {
      try {
        const { group, tree } = store.state;
        let slides2 = tree[group] ? tree[group].slides : [];
        if (slides2 && typeof slides2 === "string") {
          let getSlides = await getApiData(slides2);
          checkSlideItems(getSlides);
          slides2 = getSlides;
        } else if (!(slides2 && Array.isArray(slides2))) {
          slides2 = null;
        }
        store.dispatch("changeSlides", slides2);
        error(false);
      } catch (e) {
        if (window.dev)
          console.error(e.message);
        store.dispatch("changeSlides", null);
        error(true);
      }
    }
    function start() {
      sleep(60).then(() => {
        state2.loading = false;
      });
    }
    function stop2() {
      state2.loading = true;
    }
    async function restart() {
      if (restarting)
        return;
      restarting = true;
      stop2();
      updateTheme(store.state.preference.style.screenColor);
      locale.value = store.state.preference.general.language;
      await fetchSlides();
      await sleep(800);
      start();
      restarting = false;
    }
    function update3(type) {
      switch (type) {
        case "preference":
          emits("update-preference", convertPureObject$1(store.state.preference));
          break;
        case "tree":
          emits("update-tree", convertPureObject$1(store.state.tree));
          break;
        case "group":
          emits("update-group", store.state.group);
          break;
      }
    }
    function useKeyboardEvent(sw) {
      store.commit("updateUseKeyboardEvent", sw);
    }
    function save() {
      emits("save");
    }
    function deleteSlideshow() {
      emits("delete");
    }
    onMounted(() => {
      const app = getCurrentInstance();
      setup(app.exposed, {
        preference: !!props.preference,
        tree: !!props.tree,
        group: !!props.group
      });
      fetchTree();
      fetchGroup();
      fetchSlides().then(() => start());
    });
    watch(() => props.preference, () => {
      fetchPreference();
      restart().then();
    });
    watch(() => props.tree, () => {
      fetchTree();
      restart().then();
    });
    watch(() => props.group, () => {
      fetchGroup();
      restart().then();
    });
    store.commit("setServiceMode", props.mode);
    initCustomEvent();
    fetchPreference();
    updateTheme(store.state.preference.style.screenColor);
    locale.value = store.state.preference.general.language;
    expose({
      start,
      stop: stop2,
      restart,
      update: update3,
      useKeyboardEvent,
      save,
      deleteSlideshow
    });
    return (_ctx, _cache) => {
      return unref(state2).loading ? (openBlock(), createBlock(LoadingIntro, { key: 0 })) : (openBlock(), createBlock(_sfc_main$6, {
        key: 1,
        error: unref(state2).error
      }, null, 8, ["error"]));
    };
  }
};
var Switch_scss_vue_type_style_index_0_src_4bda4914_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-4bda4914"), n = n(), popScopeId(), n);
const _hoisted_1$1 = ["name", "id", "required", "disabled", "checked"];
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "form-switch__icon" }, null, -1));
const _sfc_main$2 = {
  props: {
    name: { type: String, required: true },
    id: String,
    disabled: Boolean,
    required: Boolean,
    modelValue: Boolean
  },
  emits: ["update:modelValue", "blur:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          "form",
          "form-switch",
          props.disabled && "form-switch--disabled"
        ])
      }, [
        createBaseVNode("input", {
          type: "checkbox",
          name: props.name,
          id: props.id,
          required: props.required,
          disabled: props.disabled,
          checked: props.modelValue,
          onChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", Boolean($event.target.checked))),
          class: "form-switch__body"
        }, null, 40, _hoisted_1$1),
        _hoisted_2$1
      ], 2);
    };
  }
};
var FormSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4bda4914"]]);
var post_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "slideshow-post__header" };
const _hoisted_2 = ["onSubmit"];
const _hoisted_3 = { class: "slideshow-post__field" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("header", null, [
  /* @__PURE__ */ createBaseVNode("label", {
    for: "title",
    class: "required"
  }, "\uC81C\uBAA9")
], -1);
const _hoisted_5 = { class: "slideshow-post__input" };
const _hoisted_6 = { class: "slideshow-post__field" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("header", null, [
  /* @__PURE__ */ createBaseVNode("label", {
    for: "description",
    class: "required"
  }, "\uC124\uBA85")
], -1);
const _hoisted_8 = { class: "slideshow-post__input" };
const _hoisted_9 = { class: "slideshow-post__field" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("header", null, [
  /* @__PURE__ */ createBaseVNode("label", { for: "thumbnail" }, "\uC378\uB124\uC77C \uC774\uBBF8\uC9C0 \uC8FC\uC18C")
], -1);
const _hoisted_11 = { class: "slideshow-post__input" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", { class: "slideshow-post__help" }, " \uC11C\uBE44\uC2A4 \uBAA9\uB85D\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uC774\uBBF8\uC9C0 URL \uC8FC\uC18C\uB97C \uC785\uB825\uD569\uB2C8\uB2E4. ", -1);
const _hoisted_13 = { class: "slideshow-post__field" };
const _hoisted_14 = { class: "slideshow-post__input" };
const _hoisted_15 = ["required"];
const _hoisted_16 = {
  key: 0,
  class: "slideshow-post__help"
};
const _hoisted_17 = {
  key: 0,
  class: "slideshow-post__field"
};
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("header", null, [
  /* @__PURE__ */ createBaseVNode("label", { for: "address" }, "\uC8FC\uC18C")
], -1);
const _hoisted_19 = { class: "slideshow-post__input" };
const _hoisted_20 = { class: "slideshow-post__switch" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("header", null, [
  /* @__PURE__ */ createBaseVNode("label", { for: "visible" }, "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uACF5\uAC1C\uD558\uAE30"),
  /* @__PURE__ */ createBaseVNode("p", { class: "slideshow-post__help" }, " \uC774 \uC2AC\uB77C\uC774\uB4DC\uB97C \uC678\uBD80\uC5D0 \uACF5\uC720\uD569\uB2C8\uB2E4. ")
], -1);
const _hoisted_22 = { class: "slideshow-post__nav" };
const _hoisted_23 = /* @__PURE__ */ createTextVNode("\uB2EB\uAE30");
const _sfc_main$1 = {
  props: {
    mode: String,
    slideshow: Object,
    form: Object
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    var _a, _b, _c, _d, _e;
    const props = __props;
    const slideshow_title = ref();
    const slideshow_password = ref();
    const slideshow_thumbnail = ref();
    let state2 = reactive({
      processing: false,
      key: (_a = props.form) == null ? void 0 : _a.key,
      title: (_b = props.form) == null ? void 0 : _b.title,
      description: (_c = props.form) == null ? void 0 : _c.description,
      password: "",
      thumbnail: (_d = props.form) == null ? void 0 : _d.thumbnail,
      address: (_e = props.form) == null ? void 0 : _e.address,
      visible: !!props.form ? props.form.visible : true
    });
    let computes = reactive({
      title: computed(() => {
        switch (props.mode) {
          case "create":
            return "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uB9CC\uB4E4\uAE30";
          case "manage":
            return "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC218\uC815\uD558\uAE30";
          default:
            return "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC11C\uBE44\uC2A4";
        }
      }),
      buttonSubmit: computed(() => {
        switch (props.mode) {
          case "create":
            return "\uB9CC\uB4E4\uAE30";
          case "manage":
            return "\uC218\uC815\uD558\uAE30";
          default:
            return "\uC801\uC6A9\uD558\uAE30";
        }
      }),
      manageMode: computed(() => props.mode === "manage"),
      createMode: computed(() => props.mode === "create")
    });
    async function onSubmit() {
      try {
        state2.processing = true;
        let url;
        let data = {
          title: state2.title,
          description: state2.description,
          slideshow: encodeURIComponent(JSON.stringify(props.slideshow)),
          password: state2.password,
          thumbnail: state2.thumbnail,
          visible: state2.visible ? 1 : 0
        };
        if (data.thumbnail && !validateUrl(data.thumbnail)) {
          slideshow_thumbnail.value.focus();
          throw new Error("URL \uC8FC\uC18C\uAC00 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        }
        if (data.password && data.password.length < 4) {
          slideshow_password.value.focus();
          throw new Error("\uBE44\uBC00\uBC88\uD638\uB97C 4\uC790\uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
        }
        switch (props.mode) {
          case "manage":
            url = `/manage/${state2.address}/`;
            break;
          case "create":
          default:
            url = "/create/";
            break;
        }
        let res;
        try {
          res = await post(url, data);
          if (!res.success)
            throw new Error(res.message);
        } catch (e) {
          throw new Error("\uCC98\uB9AC\uD558\uB294\uB370 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.");
        }
        switch (props.mode) {
          case "manage":
            state2.processing = false;
            onClose();
            alert("\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC5C5\uB370\uC774\uD2B8\uB97C \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4.");
            break;
          case "create":
          default:
            location.href = `${window.Custom.path}watch/${res.data.address}/`;
            break;
        }
      } catch (e) {
        alert(e.message);
        state2.processing = false;
      }
    }
    function onClose() {
      emits("close", {
        title: state2.title,
        description: state2.description,
        thumbnail: state2.thumbnail,
        address: state2.address
      });
    }
    onMounted(() => {
      slideshow_title.value.focus();
    });
    onBeforeMount(() => {
      document.querySelector("html").classList.add("mode-modal");
    });
    onUnmounted(() => {
      document.querySelector("html").classList.remove("mode-modal");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", {
        class: "slideshow-post",
        onClick: onClose
      }, [
        createBaseVNode("div", {
          class: "slideshow-post__wrap",
          onClick: _cache[6] || (_cache[6] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createBaseVNode("header", _hoisted_1, [
            createBaseVNode("h1", null, toDisplayString$1(unref(computes).title), 1)
          ]),
          createBaseVNode("form", {
            method: "post",
            class: "slideshow-post__form",
            onSubmit: withModifiers(onSubmit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_3, [
              _hoisted_4,
              createBaseVNode("label", _hoisted_5, [
                withDirectives(createBaseVNode("input", {
                  ref_key: "slideshow_title",
                  ref: slideshow_title,
                  type: "text",
                  name: "title",
                  id: "title",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(state2).title = $event),
                  minlength: "4",
                  maxlength: "50",
                  placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694.",
                  required: true
                }, null, 512), [
                  [vModelText, unref(state2).title]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_6, [
              _hoisted_7,
              createBaseVNode("label", _hoisted_8, [
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  name: "description",
                  id: "description",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(state2).description = $event),
                  maxlength: "120",
                  placeholder: "\uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694.",
                  required: true
                }, null, 512), [
                  [vModelText, unref(state2).description]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_9, [
              _hoisted_10,
              createBaseVNode("label", _hoisted_11, [
                withDirectives(createBaseVNode("input", {
                  ref_key: "slideshow_thumbnail",
                  ref: slideshow_thumbnail,
                  type: "text",
                  name: "thumbnail",
                  id: "thumbnail",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(state2).thumbnail = $event),
                  maxlength: "255",
                  placeholder: "\uC774\uBBF8\uC9C0 \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694."
                }, null, 512), [
                  [vModelText, unref(state2).thumbnail]
                ])
              ]),
              _hoisted_12
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("header", null, [
                createBaseVNode("label", {
                  for: "password",
                  class: normalizeClass([unref(computes).createMode ? "required" : ""])
                }, " \uBE44\uBC00\uBC88\uD638 ", 2)
              ]),
              createBaseVNode("label", _hoisted_14, [
                withDirectives(createBaseVNode("input", {
                  ref_key: "slideshow_password",
                  ref: slideshow_password,
                  type: "password",
                  name: "password",
                  id: "password",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(state2).password = $event),
                  minlength: "4",
                  maxlength: "30",
                  placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.",
                  required: unref(computes).createMode
                }, null, 8, _hoisted_15), [
                  [vModelText, unref(state2).password]
                ])
              ]),
              unref(computes).manageMode ? (openBlock(), createElementBlock("p", _hoisted_16, " \uC0C8\uB85C\uC6B4 \uBE44\uBC00\uBC88\uD638\uB85C \uBCC0\uACBD\uD558\uB824\uBA74 \uC785\uB825\uD558\uC138\uC694. ")) : createCommentVNode("", true)
            ]),
            unref(computes).manageMode ? (openBlock(), createElementBlock("div", _hoisted_17, [
              _hoisted_18,
              createBaseVNode("label", _hoisted_19, [
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  name: "address",
                  id: "address",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(state2).address = $event),
                  maxlength: "255",
                  readonly: true
                }, null, 512), [
                  [vModelText, unref(state2).address]
                ])
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_20, [
              _hoisted_21,
              createBaseVNode("div", null, [
                createVNode(FormSwitch, {
                  name: "visible",
                  id: "visible",
                  modelValue: unref(state2).visible,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(state2).visible = $event)
                }, null, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("nav", _hoisted_22, [
              createVNode(_sfc_main$l, {
                type: "submit",
                disabled: unref(state2).processing,
                color: "key"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString$1(unref(state2).processing ? "\uCC98\uB9AC\uC911.." : unref(computes).buttonSubmit), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              createVNode(_sfc_main$l, { onClick: onClose }, {
                default: withCtx(() => [
                  _hoisted_23
                ]),
                _: 1
              })
            ])
          ], 40, _hoisted_2)
        ])
      ]);
    };
  }
};
let originalPrefix = "slideshow-service";
let prefix = originalPrefix;
function checkObject() {
  return !!window.localStorage;
}
function changePrefix(hash) {
  prefix = originalPrefix + "-" + hash;
}
function get2(key) {
  if (!(checkObject() && key))
    return void 0;
  try {
    return JSON.parse(window.localStorage.getItem(`${prefix}_${key}`));
  } catch (e) {
    return void 0;
  }
}
function set(key, value) {
  if (!(checkObject() && key && value))
    return;
  window.localStorage.setItem(`${prefix}_${key}`, JSON.stringify(value));
}
function getInitializeData(mode) {
  let preference2;
  let usePreference = defaults.usePreference;
  let tree;
  let group;
  let serviceData = getServiceData();
  switch (mode) {
    case "watch":
      const storagePreference = get2("preference");
      const storageGroup = get2("group");
      preference2 = __spreadValues(__spreadValues(__spreadValues({}, defaults.preference), serviceData.preference), storagePreference);
      tree = serviceData.tree || defaults.tree;
      group = storageGroup || serviceData.group || defaults.group;
      usePreference.data = false;
      break;
    case "manage":
      preference2 = __spreadValues(__spreadValues({}, defaults.preference), serviceData.preference);
      tree = serviceData.tree || defaults.tree;
      group = serviceData.group || defaults.group;
      break;
    case "create":
      preference2 = defaults.preference;
      tree = defaults.tree;
      group = defaults.group;
      break;
  }
  return {
    preference: preference2,
    usePreference,
    tree,
    group
  };
}
function getServiceData() {
  const { Custom } = window;
  try {
    if (!Custom.slideshow)
      throw new Error("no data");
    if (Custom.slideshow) {
      const data = JSON.parse(decodeURIComponent(Custom == null ? void 0 : Custom.slideshow));
      return {
        group: data.group,
        preference: data.preference,
        tree: data.tree
      };
    }
  } catch (e) {
    return {
      group: void 0,
      preference: void 0,
      tree: void 0
    };
  }
}
const _sfc_main = {
  props: {
    mode: String
  },
  setup(__props, { expose }) {
    const props = __props;
    const slideshow = ref();
    const { Custom } = window;
    changePrefix(Custom.address);
    let state2 = reactive(__spreadProps(__spreadValues({}, getInitializeData(props.mode)), {
      visiblePost: false,
      visibleDelete: false,
      post: __spreadValues({
        key: null,
        title: "",
        description: "",
        password: "",
        thumbnail: "",
        address: "",
        visible: true
      }, getFormData(Custom == null ? void 0 : Custom.form))
    }));
    function onUpdatePreference(res) {
      state2.preference = res;
      if (props.mode === "watch")
        set("preference", res);
    }
    function onUpdateTree(res) {
      if (props.mode === "watch")
        return;
      state2.tree = res;
    }
    function onUpdateGroup(res) {
      state2.group = res;
      if (props.mode === "watch")
        set("group", res);
    }
    function onVisiblePost(sw) {
      state2.slideshow = sw ? convertPureObject$1({
        group: state2.group,
        tree: state2.tree,
        preference: state2.preference
      }) : null;
      state2.visiblePost = sw;
      slideshow.value.useKeyboardEvent(!sw);
    }
    function onClosePost(src) {
      state2.post = __spreadValues(__spreadValues({}, state2.post), src);
      onVisiblePost(false);
    }
    function onVisibleDelete(sw) {
      slideshow.value.useKeyboardEvent(!sw);
      state2.visibleDelete = sw;
    }
    expose({
      slideshow
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$3, {
          ref_key: "slideshow",
          ref: slideshow,
          mode: props.mode,
          preference: unref(state2).preference,
          usePreference: unref(state2).usePreference,
          group: unref(state2).group,
          tree: unref(state2).tree,
          onUpdatePreference,
          onUpdateTree,
          onUpdateGroup,
          onDelete: _cache[0] || (_cache[0] = ($event) => onVisibleDelete(true)),
          onSave: _cache[1] || (_cache[1] = ($event) => onVisiblePost(true))
        }, null, 8, ["mode", "preference", "usePreference", "group", "tree"]),
        (openBlock(), createBlock(Teleport, { to: "#service" }, [
          unref(state2).visiblePost ? (openBlock(), createBlock(_sfc_main$1, {
            key: 0,
            mode: props.mode,
            slideshow: unref(state2).slideshow,
            form: unref(state2).post,
            onClose: onClosePost
          }, null, 8, ["mode", "slideshow", "form"])) : createCommentVNode("", true),
          unref(state2).visibleDelete ? (openBlock(), createBlock(_sfc_main$m, {
            key: 1,
            type: "delete",
            mode: "delete",
            onClose: _cache[2] || (_cache[2] = ($event) => onVisibleDelete(false))
          })) : createCommentVNode("", true)
        ]))
      ], 64);
    };
  }
};
var main = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
export { FormSwitch as F, _export_sfc as _, _sfc_main$k as a, getFileData as b, convertPureObject$1 as c, getApiData as d, checkTree as e, main as f, getValueFromType as g, i18n as i, main$1 as m, store as s };
