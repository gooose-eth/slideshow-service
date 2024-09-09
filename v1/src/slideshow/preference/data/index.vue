<template>
<fieldset class="preference-data">
  <legend>Data fields</legend>
  <div class="manage-tree">
    <div class="manage-tree__toolbar">
      <FormRadio
        type="button"
        name="pref_mode"
        id="prof_mode"
        title="편집모드를 변경합니다."
        :items="[
          { key: 'basic', label: '기본' },
          { key: 'advanced', label: '전문가' },
        ]"
        :model-value="state.mode"
        class="manage-tree__mode"
        @update:model-value="onChangeMode"/>
      <ButtonIcon
        title="슬라이드 데이터를 가져옵니다."
        icon-name="download"
        class="manage-tree__button"
        @click="controlVisibleImportData(true)"/>
    </div>
    <div class="manage-tree__body">
      <Manage
        v-if="state.mode === 'basic'"
        :tree="state.tree"
        @update="onUpdateTreeFromManage"/>
      <FormText
        v-else-if="state.mode === 'advanced'"
        ref="tree"
        type="textarea"
        name="pref_tree"
        id="pref_tree"
        v-model="state.tree"
        placeholder="슬라이드 데이터 코드를 입력해주세요."
        :rows="15"
        :color="state.errorTree ? 'error' : undefined"
        class="advanced-source"
        @blur:model-value="onBlurTree"/>
      <p
        v-if="state.mode === 'advanced' && state.errorTree"
        class="manage-tree__error-message">
        JSON 데이터가 문제 생겼습니다.
      </p>
    </div>
  </div>
  <teleport to="#modals">
    <transition name="modal-fade">
      <ModalWrap
        v-if="state.visibleImportData"
        @close="controlVisibleImportData(false)">
        <ModalBody>
          <ImportData
            @update="onImportData"
            @close="controlVisibleImportData(false)"/>
        </ModalBody>
      </ModalWrap>
    </transition>
  </teleport>
</fieldset>
</template>

<script setup>
import { reactive } from 'vue'
import { readyPreferenceStore, windowsStore } from '../../../store/slideshow'
import { FormRadio, FormText } from '../../../components/form'
import { pureObject } from '../../../libs/util.js'
import { checkTree, objectToString } from '../../../libs/slideshow.js'
import { captureError } from '../../../libs/error.js'
import ButtonIcon from './button-icon.vue'
import Manage from './manage/index.vue'
import { ModalWrap, ModalBody } from '../../../components/modal/index.js'
import ImportData from './import-data.vue'

const windows = windowsStore()
const readyPreference = readyPreferenceStore()
const state = reactive({
  mode: 'basic', // basic,advanced
  tree: undefined,
  visibleImportData: false,
  errorTree: false,
})
let timer

// set tree
state.tree = state.mode === 'advanced' ? objectToString(readyPreference.data) : pureObject(readyPreference.data)

function onChangeMode(key)
{
  try
  {
    switch (key)
    {
      case 'basic':
      default:
        let tree = JSON.parse(state.tree)
        if (!checkTree(tree)) throw new Error('error tree')
        state.tree = tree
        break
      case 'advanced':
        state.tree = objectToString(state.tree)
        break
    }
    state.mode = key
  }
  catch(e)
  {
    captureError(['/slideshow/preference/data/index.vue', 'onChangeMode()'], 'error', e.message)
    alert('데이터가 잘못되었습니다.')
  }
}

function onBlurTree(value)
{
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    try
    {
      JSON.parse(value)
      updateReadyData()
      state.errorTree = false
    }
    catch (_)
    {
      state.errorTree = true
    }
  })
}

function onUpdateTreeFromManage(tree)
{
  state.tree = tree
  updateReadyData()
}
function onImportData(res)
{
  switch (state.mode)
  {
    case 'advanced':
      state.tree = objectToString(res)
      break
    case 'basic':
    default:
      state.tree = res
      break
  }
  readyPreference.data = res
  controlVisibleImportData(false)
}

function updateReadyData()
{
  try
  {
    let tree = state.mode === 'advanced' ? JSON.parse(state.tree) : pureObject(state.tree)
    if (!checkTree(tree)) throw new Error('error tree')
    readyPreference.data = tree
  }
  catch(_)
  {}
}

function controlVisibleImportData(sw)
{
  state.visibleImportData = sw
}
</script>

<style src="../preference.scss" lang="scss" scoped></style>
<style src="./index.scss" lang="scss" scoped></style>
