import { _ as _export_sfc } from "./main3.js";
import { y as openBlock, z as createElementBlock, F as createBaseVNode, J as normalizeClass, M as pushScopeId, O as popScopeId } from "./main2.js";
var Switch_scss_vue_type_style_index_0_src_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-4bda4914"), n = n(), popScopeId(), n);
const _hoisted_1 = ["name", "id", "required", "disabled", "checked"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "form-switch__icon" }, null, -1));
const _sfc_main = {
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
        }, null, 40, _hoisted_1),
        _hoisted_2
      ], 2);
    };
  }
};
var FormSwitch = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4bda4914"]]);
export { FormSwitch as F };