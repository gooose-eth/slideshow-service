<template>
<label class="checkbox">
  <span class="checkbox__body">
    <input
      type="checkbox"
      :name="props.name"
      :id="props.id"
      :required="props.required"
      :disabled="props.disabled"
      :checked="props.modelValue"
      @change="$emit('update:modelValue', Boolean($event.target.checked))">
    <i>
      <Icon icon-name="check"/>
    </i>
  </span>
  <em v-if="props.label" class="checkbox__label">
    {{props.label}}
  </em>
</label>
</template>

<script setup>
import Icon from '~/components/icon/index.vue';

const props = defineProps({
  name: { type: String, required: true },
  id: String,
  disabled: Boolean,
  required: Boolean,
  label: String,
  modelValue: Boolean,
});
const emits = defineEmits([ 'update:modelValue', 'blur:modelValue' ]);
</script>

<style src="./form-checkbox.scss" lang="scss" scoped></style>
