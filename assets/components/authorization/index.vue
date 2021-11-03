<template>
<article class="authorization" @click="emits('close')">
  <div class="authorization__wrap" @click.stop="">
    <h1 class="authorization__title">슬라이드쇼 인증</h1>
    <form
      :action="computes.url"
      method="post"
      class="authorization__form">
      <div class="authorization__field">
        <label for="id">아이디</label>
        <label class="authorization__input">
          <input
            ref="slideshow_id"
            type="text"
            name="id"
            id="id"
            v-model="state.slideshowId"
            maxlength="24"
            placeholder="아이디를 입력해주세요."
            required>
        </label>
      </div>
      <div class="authorization__field">
        <label for="password">비밀번호</label>
        <label class="authorization__input">
          <input
            type="password"
            name="password"
            id="password"
            v-model="state.slideshowPassword"
            maxlength="30"
            placeholder="비밀번호를 입력해주세요."
            required>
        </label>
      </div>
      <nav class="authorization__nav">
        <Button type="submit" color="key">인증하기</Button>
        <Button @click="emits('close')">닫기</Button>
      </nav>
    </form>
  </div>
</article>
</template>

<script setup>
import { reactive, computed, onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import Button from '../button.vue';

const { Custom } = window;
const slideshow_id = ref();
const props = defineProps({
  visible: Boolean,
  mode: String,
});
const emits = defineEmits([ 'submit', 'close' ]);
let state = reactive({
  slideshowId: '',
  slideshowPassword: '',
});
let computes = reactive({
  url: computed(() => (`${Custom.path}${props.mode}/`)),
});

// TODO: 인증 작업하기
// TODO: 주소를 돌리는 방법에서 고민이 필요해서 댓글로 좀 적어뒀다.
// TODO: https://github.com/redgoose-dev/slideshow-service/issues/1#issuecomment-958534481
// TODO: 이 컴포넌트를 다용도로 사용하기 위하여 라우팅으로 이동하는 주소를 부모 영역에서 조절할 수 있도록 props를 이용하자.

// lifecycles
onMounted(() => {
  slideshow_id.value.focus();
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

.authorization {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  cursor: zoom-out;
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    padding: 0 50px;
    background: #fff;
    letter-spacing: -1px;
    cursor: auto;
  }
  &__title {
    font-size: 36px;
    font-weight: 800;
    line-height: 1.15;
    text-align: center;
    user-select: none;
  }
  &__form {
    margin: 40px 0 0;
    width: 100%;
    max-width: 360px;
  }
  &__field {
    &:nth-child(n+2) {
      margin-top: 30px;
    }
    > p {
      margin: 0;
      > label {
        font-size: 13px;
        letter-spacing: -.2px;
        color: var(--color-low-fill);
        line-height: 1.2;
        user-select: none;
      }
    }
  }
  &__input {
    position: relative;
    display: block;
    margin: 8px 0 0;
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      pointer-events: none;
      height: 1px;
      width: 100%;
    }
    &:before {
      background: #888;
    }
    &:after {
      background: var(--color-key);
      transform-origin: 0 0;
      transform: scaleX(0);
      transition: transform 240ms ease-out;
    }
    &:focus-within {
      &:after {
        transform: scaleX(1);
      }
    }
    input {
      position: relative;
      display: block;
      width: 100%;
      height: 44px;
      font-weight: 500;
      font-size: 18px;
      &::placeholder {
        color: #ccc;
      }
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        border: none;
        -webkit-text-fill-color: var(--color-key);
        -webkit-box-shadow: 0 0 0 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
      }
    }
  }
  &__nav {
    margin: 30px 0 0;
    button {
      &:nth-child(n+2) {
        margin-top: 10px;
      }
    }
  }
  @include mixins.responsive(tablet) {
    background: rgba(255,255,255,.75);
    @include mixins.background-blur(16px);
    display: flex;
    align-items: center;
    justify-content: center;
    &__wrap {
      height: auto;
      width: 100%;
      max-width: 400px;
      padding: 70px 50px 60px;
      border-radius: 8px;
      box-shadow: 0 2px 20px 0 rgba(0,0,0,.25), inset 0 0 0 1px rgba(0,0,0,.1);
    }
  }
  @include mixins.dark-mode() {
    &__wrap {
      background: var(--color-bg);
    }
    &__input {
      &:before {
        background: #888;
      }
      input {
        &::placeholder {
          color: #444;
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
