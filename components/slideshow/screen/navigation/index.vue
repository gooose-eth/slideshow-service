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
      @click="route('open-groups')">
      <Icon icon-name="folder"/>
    </button>
  </div>
  <div v-if="data.existSlide" class="navigation__item">
    <button
      type="button"
      title="슬라이드 목록"
      @click="route('open-thumbnail')">
      <Icon icon-name="grid"/>
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
    <div :class="[ 'navigation-context', activeMenu && 'navigation-context--on' ]">
      <ul>
        <li>
          <button type="button" @click="route('open-preference')">
            환경설정
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
        <li v-if="current.editMode">
          <button type="button" @click="onClickContextItem('preview')">
            미리보기
          </button>
        </li>
        <li v-if="!!data.field.address">
          <button
            type="button"
            @click="onClickContextItem('share')">
            주소 복사하기
          </button>
        </li>
        <li v-if="current.watchMode">
          <button type="button" @click="onClickContextItem('edit')">
            수정하기
          </button>
        </li>
        <li v-if="!!data.field.token">
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
            슬라이드쇼로 바로가기
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
      @click="route('open-save')">
      <Icon icon-name="save"/>
    </button>
  </div>
</nav>
</template>

<script lang="ts" setup>
import { serviceStore } from '~/store/service';
import { preferenceStore, currentStore, dataStore, windowsStore } from '~/store/slideshow';
import { fullscreen, copyToClipboard } from '~/libs/util';
import { captureError } from '~/libs/error';
import Icon from '~/components/icon/index.vue';

const router = useRouter();
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
  const sw: boolean = !current.autoplay;
  current.autoplay = sw;
  current.update('autoplay', sw);
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
    case 'fullscreen':
      fullscreen(!activeFullscreen.value);
      activeFullscreen.value = !activeFullscreen.value;
      break;
    case 'slideshowService':
      route(!!history.state.back ? 'slideshowService' : 'slideshowServiceNewWindow');
      break;
    case 'preview':
      route(key);
      break;
    case 'share':
      let url = `${service.url.replace(/\/$/, '')}/watch/${data.field.address}`;
      copyToClipboard(url).then(() => alert('주소가 복사되었습니다.'));
      break;
    case 'logout':
      logout().then();
      break;
    case 'edit':
      location.href = `/edit/${data.field.address}`;
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
      router.push('/').then();
      break;
    case 'slideshowServiceNewWindow':
      window.open('/');
      break;
    case 'preview':
      window.open(`/watch/${data.field.address}`);
      break;
    case 'open-thumbnail':
      switchActiveMenu(false);
      windows.thumbnail = true;
      break;
    case 'open-groups':
      switchActiveMenu(false);
      windows.group = true;
      break;
    case 'open-preference':
      switchActiveMenu(false);
      windows.preference = true;
      break;
    case 'open-save':
      switchActiveMenu(false);
      windows.save = true;
      break;
    case 'service':
      if (!confirm('슬라이드쇼로 돌아갈까요?')) return;
      router.push('/').then();
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
  if (!confirm('정말로 로그아웃 할까요?')) return;
  const { success, message } = await $fetch(`/api/slideshow/logout`, {
    method: 'post',
    responseType: 'json',
    headers: { 'Authorization': `bearer ${data.field.token}` },
    body: {
      address: data.field.address,
      token: data.field.token,
    },
  });
  if (success)
  {
    location.href = '/';
  }
  else
  {
    captureError(['/components/slideshow/screen/navigation/index.vue', 'logout()'], 'error', message);
    alert('로그아웃하지 못했습니다.');
  }
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
