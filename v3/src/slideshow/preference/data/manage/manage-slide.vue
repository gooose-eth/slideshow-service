<template>
<form class="manage-slide" @submit.prevent="onSubmit">
  <PopupHeader
    :title="props.form.type === 'edit' ? '슬라이드 수정' : '슬라이드 추가'"
    @close="emits('close')"/>
  <fieldset class="manage-slide__body">
    <legend>Manage slide fields</legend>
    <div class="fields">
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_src" class="required">이미지 URL</label>
          </h2>
          <p class="field-description">
            이미지 주소를 입력합니다.
          </p>
        </header>
        <div class="manage-slide__field-group">
          <FormText
            ref="$src"
            name="pref_src"
            id="pref_src"
            placeholder="URL을 입력하세요."
            :required="false"
            v-model="state.form.src"
            @update:modelValue="onInputEvent"/>
          <ButtonBasic
            type="button"
            title="URL 열기"
            @click="onClickCheckUrl('src')">
            URL 열기
          </ButtonBasic>
        </div>
      </div>
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_thumbnail">썸네일 이미지 URL</label>
          </h2>
          <p class="field-description">
            썸네일 이미지 주소를 입력합니다.
          </p>
        </header>
        <div class="manage-slide__field-group">
          <FormText
            ref="$thumbnail"
            name="pref_thumbnail"
            id="pref_thumbnail"
            placeholder="URL을 입력하세요."
            v-model="state.form.thumbnail"
            @update:modelValue="onInputEvent"/>
          <ButtonBasic
            type="button"
            title="URL 열기"
            @click="onClickCheckUrl('thumbnail')">
            URL 열기
          </ButtonBasic>
        </div>
      </div>
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_title">제목</label>
          </h2>
          <p class="field-description">
            슬라이드 제목을 입력합니다.
          </p>
        </header>
        <FormText
          name="pref_title"
          id="pref_title"
          placeholder="제목을 입력해주세요."
          v-model="state.form.title"
          @update:modelValue="onInputEvent"/>
      </div>
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_description">설명</label>
          </h2>
          <p class="field-description">
            슬라이드 설명을 입력합니다.
          </p>
        </header>
        <FormText
          name="pref_description"
          id="pref_description"
          placeholder="설명을 입력해주세요."
          v-model="state.form.description"
          @update:modelValue="onInputEvent"/>
      </div>
    </div>
    <nav class="manage-slide__bottom">
      <div>
        <ButtonBasic
          type="submit"
          :title="props.form.type === 'add' ? '추가하기' : '수정하기'"
          color="key">
          {{props.form.type === 'add' ? '추가하기' : '수정하기'}}
        </ButtonBasic>
      </div>
    </nav>
  </fieldset>
</form>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { validUrl } from '../../../../libs/string.js'
import { windowsStore } from '../../../../store/slideshow.js'
import { captureError } from '../../../../libs/error.js'
import PopupHeader from '../popup-header.vue'
import ButtonBasic from '../../../../components/button/basic.vue'
import { FormText } from '../../../../components/form/index.js'

const $src = ref()
const $thumbnail = ref()
const props = defineProps({
  form: Object,
})
const emits = defineEmits([ 'close', 'submit' ])
const windows = windowsStore()
let state = reactive({
  form: props.form,
  input: false,
})

function onClickCheckUrl(key)
{
  const check = validUrl(state.form[key])
  if (check)
  {
    window.open(state.form[key])
  }
  else
  {
    alert('주소가 잘못되었습니다.')
    switch (key)
    {
      case 'src':
        $src.value.focus()
        break
      case 'thumbnail':
        $thumbnail.value.focus()
        break
    }
  }
}

function onSubmit()
{
  try
  {
    if (!validUrl(state.form.src))
    {
      $src.value.focus()
      throw new Error('no image src address')
    }
    emits('submit', state.form)
  }
  catch(e)
  {
    captureError(['/slideshow/preference/data/manage/manage-slide.vue', 'onSubmit()'], 'error', e.message)
    alert('처리에 문제가 생겼습니다.')
  }
}

function onInputEvent()
{
  if (state.input) return
  state.input = true
}

function onKeyup(e)
{
  if (e.code !== 'Escape') return
  if (state.input && !confirm('입력한 내용이 있습니다. 이 창을 닫을까요?')) return
  emits('close')
}

onMounted(() => {
  window.on('keyup.preference-data', onKeyup)
  windows.children.push('slidesSlide')
})
onUnmounted(() => {
  window.off('keyup.preference-data')
  let idx = windows.children.indexOf('slidesSlide')
  windows.children.splice(idx, 1)
})
</script>

<style src="../../preference.scss" lang="scss" scoped></style>
<style src="./manage-slide.scss" lang="scss" scoped></style>
