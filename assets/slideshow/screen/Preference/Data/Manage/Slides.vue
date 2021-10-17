<template>
<ul :data-key="itemKey" class="data-slides">
  <li
    v-for="(slide,k) in items"
    :data-key="k"
    :draggable="true"
    :class="[
      'data-slide',
      state.dragStartKey === k && 'data-slide--start',
      state.dragStartKey !== state.dragPlaceholderKey && state.dragPlaceholderKey === k && 'data-slide--placeholder',
    ]"
    @mousedown="onMouseDown"
    @dragstart="onDragStart">
    <div class="data-slide__handle">
      <i>
        <Icon icon-name="menu-flat"/>
      </i>
    </div>
    <div class="data-slide__body">
      <h4 :class="!slide.title ? 'none' : ''">
        {{slide.title || 'None'}}
      </h4>
      <p v-if="slide.description">{{slide.description}}</p>
      <nav>
        <a :href="slide.src" target="_blank">
          {{t('base.image')}}
        </a>
        <a v-if="slide.thumbnail" :href="slide.thumbnail" target="_blank">
          {{t('base.thumbnail')}}
        </a>
      </nav>
    </div>
    <nav class="data-slide__nav">
      <button
        type="button"
        :title="t('base.edit')"
        class="edit"
        @click="$emit('edit', k)">
        <Icon icon-name="edit"/>
      </button>
      <button
        type="button"
        :title="t('base.remove')"
        class="remove"
        @click="$emit('remove', k)">
        <Icon icon-name="x"/>
      </button>
    </nav>
  </li>
  <li v-if="!(items && items.length > 0)" class="data-slides__empty">
    {{t('description.empty')}}
  </li>
</ul>
</template>

<script setup>
import { reactive } from 'vue';
import i18n from '../../../../i18n';
import { convertPureObject } from '../../../../libs/object';
import Icon from '../../../../components/Icon/index.vue';

const name = 'Slides';
const { t } = i18n.global;
const props = defineProps({
  itemKey: String,
  items: { type: Array, required: true },
});
const emits = defineEmits({
  'change-order': null,
  'edit': null,
  'remove': null,
});
let state = reactive({
  dragStartKey: undefined,
  dragPlaceholderKey: undefined,
});
let dragTarget;
let dragItems;

// methods
function getTargetElement(el)
{
  return el.dataset.key ? el : el.closest('li');
}
function onMouseDown(e)
{
  dragTarget = e.target;
}
function onDragStart(e)
{
  if (!dragTarget.closest('.data-slide__handle > i'))
  {
    e.preventDefault();
    return;
  }
  dragTarget = getTargetElement(e.target);
  dragItems = dragTarget.parentNode.children;
  state.dragStartKey = Number(dragTarget.dataset.key);
  for (let i=0; i<dragItems.length; i++)
  {
    dragItems[i].addEventListener('dragover', onDragOver);
    dragItems[i].addEventListener('drop', onDrop);
    dragItems[i].addEventListener('dragend', onDragEnd);
  }
}
function onDragOver(e)
{
  if (e.preventDefault) e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  let target = getTargetElement(e.target);
  state.dragPlaceholderKey = Number(target.dataset.key);
}
function onDrop(e)
{
  let target = getTargetElement(e.target);
  if (state.dragStartKey === state.dragPlaceholderKey) return;
  let clone = convertPureObject(props.items);
  clone.splice(state.dragStartKey, 1);
  clone.splice(Number(target.dataset.key), 0, convertPureObject(props.items[state.dragStartKey]));
  context.emit('change-order', clone);
}
function onDragEnd()
{
  if (!(dragTarget && dragItems)) return;
  for (let i=0; i<dragItems.length; i++)
  {
    dragItems[i].removeEventListener('dragover', onDragOver);
    dragItems[i].removeEventListener('drop', onDrop);
    dragItems[i].removeEventListener('dragend', onDragEnd);
  }
  dragTarget = undefined;
  dragItems = undefined;
  state.dragStartKey = undefined;
  state.dragPlaceholderKey = undefined;
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/scss/mixins';

.data-slides {
  margin: 1px 0 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-shape);
  box-sizing: border-box;
  border-radius: var(--size-shape-radius);
  &__empty {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    height: 72px;
    color: var(--color-low-fill);
    user-select: none;
  }
  @include mixins.responsive(desktop) {
    padding: 4px;
  }
}

.data-slide {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background: var(--color-bg);
  &:nth-child(n+2) {
    border-top: 1px dashed var(--color-shape);
  }
  &__handle {
    display: none;
  }
  &__body {
    flex: 1;
    min-width: 0;
    padding: 16px;
    h4 {
      margin: 0 0 6px;
      font-size: 14px;
      letter-spacing: -.5px;
      line-height: 1.15;
      font-weight: 500;
      @include mixins.text-single-line();
      &.none {
        opacity: .3;
      }
    }
    p {
      margin: 0 0 10px;
      font-size: 11px;
      line-height: 1.15;
      color: var(--color-low-fill);
      @include mixins.text-single-line();
    }
    nav {
      display: flex;
      margin: -4px -8px -2px;
      a {
        display: block;
        padding: 4px 8px;
        text-align: center;
        font-size: 12px;
        line-height: 1;
        font-weight: bold;
        text-decoration: none;
        outline: none;
        user-select: none;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: opacity var(--speed-button-active) ease-out;
        &:focus {
          text-decoration: underline;
        }
      }
    }
  }
  &__nav {
    display: none;
  }
  @include mixins.responsive(desktop) {
    margin: 8px;
    border-radius: var(--size-shape-radius);
    box-shadow: 0 0 8px 0 rgba(0,0,0,.15), inset 0 0 0 1px #ddd;
    background-color: var(--color-bg);
    transition: box-shadow var(--speed-button-active) ease-out;
    &:nth-child(n+2) {
      border-top: none;
    }
    &:hover {
      box-shadow: 0 0 12px 0 rgba(0,0,0,.15), inset 0 0 0 1px var(--color-key);
      .data-slide__nav {
        opacity: 1;
        pointer-events: auto;
      }
    }
    &__handle {
      display: block;
      width: 42px;
      margin-left: 12px;
      i {
        display: block;
        margin: 0 auto;
        padding: 12px 0;
        cursor: move;
        transition: opacity var(--speed-button-active) ease-out;
        box-sizing: border-box;
        &:active {
          opacity: .5;
        }
      }
      svg {
        display: block;
        margin: 0 auto;
        --icon-color: var(--color-fill);
        --icon-size: 20px;
      }
    }
    &__body {
      padding-left: 12px;
    }
    &__nav {
      display: flex;
      align-items: center;
      margin-right: 12px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 200ms ease-out;
      button {
        display: block;
        width: 30px;
        height: 30px;
        margin: 0;
        padding: 0;
        font-size: 0;
        background: none;
        border: none;
        cursor: pointer;
        border-radius: var(--size-shape-radius);
        outline: none;
        -webkit-tap-highlight-color: transparent;
        --icon-size: 16px;
        --icon-stroke: 1.5;
        --icon-color: var(--color-fill);
        transition: opacity var(--speed-button-active) ease-out;
        &:active {
          opacity: .5;
        }
        &:focus {
          box-shadow: 0 0 0 2px var(--color-key);
        }
        svg {
          display: block;
          margin: 0 auto;
        }
        &.edit {
        }
        &.remove {
          --icon-size: 20px;
        }
      }
    }
    &--start {
      opacity: .5;
    }
    &--placeholder {
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: var(--color-key);
        border: 1px dashed var(--color-low-fill);
        box-sizing: border-box;
        border-radius: var(--size-shape-radius);
        opacity: .75;
      }
    }
  }
  @include mixins.dark-mode() {
    @include mixins.responsive(desktop) {
      box-shadow: 0 0 15px 0 rgba(0,0,0,.3), inset 0 0 0 1px #181818;
      &:hover {
        box-shadow: 0 0 12px 0 rgba(0,0,0,.15), inset 0 0 0 1px var(--color-key);
      }
    }
  }
}
</style>
