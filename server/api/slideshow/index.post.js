/**
 * slideshow / index
 */

import { setupResource, useResource } from '../../init.js';
import { getItems, getCount } from '../../db/queries.js';

let res;

export default async e => {
  await setupResource(e);
  res = useResource();
  try
  {
    const { page, size, field, q, publicFilter } = res.body;
    const op = {
      page,
      size,
      field,
      q,
      publicFilter,
    };
    const total = await getCount(op);
    let items = await getItems(op);
    items = items.map(item => {
      return item.public === 0 ? {
        ...item,
        title: '비공개 슬라이드쇼',
        description: '비공개 슬라이드쇼입니다.',
        thumbnail: '',
      } : item;
    });
    return {
      success: true,
      total,
      items,
    };
  }
  catch (e)
  {
    console.error('ERROR', e.message);
    return {
      success: false,
      message: e.message,
    };
  }
};
