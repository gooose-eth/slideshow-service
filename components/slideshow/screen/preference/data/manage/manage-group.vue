<template>
<form class="manage-group" @submit.prevent="onSubmit">
  <PopupHeader
    :title="props.form.type === 'edit' ? '그룹수정' : '그룹추가'"
    @close="emits('close')"/>
  <fieldset class="manage-group__body">
    <legend>Manage slides group fields</legend>
    <div class="fields">
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_key" class="required">그룹 키</label>
          </h2>
          <p class="field-description">
            슬라이드 그룹의 키값을 입력합니다.
          </p>
        </header>
        <div class="flex">
          <label>
            <FormText
              name="pref_key"
              id="pref_key"
              placeholder="키를 입력해주세요."
              :required="true"
              :size="24"
              :maxlength="20"
              :color="state.error.key ? 'error' : ''"
              v-model="state.form.key"
              @update:modelValue="onUpdateKey"/>
          </label>
        </div>
      </div>
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_name">이름</label>
          </h2>
          <p class="field-description">
            그룹의 이름을 설정합니다.
          </p>
        </header>
        <div class="flex">
          <label>
            <FormText
              name="pref_name"
              id="pref_name"
              placeholder="이름을 입력해주세요."
              :maxlength="32"
              :size="32"
              v-model="state.form.name"
              @update:modelValue="onInputEvent"/>
          </label>
        </div>
      </div>
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_description">설명</label>
          </h2>
          <p class="field-description">
            그룹에 대한 설명을 입력합니다.
          </p>
        </header>
        <div class="field-basic__body">
          <FormText
            name="pref_description"
            id="pref_description"
            placeholder="설명을 입력해주세요."
            :maxlength="80"
            v-model="state.form.description"
            @update:modelValue="onInputEvent"/>
        </div>
      </div>
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_slideType">슬라이드 타입 선택</label>
          </h2>
          <p class="field-description">
            슬라이드 데이터의 타입을 선택합니다.
            {{form.type === 'edit' ? 'URL 주소방식으로 변경하고 적용하면 슬라이드 데이터가 없어집니다.' : ''}}
          </p>
        </header>
        <div class="field-basic__body">
          <FormRadio
            type="button"
            name="pref_slideType"
            id="prof_slideType"
            title="슬라이드 타입 선택"
            :items="[
              { key: 'array', label: '배열' },
              { key: 'url', label: `URL 주소` },
            ]"
            v-model="state.form.slidesType"
            @update:modelValue="onInputEvent"/>
        </div>
      </div>
      <div v-if="state.form.slidesType === 'url'" class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_slidesUrl">슬라이드 URL 주소</label>
          </h2>
          <p class="field-description">
            슬라이드 URL 주소를 입력해주세요.
          </p>
        </header>
        <div class="field-basic__body">
          <FormText
            type="url"
            name="pref_slidesUrl"
            id="pref_slidesUrl"
            placeholder="URL 주소를 입력하세요."
            :required="true"
            v-model="state.form.slidesUrl"
            @update:modelValue="onInputEvent"/>
        </div>
      </div>
    </div>
    <nav class="manage-group__bottom">
      <div>
        <ButtonBasic type="submit" color="key">
          {{props.form.type === 'add' ? '그룹추가' : '그룹수정'}}
        </ButtonBasic>
      </div>
    </nav>
  </fieldset>
</form>
</template>

<script lang="ts" setup>
import { reactive, onMounted, onUnmounted } from 'vue';
import { windowsStore } from '~/store/slideshow';
import { captureError } from '~/libs/error';
import { ButtonBasic } from '~/components/button';
import { FormText, FormRadio } from '~/components/form';
import PopupHeader from '../popup-header.vue';

interface PropsForm {
  type: string
  key: string
  name: string
  description: string
  slidesType?: string
  slidesUrl?: string
}

const props = defineProps<{
  form: PropsForm
}>();
const emits = defineEmits([ 'close', 'submit' ]);
const windows = windowsStore();
let state = reactive({
  form: props.form,
  error: {
    key: false,
  },
  slides: {
    type: props.form.slidesType || 'array', // url,array
    url: props.form.slidesUrl || '', // api url address
  },
  input: false,
});

function onUpdateKey(str: string): void
{
  onInputEvent();
  if (!str) state.error.key = true;
  state.error.key = !/^\w+$/.test(str);
}

function onSubmit(): void
{
  try
  {
    if (state.error.key)
    {
      throw new Error('error value / key');
    }
    emits('submit', state.form);
  }
  catch(e)
  {
    captureError(['/components/slideshow/screen/preference/data/manage/manage-group.vue', 'onSubmit()'], 'error', e.message);
    alert('처리에 문제가 생겼습니다.');
  }
}

function onInputEvent(): void
{
  if (state.input) return;
  state.input = true;
}

function onKeyup(e: KeyboardEvent): void
{
  if (e.code !== 'Escape') return;
  if (state.input && !confirm('입력한 내용이 있습니다. 이 창을 닫을까요?')) return;
  emits('close');
}

onMounted(() => {
  (<any>window).on('keyup.preference-data', onKeyup);
  windows.children.push('slidesGroup');
});
onUnmounted(() => {
  (<any>window).off('keyup.preference-data');
  let idx = windows.children.indexOf('slidesGroup');
  windows.children.splice(idx, 1);
});
</script>

<style src="../../preference.scss" lang="scss" scoped></style>
<style src="./manage-group.scss" lang="scss" scoped></style>
