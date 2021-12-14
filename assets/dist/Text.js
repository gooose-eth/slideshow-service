import { _ as _export_sfc, g as getValueFromType } from "./main3.js";
import { k as ref, ax as openBlock, V as createElementBlock, A as normalizeClass } from "./main2.js";
var Text_scss_vue_type_style_index_0_src_eecb24c0_scoped_true_lang = "";
const _hoisted_1 = ["type", "name", "id", "value", "placeholder", "required", "min", "max", "step", "maxlength", "rows", "size", "disabled", "readOnly"];
const _hoisted_2 = ["type", "name", "id", "value", "placeholder", "required", "min", "max", "step", "maxlength", "size", "disabled", "readOnly"];
const _sfc_main = {
  props: {
    type: { type: String, default: "text" },
    name: String,
    id: String,
    placeholder: String,
    required: Boolean,
    min: Number,
    max: Number,
    step: Number,
    maxlength: Number,
    inline: Boolean,
    rows: { type: Number, default: 3 },
    size: { type: Number, default: 10 },
    color: String,
    disabled: Boolean,
    readOnly: Boolean,
    modelType: String,
    modelValue: [String, Number, Boolean, Array]
  },
  emits: ["update:modelValue", "blur:modelValue"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const root = ref(0);
    function onChange(e) {
      emits("update:modelValue", getValueFromType(props.modelType, e.target.value));
    }
    function focus() {
      if (root.value)
        root.value.focus();
    }
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return props.type === "textarea" ? (openBlock(), createElementBlock("textarea", {
        key: 0,
        ref_key: "root",
        ref: root,
        type: props.type,
        name: props.name,
        id: props.id,
        value: props.modelValue,
        placeholder: props.placeholder,
        required: props.required,
        min: props.min,
        max: props.max,
        step: props.step,
        maxlength: props.maxlength,
        rows: props.rows,
        size: props.size,
        disabled: props.disabled,
        readOnly: props.readOnly,
        class: normalizeClass([
          "form",
          "form-text",
          props.inline && "form-text--inline",
          props.color && `form-text--color-${props.color}`
        ]),
        onInput: onChange,
        onBlur: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("blur:modelValue", $event.target.value))
      }, null, 42, _hoisted_1)) : (openBlock(), createElementBlock("input", {
        key: 1,
        ref_key: "root",
        ref: root,
        type: props.type,
        name: props.name,
        id: props.id,
        value: props.modelValue,
        placeholder: props.placeholder,
        required: props.required,
        min: props.min,
        max: props.max,
        step: props.step,
        maxlength: props.maxlength,
        size: props.size,
        disabled: props.disabled,
        readOnly: props.readOnly,
        class: normalizeClass([
          "form",
          "form-text",
          props.inline && "form-text--inline",
          props.color && `form-text--color-${props.color}`
        ]),
        onInput: onChange,
        onBlur: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("blur:modelValue", $event.target.value))
      }, null, 42, _hoisted_2));
    };
  }
};
var FormText = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eecb24c0"]]);
export { FormText as F };
