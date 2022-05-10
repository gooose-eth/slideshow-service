<template>
<main class="viewport">
  <Html>
    <Head>
      <Title>슬라이드쇼 서비스</Title>
    </Head>
  </Html>
  <header class="header">
    <h1 class="header__logo">
      <nuxt-link to="/">
        <picture>
          <source srcset="/images/layout/img-logo.webp 1x, /images/layout/img-logo@2x.webp 2x" type="image/webp">
          <source srcset="/images/layout/img-logo.png 1x, /images/layout/img-logo@2x.png 2x" type="image/png">
          <img src="/images/layout/img-logo.png" alt="service title">
        </picture>
      </nuxt-link>
    </h1>
    <nav class="header__nav">
      <ul>
        <li>
          <nuxt-link to="/create/" title="만들기">
            만들기
          </nuxt-link>
        </li>
        <li>
          <button type="button" title="관리하기" @click="onClickManage">
            관리하기
          </button>
        </li>
        <li>
          <nuxt-link to="/about/" title="슬라이드쇼 서비스">
            정보
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <slot/>
  </div>
  <footer class="footer">
    <p class="footer__copyright">Copyright {{year}} redgoose. All right reserved.</p>
  </footer>
</main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const year = ref((new Date()).getFullYear());

function onClickManage(): void
{
  console.log('call onClickManage()');
}
</script>

<style src="./default.scss" lang="scss" scoped></style>
