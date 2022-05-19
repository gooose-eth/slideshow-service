<template>
<article class="index">
  <h1 class="index__title">Slideshow items</h1>
  <div class="index__body">
    <Loading v-if="loading" message="불러오는 중.."/>
    <template v-else>
      <ErrorItems
        v-if="!!index.error"
        :message="index.error"
        class="index__error"/>
      <ul v-else-if="index.items?.length > 0" class="index__items">
        <li v-for="item in index.items">
          <Item
            address="qweqwe"
            img="img"
            title="훈지훈지 사진첩"
            description="느얗 능해 ㄴㅇ흐ㅔㄴㅇ ㅔㄴㅇㅎ"
            date="0000-00-00"/>
        </li>
      </ul>
      <ErrorItems
        v-else
        type="empty"
        message="슬라이드쇼가 없어요!"/>
    </template>
    <nav v-if="index.total > 0" class="index__paginate">
      <Pagination
        v-model="index.page"
        :total="index.total"
        :size="index.size"
        :range="5"/>
    </nav>
  </div>
  <pre>{{index}}</pre>
</article>
</template>

<script lang="ts" setup>
import ErrorItems from '~/components/error/items.vue';
import Item from '~/components/pages/index/item.vue';
import Pagination from '~/components/navigation/pagination.vue';
import Loading from '~/components/loading/index.vue';

const loading = ref(false);
const index = reactive({
  total: 0,
  items: [],
  page: 1,
  size: 3,
  error: null,
});

async function fetch(): Promise<void>
{
  try
  {
    loading.value = true;
    let res = await $fetch(`/api/slideshow`, {
      method: 'post',
      responseType: 'json',
      body: {
        page: index.page,
        size: index.size,
      },
    });
    if (!res.success) throw new Error('Failed get items.');
    index.error = null;
    index.total = res.total;
    index.items = res.items;
    loading.value = false;
  }
  catch(e)
  {
    if (process.dev) console.error(e.message);
    index.error = '오류가 발생했어요!';
  }
}

watch(() => index.page, () => fetch());

// action
await fetch();
</script>

<style src="./index.scss" lang="scss" scoped></style>
