<template>
<div class="created">
  <div class="created__body">
    <div class="field">
      <p class="label field__label">
        <label>슬라이드쇼 공개주소</label>
      </p>
      <div class="field__body copy-address">
        <FormText
          ref="$copyAddress"
          :model-value="url"
          :read-only="true"
          @click="onClickCopyAddressInput"/>
        <ButtonBasic
          type="button"
          title="주소 복사하기"
          color="key"
          @click="onClickClipBoard">
          <Icon icon-name="copy"/>
        </ButtonBasic>
      </div>
      <Flashing ref="$flashing" :delay="1000" class="success-copy">
        주소가 복사되었습니다.
      </Flashing>
      <p class="help">
        공개주소가 만들어졌습니다.<br/>
        <br/>
        이 주소는 "{{props.expiry}}"까지 사용할 수 있습니다.<br/>
        <strong>외부에 권한을 주는 주소이므로 사용에 주의해주세요.</strong>
      </p>
    </div>
  </div>
  <nav class="created__nav">
    <ButtonBasic
      type="button"
      title="닫기"
      @click="emits('close')">
      닫기
    </ButtonBasic>
  </nav>
</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { copyToClipboard } from '~/libs/util';
import { serviceStore } from '~/store/service';
import { FormText } from '~/components/form';
import { ButtonBasic } from '~/components/button';
import Icon from '~/components/icon/index.vue';
import Flashing from '~/components/typography/flashing.vue';

const $copyAddress = ref();
const $flashing = ref();
const props = defineProps<{
  publicKey: string
  expiry: string
}>();
const emits = defineEmits([ 'close' ]);
const service = serviceStore();
const url = computed(() => {
  if (!props.publicKey) return undefined;
  return `${service.url.replace(/\/$/, '')}/watch/key-${props.publicKey}`;
});

function onClickCopyAddressInput(): void
{
  const $el = $copyAddress.value.$ref();
  $el.select();
}

function onClickClipBoard(): void
{
  if (!url.value) return;
  copyToClipboard(url.value).then(() => $flashing.value.trigger());
}
</script>

<style src="./created.scss" lang="scss" scoped></style>
