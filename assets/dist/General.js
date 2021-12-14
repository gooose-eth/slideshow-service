import { _ as _export_sfc, a as _sfc_main$2, i as i18n, c as convertPureObject, s as store, F as FormSwitch, m as main } from "./main3.js";
import { B as ButtonBasic, t as twoDigit } from "./Basic.js";
import { F as FormText } from "./Text.js";
import { ax as openBlock, V as createElementBlock, W as createBaseVNode, a1 as createVNode, D as toDisplayString, U as createCommentVNode, r as reactive, x as unref, I as Fragment, b0 as withCtx, a0 as createTextVNode, aA as pushScopeId, ay as popScopeId } from "./main2.js";
import "./authorization.js";
var Checkbox_scss_vue_type_style_index_0_src_176ad31a_scoped_true_lang = "";
const _hoisted_1$1 = { class: "form-checkbox" };
const _hoisted_2$1 = { class: "form-checkbox__body" };
const _hoisted_3$1 = ["name", "id", "required", "disabled", "checked"];
const _hoisted_4$1 = {
  key: 0,
  class: "form-checkbox__label"
};
const _sfc_main$1 = {
  props: {
    name: { type: String, required: true },
    id: String,
    disabled: Boolean,
    required: Boolean,
    label: String,
    modelValue: Boolean
  },
  emits: ["update:modelValue", "blur:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", _hoisted_1$1, [
        createBaseVNode("span", _hoisted_2$1, [
          createBaseVNode("input", {
            type: "checkbox",
            name: props.name,
            id: props.id,
            required: props.required,
            disabled: props.disabled,
            checked: props.modelValue,
            onChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", Boolean($event.target.checked)))
          }, null, 40, _hoisted_3$1),
          createBaseVNode("i", null, [
            createVNode(_sfc_main$2, { "icon-name": "check" })
          ])
        ]),
        props.label ? (openBlock(), createElementBlock("em", _hoisted_4$1, toDisplayString(props.label), 1)) : createCommentVNode("", true)
      ]);
    };
  }
};
var FormCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-176ad31a"]]);
var General_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-65bac1c5"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("legend", null, "General fields", -1));
const _hoisted_2 = { class: "fields" };
const _hoisted_3 = { class: "field-basic" };
const _hoisted_4 = { class: "field-title" };
const _hoisted_5 = { for: "pref_slideshowAddress" };
const _hoisted_6 = { class: "field-description" };
const _hoisted_7 = { class: "field-basic__body" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "field-line" }, null, -1));
const _hoisted_9 = { class: "field-switch" };
const _hoisted_10 = { class: "field-switch__body" };
const _hoisted_11 = { class: "field-title" };
const _hoisted_12 = { for: "pref_hud" };
const _hoisted_13 = { class: "field-description" };
const _hoisted_14 = { class: "field-switch__input" };
const _hoisted_15 = { class: "field-switch" };
const _hoisted_16 = { class: "field-switch__body" };
const _hoisted_17 = { class: "field-title" };
const _hoisted_18 = { for: "pref_hoverVisibleHud" };
const _hoisted_19 = { class: "field-description" };
const _hoisted_20 = { class: "field-switch__input" };
const _hoisted_21 = { class: "field-switch" };
const _hoisted_22 = { class: "field-switch__body" };
const _hoisted_23 = { class: "field-title" };
const _hoisted_24 = { for: "pref_clickVisibleHud" };
const _hoisted_25 = { class: "field-description" };
const _hoisted_26 = { class: "field-switch__input" };
const _hoisted_27 = { class: "field-basic" };
const _hoisted_28 = { class: "field-title" };
const _hoisted_29 = { for: "pref_hudContents" };
const _hoisted_30 = { class: "field-description" };
const _hoisted_31 = { class: "field-basic__body" };
const _hoisted_32 = { class: "field-checks" };
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "field-line" }, null, -1));
const _hoisted_34 = { class: "field-basic" };
const _hoisted_35 = { class: "field-title" };
const _hoisted_36 = { class: "field-description" };
const _hoisted_37 = { class: "field-basic__body" };
const _hoisted_38 = { class: "grid import-data" };
const _hoisted_39 = {
  key: 0,
  class: "field-basic"
};
const _hoisted_40 = { class: "field-title" };
const _hoisted_41 = { class: "field-description" };
const _hoisted_42 = { class: "field-basic__body" };
const _sfc_main = {
  props: {
    structure: Object
  },
  emits: {
    "update": null
  },
  setup(__props, { emit: emits }) {
    const props = __props;
    const { Custom } = window;
    const { t } = i18n.global;
    let state = reactive({
      language: props.structure.language,
      hud: props.structure.hud,
      hoverVisibleHud: props.structure.hoverVisibleHud,
      clickVisibleHud: props.structure.clickVisibleHud,
      visibleHudContents: convertPureObject(props.structure.visibleHudContents)
    });
    const showManageArea = store.state.serviceMode !== "watch";
    let form = {};
    if (Custom == null ? void 0 : Custom.form) {
      form = JSON.parse(decodeURIComponent(Custom.form));
    }
    function onSave() {
      const structure = convertPureObject(state);
      emits("update", structure);
    }
    function onUpdateHudContents(key, value) {
      state.visibleHudContents[key] = value;
      onSave();
    }
    function onClickBackup() {
      if (!confirm(t("confirm.backup")))
        return;
      let result = {
        preference: convertPureObject(store.state.preference),
        tree: convertPureObject(store.state.tree)
      };
      const date = new Date();
      let dateFormat = `${date.getFullYear()}${twoDigit(date.getMonth() + 1)}${twoDigit(date.getDate())}`;
      const element = document.createElement("a");
      element.setAttribute("href", `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(result, null, 2))}`);
      element.setAttribute("download", `slideshow_${dateFormat}.json`);
      element.click();
    }
    function onClickRestore() {
      return new Promise((resolve, reject) => {
        const el = document.createElement("input");
        el.setAttribute("type", "file");
        el.setAttribute("accept", "application/json");
        el.addEventListener("change", (e) => {
          if (!(e.target.files && e.target.files.length > 0)) {
            alert(t("alert.noSelectedFile"));
            return;
          }
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = (e2) => {
            try {
              let json = JSON.parse(String(e2.target.result));
              if (!confirm(t("confirm.restore")))
                return;
              if (!(json.preference || json.tree))
                throw new Error("no data");
              if (json.preference)
                store.dispatch("changePreference", json.preference);
              if (json.tree)
                store.dispatch("changeTree", json.tree);
              store.dispatch("changeMode", null);
              store.dispatch("changeActiveSlide", store.state.preference.slides.initialNumber);
              store.dispatch("changeAutoplay", false);
              store.commit("updateUseKeyboardEvent", true);
              alert(t("alert.completeRestore"));
              main.restart().then();
            } catch (e3) {
              if (window.dev)
                console.error(e3.message);
              alert(t("alert.failedRestore"));
            }
          };
          reader.readAsText(file);
        }, false);
        el.click();
      });
    }
    function onClickReset() {
      if (!confirm(t("confirm.reset")))
        return;
      store.dispatch("reset").then(() => main.restart().then());
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("fieldset", null, [
        _hoisted_1,
        createBaseVNode("div", _hoisted_2, [
          unref(form).address ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("h3", _hoisted_4, [
                createBaseVNode("label", _hoisted_5, toDisplayString(unref(t)("title.slideshowAddress")), 1)
              ]),
              createBaseVNode("p", _hoisted_6, toDisplayString(unref(t)("description.slideshowAddress")), 1),
              createBaseVNode("div", _hoisted_7, [
                createVNode(FormText, {
                  type: "text",
                  name: "pref_slideshowAddress",
                  id: "pref_slideshowAddress",
                  value: unref(form).address,
                  "read-only": true,
                  size: 16
                }, null, 8, ["value"])
              ])
            ]),
            _hoisted_8
          ], 64)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("h3", _hoisted_11, [
                createBaseVNode("label", _hoisted_12, toDisplayString(unref(t)("base.hud")), 1)
              ]),
              createBaseVNode("p", _hoisted_13, toDisplayString(unref(t)("description.hud")), 1)
            ]),
            createBaseVNode("div", _hoisted_14, [
              createVNode(FormSwitch, {
                name: "pref_hud",
                id: "pref_hud",
                modelValue: unref(state).hud,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => unref(state).hud = $event),
                  onSave
                ]
              }, null, 8, ["modelValue"])
            ])
          ]),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("h3", _hoisted_17, [
                createBaseVNode("label", _hoisted_18, toDisplayString(unref(t)("title.hoverVisibleHud")), 1)
              ]),
              createBaseVNode("p", _hoisted_19, toDisplayString(unref(t)("description.hoverVisibleHud")), 1)
            ]),
            createBaseVNode("div", _hoisted_20, [
              createVNode(FormSwitch, {
                name: "pref_hoverVisibleHud",
                id: "pref_hoverVisibleHud",
                modelValue: unref(state).hoverVisibleHud,
                "onUpdate:modelValue": [
                  _cache[1] || (_cache[1] = ($event) => unref(state).hoverVisibleHud = $event),
                  onSave
                ]
              }, null, 8, ["modelValue"])
            ])
          ]),
          createBaseVNode("div", _hoisted_21, [
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("h3", _hoisted_23, [
                createBaseVNode("label", _hoisted_24, toDisplayString(unref(t)("title.touchHud")), 1)
              ]),
              createBaseVNode("p", _hoisted_25, toDisplayString(unref(t)("description.touchHud")), 1)
            ]),
            createBaseVNode("div", _hoisted_26, [
              createVNode(FormSwitch, {
                name: "pref_clickVisibleHud",
                id: "pref_clickVisibleHud",
                modelValue: unref(state).clickVisibleHud,
                "onUpdate:modelValue": [
                  _cache[2] || (_cache[2] = ($event) => unref(state).clickVisibleHud = $event),
                  onSave
                ]
              }, null, 8, ["modelValue"])
            ])
          ]),
          createBaseVNode("div", _hoisted_27, [
            createBaseVNode("h3", _hoisted_28, [
              createBaseVNode("label", _hoisted_29, toDisplayString(unref(t)("title.visibleContents")), 1)
            ]),
            createBaseVNode("p", _hoisted_30, toDisplayString(unref(t)("description.visibleContents")), 1),
            createBaseVNode("div", _hoisted_31, [
              createBaseVNode("ul", _hoisted_32, [
                createBaseVNode("li", null, [
                  createVNode(FormCheckbox, {
                    name: "pref_hudContents",
                    id: "pref_hudContents",
                    label: unref(t)("base.menu"),
                    modelValue: unref(state).visibleHudContents.menu,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = (o) => onUpdateHudContents("menu", o))
                  }, null, 8, ["label", "modelValue"])
                ]),
                createBaseVNode("li", null, [
                  createVNode(FormCheckbox, {
                    name: "pref_hudContents",
                    label: unref(t)("base.caption"),
                    modelValue: unref(state).visibleHudContents.caption,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = (o) => onUpdateHudContents("caption", o))
                  }, null, 8, ["label", "modelValue"])
                ]),
                createBaseVNode("li", null, [
                  createVNode(FormCheckbox, {
                    name: "pref_hudContents",
                    label: unref(t)("base.controller"),
                    modelValue: unref(state).visibleHudContents.controller,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = (o) => onUpdateHudContents("controller", o))
                  }, null, 8, ["label", "modelValue"])
                ]),
                createBaseVNode("li", null, [
                  createVNode(FormCheckbox, {
                    name: "pref_hudContents",
                    label: unref(t)("base.paginate"),
                    modelValue: unref(state).visibleHudContents.paginate,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = (o) => onUpdateHudContents("paginate", o))
                  }, null, 8, ["label", "modelValue"])
                ]),
                createBaseVNode("li", null, [
                  createVNode(FormCheckbox, {
                    name: "pref_hudContents",
                    label: unref(t)("base.group"),
                    modelValue: unref(state).visibleHudContents.group,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = (o) => onUpdateHudContents("group", o))
                  }, null, 8, ["label", "modelValue"])
                ])
              ])
            ])
          ]),
          showManageArea ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            _hoisted_33,
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("h3", _hoisted_35, [
                createBaseVNode("label", null, toDisplayString(unref(t)("title.backupOrRestore")), 1)
              ]),
              createBaseVNode("p", _hoisted_36, toDisplayString(unref(t)("description.backup")), 1),
              createBaseVNode("div", _hoisted_37, [
                createBaseVNode("div", _hoisted_38, [
                  createBaseVNode("div", null, [
                    createVNode(ButtonBasic, {
                      color: "key",
                      onClick: onClickBackup
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("base.backup")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", null, [
                    createVNode(ButtonBasic, {
                      color: "key",
                      onClick: onClickRestore
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("base.restore")), 1)
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            showManageArea ? (openBlock(), createElementBlock("div", _hoisted_39, [
              createBaseVNode("h3", _hoisted_40, [
                createBaseVNode("label", null, toDisplayString(unref(t)("base.reset")), 1)
              ]),
              createBaseVNode("p", _hoisted_41, toDisplayString(unref(t)("description.reset")), 1),
              createBaseVNode("div", _hoisted_42, [
                createVNode(ButtonBasic, {
                  color: "danger",
                  onClick: onClickReset
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("base.resetSlideshow")), 1)
                  ]),
                  _: 1
                })
              ])
            ])) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
};
var General = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65bac1c5"]]);
export { General as default };
