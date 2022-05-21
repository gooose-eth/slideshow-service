<template>
<nuxt-link :to="`/watch/${props.address}/`" class="item">
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
</nuxt-link>
</template>

<script lang="ts" setup>
import IconRandom from '~/components/icon/random.vue';
const props = defineProps<{
  address: string
  img?: string
  date: string
  title: string
  description?: string
}>();
</script>

<style src="./item.scss" lang="scss" scoped></style>
