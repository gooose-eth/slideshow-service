<template>
<article
  :class="[ 'authorization', `authorization--${props.mode}` ]"
  @click="emits('close')">
  <div class="authorization__wrap" @click.stop="">
    <h1 class="authorization__title">{{computes.label.title}}</h1>
    <p class="authorization__description">
      {{computes.label.description}}
    </p>
    <form
      :action="props.action"
      method="post"
      @submit="onSubmit"
      class="authorization__form">
      <div class="authorization__field">
        <label for="address">주소</label>
        <label class="authorization__input">
          <input
            ref="address"
            type="text"
            name="address"
            id="address"
            v-model="state.address"
            minlength="4"
            maxlength="24"
            placeholder="주소를 입력해주세요."
            required
            :disabled="props.address">
        </label>
      </div>
      <div class="authorization__field">
        <label for="password">비밀번호</label>
        <label class="authorization__input">
          <input
            type="password"
            name="password"
            id="password"
            v-model="state.password"
            minlength="4"
            maxlength="30"
            placeholder="비밀번호를 입력해주세요."
            required>
        </label>
      </div>
      <nav class="authorization__nav">
        <Button
          type="submit"
          :color="computes.submitClassName"
          :disabled="state.processing">
          {{state.processing ? '처리중..' : computes.label.submit}}
        </Button>
        <Button v-if="computes.showCloseButton" @click="emits('close')">닫기</Button>
      </nav>
    </form>
  </div>
</article>
</template>

<script setup>
import { reactive, computed, onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import Button from './button.vue';
import { post } from '../libs/fetch';
import { getFormData } from '../libs/object';

const { Custom } = window;
const form = getFormData(Custom.form);
const address = ref();
const password = ref();
const props = defineProps({
  visible: Boolean,
  action: String,
  address: String,
  type: String, // login,delete
  mode: { type: String, required: true }, // manage,delete
});
const emits = defineEmits([ 'submit', 'close' ]);
let state = reactive({
  address: props.address,
  password: '',
  processing: false,
});
let computes = reactive({
  label: computed(() => {
    switch(props.type)
    {
      case 'login':
      default:
        return {
          title: '슬라이드쇼 인증',
          description: '슬라이드쇼에 접근하려면 인증하세요.',
          submit: '인증하기',
        };
      case 'delete':
        return {
          title: '슬라이드쇼 삭제',
          description: '슬라이드쇼를 삭제하면 복구할 수 없습니다!',
          submit: '삭제하기',
        };
      case 'watch':
        return {
          title: '비공개 슬라이드쇼',
          description: '슬라이드쇼를 보려면 인증하세요.',
          submit: '인증하기',
        };
    }
  }),
  submitClassName: computed(() => {
    switch(props.type)
    {
      case 'login':
      default:
        return 'key';
      case 'delete':
        return 'danger';
    }
  }),
  showCloseButton: computed(() => {
    return (props.mode !== 'watch')
  }),
});

/**
 * on submit
 */
async function onSubmit(e)
{
  e.preventDefault();
  state.processing = true;
  switch (props.mode)
  {
    case 'delete':
      try
      {
        const res = await post(`${Custom.path}delete/${form.key}/`, {
          address: state.address,
          password: state.password,
        });
        if (!res.success) throw new Error(res.message);
        alert('슬라이스쇼를 삭제했습니다.');
        location.href = Custom.url;
      }
      catch(e)
      {
        alert('슬라이드쇼 삭제하지 못했습니다.');
        address.value.focus();
        state.processing = false;
      }
      break;
    default:
      try
      {
        const res = await post(`${Custom.path}auth/`, {
          address: state.address,
          password: state.password,
        });
        if (!res.success) throw new Error(res.message);
        emits('submit', e);
      }
      catch(e)
      {
        alert('인증에 실패했습니다.');
        address.value.focus();
        state.processing = false;
      }
      break;
  }
}

// lifecycles
onMounted(() => {
  address.value.focus();
});
onBeforeMount(() => {
  document.querySelector('html').classList.add('mode-modal');
});
onUnmounted(() => {
  document.querySelector('html').classList.remove('mode-modal');
});
</script>

<style lang="scss">
@use '../scss/mixins';
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
  &__description {
    margin: 12px 0 0;
    font-size: 13px;
    line-height: 1.25;
    color: var(--color-low-fill);
    user-select: none;
  }
  &__form {
    margin: 32px 0 0;
    width: 100%;
    max-width: 360px;
  }
  &__field {
    &:nth-child(n+2) {
      margin-top: 30px;
    }
    label[for] {
      user-select: none;
      font-size: 15px;
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
      &:disabled {
        color: var(--color-low-fill);
        cursor: not-allowed;
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
  &--watch {
    cursor: default;
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
