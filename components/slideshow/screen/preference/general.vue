<template>
<fieldset>
  <legend>General fields</legend>
  <div class="fields">
    <template v-if="data.field.address">
      <div class="field-basic">
        <h2 class="field-title">
          <label for="pref_slideshowAddress">슬라이드쇼 주소</label>
        </h2>
        <p class="field-description">
          슬라이드쇼 서비스에서 사용하는 주소입니다.
        </p>
        <div class="field-basic__body">
          <FormText
            type="text"
            name="pref_slideshowAddress"
            id="pref_slideshowAddress"
            :value="data.field.address"
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
        name="pref_hud"
        id="pref_hud"
        v-model="readyPreference.general.hud"/>
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
        name="pref_hoverVisibleHud"
        id="pref_hoverVisibleHud"
        v-model="readyPreference.general.hoverVisibleHud"/>
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
        name="pref_clickVisibleHud"
        id="pref_clickVisibleHud"
        v-model="readyPreference.general.clickVisibleHud"/>
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
            name="pref_hudContents"
            id="pref_hudContents"
            label="메뉴"
            v-model="readyPreference.general.visibleHudContents.menu"/>
        </li>
        <li>
          <FormCheckbox
            name="pref_hudContents"
            label="캡션"
            v-model="readyPreference.general.visibleHudContents.caption"/>
        </li>
        <li>
          <FormCheckbox
            name="pref_hudContents"
            label="컨트롤러"
            v-model="readyPreference.general.visibleHudContents.controller"/>
        </li>
        <li>
          <FormCheckbox
            name="pref_hudContents"
            label="슬라이드 번호"
            v-model="readyPreference.general.visibleHudContents.paginate"/>
        </li>
        <li>
          <FormCheckbox
            name="pref_hudContents"
            label="그룹"
            v-model="readyPreference.general.visibleHudContents.group"/>
        </li>
      </ul>
    </div>
    <template v-if="current.mode !== 'watch'">
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
          <ButtonBasic color="key" @click="onClickBackup">백업</ButtonBasic>
          <ButtonBasic @click="onClickRestore">복원</ButtonBasic>
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
        <ButtonBasic color="danger" @click="onClickReset">
          슬라이드쇼 재설정
        </ButtonBasic>
      </div>
    </template>
  </div>
</fieldset>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { readyPreferenceStore, dataStore, currentStore } from '~/store/slideshow';
// import * as object from '../../libs/object';
// import * as local from '../../libs/local';
// import * as string from '../../libs/string';
import { FormText, FormSwitch, FormCheckbox } from '../../components/form';
import { ButtonBasic } from '../../components/button';

const readyPreference = readyPreferenceStore();
const data = dataStore();
const current = currentStore();

function onClickBackup()
{
  if (!confirm('정말 모든 데이터를 백업할까요?\n백업한 내용은 `JSON` 파일로 저장됩니다.')) return;
//   let result = {
//     preference: object.convertPureObject(store.state.preference),
//     tree: object.convertPureObject(store.state.tree),
//   };
//   const date = new Date();
//   let dateFormat = `${date.getFullYear()}${string.twoDigit(date.getMonth() + 1)}${string.twoDigit(date.getDate())}`;
//   const element = document.createElement('a');
//   element.setAttribute('href', `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(result, null, 2))}`);
//   element.setAttribute('download', `slideshow_${dateFormat}.json`);
//   element.click();
}
function onClickRestore()
{
  return new Promise((resolve, reject) => {
//     const el = document.createElement('input');
//     el.setAttribute('type', 'file');
//     el.setAttribute('accept', 'application/json');
//     el.addEventListener('change', e => {
//       if (!(e.target.files && e.target.files.length > 0))
//       {
//         alert(t('alert.noSelectedFile'));
//         return;
//       }
//       const file = e.target.files[0];
//       const reader = new FileReader();
//       reader.onload = e => {
//         try
//         {
//           let json = JSON.parse(String(e.target.result));
//           if (!confirm(t('confirm.restore'))) return;
//           if (!(json.preference || json.tree)) throw new Error('no data');
//           if (json.preference) store.dispatch('changePreference', json.preference);
//           if (json.tree) store.dispatch('changeTree', json.tree);
//           store.dispatch('changeMode', null);
//           store.dispatch('changeActiveSlide', store.state.preference.slides.initialNumber);
//           store.dispatch('changeAutoplay', false);
//           store.commit('updateUseKeyboardEvent', true);
//           alert(t('alert.completeRestore'));
//           local.main.restart().then();
//         }
//         catch(e)
//         {
//           if (window.dev) console.error(e.message);
//           alert(t('alert.failedRestore'));
//         }
//       };
//       reader.readAsText(file);
//     }, false);
//     el.click();
  });
}
function onClickReset()
{
  if (!confirm('정말로 모든 설정과 슬라이드 데이터를 초기화 하겠습니까?\n초기화하면 복구할 수 없습니다.')) return;
  // store.dispatch('reset').then(() => local.main.restart().then());
}
</script>

<style src="./preference.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
@use '../../../../assets/scss/mixin';
.import-data {
  --column: 1;
  --grid-gap: 8px;
  @include mixin.responsive(tablet) {
    --column: 2;
    --grid-gap: 10px;
  }
}
</style>
