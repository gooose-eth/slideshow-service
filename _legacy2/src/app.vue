<template>
<ErrorService v-if="errorValue" :error="errorValue"/>
<router-view v-else/>
</template>

<script setup>
import { ref, computed, watch, onErrorCaptured, defineAsyncComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { error } from './libs/error';
import ErrorService from './pages/error/500.vue';

const router = useRouter();
const errorValue = ref(null);

if (!DEV)
{
  onErrorCaptured((e, component, info) => {
    if (typeof e === 'string')
    {
      error.value = new Error(e);
    }
    else
    {
      error([ '/app.vue', 'onErrorCaptured()' ], 'error', e.message);
      errorValue.value = e;
    }
    return false;
  });
}

router.onError(e => {
  error([ '/app.vue', 'router.onError()' ], 'error', e.message);
  errorValue.value = e;
});
</script>
