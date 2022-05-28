<template>
<article class="data-tree">
  <div class="tree-items">
    <section v-for="item in index" class="tree-item">
      <header class="tree-item__header">
        <nav class="tree-item__fold">
          <button
            type="button"
            title="접고 펼치기"
            :disabled="!item.fold"
            :class="[
              item.fold ? 'fold' : 'minus',
              (item.fold && state.fold[item.key]) && 'fold--on',
            ]"
            @click="onToggleFold(item.key)">
            <Icon :icon-name="item.fold ? 'arrowDown' : 'minus'"/>
          </button>
        </nav>
        <h2 class="tree-item__title">
          <strong>
            <b>{{item.key}}</b>
            {{item.name}}
            <em v-if="item.fold">{{item.slides.length}}</em>
          </strong>
          <span v-if="item.description">
          {{item.description}}
        </span>
        </h2>
        <nav class="tree-item__nav">
          <button
            v-if="item.fold"
            type="button"
            title="슬라이드 추가"
            class="add"
            @click="onAddSlide(item.key)">
            <Icon icon-name="plus"/>
          </button>
          <button
            type="button"
            title="그룹수정"
            class="edit"
            @click="onEditGroup(item.key)">
            <Icon icon-name="edit"/>
          </button>
          <button
            type="button"
            title="그룹삭제"
            class="remove"
            @click="onRemoveGroup(item.key)">
            <Icon icon-name="x"/>
          </button>
        </nav>
      </header>
      <Slides
        v-if="state.fold[item.key] && item.fold"
        :item-key="item.key"
        :items="item.slides"
        @change-order="o => onUpdateSlides(item.key, o)"
        @edit="n => onEditSlide(item.key, n)"
        @remove="n => onRemoveSlide(item.key, n)"/>
    </section>
  </div>
  <nav class="add-tree">
    <ButtonBasic title="그룹추가" color="key" @click="onAddGroup">
      그룹추가
    </ButtonBasic>
  </nav>
  <client-only>
    <teleport to="body">
      <transition name="modal-fade">
        <ModalWrap
          v-if="state.showManageGroup"
          class="modal-edit-group"
          @close="state.showManageGroup = false">
          <ModalBody>
            <ManageGroup
              :form="state.manageFormGroup"
              @submit="onSubmitGroup"
              @close="state.showManageGroup = false"/>
          </ModalBody>
        </ModalWrap>
      </transition>
      <transition name="modal-fade">
        <ModalWrap
          v-if="state.showManageSlide"
          @close="state.showManageSlide = false">
          <ModalBody>
            <ManageSlide
              :form="state.editFormSlide"
              @submit="onSubmitSlide"
              @close="state.showManageSlide = false"/>
          </ModalBody>
        </ModalWrap>
      </transition>
    </teleport>
  </client-only>
</article>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { pureObject } from '~/libs/object';
import { captureError } from '~/libs/error';
import Icon from '~/components/icon/index.vue';
import { ButtonBasic } from '~/components/button';
import { ModalWrap, ModalBody } from '~/components/modal';
import Slides from './slides.vue';
import ManageGroup from './manage-group.vue';
import ManageSlide from './manage-slide.vue';

const props = defineProps<{
  tree: object
}>();
const emits = defineEmits([ 'update', 'close' ]);
const state = reactive({
  fold: createFold(),
  showManageGroup: false,
  showManageSlide: false,
  manageFormGroup: undefined,
  editFormSlide: undefined,
});
const index = computed(() => {
  const keys = Object.keys(props.tree);
  return keys.map(key => ({
    ...props.tree[key],
    fold: Array.isArray(props.tree[key].slides),
    key,
  }));
});

function createFold(): object
{
  let obj = {};
  Object.keys(props.tree).forEach(key => {
    obj[key] = false;
  });
  return obj;
}

function onUpdateSlides(key: string, newSlides: any): void
{
  let clone = pureObject(props.tree);
  clone[key].slides = newSlides;
  emits('update', clone);
}

function onToggleFold(key: string, sw: boolean = undefined): void
{
  state.fold[key] = sw === undefined ? !state.fold[key] : sw;
}

function onAddGroup(): void
{
  state.manageFormGroup = {
    type: 'add',
    key: '',
    name: '',
    description: '',
    slidesType: 'array',
    slidesUrl: '',
  };
  state.showManageGroup = true;
}
function onEditGroup(key: string): void
{
  state.manageFormGroup = {
    type: 'edit',
    key: key,
    originalKey: key,
    name: props.tree[key].name,
    description: props.tree[key].description,
    slidesType: Array.isArray(props.tree[key].slides) ? 'array' : 'url',
    slidesUrl: typeof props.tree[key].slides === 'string' ? props.tree[key].slides : '',
  };
  state.showManageGroup = true;
}
function onRemoveGroup(key: string): void
{
  if (!confirm('정말 삭제할까요?')) return;
  let clone = pureObject(props.tree);
  delete clone[key];
  emits('update', clone);
}
function onSubmitGroup(res: any): void
{
  try
  {
    const { key, originalKey, type, name, description, slidesUrl, slidesType } = res;
    let newKey;
    let clone = pureObject(props.tree);
    function testKey(str: string): string
    {
      if (!/^[a-zA-Z0-9_]+$/.test(str)) throw new Error('Error key');
      if (props.tree[str]) throw new Error('The value exists.');
      return key;
    }
    switch (type)
    {
      case 'add':
        newKey = testKey(key);
        clone[newKey] = {
          name,
          description,
          slides: (slidesType === 'url') ? slidesUrl : [],
        };
        break;
      case 'edit':
        newKey = (originalKey !== key) ? testKey(key) : key;
        if (!newKey) throw new Error('Not a valid key.');
        clone[newKey] = {
          ...clone[originalKey],
          name,
          description,
        };
        if (slidesType === 'url')
        {
          clone[newKey].slides = slidesUrl;
        }
        else if (!Array.isArray(clone[newKey].slides))
        {
          clone[newKey].slides = [];
        }
        if (originalKey !== key) delete clone[originalKey];
        break;
    }
    emits('update', clone);
    state.showManageGroup = false;
  }
  catch(e)
  {
    captureError(['/components/slideshow/screen/preference/data/manage/index.vue', 'onSubmitGroup()'], 'error', e.message);
    alert('처리에 문제가 생겼습니다.');
  }
}

function onAddSlide(key: string): void
{
  state.editFormSlide = {
    type: 'add',
    groupKey: key,
    src: '',
    thumbnail: '',
    title: '',
    description: '',
  };
  state.showManageSlide = true;
}
function onEditSlide(key: string, n: number): void
{
  const item = props.tree[key].slides[n];
  state.editFormSlide = {
    type: 'edit',
    groupKey: key,
    key: n,
    src: item.src,
    thumbnail: item.thumbnail,
    title: item.title,
    description: item.description,
  };
  state.showManageSlide = true;
}
function onRemoveSlide(key: string, n: number): void
{
  if (!confirm('정말 삭제할까요?')) return;
  let clone = pureObject(props.tree);
  clone[key].slides.splice(n, 1);
  emits('update', clone);
}
function onSubmitSlide(res)
{
  const { type, groupKey, key, src, thumbnail, title, description } = res;
  let clone = pureObject(props.tree);
  try
  {
    const obj = {src, thumbnail, title, description };
    switch (type)
    {
      case 'add':
        clone[groupKey].slides.push(obj);
        break;
      case 'edit':
        clone[groupKey].slides[key] = obj;
        break;
    }
    onToggleFold(groupKey, true);
    emits('update', clone);
    state.showManageSlide = false;
  }
  catch(e)
  {
    captureError(['/components/slideshow/screen/preference/data/manage/index.vue', 'onSubmitSlide()'], 'error', e.message);
    alert('처리에 문제가 생겼습니다.');
  }
}
</script>

<style src="./index.scss" lang="scss" scoped></style>
