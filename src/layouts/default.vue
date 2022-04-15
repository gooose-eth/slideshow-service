<template>
<div class="viewport">
  <header class="header">
    <h1 class="header__logo">
      <router-link to="/" :title="service.title">
        <picture>
          <source srcset="../assets/images/img-logo.webp 1x, ../assets/images/img-logo@2x.webp 2x" type="image/webp">
          <source srcset="../assets/images/img-logo.png 1x, ../assets/images/img-logo@2x.png 2x" type="image/png">
          <img src="../assets/images/img-logo.png" draggable="false" :alt="service.title">
        </picture>
      </router-link>
    </h1>
    <nav class="header__nav">
      <ul>
        <li>
          <router-link to="/" title="Index">
            목록
          </router-link>
        </li>
        <li>
          <a href="/create" target="_blank" title="Create slideshow">
            만들기
          </a>
        </li>
        <li>
          <a href="#" title="Manage slideshow" @click.prevent="onClickManage">
            관리하기
          </a>
        </li>
        <li>
          <router-link to="/about" title="About slideshow service">
            정보
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <router-view/>
  </div>
  <footer class="footer">
    <p class="footer__copyright">Copyright {{year}} redgoose. All right reserved.</p>
  </footer>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { serviceStore } from '../store/env';

const service = serviceStore();
const year = ref((new Date()).getFullYear());

function onClickManage(e)
{
  e.preventDefault();
  console.log('onClickManage()');
}

onMounted(() => {
  // console.log('onMounted()');
});
onUnmounted(() => {
  // console.log('onUnmounted()');
});
</script>

<style src="./default.scss" lang="scss" scoped></style>
