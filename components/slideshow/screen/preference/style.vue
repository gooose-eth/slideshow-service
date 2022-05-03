<template>
<fieldset>
  <legend>Style fields</legend>
  <div class="fields">
    <div class="field-basic">
      <h3 class="field-title">
        <label for="pref_screenColor">화면모드</label>
      </h3>
      <p class="field-description">
        화면모드를 선택합니다.
      </p>
      <div class="field-basic__body flex">
        <FormSelect
          name="pref_screenColor"
          id="pref_screenColor"
          v-model="readyPreference.style.screenColor">
          <option value="system">시스템</option>
          <option value="light">라이트 모드</option>
          <option value="dark">다크 모드</option>
        </FormSelect>
      </div>
    </div>
    <hr class="field-line">
    <div class="field-basic">
      <h3 class="field-title">
        <label for="pref_imageType">이미지 표시방식</label>
      </h3>
      <p class="field-description">
        슬라이드 이미지 표시방식을 선택합니다.
      </p>
      <div class="field-basic__body flex">
        <FormSelect
          name="pref_imageType"
          id="pref_imageType"
          v-model="readyPreference.style.imageType">
          <option value="none">없음</option>
          <option value="contain">전부 보이기</option>
          <option value="cover">꽉채우기</option>
        </FormSelect>
      </div>
    </div>
    <div class="field-basic">
      <h3 class="field-title">
        <label for="pref_imageScale">이미지 크기</label>
      </h3>
      <p class="field-description">
        슬라이드 이미지 크기를 정합니다. 예) 가로,세로
      </p>
      <div class="field-basic__body flex">
        <FormText
          type="text"
          name="pref_imageScale"
          id="pref_imageScale"
          :model-value="readyPreference.style.imageScale"
          placeholder="80%,80%"
          model-type="array"
          :size="16"
          @update:model-value="onUpdateImageScale"/>
      </div>
    </div>
    <hr class="field-line">
    <div class="field-basic">
      <h3 class="field-title">
        <label for="pref_captionScale">캡션 크기</label>
      </h3>
      <p class="field-description">
        캡션의 크기를 설정합니다.
      </p>
      <div class="field-basic__inline">
        <label class="label">
          <FormText
            type="tel"
            name="pref_captionScale"
            id="pref_captionScale"
            v-model="readyPreference.style.captionScale"
            placeholder="100"
            :maxlength="3"
            :size="5"
            model-type="number"/>
          <span>%</span>
        </label>
      </div>
    </div>
    <div class="field-basic">
      <h3 class="field-title">
        <label for="pref_captionPosition">캡션 위치</label>
      </h3>
      <p class="field-description">
        캡션의 위치를 설정합니다. 예)왼쪽,상단
      </p>
      <div class="field-basic__body flex">
        <FormText
          type="text"
          name="pref_captionPosition"
          id="pref_captionPosition"
          v-model="readyPreference.style.captionPosition"
          placeholder="30px,30px"
          model-type="array"
          :size="16"
          @update:model-value="onUpdateCaptionPosition"/>
      </div>
    </div>
  </div>
</fieldset>
</template>

<script lang="ts" setup>
import { readyPreferenceStore } from '~/store/slideshow';
import { FormText, FormSelect } from '../../components/form';

const readyPreference = readyPreferenceStore();

function onUpdateImageScale(s)
{
  readyPreference.style.imageScale = s.split(',');
}
function onUpdateCaptionPosition(s)
{
  readyPreference.style.captionPosition = s.split(',');
}
</script>

<style src="./fieldset.scss" lang="scss" scoped></style>
