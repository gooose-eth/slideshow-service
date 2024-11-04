<template>
<form class="import-data" @submit.prevent="onSubmit">
  <PopupHeader
    title="슬라이드 아이템 가져오기"
    @close="emits('close')"/>
  <fieldset>
    <legend>Import data fields</legend>
    <div class="fields">
      <div class="field-basic">
        <div class="field-basic__body">
          <FormRadio
            name="pref_mode"
            id="prof_mode"
            title="데이터를 가져오는 방법을 선택합니다."
            :items="[
              { key: 'address', label: '주소' },
              { key: 'file', label: '파일' },
            ]"
            v-model="state.mode"/>
        </div>
      </div>
      <div v-if="state.mode === 'address'" class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_address">주소로 가져오기</label>
          </h2>
          <p class="field-description">
            RestAPI 주소로 데이터를 가져옵니다.
          </p>
        </header>
        <div class="field-basic__body">
          <FormText
            ref="$address"
            name="pref_address"
            id="pref_address"
            placeholder="주소를 입력해주세요."
            v-model="state.address"
            @update:modelValue="onInputEvent"/>
        </div>
      </div>
      <div v-if="state.mode === 'file'" class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_address">파일로 가져오기</label>
          </h2>
          <p class="field-description">
            JSON 파일을 업로드하여 데이터를 가져옵니다.
          </p>
        </header>
        <FormUpload
          ref="$file"
          accept="application/json"
          label="JSON 파일을 선택해주세요."
          @change="onSelectFile"/>
      </div>
    </div>
    <nav class="import-data__bottom">
      <div>
        <ButtonBasic
          type="submit"
          title="데이터 가져오기"
          :color="state.processing ? '' : 'key'"
          :disabled="state.processing">
          {{state.processing ? '처리중..' : '데이터 가져오기'}}
        </ButtonBasic>
      </div>
    </nav>
  </fieldset>
</form>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { ofetch } from 'ofetch'
import { getFileData, checkTree } from '../../../libs/slideshow.js'
import { assetsStore, windowsStore } from '../../../store/slideshow.js'
import { captureError } from '../../../libs/error.js'
import { FormRadio, FormText, FormUpload } from '../../../components/form/index.js'
import ButtonBasic from '../../../components/button/basic.vue'
import PopupHeader from './popup-header.vue'

const $address = ref()
const $file = ref()
const assets = assetsStore()
const windows = windowsStore()
const emits = defineEmits([ 'update', 'close' ])
let state = reactive({
  mode: 'address', // address,file
  address: assets.exampleImportUrl,
  file: null,
  processing: false,
  input: false,
})

function onSelectFile(e)
{
  if (!e[0]) return
  onInputEvent()
  state.file = e[0]
}

async function onSubmit()
{
  state.processing = true
  try
  {
    let res
    switch (state.mode)
    {
      case 'address':
        if (!state.address)
        {
          $address.value.focus()
          throw new Error('no address')
        }
        res = await ofetch(state.address, { responseType: 'json' })
        break
      case 'file':
        if (!state.file)
        {
          $file.value.focus()
          throw new Error('no file')
        }
        res = await getFileData(state.file)
        break
      default:
        throw new Error('no mode')
    }
    if (Array.isArray(res))
    {
      res = {
        default: {
          slides: res,
        }
      }
    }
    checkTree(res)
    emits('update', res)
  }
  catch(e)
  {
    captureError(['/components/slideshow/screen/preference/data/import-data.vue', 'onSubmit()'], 'error', e.message)
    alert('데이터를 가져오는데 실패했습니다.')
    state.processing = false
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
  windows.children.push('importData')
})
onUnmounted(() => {
  window.off('keyup.preference-data')
  let idx = windows.children.indexOf('importData')
  windows.children.splice(idx, 1)
})
</script>

<style src="../preference.scss" lang="scss" scoped></style>
<style src="./import-data.scss" lang="scss" scoped></style>
