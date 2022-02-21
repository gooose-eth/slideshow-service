<template>
<label
  :class="[
    'form',
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
  <Icon icon-name="arrow-down" class="form-select__icon"/>
</label>
</template>

<script setup>
import * as util from '../../libs/util';
import Icon from '../Icon/index.vue';

const name = 'FormSelect';
const props = defineProps({
  name: { type: String, required: true },
  id: String,
  disabled: Boolean,
  required: Boolean,
  placeholder: { type: [ String, null ], default: null },
  modelType: String,
  modelValue: [ String, Number ],
});
const emits = defineEmits([ 'update:modelValue', 'blur:modelValue' ]);

function onChange(e)
{
  emits('update:modelValue', util.getValueFromType(props.modelType, e.target.value));
}
</script>

<style src="./form.scss" lang="scss" scoped></style>
<style lang="scss">
@use '../../assets/scss/mixins';
.form-select {
  display: block;
  position: relative;
  height: var(--form-height);
  box-sizing: border-box;
  background: var(--color-shape);
  border-radius: var(--form-radius);
  transition: box-shadow var(--speed-button-active) ease-out;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:focus-within {
    box-shadow: 0 0 0 2px var(--color-key);
  }
  &__body {
    width: 100%;
    height: 100%;
    appearance: none;
    box-sizing: border-box;
    outline: none;
    background: none;
    border: none;
    padding: 0 var(--form-side-padding);
    font-size: 16px;
    letter-spacing: -.25px;
    background: var(--color-shape);
    line-height: normal;
    color: var(--color-fill);
    -webkit-appearance: none;
  }
  &__icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    --icon-stroke: 1.5;
    --icon-size: 22px;
  }
  &--disabled {
    opacity: .5;
    cursor: not-allowed;
  }
  @include mixins.dark-mode() {
    &__icon {
      --icon-color: var(--color-fill);
    }
  }
}
</style>
