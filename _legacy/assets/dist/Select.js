import { _ as _export_sfc, a as _sfc_main$1, g as getValueFromType } from "./main3.js";
import { ay as openBlock, W as createElementBlock, X as createBaseVNode, D as toDisplayString, V as createCommentVNode, aF as renderSlot, a2 as createVNode, A as normalizeClass } from "./main2.js";
var form_scss_vue_type_style_index_0_src_1c4748c0_scoped_true_lang = "";
var Select_vue_vue_type_style_index_1_lang = "";
const _hoisted_1 = ["name", "id", "required", "value", "disabled"];
const _hoisted_2 = {
  key: 0,
  value: "",
  disabled: false
};
const _sfc_main = {
  props: {
    name: { type: String, required: true },
    id: String,
    disabled: Boolean,
    required: Boolean,
    placeholder: { type: [String, null], default: null },
    modelType: String,
    modelValue: [String, Number]
  },
  emits: ["update:modelValue", "blur:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    function onChange(e) {
      emits("update:modelValue", getValueFromType(props.modelType, e.target.value));
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          "form",
          "form-select",
          props.disabled && "form-select--disabled"
        ])
      }, [
        createBaseVNode("select", {
          name: props.name,
          id: props.id,
          required: props.required,
          value: props.modelValue,
          disabled: props.disabled,
          class: "form-select__body",
          onChange,
          onBlur: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("blur:modelValue", $event.target.value))
        }, [
          props.placeholder ? (openBlock(), createElementBlock("option", _hoisted_2, toDisplayString(props.placeholder), 1)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 40, _hoisted_1),
        createVNode(_sfc_main$1, {
          "icon-name": "arrow-down",
          class: "form-select__icon"
        })
      ], 2);
    };
  }
};
var FormSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c4748c0"]]);
export { FormSelect as F };
