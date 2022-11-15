<template>
<article class="home">
  <h1 class="home__title">Slideshow items</h1>
  <Loading v-if="loading" message="불러오는 중.."/>
  <template v-else>
    <Error
      v-if="!!error"
      :message="error"
      class="home__error"/>
    <Items v-else-if="index.items?.length > 0">
      <Item
        v-for="(item,key) in index.items"
        :key="key"
        address=""
        img=""
        title=""
        description=""
        date=""/>
    </Items>
    <Error
      v-else
      type="empty"
      message="슬라이드가 없어요!"
      class="home__empty"/>
  </template>
  <nav v-if="index.total > 0" class="home__paginate">
    <Pagination
      :model-value="Number(route.query.page || 1)"
      :total="index.total"
      :size="20"
      :range="5"
      @update:modelValue="onChangePage"/>
  </nav>
</article>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { serialize } from '../../libs/string.js'
import { captureError } from '../../libs/error.js'
import Loading from '../../components/loading/index.vue'
import Error from '../../components/error/index.vue'
import Items from '../../components/items/index.vue'
import Item from '../../components/items/item.vue'
import Pagination from '../../components/navigation/pagination.vue'

const router = useRouter()
const route = useRoute()
const loading = ref(false)
const error = ref(null)
const index = reactive({
  total: 0,
  items: [],
});

async function fetching()
{
  try
  {
    loading.value = true
  }
  catch (e)
  {
    loading.value = false
    captureError(['/pages/index.vue', 'fetch()'], 'error', e.message)
    error.value = '오류가 발생했어요!'
  }
}

function onChangePage(page)
{
  let params = {
    ...route.query,
    page: page > 1 ? page : undefined,
  };
  router.push(`./${serialize(params, true)}`);
}

onMounted(() => {
  fetching().then()
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
