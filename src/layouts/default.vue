<template>
<div class="layout">
  <header class="header">
    <h1 class="header__logo">
      <router-link to="/">
        <Symbol/>
      </router-link>
    </h1>
    <nav class="header__nav">
      <ul>
        <li>
          <router-link to="/" title="슬라이드 목록">슬라이드</router-link>
        </li>
        <li>
          <router-link to="/about/" title="슬라이드쇼 소개">소개</router-link>
        </li>
        <li v-if="admin.isAuth">
          <router-link to="/manage/" title="관리">관리</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <slot/>
  </div>
  <footer class="footer">
    <p class="footer__copyright">
      Copyright {{year}} redgoose. All right reserved.
    </p>
  </footer>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { adminStore } from '../store/service.js'
import Symbol from '../components/layout/symbol.vue'

const admin = adminStore()
const year = ref((new Date()).getFullYear())
</script>

<style src="./default.scss" lang="scss" scoped></style>
