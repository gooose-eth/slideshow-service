/**
 * logout
 */

import { setupResource, useResource } from '../../init.js';
import { getItem } from '../../db/queries.js';
import { checkToken, clearCookie } from '../../libs/token.js';

let res;

export default async (e) => {
  try
  {
    await setupResource(e);
    res = useResource();
    let item, check;
    if (!res.body.address) throw new Error('NO-ADDRESS');
    if (!res.body.token) throw new Error('NO-TOKEN');
    item = await getItem({
      address: res.body.address,
      field: 'salt',
    });
    check = checkToken(res.body.token, item.salt);
    if (!check) throw new Error('INVALID-TOKEN');
    clearCookie(res.evt, res.body.address);
    return {
      success: true,
    };
  }
  catch (err)
  {
    return {
      success: false,
      message: err.message,
    };
  }
};
