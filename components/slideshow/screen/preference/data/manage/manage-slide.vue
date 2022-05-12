<template>
<form class="manage-slide" @submit.prevent="onSubmit">
  <PopupHeader
    :title="props.form.type === 'edit' ? '슬라이드 수정' : '슬라이드 추가'"
    @close="emits('close')"/>
  <fieldset class="manage-slide__body">
    <legend>Manage slide fields</legend>
    <div class="fields">
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_src" class="required">이미지 URL</label>
          </h2>
          <p class="field-description">
            이미지 주소를 입력합니다.
          </p>
        </header>
        <div class="manage-slide__field-group">
          <FormText
            ref="$src"
            name="pref_src"
            id="pref_src"
            placeholder="URL을 입력하세요."
            :required="false"
            v-model="state.form.src"/>
          <ButtonBasic type="button" @click="onClickCheckUrl('src')">
            URL 열기
          </ButtonBasic>
        </div>
      </div>
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_thumbnail">썸네일 이미지 URL</label>
          </h2>
          <p class="field-description">
            썸네일 이미지 주소를 입력합니다.
          </p>
        </header>
        <div class="manage-slide__field-group">
          <FormText
            ref="$thumbnail"
            name="pref_thumbnail"
            id="pref_thumbnail"
            placeholder="URL을 입력하세요."
            v-model="state.form.thumbnail"/>
          <ButtonBasic type="button" @click="onClickCheckUrl('thumbnail')">
            URL 열기
          </ButtonBasic>
        </div>
      </div>
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_title">제목</label>
          </h2>
          <p class="field-description">
            슬라이드 제목을 입력합니다.
          </p>
        </header>
        <FormText
          name="pref_title"
          id="pref_title"
          placeholder="제목을 입력해주세요."
          v-model="state.form.title"/>
      </div>
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_description">설명</label>
          </h2>
          <p class="field-description">
            슬라이드 설명을 입력합니다.
          </p>
        </header>
        <FormText
          name="pref_description"
          id="pref_description"
          placeholder="설명을 입력해주세요."
          v-model="state.form.description"/>
      </div>
    </div>
    <nav class="manage-slide__bottom">
      <div>
        <ButtonBasic type="submit" color="key">
          {{props.form.type === 'add' ? '추가하기' : '수정하기'}}
        </ButtonBasic>
      </div>
    </nav>
  </fieldset>
</form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { validUrl } from '~/libs/string';
import PopupHeader from '../popup-header.vue';
import { ButtonBasic } from '~/components/button';
import { FormText } from '~/components/form';

interface PropsForm {
  type: string
  title: string
  src: string
  thumbnail: string
  description: string
}

const $src = ref();
const $thumbnail = ref();
const props = defineProps<{
  form: PropsForm
}>();
const emits = defineEmits([ 'close', 'submit' ]);
let state = reactive({
  form: props.form
});

function onClickCheckUrl(key: string): void
{
  const check = validUrl(state.form[key]);
  if (check)
  {
    window.open(state.form[key]);
  }
  else
  {
    alert('주소가 잘못되었습니다.');
    switch (key)
    {
      case 'src':
        $src.value.focus();
        break;
      case 'thumbnail':
        $thumbnail.value.focus();
        break;
    }
  }
}

function onSubmit(): void
{
  try
  {
    if (!validUrl(state.form.src))
    {
      $src.value.focus();
      throw new Error('no image src address');
    }
    emits('submit', state.form);
  }
  catch(e)
  {
    if (process.dev) console.error(e.message);
    alert('처리에 문제가 생겼습니다.');
  }
}
</script>

<style src="../../preference.scss" lang="scss" scoped></style>
<style src="./manage-slide.scss" lang="scss" scoped></style>
