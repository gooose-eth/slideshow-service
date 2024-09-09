<template>
<details ref="$root" class="dropdown">
  <summary title="Open manage menu" class="dropdown__summary">
    <Icon name="more-horizontal"/>
  </summary>
  <div class="dropdown__context">
    <ul>
      <li v-for="o in props.options">
        <button
          type="button"
          :class="[ o.color ]"
          @click="onClickContextItem(o.value)">
          {{o.label}}
        </button>
      </li>
    </ul>
  </div>
</details>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Icon from '../icon/index.vue'

const props = defineProps({
  options: Array,
})
const emits = defineEmits([ 'action' ])
const $root = ref()

function onClickContextItem(key)
{
  emits('action', key)
  onClose()
}

function onToggle(e)
{
  const open = e.target.hasAttribute('open')
  if (open)
  {
    window.addEventListener('click', onClose, { once: true })
  }
  else
  {
    window.removeEventListener('click', onClose)
  }
}

function onClose(e)
{
  if (!$root.value) return
  if ((e && e.target?.closest('.dropdown') !== $root.value) || !e)
  {
    $root.value.removeAttribute('open')
  }
}

onMounted(() => {
  $root.value.addEventListener('toggle', onToggle)
})

onBeforeUnmount(() => {
  $root.value.removeEventListener('toggle', onToggle)
  window.removeEventListener('click', onClose)
})
</script>

<style src="./dropdown.scss" lang="scss" scoped></style>
