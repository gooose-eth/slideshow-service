/**
 * slideshow / index
 */

import { setupResource, useResource } from '../../init.js';
import { getItems, getCount } from '../../db/queries.js';
import { capture } from '../../libs/error.js';

let res;

export default async e => {
  try
  {
    await setupResource(e);
    res = useResource();
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
  catch (err)
  {
    await capture(['/api/slideshow/index.post.js', 'default()'], err);
    return {
      success: false,
      message: 'Failed get data index.',
    };
  }
};
