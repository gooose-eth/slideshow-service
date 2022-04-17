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
import { w as watch, r as reactive, c as computed, d as defineAsyncComponent, o as openBlock, a as createElementBlock, b as createBlock, e as resolveDynamicComponent, u as unref, f as ref, g as createBaseVNode, h as createCommentVNode, F as Fragment, i as renderList, n as normalizeClass, j as createVNode, k as normalizeStyle, p as pushScopeId, l as popScopeId, m as onMounted, t as toDisplayString, q as i18n, s as onUnmounted, T as Teleport, v as getCurrentInstance, x as onBeforeMount, y as withModifiers, z as withDirectives, A as vModelText, B as withCtx, C as createTextVNode } from "./main.js";
import { g as getFormData, p as post, _ as _sfc_main$l, a as _sfc_main$m } from "./authorization.js";
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
    supported = true;
    perf = global.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
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
      },
      now() {
        return now();
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
function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
function isPromise(val) {
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
    if (!isPromise(res)) {
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
  if (isObject(type) && type.type) {
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
  var devtools = options.devtools;
  this._committing = false;
  this._actions = /* @__PURE__ */ Object.create(null);
  this._actionSubscribers = [];
  this._mutations = /* @__PURE__ */ Object.create(null);
  this._wrappedGetters = /* @__PURE__ */ Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  this._subscribers = [];
  this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  this._devtools = devtools;
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
  const preference = convertPureObject$1(defaults.preference);
  const tree = convertPureObject$1(defaults.tree);
  const slides2 = convertPureObject$1(defaults.slides);
  await context.dispatch("changePreference", preference);
  await context.dispatch("changeTree", tree);
  await context.dispatch("changeSlides", slides2);
  context.commit("updateActiveSlide", preference.slides.initialNumber);
  context.commit("updateUseKeyboardEvent", true);
  context.commit("updateMode", null);
}
function changeGroup(context, key) {
  context.commit("updateGroup", key);
  set$1("group", key);
}
var actions = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
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
}, Symbol.toStringTag, { value: "Module" }));
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
var mutations = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
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
}, Symbol.toStringTag, { value: "Module" }));
var store = createStore({
  state,
  mutations,
  actions
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
function getApiData(url, parse = true) {
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
            resolve(parse ? JSON.parse(httpRequest.responseText) : httpRequest.responseText);
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
function getFileData(file, parse = true) {
  return new Promise((resolve, reject) => {
    try {
      if (!file)
        throw new Error("no file");
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          resolve(parse ? JSON.parse(e.target.result) : e.target.result);
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
var Images_scss_vue_type_style_index_0_src_1fb8b710_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId$2 = (n) => (pushScopeId("data-v-1fb8b710"), n = n(), popScopeId(), n);
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
var Images = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-1fb8b710"]]);
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
var Caption_scss_vue_type_style_index_0_src_4a842aab_scoped_true_lang = "";
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
          __props.title ? (openBlock(), createElementBlock("h1", _hoisted_1$e, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
          __props.description ? (openBlock(), createElementBlock("pre", _hoisted_2$b, toDisplayString(__props.description), 1)) : createCommentVNode("", true)
        ], 64))
      ], 4);
    };
  }
};
var Caption = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-4a842aab"]]);
var Paginate_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$d = { class: "slideshow-paginate" };
const _sfc_main$h = {
  props: {
    total: { type: Number, default: 0 },
    current: { type: Number, default: 0 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("em", _hoisted_1$d, toDisplayString(__props.current + 1) + " / " + toDisplayString(__props.total), 1);
    };
  }
};
var Paginate = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-107c32f4"]]);
var Controller_scss_vue_type_style_index_0_src_01cb94ba_scoped_true_lang = "";
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
var Controller = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-01cb94ba"]]);
var index_scss_vue_type_style_index_0_src_b1865eec_lang = "";
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
          createBaseVNode("h2", _hoisted_2$9, toDisplayString(__props.title || unref(t)("title.emptySlide")), 1),
          createBaseVNode("p", _hoisted_3$8, toDisplayString(__props.description || unref(t)("description.addSlides")), 1)
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
        const { slides: slides2, preference } = store.state;
        if (!preference.slides.autoplay)
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
                }, toDisplayString(unref(t)("base.preference")), 1)
              ])) : createCommentVNode("", true),
              unref(computes).visibleThumbnail ? (openBlock(), createElementBlock("li", _hoisted_12$1, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[3] || (_cache[3] = ($event) => onClickContextItem("thumbnail"))
                }, toDisplayString(unref(t)("title.thumbnailView")), 1)
              ])) : createCommentVNode("", true),
              createBaseVNode("li", null, [
                createBaseVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(state2).activeFullscreen && "on"]),
                  onClick: _cache[4] || (_cache[4] = ($event) => onClickContextItem("fullscreen"))
                }, toDisplayString(unref(t)("base.fullscreen")), 3)
              ]),
              ((_b = unref(form)) == null ? void 0 : _b.address) ? (openBlock(), createElementBlock("li", _hoisted_13$1, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[5] || (_cache[5] = ($event) => onClickContextItem("share"))
                }, toDisplayString(unref(t)("base.share")), 1)
              ])) : createCommentVNode("", true),
              unref(store).state.serviceMode === "manage" ? (openBlock(), createElementBlock("li", _hoisted_14$1, [
                createBaseVNode("button", {
                  type: "button",
                  class: "danger",
                  onClick: _cache[6] || (_cache[6] = ($event) => onClickContextItem("delete"))
                }, toDisplayString(unref(t)("base.delete")), 1)
              ])) : createCommentVNode("", true),
              unref(store).state.serviceMode === "watch" && !unref(form).visible ? (openBlock(), createElementBlock("li", _hoisted_15$1, [
                createBaseVNode("button", {
                  type: "button",
                  class: "danger",
                  onClick: _cache[7] || (_cache[7] = ($event) => onClickContextItem("logout"))
                }, toDisplayString(unref(t)("base.logout")), 1)
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
var Side_scss_vue_type_style_index_0_src_7bf53643_scoped_true_lang = "";
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
              createBaseVNode("em", null, toDisplayString(unref(t)("base.general")), 1)
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
              createBaseVNode("em", null, toDisplayString(unref(t)("base.slides")), 1)
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
              createBaseVNode("em", null, toDisplayString(unref(t)("base.style")), 1)
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
              createBaseVNode("em", null, toDisplayString(unref(t)("base.data")), 1)
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
              createBaseVNode("em", null, toDisplayString(unref(t)("base.keyboard")), 1)
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
              createBaseVNode("em", null, toDisplayString(unref(t)("base.information")), 1)
            ])
          ], 8, _hoisted_7$2)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
};
var Side = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-7bf53643"]]);
var index_scss_vue_type_style_index_0_src_4d072cbe_scoped_true_lang = "";
const _hoisted_1$8 = { class: "preference-header" };
const _hoisted_2$6 = { class: "preference-header__body" };
const _hoisted_3$5 = { class: "preference-header__nav" };
const _hoisted_4$5 = ["title"];
const _hoisted_5$4 = ["title"];
const _sfc_main$b = {
  setup(__props) {
    const { t } = i18n.global;
    const preference = convertPureObject$1(store.state.preference);
    const tree = convertPureObject$1(store.state.tree);
    let state2 = reactive({
      tab: "general",
      structure: {
        general: preference.general,
        slides: preference.slides,
        style: preference.style,
        data: { tree },
        keyboard: preference.keyboard
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
        let preference2 = {
          general: convertPureObject$1(state2.structure.general),
          slides: convertPureObject$1(state2.structure.slides),
          style: convertPureObject$1(state2.structure.style),
          keyboard: convertPureObject$1(state2.structure.keyboard)
        };
        if (!checkPreference(preference2))
          throw new Error("Bad preference data.");
        store.dispatch("changePreference", preference2);
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
                createBaseVNode("h2", null, toDisplayString(unref(state2).computedHeaderContent.title), 1),
                createBaseVNode("p", null, toDisplayString(unref(state2).computedHeaderContent.description), 1)
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
var Preference = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-4d072cbe"]]);
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
            }, toDisplayString(props.name ? props.name : "None"), 3),
            createBaseVNode("p", null, toDisplayString(props.description), 1),
            props.count !== void 0 ? (openBlock(), createElementBlock("ul", _hoisted_5$3, [
              createBaseVNode("li", null, [
                createBaseVNode("b", null, "Count: " + toDisplayString(props.count), 1)
              ])
            ])) : createCommentVNode("", true)
          ])
        ], 2)
      ]);
    };
  }
};
var Item = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-79f31f02"]]);
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
              createBaseVNode("h2", null, toDisplayString(unref(t)("title.selectGroup")), 1),
              createBaseVNode("p", null, toDisplayString(unref(t)("description.selectGroup")), 1)
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
var ButtonClose = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-149b0d9c"]]);
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
          createBaseVNode("h2", null, toDisplayString(unref(computes).title), 1),
          unref(computes).description ? (openBlock(), createElementBlock("p", _hoisted_2$3, toDisplayString(unref(computes).description), 1)) : createCommentVNode("", true)
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
            createBaseVNode("p", null, toDisplayString(unref(t)("thumbnail.empty")), 1)
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
var Container_scss_vue_type_style_index_0_src_456cfc6d_lang = "";
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
const _withScopeId$1 = (n) => (pushScopeId("data-v-9609b342"), n = n(), popScopeId(), n);
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
var LoadingUnit = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__scopeId", "data-v-9609b342"]]);
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
          createBaseVNode("strong", null, toDisplayString(unref(t)("title.loading")), 1)
        ], 64)) : createCommentVNode("", true)
      ]);
    };
  }
};
var LoadingIntro = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a6501554"]]);
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
          let preference = convertPureObject$1(props.preference);
          store.dispatch("changePreference", preference);
          store.dispatch("changeActiveSlide", preference.slides.initialNumber);
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
    function stop() {
      state2.loading = true;
    }
    async function restart() {
      if (restarting)
        return;
      restarting = true;
      stop();
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
      stop,
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
var Switch_scss_vue_type_style_index_0_src_a33f9054_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-a33f9054"), n = n(), popScopeId(), n);
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
var FormSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a33f9054"]]);
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
            createBaseVNode("h1", null, toDisplayString(unref(computes).title), 1)
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
                  createTextVNode(toDisplayString(unref(state2).processing ? "\uCC98\uB9AC\uC911.." : unref(computes).buttonSubmit), 1)
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
  let preference;
  let usePreference = defaults.usePreference;
  let tree;
  let group;
  let serviceData = getServiceData();
  switch (mode) {
    case "watch":
      const storagePreference = get2("preference");
      const storageGroup = get2("group");
      preference = __spreadValues(__spreadValues(__spreadValues({}, defaults.preference), serviceData.preference), storagePreference);
      tree = serviceData.tree || defaults.tree;
      group = storageGroup || serviceData.group || defaults.group;
      usePreference.data = false;
      break;
    case "manage":
      preference = __spreadValues(__spreadValues({}, defaults.preference), serviceData.preference);
      tree = serviceData.tree || defaults.tree;
      group = serviceData.group || defaults.group;
      break;
    case "create":
      preference = defaults.preference;
      tree = defaults.tree;
      group = defaults.group;
      break;
  }
  return {
    preference,
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
var main = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export { FormSwitch as F, _export_sfc as _, _sfc_main$k as a, getFileData as b, convertPureObject$1 as c, getApiData as d, checkTree as e, main as f, getValueFromType as g, main$1 as m, store as s };
