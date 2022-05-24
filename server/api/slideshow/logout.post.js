/**
 * logout
 */

import { setupResource, useResource, checkAuthorization } from '../../init.js';
import { clearCookie } from '../../libs/token.js';

let res;

export default async (e) => {
  try
  {
    await setupResource(e);
    res = useResource();
    if (!res.body.address) throw new Error('NO-ADDRESS');
    await checkAuthorization();
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
