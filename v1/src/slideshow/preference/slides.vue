<template>
<fieldset>
  <legend>Slides fields</legend>
  <div class="fields">
    <div class="field-basic">
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_initialNumber">기본 슬라이드 번호</label>
        </h2>
        <p class="field-description">
          시작할때 표시되는 슬라이드 번호입니다. (번호는 0부터)
        </p>
      </header>
      <div class="flex">
        <label>
          <FormText
            type="tel"
            name="pref_initialNumber"
            id="pref_initialNumber"
            v-model="readyPreference.slides.initialNumber"
            placeholder="0"
            :maxlength="3"
            :size="5"
            model-type="number"/>
        </label>
      </div>
    </div>
    <div class="field-switch">
      <header>
        <h2 class="field-title">
          <label for="pref_random">무작위로 섞기</label>
        </h2>
        <p class="field-description">슬라이드 순서를 무작위로 섞습니다.</p>
      </header>
      <FormSwitch
        name="pref_random"
        id="pref_random"
        v-model="readyPreference.slides.random"/>
    </div>
    <hr class="field-line">
    <div class="field-basic">
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_animationType">트랜지션 종류</label>
        </h2>
        <p class="field-description">
          슬라이드가 바뀔때의 트랜지션을 선택합니다.
        </p>
      </header>
      <div class="flex">
        <FormSelect
          name="pref_animationType"
          id="pref_animationType"
          v-model="readyPreference.slides.animationType">
          <option value="none">없음</option>
          <option value="fade">투명도 전환</option>
          <option value="horizontal">가로방향으로 이동</option>
        </FormSelect>
      </div>
    </div>
    <div class="field-basic">
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_animationSpeed">트랜지션 속도</label>
        </h2>
        <p class="field-description">
          트랜지션 애니메이션 속도를 변경합니다.
        </p>
      </header>
      <div class="flex">
        <label class="label">
          <FormText
            type="tel"
            name="pref_animationSpeed"
            id="pref_animationSpeed"
            v-model="readyPreference.slides.animationSpeed"
            placeholder="1000"
            :maxlength="4"
            :size="5"
            model-type="number"/>
          <span>ms</span>
        </label>
      </div>
    </div>
    <hr class="field-line">
    <div class="field-basic">
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_captionAnimationType">캡션 애니메이션 종류</label>
        </h2>
        <p class="field-description">
          슬라이드가 바뀔때의 캡션 트랜지션을 선택합니다.
        </p>
      </header>
      <div class="flex">
        <FormSelect
          name="pref_captionAnimationType"
          id="pref_captionAnimationType"
          v-model="readyPreference.slides.captionAnimationType">
          <option value="none">없음</option>
          <option value="shuffle">무작위로 변하는 글자</option>
        </FormSelect>
      </div>
    </div>
    <div class="field-basic">
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_captionAnimationSpeed">캡션 애니메이션 속도</label>
        </h2>
        <p class="field-description">
          값이 높을수록 애니메이션 속도가 빨라집니다.
        </p>
      </header>
      <div class="flex">
        <label>
          <FormText
            type="tel"
            name="pref_captionAnimationSpeed"
            id="pref_captionAnimationSpeed"
            v-model="readyPreference.slides.captionAnimationSpeed"
            placeholder="1000"
            :maxlength="4"
            :size="5"
            model-type="number"/>
        </label>
      </div>
    </div>
    <hr class="field-line">
    <div class="field-switch">
      <header>
        <h2 class="field-title">
          <label for="pref_autoplay">자동재생</label>
        </h2>
        <p class="field-description">
          슬라이드를 자동재생 합니다.
        </p>
      </header>
      <FormSwitch
        name="pref_autoplay"
        id="pref_autoplay"
        v-model="readyPreference.slides.autoplay"/>
    </div>
    <div class="field-basic">
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_autoplayDelay">자동재생 딜레이</label>
        </h2>
        <p class="field-description">
          슬라이드가 자동으로 전환하기 전에 대기하는 시간입니다.
        </p>
      </header>
      <div class="flex">
        <label class="label">
          <FormText
            type="tel"
            name="pref_autoplayDelay"
            id="pref_autoplayDelay"
            v-model="readyPreference.slides.autoplayDelay"
            placeholder="1000"
            :maxlength="4"
            :size="5"
            model-type="number"/>
          <span>ms</span>
        </label>
      </div>
    </div>
    <div class="field-basic">
      <header class="field-basic__header">
        <h2 class="field-title">
          <label for="pref_autoplayDirection">자동재생 방향</label>
        </h2>
        <p class="field-description">
          슬라이드가 자동으로 전환하는 방향을 설정합니다.
        </p>
      </header>
      <div class="flex">
        <FormRadio
          v-model="readyPreference.slides.autoplayDirection"
          model-type="boolean"
          :items="[
            { key: false, label: '이전' },
            { key: true, label: '다음' },
          ]"/>
      </div>
    </div>
    <div class="field-switch">
      <header>
        <h2 class="field-title">
          <label for="pref_autoplayPauseOnHover">마우스 오버시 자동재생 일시정지</label>
        </h2>
        <p class="field-description">
          슬라이드 영역에 마우스를 갖다대면 자동재생을 일시정지 합니다.
        </p>
      </header>
      <FormSwitch
        name="pref_autoplayPauseOnHover"
        id="pref_autoplayPauseOnHover"
        v-model="readyPreference.slides.autoplayPauseOnHover"/>
    </div>
    <div class="field-switch">
      <header>
        <h2 class="field-title">
          <label for="pref_loop">반복</label>
        </h2>
        <p class="field-description">
          슬라이드를 마지막에서 처음으로 이동합니다.
        </p>
      </header>
      <FormSwitch
        name="pref_loop"
        id="pref_loop"
        v-model="readyPreference.slides.loop"/>
    </div>
    <hr class="field-line">
    <div class="field-switch">
      <header>
        <h2 class="field-title">
          <label for="pref_swipe">밀어 넘기기</label>
        </h2>
        <p class="field-description">
          터치 디바이스에서 밀어 넘기는 조작을 사용합니다.
        </p>
      </header>
      <FormSwitch
        name="pref_swipe"
        id="pref_swipe"
        v-model="readyPreference.slides.swipe"/>
    </div>
  </div>
</fieldset>
</template>

<script setup>
import { readyPreferenceStore } from '../../store/slideshow.js'
import { FormText, FormSelect, FormSwitch, FormRadio } from '../../components/form/index.js'

const readyPreference = readyPreferenceStore()
</script>

<style src="./preference.scss" lang="scss" scoped></style>
