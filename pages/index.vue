<template>
<article class="index">
  <h1>Slideshow items</h1>
  <div class="index__body">
    <ul class="index__items">
      <li v-for="item in [0,1,2,3]">
        <Item
          address="address"
          img="img"
          title="title"
          description="description"
          date="date"/>
      </li>
    </ul>
    <nav>
      .paginate
    </nav>
  </div>
</article>
</template>

<script lang="ts" setup>
import Item from '~/components/pages/index/item.vue';
</script>

<style src="./index.scss" lang="scss" scoped></style>
