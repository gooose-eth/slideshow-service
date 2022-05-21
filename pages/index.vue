<template>
<article class="index">
  <h1 class="index__title">Slideshow items</h1>
  <div class="index__body">
    <Loading v-if="loading" message="불러오는 중.."/>
    <template v-else>
      <ErrorItems
        v-if="!!error"
        :message="error"
        class="index__error"/>
      <ul v-else-if="index.items?.length > 0" class="index__items">
        <li v-for="item in index.items">
          <Item
            :address="item.address"
            :img="item.thumbnail"
            :title="item.title"
            :description="item.description"
            :date="item.regdate.split(' ')[0]"/>
        </li>
      </ul>
      <ErrorItems
        v-else
        type="empty"
        message="슬라이드쇼가 없어요!"/>
    </template>
    <nav v-if="index.total > 0" class="index__paginate">
      <Pagination
        :model-value="Number(route.query.page || 1)"
        :total="index.total"
        :size="intro.size"
        :range="5"
        @update:modelValue="onChangePage"/>
    </nav>
  </div>
</article>
</template>

<script lang="ts" setup>
import { serialize } from '~/libs/string';
import { introStore } from '~/store/service';
import ErrorItems from '~/components/error/items.vue';
import Item from '~/components/pages/index/item.vue';
import Pagination from '~/components/navigation/pagination.vue';
import Loading from '~/components/loading/index.vue';

const route = useRoute();
const router = useRouter();
const intro = introStore();
const loading = ref(false);
const index = reactive({
  total: 0,
  items: [],
});
const error = ref(null);

async function fetch(): Promise<void>
{
  try
  {
    loading.value = true;
    let res = await $fetch(`/api/slideshow`, {
      method: 'post',
      responseType: 'json',
      body: {
        page: Number(route.query.page || 1),
        size: intro.size,
        field: 'address,title,description,regdate,thumbnail',
        q: route.query.q || '',
      },
    });
    if (!res.success) throw new Error('Failed get items.');
    error.value = null;
    index.total = res.total;
    index.items = res.items;
    loading.value = false;
  }
  catch(e)
  {
    if (process.dev) console.error(e.message);
    error.value = '오류가 발생했어요!';
  }
}

function onChangePage(page: number): void
{
  let params = {
    ...route.query,
    page: page > 1 ? page : undefined,
  };
  router.push(`./${serialize(params, true)}`);
}

watch(() => route.query.page, () => fetch());
watch(() => route.query.q, () => fetch());

// action
await fetch();
</script>

<style src="./index.scss" lang="scss" scoped></style>
