<template>
<fieldset>
  <legend>General fields</legend>
  <div class="fields">
    <template v-if="current.watchMode || current.editMode">
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label for="pref_slideshowAddress">슬라이드쇼 주소</label>
          </h2>
          <p class="field-description">
            슬라이드쇼에서 사용하는 주소입니다.
          </p>
        </header>
        <div>
          <FormText
            type="text"
            name="pref_slideshowAddress"
            id="pref_slideshowAddress"
            :value="address"
            :read-only="true"
            :size="16"
            @click="onClickAddress"/>
        </div>
      </div>
      <hr class="field-line">
    </template>
    <div class="field-switch">
      <header>
        <h2 class="field-title">
          <label for="pref_hud">HUD</label>
        </h2>
        <p class="field-description">조작과 상태요소들을 보여줍니다.</p>
      </header>
      <FormSwitch
        v-model="readyPreference.general.hud"
        name="pref_hud"
        id="pref_hud"/>
    </div>
    <div class="field-switch">
      <header>
        <h2 class="field-title">
          <label for="pref_hoverVisibleHud">마우스 오버시 HUD 보이기</label>
        </h2>
        <p class="field-description">
          슬라이드 영역에 마우스를 갖다대면 조작과 상태요소를 숨깁니다.
        </p>
      </header>
      <FormSwitch
        v-model="readyPreference.general.hoverVisibleHud"
        name="pref_hoverVisibleHud"
        id="pref_hoverVisibleHud"/>
    </div>
    <div class="field-switch">
      <header>
        <h2 class="field-title">
          <label for="pref_clickVisibleHud">클릭, 터치시 HUD 토글</label>
        </h2>
        <p class="field-description">
          마우스를 클릭하거나 화면을 터치할때 HUD를 토글링합니다.
        </p>
      </header>
      <FormSwitch
        v-model="readyPreference.general.clickVisibleHud"
        name="pref_clickVisibleHud"
        id="pref_clickVisibleHud"/>
    </div>
    <div class="field-basic">
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_hudContents">요소들 표시</label>
        </h2>
        <p class="field-description">
          각 조작과 상태요소들 표시를 설정합니다.
        </p>
      </header>
      <ul class="field-checks">
        <li>
          <FormCheckbox
            v-model="readyPreference.general.visibleHudContents.menu"
            name="pref_hudContents"
            id="pref_hudContents"
            label="메뉴"/>
        </li>
        <li>
          <FormCheckbox
            v-model="readyPreference.general.visibleHudContents.caption"
            name="pref_hudContents"
            label="캡션"/>
        </li>
        <li>
          <FormCheckbox
            v-model="readyPreference.general.visibleHudContents.controller"
            name="pref_hudContents"
            label="컨트롤러"/>
        </li>
        <li>
          <FormCheckbox
            v-model="readyPreference.general.visibleHudContents.paginate"
            name="pref_hudContents"
            label="슬라이드 번호"/>
        </li>
        <li>
          <FormCheckbox
            v-model="readyPreference.general.visibleHudContents.group"
            name="pref_hudContents"
            label="그룹"/>
        </li>
        <li>
          <FormCheckbox
            v-model="readyPreference.general.visibleHudContents.thumbnail"
            name="pref_hudContents"
            label="슬라이드 목록"/>
        </li>
      </ul>
    </div>
    <template v-if="data.isAdmin">
      <hr class="field-line">
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label>백업 및 복원</label>
          </h2>
          <p class="field-description">
            슬라이드쇼의 모든 데이터를 가져오거나 내보냅니다.
          </p>
        </header>
        <div class="grid import-data">
          <ButtonBasic
            type="button"
            title="백업"
            color="key"
            @click="onClickBackup">
            백업
          </ButtonBasic>
          <ButtonBasic
            type="button"
            title="복원"
            @click="onClickRestore">
            복원
          </ButtonBasic>
        </div>
      </div>
      <div class="field-basic">
        <header class="field-basic__header">
          <h2 class="field-title">
            <label>재설정</label>
          </h2>
          <p class="field-description">
            모든 설정과 슬라이드 데이터를 재설정합니다.
          </p>
        </header>
        <ButtonBasic
          type="button"
          title="슬라이드쇼 재설정"
          color="danger"
          @click="onClickReset">
          슬라이드쇼 재설정
        </ButtonBasic>
      </div>
    </template>
  </div>
</fieldset>
</template>

<script setup>
import { computed } from 'vue'
import { readyPreferenceStore, dataStore, currentStore } from '../../store/slideshow.js'
import { serviceStore } from '../../store/service.js'
import { twoDigit } from '../../libs/string.js'
import { pureObject } from '../../libs/util.js'
import { captureError } from '../../libs/error.js'
import { FormText, FormSwitch, FormCheckbox } from '../../components/form'
import ButtonBasic from '../../components/button/basic.vue'

const service = serviceStore()
const readyPreference = readyPreferenceStore()
const data = dataStore()
const current = currentStore()
const address = computed(() => (`${service.url}/watch/${data.field.srl}/`))

function onClickAddress(e)
{
  const $el = e.target
  $el.setSelectionRange(0, $el.value.length)
}

function onClickBackup()
{
  if (!confirm('정말 모든 데이터를 백업할까요?\n백업한 내용은 `JSON` 파일로 저장됩니다.')) return
  const { general, slides, style, data, keyboard } = readyPreference
  let result = pureObject({
    preference: { general, slides, style, keyboard },
    tree: data,
  })
  const date = new Date()
  let dateFormat = `${date.getFullYear()}${twoDigit(date.getMonth() + 1)}${twoDigit(date.getDate())}`
  const element = document.createElement('a')
  element.setAttribute('href', `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(result, null, 2))}`)
  element.setAttribute('download', `slideshow_${dateFormat}.json`)
  element.click()
}

function onClickRestore()
{
  const el = document.createElement('input')
  el.setAttribute('type', 'file')
  el.setAttribute('accept', 'application/json')
  el.addEventListener('change', e => {
    if (e.target.files.length <= 0)
    {
      alert('선택한 파일이 없습니다.')
      return
    }
    const file = (e.target).files[0]
    const reader = new FileReader()
    reader.onload = e => {
      try
      {
        let json = JSON.parse(String((e.target).result))
        if (!confirm('정말 모든 데이터를 복원할까요?\n이 작업은 현재 데이터가 모두 삭제됩니다.')) return
        if (!(json.preference || json.tree)) throw new Error('no data')
        readyPreference.restore({
          ...json.preference,
          data: json.tree,
        })
        alert('복원을 끝냈습니다.\n설정을 확인해보시고 "적용하기" 버튼을 누르면 적용됩니다.')
      }
      catch(e)
      {
        captureError(['/slideshow/preference/general.vue', 'onClickRestore()'], 'error', e.message)
        alert('복원에 실패했습니다.')
      }
    }
    reader.readAsText(file)
  }, false)
  el.click()
}

function onClickReset()
{
  if (!confirm('정말로 모든 설정과 슬라이드 데이터를 초기화 하겠습니까?')) return
  readyPreference.reset()
}
</script>

<style src="./preference.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
@use '../../assets/scss/mixins';
.import-data {
  --column: 1;
  --grid-gap: 8px;
  @include mixins.responsive(tablet) {
    --column: 2;
    --grid-gap: 10px;
  }
}
</style>
