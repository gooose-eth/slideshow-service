<template>
<nuxt-link :to="`/watch/${props.address}/`" class="item">
  <figure class="item__image">
    <img
      :src="props.img"
      :width="280"
      :height="180"
      :alt="props.title">
  </figure>
  <div class="item__body">
    <em>{{props.date}}</em>
    <h2>{{props.title}}</h2>
    <p>{{props.description}}</p>
  </div>
</nuxt-link>
</template>

<script lang="ts" setup>
const props = defineProps<{
  address: string
  img: string
  date: string
  title: string
  description?: string
}>();
</script>

<style src="./item.scss" lang="scss" scoped></style>
