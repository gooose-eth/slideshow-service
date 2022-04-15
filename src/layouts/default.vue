<template>
<div class="viewport">
  <header class="header">
    <h1 class="header__logo">
      <router-link to="/" title="TODO">
        <picture>
          <source srcset="../assets/images/img-logo.webp 1x, ../assets/images/img-logo@2x.webp 2x" type="image/webp">
          <source srcset="../assets/images/img-logo.png 1x, ../assets/images/img-logo@2x.png 2x" type="image/png">
          <img src="../assets/images/img-logo.png" draggable="false" alt="TODO">
        </picture>
      </router-link>
    </h1>
    <nav class="header__nav">
      <ul>
        <li>
          <router-link to="/create" title="Create slideshow">
            Create
          </router-link>
        </li>
        <li>
          <a href="#" title="Manage slideshow" @click.prevent="onClickManage">
            Manage
          </a>
        </li>
        <li>
          <router-link to="/about" title="About slideshow service">
            Information
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
