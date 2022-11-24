<template>
<li class="item">
  <router-link :to="`/watch/${srl}/`" class="item__wrap">
    <figure
      :class="[ 'item__image', !image && 'no-image' ]">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        onerror="this.src='/images/img-thumbnail-error.jpg'"/>
      <Icon v-else :name="emptyIcon"/>
    </figure>
    <div class="item__body">
      <em>{{date}}</em>
      <h2>{{title}}</h2>
      <p v-if="description">{{description}}</p>
    </div>
  </router-link>
  <Dropdown
    v-if="props.manage"
    :options="[
      { label: 'Edit', value: 'edit-slide' },
    ]"
    class="item__dropdown"
    @action="onSelectContext"/>
</li>
</template>

<script setup>
import { computed } from 'vue'
import { dateFormat } from '../../libs/string.js'
import { iconRandomPick } from '../icon/assets.js'
import Icon from '../icon/index.vue'
import Dropdown from './dropdown.vue'

const props = defineProps({
  src: Object,
  manage: Boolean,
})
const emits = defineEmits([ 'edit', 'remove' ])
const srl = computed(() => (props.src.srl || undefined))
const title = computed(() => (props.src.title || undefined))
const description = computed(() => (props.src.description || undefined))
const date = computed(() => {
  return dateFormat(new Date(props.src.regdate), '{yyyy}-{MM}-{dd}')
})
const image = computed(() => (props.src.thumbnail || undefined))
const emptyIcon = computed(() => iconRandomPick())

function onSelectContext(key)
{
  switch (key)
  {
    case 'edit-slide':
      emits('edit', srl.value)
      break
  }
}
</script>

<style src="./item.scss" lang="scss" scoped></style>
