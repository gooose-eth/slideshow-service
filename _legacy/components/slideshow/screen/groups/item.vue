<template>
<div class="group-item">
  <a
    role="button"
    :class="[
      'group-item__wrap',
      props.selected && 'selected'
    ]"
    @click.prevent="!props.selected && emits('select')">
    <figure v-if="props.src" class="group-item__image">
      <img :src="props.src" :alt="props.name">
    </figure>
    <i v-else class="group-item__no-image">
      <Icon icon-name="x"/>
    </i>
    <div class="group-item__body">
      <h2 :class="[ !props.name && 'none' ]">
        {{ props.name ? props.name : 'None' }}
      </h2>
      <p>{{props.description}}</p>
      <ul v-if="props.count !== undefined" class="group-item__meta">
        <li><b>Count: {{props.count}}</b></li>
      </ul>
    </div>
  </a>
</div>
</template>

<script lang="ts" setup>
import Icon from '~/components/icon/index.vue';

const props = defineProps<{
  src?: string
  name?: string
  description?: string
  count: number
  selected: boolean
}>();
const emits = defineEmits([ 'select' ]);
</script>

<style src="./item.scss" lang="scss" scoped></style>
