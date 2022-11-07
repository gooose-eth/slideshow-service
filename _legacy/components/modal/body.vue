<template>
<div class="modal-body" @click.stop="">
  <slot/>
</div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/mixin';
.modal-body {
  height: 100%;
  cursor: auto;
  @include mixin.responsive(tablet) {
    height: auto;
  }
}
</style>
