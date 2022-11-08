<template>
<div class="body" @click.stop="">
  <slot/>
</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '../../assets/scss/mixins';
.body {
  position: relative;
  cursor: auto;
  background: var(--color-bg);
  box-sizing: border-box;
  height: 100%;
  @include mixins.responsive(tablet) {
    height: auto;
    padding: 52px;
    border-radius: 12px;
    box-shadow:
      0 0 0 1px hsl(0 0% 0% / 5%),
      0 4px 8px hsl(0 0% 0% / 5%),
      0 8px 16px hsl(0 0% 0% / 5%),
      0 12px 40px hsl(0 0% 0% / 12%);
  }
}
</style>
