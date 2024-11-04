<template>
<ul :data-key="props.itemKey" class="data-slides">
  <li
    v-for="(slide,k) in props.items"
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
        <Icon name="move"/>
      </i>
    </div>
    <div class="data-slide__body">
      <h3 :class="!slide.title ? 'none' : ''">
        {{slide.title || 'None'}}
      </h3>
      <p v-if="slide.description">{{slide.description}}</p>
      <nav>
        <a :href="slide.src" target="_blank">이미지</a>
        <a v-if="slide.thumbnail" :href="slide.thumbnail" target="_blank">썸네일</a>
      </nav>
    </div>
    <nav class="data-slide__nav">
      <button
        type="button"
        title="수정"
        class="edit"
        @click="emits('edit', k)">
        <Icon name="edit"/>
      </button>
      <button
        type="button"
        title="삭제"
        class="remove"
        @click="emits('remove', k)">
        <Icon name="x"/>
      </button>
    </nav>
  </li>
  <li v-if="props.items?.length <= 0" class="data-slides__empty">
    비었습니다.
  </li>
</ul>
</template>

<script setup>
import { reactive } from 'vue'
import { pureObject } from '../../../../libs/util.js'
import Icon from '../../../../components/icon/index.vue'

const props = defineProps({
  itemKey: String,
  items: Array,
})
const emits = defineEmits([ 'change-order', 'edit', 'remove' ])
let state = reactive({
  dragStartKey: NaN,
  dragPlaceholderKey: undefined,
})
let dragTarget
let dragItems

// methods
function getTargetElement(el)
{
  return el.dataset.key ? el : el.closest('li')
}
function onMouseDown(e)
{
  dragTarget = e.target
}
function onDragStart(e)
{
  if (!dragTarget.closest('.data-slide__handle > i'))
  {
    e.preventDefault()
    return
  }
  dragTarget = getTargetElement(e.target)
  dragItems = dragTarget.parentNode.children
  state.dragStartKey = Number(dragTarget.dataset.key)
  for (let i = 0; i < dragItems.length; i++)
  {
    dragItems[i].addEventListener('dragover', onDragOver)
    dragItems[i].addEventListener('drop', onDrop)
    dragItems[i].addEventListener('dragend', onDragEnd)
  }
}
function onDragOver(e)
{
  if (e.preventDefault) e.preventDefault()
  e.dataTransfer.dropEffect = 'move'
  let target = getTargetElement(e.target)
  state.dragPlaceholderKey = Number(target.dataset.key)
}
function onDrop(e)
{
  let target = getTargetElement(e.target)
  if (state.dragStartKey === state.dragPlaceholderKey) return
  let clone = pureObject(props.items)
  clone.splice(state.dragStartKey, 1)
  clone.splice(Number(target.dataset.key), 0, pureObject(props.items[state.dragStartKey]))
  emits('change-order', clone)
}
function onDragEnd()
{
  if (!(dragTarget && dragItems)) return
  for (let i = 0; i < dragItems.length; i++)
  {
    dragItems[i].removeEventListener('dragover', onDragOver)
    dragItems[i].removeEventListener('drop', onDrop)
    dragItems[i].removeEventListener('dragend', onDragEnd)
  }
  dragTarget = undefined
  dragItems = undefined
  state.dragStartKey = NaN
  state.dragPlaceholderKey = undefined
}
</script>

<style src="./slides.scss" lang="scss" scoped></style>
