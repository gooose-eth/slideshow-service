<template>
<label
  :class="[
    'form-select',
    props.disabled && 'form-select--disabled',
  ]">
  <select
    :name="props.name"
    :id="props.id"
    :required="props.required"
    :value="props.modelValue"
    :disabled="props.disabled"
    class="form-select__body"
    @change="onChange"
    @blur="$emit('blur:modelValue', $event.target.value)">
    <option v-if="props.placeholder" value="" :disabled="false">
      {{props.placeholder}}
    </option>
    <slot/>
  </select>
  <Icon name="chevron-down" class="form-select__icon"/>
</label>
</template>

<script setup>
import { getValueFromType } from '../../libs/util.js'
import Icon from '../icon/index.vue'

const props = defineProps({
  name: { type: String, required: true },
  id: String,
  disabled: Boolean,
  required: Boolean,
  placeholder: { type: [ String, null ], default: null },
  modelType: String,
  modelValue: [ String, Number ],
})
const emits = defineEmits([ 'update:modelValue', 'blur:modelValue' ])

function onChange(e)
{
  emits('update:modelValue', getValueFromType(props.modelType, e.target.value))
}
</script>

<style src="./form-select.scss" lang="scss" scoped></style>
