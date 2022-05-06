<template>
<form class="import-data" @submit.prevent="onSubmit">
  <header class="import-data__header">
    <h1>슬라이드 아이템 가져오기</h1>
    <button type="button" @click="emits('close')">
      <Icon icon-name="x"/>
    </button>
  </header>
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
            v-model="state.address"/>
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
          :color="state.processing ? '' : 'key'"
          :disabled="state.processing">
          {{state.processing ? '처리중..' : '데이터 가져오기'}}
        </ButtonBasic>
      </div>
    </nav>
  </fieldset>
</form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
// import i18n from '../../../i18n';
// import { getApiData, getFileData } from '../../../libs/util';
// import { checkTree } from '../../../libs/object';
import { getFileData } from '~/libs/slideshow';
import Icon from '../../../components/icon/index.vue';
import { FormRadio, FormText, FormUpload } from '../../../components/form';
import { ButtonBasic } from '../../../components/button';

const $address = ref();
const $file = ref();
const emits = defineEmits([ 'update', 'close' ]);
let state = reactive({
  mode: 'address', // address,file
  address: 'https://raw.githubusercontent.com/redgoose-dev/slideshow/main/resource/example/tree.json',
  file: null,
  processing: false,
});
// const address = ref(null);
// const emits = defineEmits({ 'update': null });

// methods
function onSelectFile(e)
{
  if (e[0]) state.file = e[0];
}

async function onSubmit(e)
{
  state.processing = true;
  try
  {
    let res;
    switch (state.mode)
    {
      case 'address':
        if (!state.address)
        {
          $address.value.focus();
          throw new Error('no address');
        }
        res = await $fetch(state.address, { responseType: 'json' });
        break;
      case 'file':
        if (!state.file)
        {
          $file.value.focus();
          throw new Error('no file');
        }
        res = await getFileData(state.file);
        break;
      default:
        throw new Error('no mode');
    }
    if (Array.isArray(res))
    {
      res = {
        default: {
          slides: res,
        }
      };
    }
    emits('update', res);
  }
  catch(e)
  {
    if (process.dev) console.error(e.message);
    alert('데이터를 가져오는데 실패했습니다.');
    state.processing = false;
  }
}
</script>

<style src="../preference.scss" lang="scss" scoped></style>
<style src="./import-data.scss" lang="scss" scoped></style>
