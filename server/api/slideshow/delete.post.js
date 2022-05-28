/**
 * slideshow / delete
 */

import { setupResource, useResource, checkAuthorization } from '../../init.js';
import { remove } from '../../db/queries.js';
import { disconnect } from '../../db/connect.js';
import { clearCookie } from '../../libs/token.js';
import { capture } from '../../libs/error.js';
import { CODE } from '../../../libs/error.ts';

let res;

export default async e => {
  try
  {
    await setupResource(e);
    res = useResource();
    if (!res.body.address) throw new Error('NO-ADDRESS');
    await checkAuthorization();
    clearCookie(res.evt, res.body.address);
    await remove(res.body.address);
    disconnect();
    return {
      success: true,
    };
  }
  catch (err)
  {
    await capture(['/api/slideshow/delete.post.js', 'default()'], err);
    disconnect();
    return {
      success: false,
      message: CODE[err.message] || 'Failed delete data.',
    };
  }
};
