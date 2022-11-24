<template>
<label
  :class="[
    'form-upload',
    disabled && 'form-upload--disabled',
  ]">
  <input
    ref="input"
    type="file"
    class="form-upload__input"
    :accept="accept"
    :disabled="disabled"
    @change="onChange">
  <span class="form-upload__body">
    <Icon name="file"/>
    <em>{{state.filename || label}}</em>
    <i>
      <Icon name="upload"/>
    </i>
  </span>
</label>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Icon from '../icon/index.vue'

const name = 'FormUpload'
const props = defineProps({
  name: String,
  id: String,
  label: { type: String, default: 'Please upload file' },
  disabled: Boolean,
  accept: String,
})
const emits = defineEmits([ 'change' ])
let state = reactive({ filename: '' })
const input = ref(null)

// methods
function onChange(e)
{
  if (!(e.target.files && e.target.files[0])) return
  state.filename = e.target.files[0].name
  emits('change', e.target.files)
}
function focus()
{
  input.value.focus()
}

// set expose
defineExpose({
  input,
  focus,
})
</script>

<style src="./form-upload.scss" lang="scss" scoped></style>
