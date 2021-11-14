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
import { y as openBlock, z as createElementBlock, $ as renderSlot, J as normalizeClass, D as ref, r as reactive, v as computed, Q as onMounted, V as onBeforeMount, S as onUnmounted, F as createBaseVNode, R as toDisplayString, C as unref, X as withDirectives, Y as vModelText, K as createVNode, Z as withCtx, W as withModifiers, _ as createTextVNode } from "./main2.js";
function getFormData(form) {
  try {
    if (!form)
      throw new Error("no data");
    return JSON.parse(decodeURIComponent(form));
  } catch (e) {
    return {};
  }
}
var button_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = ["type"];
const _sfc_main$1 = {
  props: {
    type: { type: String, default: "button" },
    color: String
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: props.type,
        class: normalizeClass([
          "app-button",
          props.color && `app-button--color-${props.color}`
        ]),
        onClick: _cache[0] || (_cache[0] = ($event) => emits("click"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$1);
    };
  }
};
const headers = {
  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
};
function makeData(src) {
  let formBody = [];
  for (const property in src) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(src[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&");
}
async function post(url, data, type = "json") {
  try {
    let res = await fetch(url, {
      method: "post",
      headers: __spreadProps(__spreadValues({}, headers), {
        Authorization: window.Custom.token
      }),
      body: makeData(data)
    });
    switch (type) {
      case "text":
        return res.text();
      case "json":
        return res.json();
      default:
        return res;
    }
  } catch (e) {
    throw new Error(e.message);
  }
}
var authorization_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "authorization__title" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", { class: "authorization__description" }, " \uC2AC\uB77C\uC774\uB4DC\uC1FC\uB97C \uC0AD\uC81C\uD558\uBA74 \uBCF5\uAD6C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4! ", -1);
const _hoisted_3 = ["action"];
const _hoisted_4 = { class: "authorization__field" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", { for: "address" }, "\uC8FC\uC18C", -1);
const _hoisted_6 = { class: "authorization__input" };
const _hoisted_7 = { class: "authorization__field" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("label", { for: "password" }, "\uBE44\uBC00\uBC88\uD638", -1);
const _hoisted_9 = { class: "authorization__input" };
const _hoisted_10 = { class: "authorization__nav" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\uB2EB\uAE30");
const _sfc_main = {
  props: {
    visible: Boolean,
    type: String,
    mode: String
  },
  emits: ["submit", "close"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { Custom } = window;
    const form = getFormData(Custom.form);
    const address = ref();
    let state = reactive({
      address: "",
      password: "",
      processing: false
    });
    let computes = reactive({
      url: computed(() => `${Custom.path}${props.mode}/`),
      label: computed(() => {
        switch (props.type) {
          case "login":
          default:
            return {
              title: "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC778\uC99D",
              submit: "\uC778\uC99D\uD558\uAE30"
            };
          case "delete":
            return {
              title: "\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC0AD\uC81C",
              submit: "\uC0AD\uC81C\uD558\uAE30"
            };
        }
      }),
      submitClassName: computed(() => {
        switch (props.type) {
          case "login":
          default:
            return "key";
          case "delete":
            return "danger";
        }
      })
    });
    async function onSubmit(e) {
      e.preventDefault();
      state.processing = true;
      switch (props.mode) {
        case "delete":
          try {
            const res = await post(`${Custom.path}delete/${form.key}/`, {
              address: state.address,
              password: state.password
            });
            if (!res.success)
              throw new Error(res.message);
            alert("\uC2AC\uB77C\uC774\uC2A4\uC1FC\uB97C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4.");
            location.href = Custom.url;
          } catch (e2) {
            alert("\uC2AC\uB77C\uC774\uB4DC\uC1FC \uC0AD\uC81C\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");
            address.value.focus();
            state.processing = false;
          }
          break;
        default:
          try {
            const res = await post(`${Custom.path}auth/`, {
              address: state.address,
              password: state.password
            });
            if (!res.success)
              throw new Error(res.message);
            e.target.submit();
          } catch (e2) {
            alert("\uC778\uC99D\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.");
            address.value.focus();
            state.processing = false;
          }
          break;
      }
    }
    onMounted(() => {
      address.value.focus();
    });
    onBeforeMount(() => {
      document.querySelector("html").classList.add("mode-modal");
    });
    onUnmounted(() => {
      document.querySelector("html").classList.remove("mode-modal");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", {
        class: "authorization",
        onClick: _cache[4] || (_cache[4] = ($event) => emits("close"))
      }, [
        createBaseVNode("div", {
          class: "authorization__wrap",
          onClick: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createBaseVNode("h1", _hoisted_1, toDisplayString(unref(computes).label.title), 1),
          _hoisted_2,
          createBaseVNode("form", {
            action: unref(computes).url,
            method: "post",
            onSubmit,
            class: "authorization__form"
          }, [
            createBaseVNode("div", _hoisted_4, [
              _hoisted_5,
              createBaseVNode("label", _hoisted_6, [
                withDirectives(createBaseVNode("input", {
                  ref: (_value, _refs) => {
                    _refs["address"] = _value;
                    address.value = _value;
                  },
                  type: "text",
                  name: "address",
                  id: "address",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(state).address = $event),
                  minlength: "4",
                  maxlength: "24",
                  placeholder: "\uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
                  required: ""
                }, null, 512), [
                  [vModelText, unref(state).address]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_7, [
              _hoisted_8,
              createBaseVNode("label", _hoisted_9, [
                withDirectives(createBaseVNode("input", {
                  type: "password",
                  name: "password",
                  id: "password",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(state).password = $event),
                  minlength: "4",
                  maxlength: "30",
                  placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
                  required: ""
                }, null, 512), [
                  [vModelText, unref(state).password]
                ])
              ])
            ]),
            createBaseVNode("nav", _hoisted_10, [
              createVNode(_sfc_main$1, {
                type: "submit",
                color: unref(computes).submitClassName,
                disabled: unref(state).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(state).processing ? "\uCC98\uB9AC\uC911.." : unref(computes).label.submit), 1)
                ]),
                _: 1
              }, 8, ["color", "disabled"]),
              createVNode(_sfc_main$1, {
                onClick: _cache[2] || (_cache[2] = ($event) => emits("close"))
              }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ])
          ], 40, _hoisted_3)
        ])
      ]);
    };
  }
};
export { _sfc_main$1 as _, _sfc_main as a, getFormData as g, post as p };
