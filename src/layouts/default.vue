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
          <router-link to="/create/" title="만들기">
            만들기
          </router-link>
        </li>
        <li>
          <router-link to="/about/" title="슬라이드쇼 소개">
            소개
          </router-link>
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
</div>
</template>

<script setup>
import { ref } from 'vue'
import Symbol from '../components/layout/symbol.vue'

const year = ref((new Date()).getFullYear())
</script>
