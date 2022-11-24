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
            :size="16"/>
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
  </div>
</fieldset>
</template>

<script setup>
import { computed } from 'vue'
import { readyPreferenceStore, dataStore, currentStore } from '../../store/slideshow.js'
import { serviceStore } from '../../store/service.js'
import { FormText, FormSwitch, FormCheckbox } from '../../components/form'

const service = serviceStore()
const readyPreference = readyPreferenceStore()
const data = dataStore()
const current = currentStore()
const address = computed(() => (`${service.url}/watch/${data.field.srl}/`))
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
