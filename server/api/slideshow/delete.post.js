/**
 * slideshow / delete
 */

import { setupResource, useResource, checkAuthorization } from '../../init.js';
import { remove } from '../../db/queries.js';
import { clearCookie } from '../../libs/token.js';
import { capture } from '../../libs/error.js';

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
    return {
      success: true,
    };
  }
  catch (err)
  {
    await capture(['/api/slideshow/delete.post.js', 'default()'], err);
    return {
      success: false,
      message: 'Failed delete data.',
    };
  }
};
