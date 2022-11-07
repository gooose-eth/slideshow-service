<template>
<article class="authorization">
  <header class="authorization__header">
    <h1>{{labels.title}}</h1>
    <p>{{labels.description}}</p>
  </header>
  <form class="authorization__form" @submit.prevent="onSubmit">
    <fieldset>
      <legend>인증 입력폼</legend>
      <div class="field">
        <p class="field__label">
          <label for="address">주소</label>
        </p>
        <div class="field__body">
          <FormText
            ref="$address"
            type="text"
            name="address"
            id="address"
            v-model="fields.address"
            :minlength="4"
            :maxlength="24"
            placeholder="주소를 입력해주세요."
            :required="true"
            :disabled="!!props.address"/>
        </div>
      </div>
      <div class="field">
        <p class="field__label">
          <label for="password">비밀번호</label>
        </p>
        <div class="field__body">
          <FormText
            ref="$password"
            type="password"
            name="password"
            id="password"
            v-model="fields.password"
            :minlength="4"
            :maxlength="30"
            placeholder="비밀번호를 입력해주세요."
            :required="true"/>
        </div>
      </div>
    </fieldset>
    <nav class="authorization__nav">
      <ButtonBasic
        type="submit"
        :title="labels.submit"
        :color="submitClassName"
        :disabled="props.processing">
        {{props.processing ? '처리중..' : labels.submit}}
      </ButtonBasic>
      <ButtonBasic
        v-if="props.showCloseButton"
        type="button"
        title="닫기"
        @click="emits('close')">
        닫기
      </ButtonBasic>
    </nav>
  </form>
</article>
</template>

<script lang="ts" setup>
import { ButtonBasic } from '~/components/button';
import { FormText } from '~/components/form';

const $password: any = ref();
const props = defineProps<{
  mode: string // watch,edit,delete
  processing?: boolean
  address?: string
  showCloseButton?: boolean
}>();
const emits = defineEmits([ 'submit', 'close' ]);
const fields = reactive({
  address: props.address,
  password: '',
});
const labels = computed(() => {
  switch (props.mode)
  {
    case 'edit':
      return {
        title: '슬라이드쇼 편집',
        description: '슬라이드쇼에 편집하려면 인증하세요.',
        submit: '편집하기',
      };
    case 'watch':
      return {
        title: '비공개 슬라이드쇼',
        description: '슬라이드쇼를 보려면 인증하세요.',
        submit: '인증하기',
      };
    case 'delete':
      return {
        title: '슬라이드쇼 삭제',
        description: '슬라이드쇼를 삭제하면 복구할 수 없습니다!',
        submit: '삭제하기',
      };
  }
});
const submitClassName = computed(() => {
  switch (props.mode)
  {
    case 'delete':
      return 'danger';
    default:
      return 'key';
  }
});

function onSubmit(): void
{
  emits('submit', {
    address: fields.address,
    password: fields.password,
  });
}

function focusPassword(): void
{
  if (!$password.value) return;
  $password.value.focus();
}

defineExpose({
  focusPassword,
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
