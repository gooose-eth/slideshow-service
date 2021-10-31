<template>
<article class="slideshow-post" @click="emits('close')">
  <div class="slideshow-post__wrap" @click.stop="">
    <header class="slideshow-post__header">
      <h1>{{computes.title}}</h1>
    </header>
    <form
      method="post"
      class="slideshow-post__form"
      @submit.prevent="onSubmit">
      <div class="slideshow-post__field">
        <header>
          <label for="title">제목</label>
        </header>
        <label class="slideshow-post__input">
          <input
            ref="slideshow_title"
            type="text"
            name="title"
            id="title"
            v-model="state.title"
            maxlength="50"
            placeholder="제목을 입력하세요."
            required>
        </label>
      </div>
      <div class="slideshow-post__field">
        <header>
          <label for="description">설명</label>
        </header>
        <label class="slideshow-post__input">
          <input
            type="text"
            name="description"
            id="description"
            v-model="state.description"
            maxlength="120"
            placeholder="설명을 입력하세요."
            required>
        </label>
      </div>
      <div class="slideshow-post__field">
        <header>
          <label for="thumbnail">썸네일 이미지 주소</label>
        </header>
        <label class="slideshow-post__input">
          <input
            type="text"
            name="thumbnail"
            id="thumbnail"
            v-model="state.thumbnail"
            maxlength="255"
            placeholder="이미지 주소를 입력하세요.">
        </label>
      </div>
      <div class="slideshow-post__columns">
        <div class="slideshow-post__field">
          <header>
            <label for="id">아이디</label>
          </header>
          <label class="slideshow-post__input">
            <input
              type="text"
              name="id"
              id="id"
              v-model="state.id"
              maxlength="24"
              placeholder="슬라이드쇼 아이디를 입력하세요."
              required>
          </label>
        </div>
        <div class="slideshow-post__field">
          <header>
            <label for="password">비밀번호</label>
          </header>
          <label class="slideshow-post__input">
            <input
              type="password"
              name="password"
              id="password"
              v-model="state.password"
              maxlength="30"
              placeholder="비밀번호를 입력하세요."
              required>
          </label>
        </div>
      </div>
      <nav class="slideshow-post__nav">
        <Button
          type="submit"
          :disabled="state.processing"
          color="key">
          {{state.processing ? '처리중..' : computes.buttonSubmit}}
        </Button>
        <Button @click="emits('close')">닫기</Button>
      </nav>
    </form>
  </div>
</article>
</template>

<script setup>
import { reactive, computed, onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import Button from '../button.vue';
import { post } from '../../libs/fetch';

const slideshow_title = ref();
const props = defineProps({
  mode: String,
  slideshow: Object,
});
const emits = defineEmits([ 'close' ]);
let state = reactive({
  processing: false,
  title: '',
  description: '',
  id: '',
  password: '',
  thumbnail: '',
});
let computes = reactive({
  title: computed(() => {
    switch (props.mode)
    {
      case 'create':
        return '슬라이드쇼 만들기';
      case 'manage':
        return '슬라이드쇼 관리';
      default:
        return '슬라이드쇼 서비스';
    }
  }),
  buttonSubmit: computed(() => {
    switch (props.mode)
    {
      case 'create':
        return '만들기';
      case 'manage':
        return '수정하기';
      default:
        return '적용하기';
    }
  }),
});

/**
 * on submit
 *
 * @return {Promise}
 */
async function onSubmit()
{
  try
  {
    state.processing = true;
    let data = {
      title: state.title,
      description: state.description,
      slideshow: encodeURIComponent(JSON.stringify(props.slideshow)),
      id: state.id,
      password: state.password,
      thumbnail: state.thumbnail,
    };
    const res = await post(`/${props.mode}/`, data);
    if (!res.success) throw new Error(res.message);
    state.processing = false;
    location.href = `${window.Custom.path}manage/${res.data.address}/`;
  }
  catch (e)
  {
    // TODO: 오류처리
    console.log('ERROR: ', e);
    state.processing = false;
  }
}

// lifecycles
onMounted(() => {
  slideshow_title.value.focus();
});
onBeforeMount(() => {
  document.querySelector('html').classList.add('mode-modal');
});
onUnmounted(() => {
  document.querySelector('html').classList.remove('mode-modal');
});
</script>

<style lang="scss">
@use '../../scss/mixins';
.slideshow-post {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  background: var(--color-bg);
  overflow: auto;
  padding: 0;
  &__wrap {
    min-height: 100%;
    padding: 40px 40px;
  }
  &__header {
    h1 {
      font-size: 28px;
      font-weight: 800;
      line-height: 1.15;
      text-align: center;
      user-select: none;
      letter-spacing: -.5px;
    }
  }
  &__form {
    margin: 30px 0 0;
    padding: 0;
  }
  &__field {
    &:nth-child(n+2) {
      margin-top: 24px;
    }
    header {
      > label {
        font-size: 14px;
        letter-spacing: -.2px;
        line-height: 1.2;
        font-weight: 600;
      }
    }
  }
  &__input {
    display: block;
    margin: 6px 0 0;
    input {
      position: relative;
      display: block;
      width: 100%;
      height: 44px;
      padding: 0 16px;
      font-size: 16px;
      box-sizing: border-box;
      border-radius: 2px;
      border: 1px solid var(--color-shape-button);
      background: var(--color-bg);
      box-shadow: inset 0 2px 4px rgba(0,0,0,.1);
      transition: box-shadow 200ms ease-out;
      &::placeholder {
        color: #ccc;
      }
      &:focus {
        border-color: var(--color-key);
        box-shadow: inset 0 2px 4px rgba(0,0,0,.1), 0 0 0 4px rgba(12,184,91,.2) !important;
      }
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        border: 1px solid var(--color-shape-button);
        -webkit-text-fill-color: var(--color-key);
        -webkit-box-shadow: 0 0 0 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
      }
    }
  }
  &__columns {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
  &__nav {
    margin: 40px 0 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  @include mixins.responsive(tablet) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,.75);
    @include mixins.background-blur(16px);
    cursor: zoom-out;
    &__wrap {
      width: 680px;
      background: #fff;
      cursor: auto;
      min-height: auto;
      padding: 70px 80px 90px;
      border-radius: 8px;
      box-shadow: 0 2px 20px 0 rgba(0,0,0,.25), inset 0 0 0 1px rgba(0,0,0,.1);
    }
    &__header {
      padding: 0;
      h1 {
        font-size: 36px;
      }
    }
    &__field {
      header {
        > label {
          font-size: 16px;
        }
      }
    }
    &__columns {
      flex-direction: row;
      gap: 16px;
      > * {
        flex: 1;
        &:nth-child(n+2) {
          margin-top: 0;
        }
      }
    }
    &__nav {
      flex-direction: row;
      gap: 16px;
      button {
        &:nth-child(1) {
          order: 2;
        }
        &:nth-child(2) {
          order: 1;
        }
      }
    }
  }
  @include mixins.dark-mode() {
    &__wrap {
      background: var(--color-bg);
    }
    &__input {
      input {
        background: #111;
        border-color: #383838;
        &::placeholder {
          color: #555;
        }
        &:focus {
          border-color: var(--color-key);
        }
      }
    }
    @include mixins.responsive(tablet) {
      background: rgba(0,0,0,.75);
      &__wrap {
        box-shadow: 0 2px 30px 0 rgba(0,0,0,.5), inset 0 0 0 1px rgba(255,255,255,.05);
      }
    }
  }
}
</style>
