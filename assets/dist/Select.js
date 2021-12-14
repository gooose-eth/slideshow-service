import { a as _sfc_main$1, g as getValueFromType } from "./main3.js";
import { ax as openBlock, V as createElementBlock, W as createBaseVNode, D as toDisplayString, U as createCommentVNode, aE as renderSlot, a1 as createVNode, A as normalizeClass } from "./main2.js";
var Select_vue_vue_type_style_index_0_lang = "";
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
          renderSlot(_ctx.$slots, "default")
        ], 40, _hoisted_1),
        createVNode(_sfc_main$1, {
          "icon-name": "arrow-down",
          class: "form-select__icon"
        })
      ], 2);
    };
  }
};
export { _sfc_main as _ };
