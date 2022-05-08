<template>
<div>
  <LoadingIntro v-if="loading"/>
  <Slideshow
    v-else
    ref="$slideshow"
    @open-save="visibleSave = true"/>
  <client-only>
    <teleport to="body">
      <transition name="modal-fade">
        <ModalWrap
          v-if="visibleSave"
          @close="visibleSave = false">
          <ModalBody>
            <SaveSlideshow
              mode="create"
              @close="visibleSave = false"
              @submit="onSubmitSave"/>
          </ModalBody>
        </ModalWrap>
      </transition>
    </teleport>
  </client-only>
</div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { currentStore, windowsStore } from '~/store/slideshow';
import LoadingIntro from '~/components/loading/intro.vue';
import Slideshow from '~/components/slideshow/index.vue';
import SaveSlideshow from '~/components/save-slideshow/index.vue';
import { ModalWrap, ModalBody } from '~/components/modal';

definePageMeta({
  layout: 'slideshow',
});

const $slideshow = ref();
const current = currentStore();
const windows = windowsStore();
const visibleSave = ref(false);
const loading = ref(false);
const error = ref(undefined);

// set store
current.mode = 'create';

function onSubmitSave()
{
  //
}
</script>

<style src="./index.scss" lang="scss" scoped></style>
