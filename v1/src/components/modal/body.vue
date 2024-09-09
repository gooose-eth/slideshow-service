<template>
<div class="modal-body" @click.stop="">
  <slot/>
</div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/mixins';
.modal-body {
  height: 100%;
  cursor: auto;
  @include mixins.responsive(tablet) {
    height: auto;
  }
}
</style>
