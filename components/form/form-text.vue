<template>
<textarea
  v-if="props.type === 'textarea'"
  ref="$root"
  :type="props.type"
  :name="props.name"
  :id="props.id"
  :value="props.modelValue"
  :placeholder="props.placeholder"
  :required="props.required"
  :min="props.min"
  :max="props.max"
  :step="props.step"
  :maxlength="props.maxlength"
  :rows="props.rows"
  :size="props.size"
  :disabled="props.disabled"
  :readOnly="props.readOnly"
  :class="[
    'form-text',
    props.inline && 'form-text--inline',
    props.color && `form-text--color-${props.color}`,
  ]"
  @input="onChange"
  @blur="$emit('blur:modelValue', $event.target.value)"/>
<input
  v-else
  ref="$root"
  :type="props.type"
  :name="props.name"
  :id="props.id"
  :value="props.modelValue"
  :placeholder="props.placeholder"
  :required="props.required"
  :min="props.min"
  :max="props.max"
  :step="props.step"
  :maxlength="props.maxlength"
  :size="props.size"
  :disabled="props.disabled"
  :readOnly="props.readOnly"
  :class="[
    'form-text',
    props.inline && 'form-text--inline',
    props.color && `form-text--color-${props.color}`,
  ]"
  @input="onChange"
  @blur="$emit('blur:modelValue', $event.target.value)"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getValueFromType } from '~/libs/util';

const $root = ref();
const props = defineProps({
  type: { type: String, default: 'text' }, // text,tel
  name: String,
  id: String,
  placeholder: String,
  required: Boolean,
  min: [ Number, String ],
  max: Number,
  step: Number,
  maxlength: Number,
  inline: Boolean,
  rows: { type: Number, default: 3 },
  size: { type: Number, default: 10 },
  color: String, // error,success
  disabled: Boolean,
  readOnly: Boolean,
  modelType: String,
  modelValue: [ String, Number, Boolean, Array ],
});
const emits = defineEmits([ 'update:modelValue', 'blur:modelValue' ]);

function onChange(e: InputEvent)
{
  emits('update:modelValue', getValueFromType(props.modelType, (<HTMLInputElement>e.target).value));
}
function focus()
{
  if ($root.value) $root.value.focus();
}

// set expose
defineExpose({
  $ref: () => { return $root.value },
  focus,
});
</script>

<style src="./form-text.scss" lang="scss" scoped></style>
