<template>
<article class="make-share">
  <header class="make-share__header">
    <h1>슬라이드쇼 공유하기</h1>
    <p>슬라이드쇼 공개주소를 만듭니다.</p>
  </header>
  <form v-if="!created" class="make-share__form" @submit.prevent="onSubmit">
    <fieldset>
      <legend>공개용 슬라이드쇼 정보 입력폼</legend>
      <div class="field">
        <p class="label field__label">
          <label>슬라이드쇼 이름</label>
        </p>
        <div class="field__body slideshow-title">
          {{data.field.title}}
        </div>
      </div>
      <div class="field">
        <p class="label field__label">
          <label for="permission">권한</label>
        </p>
        <div class="field__body">
          <ul class="permission-checks">
            <li>
              <FormCheckbox
                name="permission-watch"
                id="permission"
                label="보기"
                v-model="fields.permission.watch"/>
            </li>
            <li>
              <FormCheckbox
                name="permission-edit"
                label="수정"
                v-model="fields.permission.edit"/>
            </li>
            <li>
              <FormCheckbox
                name="permission-delete"
                label="삭제"
                v-model="fields.permission.delete"/>
            </li>
          </ul>
          <p class="help">
            주소가 가진 기능의 권한을 설정합니다. 수정과 삭제기능은 사용에 유의하세요.
          </p>
        </div>
      </div>
      <div class="field">
        <p class="label field__label">
          <label for="expiry">만료시간</label>
        </p>
        <div class="field__body">
          <FormText
            type="date"
            :min="today"
            v-model="fields.expiry"/>
          <p class="help">
            공개주소를 언제까지 사용는지에 대한 날짜를 선택해주세요.
          </p>
        </div>
      </div>
    </fieldset>
    <nav class="make-share__nav">
      <ButtonBasic
        type="button"
        title="닫기"
        @click="emits('close')">
        닫기
      </ButtonBasic>
      <ButtonBasic
        type="submit"
        title="공유하기"
        :disabled="processing"
        color="key">
        {{processing ? '처리중..' : '공유하기'}}
      </ButtonBasic>
    </nav>
  </form>
  <Created
    v-else
    v-bind="createdFields"
    @close="emits('close')"/>
</article>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { captureError } from '~/libs/error';
import { dateFormat } from '~/libs/date';
import { dataStore } from '~/store/slideshow';
import { FormText, FormCheckbox } from '~/components/form';
import { ButtonBasic } from '~/components/button';
import Created from './created.vue';

const emits = defineEmits([ 'close' ]);
const data = dataStore();
// set expiry date
let setExpiryDate = new Date();
setExpiryDate.setDate(setExpiryDate.getDate() + 3);
// set fields
const fields = reactive({
  permission: {
    watch: true,
    edit: false,
    delete: false,
  },
  expiry: dateFormat(setExpiryDate, '{yyyy}-{MM}-{dd}'),
});
const today = computed(() => (dateFormat(new Date(), '{yyyy}-{MM}-{dd}')));
const processing = ref(false);
const created = ref(false);
const createdFields = reactive({
  keyAddress: undefined,
  expiry: undefined,
  permission: undefined,
});

async function onSubmit(_e: any): Promise<void>
{
  try
  {
    processing.value = true;
    let red = await $fetch(`/api/slideshow/public-address/create`, {
      method: 'post',
      headers: { 'Authorization': `bearer ${data.field.token}` },
      body: {
        address: data.field.address,
        expiry: fields.expiry,
        permission: Object.keys(fields.permission).map((k: string): string|boolean => {
          return fields.permission[k] ? k : false;
        }).filter(Boolean),
      },
    });
    // TODO: 테스트를 위하여 값 넣기 start
    // createdFields.keyAddress = 'sdmiposmdgds';
    // createdFields.expiry = fields.expiry;
    // createdFields.permission = {
    //   watch: fields.permission.watch,
    //   edit: fields.permission.edit,
    //   delete: fields.permission.delete,
    // };
    // created.value = true;
    // TODO: 테스트를 위하여 값 넣기 end
    processing.value = false;
  }
  catch (e)
  {
    captureError(['/components/slideshow/share/index.vue', 'onSubmit()'], 'error', e.message);
    alert('공개주소를 만들지 못했습니다.');
    processing.value = false;
  }
}
</script>

<style src="./index.scss" lang="scss" scoped></style>
