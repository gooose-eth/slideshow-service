<template>
<article class="post">
  <header class="post__header">
    <h1>{{headerTitle}}</h1>
  </header>
  <form class="post__body" @submit.prevent="onSubmit">
    <fieldset>
      <legend>슬라이드쇼 정보 입력 폼</legend>
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
            :disabled="true"/>
        </div>
      </div>
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
      <div class="field-switch">
        <div class="field-switch__body">
          <p class="label field__label">
            <label for="public">슬라이드쇼 공개하기</label>
          </p>
          <p class="help field__help">
            이 슬라이드를 공개합니다.
          </p>
        </div>
        <FormSwitch v-model="fields.public" name="public" id="public"/>
      </div>
      <div v-if="current.createMode" class="field-switch">
        <div class="field-switch__body button" @click="agreeWindow = true">
          <p class="label field__label">
            <label>약관 동의하기</label>
          </p>
          <p class="help field__help">
            슬라이드쇼 약관 내용을 보려면 클릭하세요.
          </p>
        </div>
        <FormSwitch
          ref="$agree"
          v-model="fields.agree"
          name="agree"
          id="agree"
          :required="true"/>
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
  <transition name="modal-fade">
    <ModalWrap
      v-if="agreeWindow"
      :full-screen="false"
      @close="agreeWindow = false">
      <ModalBody>
        <Agree @close="agreeWindow = false"/>
      </ModalBody>
    </ModalWrap>
  </transition>
</article>
</template>

<script lang="ts" setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { currentStore, windowsStore, preferenceStore, dataStore } from '~/store/slideshow';
import { newLink } from '~/libs/util';
import { captureError } from '~/libs/error';
import { ButtonBasic } from '~/components/button';
import { FormText, FormSwitch } from '~/components/form';
import { ModalWrap, ModalBody } from '~/components/modal';
import Agree from '~/components/agree/index.vue';

const $title = ref();
const $thumbnail = ref();
const $agree = ref();
const emits = defineEmits([ 'close' ]);
const router = useRouter();
const current = currentStore();
const preference = preferenceStore();
const data = dataStore();
const windows = windowsStore();
const fields = reactive({
  title: data.field.title || '',
  description: data.field.description || '',
  password: '',
  thumbnail: data.field.thumbnail || '',
  address: data.field.address || '',
  public: data.field.public,
  agree: false,
});
const processing = ref(false);
const headerTitle = computed(() => {
  switch (current.mode)
  {
    case 'create':
      return '슬라이드쇼 만들기';
    case 'edit':
      return '슬라이드쇼 수정하기';
    default:
      return '슬라이드쇼';
  }
});
const agreeWindow = ref(false);

async function onSubmit(_evt): Promise<void>
{
  try
  {
    processing.value = true;
    let params: any = {
      mode: 'submit',
      title: fields.title,
      description: fields.description,
      thumbnail: fields.thumbnail,
      password: fields.password,
      public: fields.public ? 1 : 0,
      slideshow: {
        group: current.tree,
        preference: preference.pure,
        tree: data.pureGroups,
      },
    };
    if (current.editMode) params.address = data.field.address;
    if (current.createMode && !fields.agree)
    {
      alert('약관 동의해주세요!');
      $agree.value.focus();
      processing.value = false;
      return;
    }
    if (!!fields.thumbnail)
    {
      try
      {
        let res: any = await $fetch(fields.thumbnail);
        if (!/^image/.test(res.type)) throw new Error('error');
      }
      catch (e)
      {
        alert('썸네일 이미지 주소가 잘못되었습니다. 올바른 주소를 입력해주세요.');
        $thumbnail.value.focus();
        processing.value = false;
        return;
      }
    }
    let { success, message, address } = await $fetch(`/api/slideshow/${current.mode}`, {
      method: 'post',
      responseType: 'json',
      headers: { 'Authorization': `bearer ${data.field.token}` },
      body: params,
    });
    if (!success) throw new Error(message);
    processing.value = false;
    switch (current.mode)
    {
      case 'create':
        alert('슬라이드쇼를 만들었습니다.');
        location.href = `/watch/${address}`;
        break;
      case 'edit':
        alert('슬라이드쇼를 수정했습니다.');
        location.reload();
        break;
    }
    emits('close');
  }
  catch(e)
  {
    captureError(['/components/slideshow/screen/save/index.vue', 'onSubmit()'], 'error', e.message);
    alert(`슬라이드쇼 ${current.label} 실패했습니다.`);
    processing.value = false;
  }
}

function onClickOpenThumbnailImage(): void
{
  newLink(fields.thumbnail);
}

onMounted(() => {
  $title.value.focus();
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
