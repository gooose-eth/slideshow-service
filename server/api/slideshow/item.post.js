/**
 * slideshow / item
 */

import { getItem } from '../../db/queries.js';

export default async e => {
  try
  {
    const { address, field } = await useBody(e);
    let item = await getItem({
      address,
      field,
    });
    if (!item) throw new Error('NO-SLIDESHOW');
    item.slideshow = JSON.parse(decodeURIComponent(item.slideshow));
    return {
      success: true,
      item,
    };
  }
  catch (e)
  {
    return {
      success: false,
      message: 'NO-SLIDESHOW',
    };
  }
}
