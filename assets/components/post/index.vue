<template>
<article class="slideshow-post" @click="onClose">
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
          <label for="title" class="required">제목</label>
        </header>
        <label class="slideshow-post__input">
          <input
            ref="slideshow_title"
            type="text"
            name="title"
            id="title"
            v-model="state.title"
            minlength="4"
            maxlength="50"
            placeholder="제목을 입력하세요."
            :required="true">
        </label>
      </div>
      <div class="slideshow-post__field">
        <header>
          <label for="description" class="required">설명</label>
        </header>
        <label class="slideshow-post__input">
          <input
            type="text"
            name="description"
            id="description"
            v-model="state.description"
            maxlength="120"
            placeholder="설명을 입력하세요."
            :required="true">
        </label>
      </div>
      <div class="slideshow-post__field">
        <header>
          <label for="thumbnail">썸네일 이미지 주소</label>
        </header>
        <label class="slideshow-post__input">
          <input
            ref="slideshow_thumbnail"
            type="text"
            name="thumbnail"
            id="thumbnail"
            v-model="state.thumbnail"
            maxlength="255"
            placeholder="이미지 주소를 입력하세요.">
        </label>
        <p class="slideshow-post__help">
          서비스 목록에서 사용하는 이미지 URL 주소를 입력합니다.
        </p>
      </div>
      <div class="slideshow-post__columns">
        <div class="slideshow-post__field">
          <header>
            <label for="id" :class="[ computes.createMode ? 'required' : '' ]">
              아이디
            </label>
          </header>
          <label class="slideshow-post__input">
            <input
              ref="slideshow_id"
              type="text"
              name="id"
              id="id"
              v-model="state.id"
              minlength="4"
              maxlength="24"
              placeholder="슬라이드쇼 아이디를 입력하세요."
              :readonly="computes.manageMode"
              :required="computes.createMode">
          </label>
          <p class="slideshow-post__help">
            인증하는데 사용합니다.
          </p>
        </div>
        <div class="slideshow-post__field">
          <header>
            <label for="password" :class="[ computes.createMode ? 'required' : '' ]">
              비밀번호
            </label>
          </header>
          <label class="slideshow-post__input">
            <input
              ref="slideshow_password"
              type="password"
              name="password"
              id="password"
              v-model="state.password"
              minlength="4"
              maxlength="30"
              placeholder="비밀번호를 입력하세요."
              :required="computes.createMode">
          </label>
          <p v-if="computes.manageMode" class="slideshow-post__help">
            새로운 비밀번호로 변경하려면 입력하세요.
          </p>
        </div>
      </div>
      <div v-if="computes.manageMode" class="slideshow-post__field">
        <header>
          <label for="address">주소</label>
        </header>
        <label class="slideshow-post__input">
          <input
            type="text"
            name="address"
            id="address"
            v-model="state.address"
            maxlength="255"
            :readonly="true">
        </label>
      </div>
      <nav class="slideshow-post__nav">
        <Button
          type="submit"
          :disabled="state.processing"
          color="key">
          {{state.processing ? '처리중..' : computes.buttonSubmit}}
        </Button>
        <Button @click="onClose">닫기</Button>
      </nav>
    </form>
  </div>
</article>
</template>

<script setup>
import { reactive, computed, onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import Button from '../button.vue';
import { post } from '../../libs/fetch';
import { validateUrl } from '../../libs/string';

const slideshow_title = ref();
const slideshow_password = ref();
const slideshow_thumbnail = ref();
const props = defineProps({
  mode: String,
  slideshow: Object,
  form: Object,
});
const emits = defineEmits([ 'close' ]);
let state = reactive({
  processing: false,
  key: props.form?.key,
  title: props.form?.title,
  description: props.form?.description,
  id: props.form?.id,
  password: props.form?.password,
  thumbnail: props.form?.thumbnail,
  address: props.form?.address,
});
let computes = reactive({
  title: computed(() => {
    switch (props.mode)
    {
      case 'create':
        return '슬라이드쇼 만들기';
      case 'manage':
        return '슬라이드쇼 수정하기';
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
  manageMode: computed(() => (props.mode === 'manage')),
  createMode: computed(() => (props.mode === 'create')),
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
    let url;
    let data = {
      title: state.title,
      description: state.description,
      slideshow: encodeURIComponent(JSON.stringify(props.slideshow)),
      id: state.id,
      password: state.password,
      thumbnail: state.thumbnail,
    };

    // check thumbnail address
    if (data.thumbnail && !validateUrl(data.thumbnail))
    {
      slideshow_thumbnail.value.focus();
      throw new Error('URL 주소가 잘못되었습니다.');
    }

    // check password
    if (data.password && data.password.length < 4)
    {
      slideshow_password.value.focus();
      throw new Error('비밀번호를 4자이상 입력해주세요.');
    }

    // make url
    switch (props.mode)
    {
      case 'manage':
        url = `/manage/${state.key}/`;
        break;
      case 'create':
      default:
        url = '/create/';
        break;
    }

    // request service
    let res;
    try
    {
      res = await post(url, data);
      if (!res.success) throw new Error(res.message);
    }
    catch(e)
    {
      throw new Error('처리하는데 오류가 발생했습니다.');
    }

    // after action
    switch (props.mode)
    {
      case 'manage':
        state.processing = false;
        onClose();
        alert('슬라이드쇼 업데이트를 완료했습니다.');
        break;
      case 'create':
      default:
        location.href = `${window.Custom.path}watch/${res.data.address}/`;
        break;
    }
  }
  catch (e)
  {
    alert(e.message);
    state.processing = false;
  }
}

function onClose()
{
  emits('close', {
    title: state.title,
    description: state.description,
    thumbnail: state.thumbnail,
    id: state.id,
    password: state.password,
  });
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
  & {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 5;
    background: var(--color-bg);
    overflow: auto;
    padding: 0;
  }
  &__wrap {
    min-height: 100%;
    max-height: 80vh;
    padding: 40px 40px;
    overflow: auto;
    @include mixins.custom-scroll-style();
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
    margin: 8px 0 0;
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
      &:read-only {
        color: var(--color-shape-button);
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
  &__help {
    margin: 4px 0 0;
    font-size: 12px;
    color: var(--color-low-fill);
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
        &:read-only {
          color: var(--color-low-fill);
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
