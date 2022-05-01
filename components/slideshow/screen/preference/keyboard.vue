<template>
<fieldset>
  <legend>Keyboard fields</legend>
  <div class="fields">
    <div class="field-switch">
      <div class="field-switch__body">
        <h3 class="field-title">
          <label for="pref_enabled">
            키보드 단축키 사용
          </label>
        </h3>
        <p class="field-description">
          키보드 단축키를 사용합니다.
        </p>
      </div>
      <div class="field-switch__input">
        <FormSwitch
          name="pref_enabled"
          id="pref_enabled"
          v-model="readyPreference.keyboard.enabled"/>
      </div>
    </div>
    <hr class="field-line">
  </div>
  <section class="keyboard-guide">
    <header class="keyboard-guide__header">
      <h3>가이드</h3>
      <p>
        다음과 같이 키보드 단축키를 누르면 해당 기능을 실행합니다.
      </p>
    </header>
    <table class="keyboard-guide__body">
      <thead>
      <tr>
        <th>단축키</th>
        <td>설명</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>
          <code>왼쪽 방향키</code>
        </th>
        <td>이전 슬라이드로 이동하기</td>
      </tr>
      <tr>
        <th>
          <code>오른쪽 방향키</code>
        </th>
        <td>다음 슬라이드로 이동하기</td>
      </tr>
      <tr>
        <th><code>A</code></th>
        <td>자동재생</td>
      </tr>
      <tr>
        <th><code>P</code></th>
        <td>환경설정 열기</td>
      </tr>
      <tr>
        <th><code>T</code></th>
        <td>썸네일 이미지 목록화면을 엽니다.</td>
      </tr>
      <tr>
        <th><code>R</code></th>
        <td>슬라이드쇼 재실행</td>
      </tr>
      <tr>
        <th><code>H</code></th>
        <td>조작과 상태요소들을 보여줍니다.</td>
      </tr>
      <tr>
        <th><code>G</code></th>
        <td>슬라이드 그룹 선택창을 엽니다.</td>
      </tr>
      <tr>
        <th><code>S</code></th>
        <td>슬라이드쇼를 저장합니다.</td>
      </tr>
      </tbody>
    </table>
  </section>
</fieldset>
</template>

<script lang="ts" setup>
import { readyPreferenceStore } from '~/store/slideshow';
import { FormSwitch } from '../../components/form';

const readyPreference = readyPreferenceStore();
</script>

<style src="./fieldset.scss" lang="scss" scoped></style>
<style src="./keyboard.scss" lang="scss" scoped></style>
