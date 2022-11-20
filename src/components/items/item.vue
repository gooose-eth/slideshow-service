<template>
<li class="item">
  <router-link to="/" class="item__wrap">
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
</li>
</template>

<script setup>
import { computed } from 'vue'
import { dateFormat } from '../../libs/string.js'
import { iconRandomPick } from '../icon/assets.js'
import Icon from '../../components/icon/index.vue'

const props = defineProps({
  src: Object,
})
const title = computed(() => {
  return props.src.title || undefined
})
const description = computed(() => {
  return props.src.description || undefined
})
const date = computed(() => {
  return dateFormat(new Date(props.src.regdate), '{yyyy}-{MM}-{dd}')
})
const image = computed(() => {
  return props.src.thumbnail || undefined
})
const emptyIcon = computed(() => iconRandomPick())
</script>

<style src="./item.scss" lang="scss" scoped></style>
