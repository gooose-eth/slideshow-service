/**
 * slideshow / index
 */

import { getItems, getCount } from '../../db/queries.js';

export default async e => {
  try
  {
    const { page, size, field, q } = await useBody(e);
    const op = {
      page,
      size,
      field,
      q,
    };
    const total = await getCount(op);
    const items = await getItems(op);
    return {
      success: true,
      total,
      items,
    };
  }
  catch (e)
  {
    console.log(e.message)
    return {
      success: false,
      message: e.message,
    };
  }
};
