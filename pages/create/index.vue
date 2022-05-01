<template>
<div>
  <Slideshow
    ref="$slideshow"
    @save="visibleSave = true"/>
  <teleport to="#service">
    <transition name="modal-fade">
      <ModalWrap v-if="visibleSave">
        <ModalBody>
          <Save
            @close=""
            @submit=""/>
        </ModalBody>
      </ModalWrap>
    </transition>
  </teleport>
</div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { currentStore } from '~/store/slideshow';
import Slideshow from '~/components/slideshow/index.vue';
import Save from '~/components/slideshow/save/index.vue';
import { ModalWrap, ModalBody } from '~/components/modal';

definePageMeta({
  layout: 'slideshow',
});

const $slideshow = ref();
const current = currentStore();
const visibleSave = ref(false);

// set store
current.mode = 'create';
</script>

<style src="./index.scss" lang="scss" scoped></style>
