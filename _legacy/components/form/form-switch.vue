<template>
<label :class="[
  'form-switch',
  props.disabled && 'form-switch--disabled',
]">
  <input
    type="checkbox"
    :name="props.name"
    :id="props.id"
    :required="props.required"
    :disabled="props.disabled"
    :checked="props.modelValue"
    @change="$emit('update:modelValue', Boolean($event.target.checked))"
    class="form-switch__body">
  <i class="form-switch__icon"/>
</label>
</template>

<script lang="ts" setup>
const $input = ref();
const props = defineProps<{
  name: string
  id?: string
  disabled?: boolean
  required?: boolean
  modelValue?: boolean
}>();
const emits = defineEmits([ 'update:modelValue', 'blur:modelValue' ]);
</script>

<style src="./form-switch.scss" lang="scss" scoped></style>
