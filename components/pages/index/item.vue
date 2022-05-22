<template>
<nuxt-link
  :to="`/watch/${props.address}`"
  :class="[
    'item',
    props.private && 'item--private',
  ]">
  <figure :class="[ 'item__image', !props.img && 'no-img' ]">
    <img
      v-if="!!props.img"
      :src="props.img"
      :width="280"
      :height="180"
      :alt="props.title"
      onerror="this.src='/images/index/img-thumbnail-error.jpg'">
    <IconRandom v-else icon-name="image"/>
  </figure>
  <div class="item__body">
    <em>{{props.date}}</em>
    <h2>{{props.title}}</h2>
    <p>{{props.description}}</p>
  </div>
  <i v-if="props.private" class="item__lock">
    <Icon icon-name="lock"/>
  </i>
</nuxt-link>
</template>

<script lang="ts" setup>
import Icon from '~/components/icon/index.vue';
import IconRandom from '~/components/icon/random.vue';
const props = defineProps<{
  address: string
  img?: string
  date: string
  title: string
  description?: string
  private?: boolean
}>();
</script>

<style src="./item.scss" lang="scss" scoped></style>
