import { _ as _export_sfc, g as getValueFromType } from "./main2.js";
import { o as openBlock, a as createElementBlock, g as createBaseVNode, F as Fragment, i as renderList, t as toDisplayString, n as normalizeClass } from "./main.js";
var form_scss_vue_type_style_index_0_src_5e22810c_scoped_true_lang = "";
var Radio_vue_vue_type_style_index_1_scoped_true_lang = "";
const _hoisted_1 = { class: "form-radio__wrap" };
const _hoisted_2 = { class: "form-radio__button" };
const _hoisted_3 = ["disabled", "onClick"];
const _hoisted_4 = ["id", "value", "checked"];
const _sfc_main = {
  props: {
    type: String,
    items: { type: Array, required: true },
    name: String,
    id: String,
    inline: Boolean,
    modelType: String,
    modelValue: [String, Number, Boolean]
  },
  emits: ["update:modelValue", "blur:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const name = "FormRadio";
    function onChange(e) {
      emits("update:modelValue", getValueFromType(props.modelType, e.target.value));
    }
    function onClickItem(key) {
      emits("update:modelValue", getValueFromType(props.modelType, key));
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        class: normalizeClass([
          "form form-radio",
          __props.inline && "form-radio--inline",
          __props.type === "button" && "form-radio--button"
        ])
      }, [
        createBaseVNode("div", _hoisted_1, [
          __props.type === "button" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.items, (o, k) => {
            return openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("button", {
                type: "button",
                disabled: __props.modelValue === o.key || !__props.modelValue && k === 0,
                onClick: ($event) => onClickItem(o.key)
              }, toDisplayString(o.label), 9, _hoisted_3)
            ]);
          }), 256)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(__props.items, (o, k) => {
            return openBlock(), createElementBlock("label", null, [
              createBaseVNode("input", {
                type: "radio",
                name,
                id: k === 0 ? __props.id : void 0,
                value: o.key,
                checked: __props.modelValue === o.key || !__props.modelValue && k === 0,
                onChange,
                onBlur: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("blur:modelValue", $event.target.value))
              }, null, 40, _hoisted_4),
              createBaseVNode("em", null, toDisplayString(o.label), 1)
            ]);
          }), 256))
        ])
      ], 2);
    };
  }
};
var FormRadio = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e22810c"]]);
export { FormRadio as F };
