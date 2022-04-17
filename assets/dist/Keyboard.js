import { q as i18n, r as reactive, o as openBlock, a as createElementBlock, g as createBaseVNode, t as toDisplayString, u as unref, j as createVNode, p as pushScopeId, l as popScopeId } from "./main.js";
import { _ as _export_sfc, F as FormSwitch, c as convertPureObject } from "./main2.js";
import "./authorization.js";
var fieldset_scss_vue_type_style_index_0_src_88e43012_scoped_true_lang = "";
var Keyboard_scss_vue_type_style_index_1_src_88e43012_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-88e43012"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("legend", null, "Keyboard fields", -1));
const _hoisted_2 = { class: "fields" };
const _hoisted_3 = { class: "field-switch" };
const _hoisted_4 = { class: "field-switch__body" };
const _hoisted_5 = { class: "field-title" };
const _hoisted_6 = { for: "pref_enabled" };
const _hoisted_7 = { class: "field-description" };
const _hoisted_8 = { class: "field-switch__input" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "field-line" }, null, -1));
const _hoisted_10 = { class: "keyboard-guide" };
const _hoisted_11 = { class: "keyboard-guide__header" };
const _hoisted_12 = { class: "keyboard-guide__body" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "A")
], -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "P")
], -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "T")
], -1));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "R")
], -1));
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "H")
], -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "G")
], -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "S")
], -1));
const _sfc_main = {
  props: { structure: Object },
  emits: { "update": null },
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = i18n.global;
    let state = reactive({ enabled: props.structure.enabled });
    function onSave() {
      const structure = convertPureObject(state);
      emits("update", structure);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("fieldset", null, [
        _hoisted_1,
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("h3", _hoisted_5, [
                createBaseVNode("label", _hoisted_6, toDisplayString(unref(t)("title.usingKeyboard")), 1)
              ]),
              createBaseVNode("p", _hoisted_7, toDisplayString(unref(t)("description.usingKeyboard")), 1)
            ]),
            createBaseVNode("div", _hoisted_8, [
              createVNode(FormSwitch, {
                name: "pref_enabled",
                id: "pref_enabled",
                modelValue: unref(state).enabled,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => unref(state).enabled = $event),
                  onSave
                ]
              }, null, 8, ["modelValue"])
            ])
          ]),
          _hoisted_9
        ]),
        createBaseVNode("section", _hoisted_10, [
          createBaseVNode("header", _hoisted_11, [
            createBaseVNode("h3", null, toDisplayString(unref(t)("base.guide")), 1),
            createBaseVNode("p", null, toDisplayString(unref(t)("description.keyboardGuide")), 1)
          ]),
          createBaseVNode("table", _hoisted_12, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, toDisplayString(unref(t)("base.ShortcutKey")), 1),
                createBaseVNode("td", null, toDisplayString(unref(t)("base.description")), 1)
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, [
                  createBaseVNode("code", null, toDisplayString(unref(t)("base.leftKey")), 1)
                ]),
                createBaseVNode("td", null, toDisplayString(unref(t)("label.prevSlide")), 1)
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, [
                  createBaseVNode("code", null, toDisplayString(unref(t)("base.rightKey")), 1)
                ]),
                createBaseVNode("td", null, toDisplayString(unref(t)("label.nextSlide")), 1)
              ]),
              createBaseVNode("tr", null, [
                _hoisted_13,
                createBaseVNode("td", null, toDisplayString(unref(t)("base.autoplay")), 1)
              ]),
              createBaseVNode("tr", null, [
                _hoisted_14,
                createBaseVNode("td", null, toDisplayString(unref(t)("description.openPreference")), 1)
              ]),
              createBaseVNode("tr", null, [
                _hoisted_15,
                createBaseVNode("td", null, toDisplayString(unref(t)("description.thumbnail")), 1)
              ]),
              createBaseVNode("tr", null, [
                _hoisted_16,
                createBaseVNode("td", null, toDisplayString(unref(t)("description.restart")), 1)
              ]),
              createBaseVNode("tr", null, [
                _hoisted_17,
                createBaseVNode("td", null, toDisplayString(unref(t)("description.hud")), 1)
              ]),
              createBaseVNode("tr", null, [
                _hoisted_18,
                createBaseVNode("td", null, toDisplayString(unref(t)("description.group")), 1)
              ]),
              createBaseVNode("tr", null, [
                _hoisted_19,
                createBaseVNode("td", null, toDisplayString(unref(t)("description.saveSlideshow")), 1)
              ])
            ])
          ])
        ])
      ]);
    };
  }
};
var Keyboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-88e43012"]]);
export { Keyboard as default };
