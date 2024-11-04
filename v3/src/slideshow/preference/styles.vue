<template>
<fieldset>
  <legend>Style fields</legend>
  <div class="fields">
    <div class="field-basic">
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_screenColor">화면모드</label>
        </h2>
        <p class="field-description">
          화면모드를 선택합니다.
        </p>
      </header>
      <div class="flex">
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
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_imageType">이미지 표시방식</label>
        </h2>
        <p class="field-description">
          슬라이드 이미지 표시방식을 선택합니다.
        </p>
      </header>
      <div class="flex">
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
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_imageScale">이미지 크기</label>
        </h2>
        <p class="field-description">
          슬라이드 이미지 크기를 정합니다. 단위) px,%
        </p>
      </header>
      <div class="flex">
        <div class="label">
          <span>가로:</span>
          <FormText
            type="text"
            name="pref_imageScaleWidth"
            id="pref_imageScale"
            v-model="readyPreference.style.imageScale[0]"
            placeholder="80%"
            :size="8"
            :maxlength="7"/>
          <span>,</span>
          <span>세로:</span>
          <FormText
            type="text"
            name="pref_imageScaleHeight"
            v-model="readyPreference.style.imageScale[1]"
            placeholder="80%"
            :size="8"
            :maxlength="7"/>
        </div>
      </div>
    </div>
    <hr class="field-line">
    <div class="field-basic">
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_captionScale">캡션 크기</label>
        </h2>
        <p class="field-description">
          캡션의 크기를 설정합니다.
        </p>
      </header>
      <div class="flex">
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
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_captionPosition">캡션 위치</label>
        </h2>
        <p class="field-description">
          캡션의 위치를 설정합니다. 단위) px,%
        </p>
      </header>
      <div class="flex">
        <div class="label">
          <span>왼쪽:</span>
          <FormText
            type="text"
            name="pref_captionPositionWidth"
            id="pref_captionPosition"
            v-model="readyPreference.style.captionPosition[0]"
            placeholder="80%"
            :size="8"
            :maxlength="6"/>
          <span>,</span>
          <span>상단:</span>
          <FormText
            type="text"
            name="pref_captionPositionHeight"
            v-model="readyPreference.style.captionPosition[1]"
            placeholder="80%"
            :size="8"
            :maxlength="6"/>
        </div>
      </div>
    </div>
  </div>
</fieldset>
</template>

<script setup>
import { readyPreferenceStore } from '../../store/slideshow.js'
import { FormText, FormSelect } from '../../components/form/index.js'

const readyPreference = readyPreferenceStore()
</script>

<style src="./preference.scss" lang="scss" scoped></style>
