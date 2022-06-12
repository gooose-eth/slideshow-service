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
      <p class="help">
        공개주소가 만들어졌습니다.<br/>
        이 주소는 "{{props.expiry}}"까지 사용할 수 있으며, "{{permission}}" 기능을 사용할 수 있습니다.<br/>
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
import {ref, computed, defineEmits} from 'vue';
import { copyToClipboard } from '~/libs/util';
import { serviceStore } from '~/store/service';
import { FormText } from '~/components/form';
import { ButtonBasic } from '~/components/button';
import Icon from '~/components/icon/index.vue';

const $copyAddress = ref();
const props = defineProps<{
  keyAddress: string
  expiry: string
  permission: { watch: boolean, edit: boolean, delete: boolean }|undefined
}>();
const emits = defineEmits([ 'close' ]);
const service = serviceStore();
const url = computed(() => {
  if (!props.keyAddress) return undefined;
  return `${service.url.replace(/\/$/, '')}/watch/key-${props.keyAddress}`;
});
const permission = computed(() => {
  return Object.keys(props.permission).map((key: string) => {
    switch (key)
    {
      case 'watch':
        return props.permission[key] ? '보기' : false;
      case 'edit':
        return props.permission[key] ? '수정' : false;
      case 'delete':
        return props.permission[key] ? '삭제' : false;
      default:
        return false;
    }
  }).filter(Boolean).join(',');
});

function onClickCopyAddressInput(): void
{
  const $el = $copyAddress.value.$ref();
  $el.select();
}

function onClickClipBoard(): void
{
  if (!url.value) return;
  copyToClipboard(url.value).then(() => {
    alert('주소가 복사되었습니다.');
  });
}
</script>

<style src="./created.scss" lang="scss" scoped></style>
