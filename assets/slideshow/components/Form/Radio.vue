<template>
<nav :class="[
  'form form-radio',
  inline && 'form-radio--inline',
  type === 'button' && 'form-radio--button',
]">
  <div class="form-radio__wrap">
    <div
      v-if="type === 'button'"
      v-for="(o,k) in items"
      class="form-radio__button">
      <button
        type="button"
        :disabled="modelValue === o.key || (!modelValue && k === 0)"
        @click="onClickItem(o.key)">
        {{o.label}}
      </button>
    </div>
    <label v-else v-for="(o,k) in items">
      <input
        type="radio"
        :name="name"
        :id="k === 0 ? id : undefined"
        :value="o.key"
        :checked="modelValue === o.key || (!modelValue && k === 0)"
        @change="onChange"
        @blur="$emit('blur:modelValue', $event.target.value)">
      <em>{{o.label}}</em>
    </label>
  </div>
</nav>
</template>

<script setup>
import { getValueFromType } from '../../libs/util';

const name = 'FormRadio';
const props = defineProps({
  type: String, // undefined,button
  items: { type: Array, required: true },
  name: String,
  id: String,
  inline: Boolean,
  modelType: String,
  modelValue: [ String, Number, Boolean ],
});
const emits = defineEmits([ 'update:modelValue', 'blur:modelValue' ]);

function onChange(e)
{
  emits('update:modelValue', getValueFromType(props.modelType, e.target.value));
}
function onClickItem(key)
{
  emits('update:modelValue', getValueFromType(props.modelType, key));
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/mixins';
@use './form';

.form-radio {
  user-select: none;
  &__wrap {
    display: flex;
    height: var(--form-height);
    border-radius: var(--form-radius);
    overflow: hidden;
    background-color: var(--color-shape);
    transition: box-shadow var(--speed-button-active) ease-out;
    box-sizing: border-box;
    &:focus-within {
      box-shadow: 0 0 0 2px var(--color-key);
    }
    > * {
      height: 100%;
      &:nth-child(n+2) {
        border-left: 1px solid var(--color-invert);
      }
    }
  }
  label {
    position: relative;
    flex: 1;
    display: block;
    -webkit-tap-highlight-color: transparent;
  }
  input {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
  }
  em {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    cursor: pointer;
    height: 100%;
    font-style: normal;
    font-size: var(--form-text-size, 16px);
    letter-spacing: -.5px;
    transition: background-color 200ms ease-out, color 200ms ease-out;
  }
  input:checked + em {
    background-color: var(--color-key);
    color: var(--color-invert);
    cursor: default;
  }
  &__button {
    flex: 1;
    button {
      display: block;
      margin: 0;
      padding: 0 20px;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: none;
      background: none;
      cursor: pointer;
      font-size: var(--form-text-size, 16px);
      letter-spacing: -.5px;
      transition: background-color 200ms ease-out, color 200ms ease-out;
      -webkit-tap-highlight-color: transparent;
      outline: none;
      white-space: nowrap;
      border-radius: 2px;
      color: var(--color-fill);
      text-align: center;
      &:disabled {
        background: var(--color-key);
        color: var(--color-invert);
        cursor: default;
      }
    }
  }
  &--inline {
    display: flex;
    justify-content: flex-start;
    label {
      flex: unset;
    }
  }
  &--button {
    .form-radio {
      &__wrap {
        overflow: unset;
        &:focus-within {
          box-shadow: unset;
        }
      }
      &__button {
        button {
          &:focus {
            box-shadow: 0 0 0 2px var(--color-key);
          }
        }
      }
    }
  }
  @include mixins.responsive(desktop) {
    em {
      padding: 0 24px;
    }
  }
  @include mixins.dark-mode() {
    input:checked + em {
      color: var(--color-fill);
    }
    &__button {
      button {
        &:disabled {
          color: var(--color-fill);
        }
      }
    }
  }
}
</style>
