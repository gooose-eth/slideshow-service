<template>
<article class="error-screen">
  <div class="error-screen__wrap">
    <h2 class="error-screen__service">문제가 생겼어요!</h2>
    <h1 class="error-screen__title">{{code}}</h1>
    <p class="error-screen__message">
      {{message}}
    </p>
    <nav class="error-screen__nav">
      <a href="/">첫화면으로 이동하기</a>
    </nav>
  </div>
</article>
</template>

<script lang="ts" setup>
import { CODE, labels } from '~/libs/error';

const router = useRouter();
const error = useError();
const message = computed(() => {
  if (labels[CODE[error.value.message]]) return labels[error.value.message];
  else if (String(error.value.statusCode) === '404') return '페이지를 찾을 수 없습니다.';
  else return '알 수 없는 오류가 발생했습니다.';
});
const code = computed(() => {
  if (String(error.value.statusCode) === '404') return '404';
  switch (CODE[error.value.message])
  {
    case CODE['NO-SLIDESHOW']:
      return '404';
    default:
      return '500';
  }
});
</script>

<style lang="scss" scoped>
@use './assets/scss/mixin';
.error-screen {
  display: grid;
  place-content: center;
  height: 100vh;
  max-height: 100%;
  box-sizing: border-box;
  text-align: center;
  user-select: none;
  &__wrap {
    padding: 0 0 30px;
  }
  &__service {
    margin: 0;
    font-size: 13px;
    color: var(--color-weak);
  }
  &__title {
    margin: 12px 0 0;
    font-size: 120px;
    line-height: 1;
    font-family: var(--font-eng);
    font-weight: 600;
    letter-spacing: -2px;
    color: var(--color-danger);
  }
  &__message {
    margin: -2px 0 0;
    font-size: 16px;
    letter-spacing: -.5px;
    font-weight: 400;
    line-height: 1;
  }
  &__nav {
    margin: 42px 0 0;
    display: grid;
    place-content: center;
    button {
      --button-height: 44px;
    }
    a {
      font-weight: 600;
      font-size: 14px;
    }
  }
  @include mixin.responsive(tablet) {
    &__wrap {
      padding-bottom: 42px;
    }
    &__service {
      font-size: 20px;
    }
    &__title {
      margin-top: 16px;
      font-size: 240px;
    }
    &__message {
      margin-top: -8px;
      font-size: 28px;
    }
    &__nav {
      margin-top: 72px;
      a {
        font-size: 18px;
      }
    }
  }
}
</style>
