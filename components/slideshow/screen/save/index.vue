<template>
<article class="post">
  <header class="post__header">
    <h1>{{headerTitle}}</h1>
  </header>
  <form class="post__body" @submit.prevent="onSubmit">
    <fieldset>
      <legend>슬라이드쇼 정보 입력 폼</legend>
      <div class="field">
        <p class="label field__label">
          <label for="title" class="required">제목</label>
        </p>
        <div class="field__body">
          <FormText
            ref="$title"
            v-model="fields.title"
            type="text"
            name="title"
            id="title"
            :minlength="4"
            :maxlength="50"
            placeholder="제목을 입력하세요."
            :required="true"/>
        </div>
      </div>
      <div class="field">
        <p class="label field__label">
          <label for="description" class="required">설명</label>
        </p>
        <div class="field__body">
          <FormText
            ref="$description"
            v-model="fields.description"
            type="text"
            name="description"
            id="description"
            :maxlength="120"
            placeholder="설명을 입력하세요."
            :required="true"/>
        </div>
      </div>
      <div class="field">
        <p class="label field__label">
          <label for="thumbnail">썸네일 이미지 주소</label>
        </p>
        <div class="field__body thumbnail">
          <FormText
            ref="$thumbnail"
            v-model="fields.thumbnail"
            type="url"
            name="thumbnail"
            id="thumbnail"
            :maxlength="255"
            placeholder="이미지 주소를 입력하세요."/>
          <ButtonBasic
            :disabled="fields.thumbnail.length <= 0"
            @click="onClickOpenThumbnailImage">
            이미지 열기
          </ButtonBasic>
        </div>
        <p class="help field__help">
          서비스 목록에서 사용하는 이미지 URL 주소를 입력합니다.
        </p>
      </div>
      <div class="field">
        <p class="label field__label">
          <label for="password" :class="[ current.createMode ? 'required' : '' ]">
            비밀번호
          </label>
        </p>
        <div class="field__body">
          <FormText
            ref="$password"
            v-model="fields.password"
            type="password"
            name="password"
            id="password"
            :minlength="4"
            :maxlength="30"
            placeholder="비밀번호를 입력하세요."
            :required="current.createMode"/>
        </div>
        <p v-if="current.editMode" class="help field__help">
          새로운 비밀번호로 변경하려면 입력하세요.
        </p>
      </div>
      <div v-if="current.editMode" class="field">
        <p class="label field__label">
          <label for="address">주소</label>
        </p>
        <div class="field__body">
          <FormText
            v-model="fields.address"
            type="text"
            name="address"
            id="address"
            :read-only="true"/>
        </div>
      </div>
      <div class="field-switch">
        <div class="field-switch__body">
          <p class="label field__label">
            <label for="public">슬라이드쇼 공개하기</label>
          </p>
          <p class="help field__help">
            이 슬라이드를 외부에 공유합니다.
          </p>
        </div>
        <FormSwitch v-model="fields.public" name="public" id="public"/>
      </div>
    </fieldset>
    <nav class="post__nav">
      <ButtonBasic @click="windows.save = false">닫기</ButtonBasic>
      <ButtonBasic
        type="submit"
        :disabled="processing"
        color="key">
        {{processing ? '처리중..' : current.label}}
      </ButtonBasic>
    </nav>
  </form>
</article>
</template>

<script lang="ts" setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { currentStore, windowsStore, preferenceStore, dataStore } from '~/store/slideshow';
import { ButtonBasic } from '~/components/button';
import { FormText, FormSwitch } from '~/components/form';

const $title = ref();
const current = currentStore();
const preference = preferenceStore();
const data = dataStore();
const windows = windowsStore();
const emits = defineEmits([ 'close' ]);
const fields = reactive({
  title: '',
  description: '',
  password: '',
  thumbnail: '',
  address: '',
  public: true,
});
const processing = ref(false);
const headerTitle = computed(() => {
  switch (current.mode)
  {
    case 'create':
      return '슬라이드쇼 만들기';
    case 'manage':
      return '슬라이드쇼 수정하기';
    default:
      return '슬라이드쇼 서비스';
  }
});

async function onSubmit(e: SubmitEvent): Promise<void>
{
  try
  {
    processing.value = true;
    let params = {
      title: fields.title,
      description: fields.description,
      password: fields.password,
      thumbnail: fields.thumbnail,
      public: fields.public ? 1 : 0,
      slideshow: {
        group: current.tree,
        preference: preference.pure,
        tree: data.pureGroups,
      },
    };
    let { success, message, address } = await $fetch('/api/slideshow/create', {
      method: 'post',
      responseType: 'json',
      body: params,
    });
    if (!success) throw new Error(message);
    // alert('슬라이드쇼를 만들었습니다.');
    // TODO: 만들어진 슬라이드쇼 데이터 주소를 받아와서 `/watch/{ADDRESS}/` 형식으로된 주소로 이동하기
    // location.href = `/watch/${address}/`;
  }
  catch(e)
  {
    if (process.dev) console.error(e.message);
    alert(`슬라이드쇼 ${current.label} 실패했습니다.`);
    processing.value = false;
  }
}

function onClickOpenThumbnailImage(): void
{
  console.log('onClickOpenThumbnailImage', fields.thumbnail);
}

onMounted(() => {
  $title.value.focus();
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
