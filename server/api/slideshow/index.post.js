/**
 * slideshow / index
 */

import { getItems } from '../../db/queries.js';

export default async e => {
  try
  {
    const body = await useBody(e);
    const res = await getItems({
      page: body.page,
      size: body.size,
    });
    // TODO: 디비에서 데이터 가져오기 작업
    return {
      success: true,
      total: 100,
      items: [1,2,3,4,5],
    };
  }
  catch (e)
  {
    console.group('ERROR');
    console.error(e);
    console.groupEnd();
    return {
      success: false,
      message: e.message,
    };
  }
};
