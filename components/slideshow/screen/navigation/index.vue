<template>
<nav class="navigation" @touchstart="onTouchStart" @click.stop="">
  <div v-if="visibleAutoplay" class="navigation__item">
    <button
      type="button"
      title="자동재생"
      :class="current.autoplay ? 'active' : ''"
      @click="onClickAutoplay">
      <Icon icon-name="playCircle"/>
    </button>
  </div>
  <div v-if="visibleGroup" class="navigation__item">
    <button
      type="button"
      title="그룹"
      @click="windows.group = true">
      <Icon icon-name="folder" class="folder"/>
    </button>
  </div>
  <div v-if="current.mode !== 'watch'" class="navigation__item">
    <button
      type="button"
      title="환경설정"
      @click="windows.preference = true">
      <Icon icon-name="settings" class="folder"/>
    </button>
  </div>
  <div v-if="current.editMode" class="navigation__item">
    <button
      type="button"
      title="미리보기"
      @click="route('preview')">
      <Icon icon-name="cast" class="folder"/>
    </button>
  </div>
  <div v-if="preference.general.visibleHudContents.menu" class="navigation__item">
    <button
      type="button"
      title="메뉴"
      :class="activeMenu ? 'on' : ''"
      @click="onClickMenuButton">
      <Icon icon-name="menu"/>
    </button>
    <div :class="[
      'navigation-context',
      activeMenu && 'navigation-context--on',
    ]">
      <ul>
        <li v-if="current.watchMode">
          <button type="button" @click="windows.preference = true">
            환경설정
          </button>
        </li>
        <li v-if="data.existSlide">
          <button
            type="button"
            @click="onClickContextItem('thumbnail')">
            썸네일 보기
          </button>
        </li>
        <li>
          <button
            type="button"
            :class="[ activeFullscreen && 'on' ]"
            @click="onClickContextItem('fullscreen')">
            전체화면
          </button>
        </li>
        <li v-if="!!data.field.address">
          <button
            type="button"
            @click="onClickContextItem('share')">
            공유하기
          </button>
        </li>
        <li v-if="current.editMode">
          <button
            type="button"
            class="danger"
            @click="onClickContextItem('delete')">
            삭제하기
          </button>
        </li>
        <li v-if="current.watchMode">
          <button
            type="button"
            class="danger"
            @click="onClickContextItem('logout')">
            로그아웃
          </button>
        </li>
        <li>
          <button
            type="button"
            class="active"
            @click="onClickContextItem('slideshowService')">
            슬라이드쇼 서비스
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div v-if="!current.watchMode" class="navigation__item">
    <button
      type="button"
      :title="`슬라이드쇼 ${current.label}`"
      class="active"
      @click="windows.save = true">
      <Icon icon-name="save"/>
    </button>
  </div>
</nav>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { serviceStore } from '~/store/service';
import { preferenceStore, currentStore, dataStore, windowsStore } from '~/store/slideshow';
import { fullscreen, copyToClipboard } from '~/libs/util';
import Icon from '~/components/icon/index.vue';

const emits = defineEmits([ 'trigger' ]);
const service = serviceStore();
const preference = preferenceStore();
const current = currentStore();
const data = dataStore();
const windows = windowsStore();
const activeMenu = ref(false);
const activeFullscreen = ref(false);
const visibleAutoplay = computed(() => {
  if (!preference.slides.autoplay) return false;
  if (!preference.general.visibleHudContents.autoplay) return false;
  return data.existSlide;
});
const visibleGroup = computed(() => {
  if (!preference.general.visibleHudContents.group) return false;
  return Object.keys(data.groups)?.length > 0;
});

// private methods
function onClickAutoplay()
{
  if (!data.existSlide) return;
  current.autoplay = !current.autoplay;
}
function onClickMenuButton(e)
{
  if (e) e.stopPropagation();
  if (activeMenu.value)
  {
    switchActiveMenu(false);
  }
  else
  {
    (<any>window).on('click.navigationMenu', () => switchActiveMenu(false));
    switchActiveMenu(true);
  }
}
function switchActiveMenu(sw)
{
  activeMenu.value = sw;
  if (!sw) (<any>window).off('click.navigationMenu');
}
function onClickContextItem(key: string): void
{
  switchActiveMenu(false);
  switch (key)
  {
    case 'thumbnail':
      windows.thumbnail = true;
      break;
    case 'fullscreen':
      fullscreen(!activeFullscreen.value);
      activeFullscreen.value = !activeFullscreen.value;
      break;
    case 'slideshowService':
      route(current.watchMode ? 'slideshowServiceNewWindow' : 'slideshowService');
      break;
    case 'preview':
      route(key);
      break;
    case 'share':
      let url = `${service.url.replace(/\/$/, '')}/watch/${data.field.address}/`;
      copyToClipboard(url).then(() => alert('주소가 복사되었습니다.'));
      break;
    case 'delete':
      // TODO: 슬라이드쇼 데이터 삭제하기
      console.log('delete slideshow');
      // local.main.deleteSlideshow();
      break;
    case 'logout':
      logout().then();
      break;
  }
}
function onTouchStart(e)
{
  if (e.touches && e.touches.length > 1) e.preventDefault();
}

function route(key: string): void
{
  switch(key)
  {
    case 'slideshowService':
      location.href = '/';
      break;
    case 'slideshowServiceNewWindow':
      window.open('/');
      break;
    case 'preview':
      window.open(`/watch/${data.field.address}/`);
      break;
  }
}

// public methods
function blur(): void
{
  switchActiveMenu(false);
}

async function logout(): Promise<void>
{
  if (!confirm('정말로 로그인할까요?')) return;
  // TODO: 로그아웃
  const { data } = await useAsyncData('logout', () => $fetch('/api/logout', {
    method: 'post',
  }));
  console.log('logout()', data);
  // await post(`${Custom.path}logout/${form.address}/`, {});
  // location.reload();
}

// lifecycles
onMounted(() => {
  (<any>document).on('fullscreenchange.slideshow', () => {
    activeFullscreen.value = !!document.fullscreenElement;
  });
});
onUnmounted(() => {
  (<any>document).off('fullscreenchange.slideshow');
});

// set expose
defineExpose({
  blur,
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
