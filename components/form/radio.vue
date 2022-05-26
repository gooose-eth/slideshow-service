<template>
<nav :class="[
  'form-radio',
  type === 'button' && 'form-radio--button',
]">
  <button
    v-for="(o,k) in items"
    type="button"
    :disabled="modelValue === o.key || (!modelValue && k === 0)"
    class="form-radio__button"
    @click="onClickItem(o.key)">
    {{o.label}}
  </button>
</nav>
</template>

<script setup>
import { getValueFromType } from '~/libs/util';

const name = 'FormRadio';
const props = defineProps({
  type: String, // undefined,button
  items: { type: Array, required: true },
  name: String,
  id: String,
  modelType: String,
  modelValue: [ String, Number, Boolean ],
});
const emits = defineEmits([ 'update:modelValue', 'blur:modelValue' ]);

function onClickItem(key)
{
  emits('update:modelValue', getValueFromType(props.modelType, String(key)));
}
</script>

<style src="./radio.scss" lang="scss" scoped></style>
