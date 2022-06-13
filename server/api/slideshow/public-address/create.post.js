/**
 * slideshow / public-address / create
 */

import { setupResource, useResource, checkAuthorization } from '../../../init.js';
import { getItem } from '../../../db/slideshow.js';
import { create } from '../../../db/publicKey.js';
import { disconnect } from '../../../db/connect.js';
import { makePublicToken } from '../../../libs/token.js';
import { capture } from '../../../libs/error.js';
import { CODE } from '../../../../libs/error.ts';

let res;

export default async e => {
  try
  {
    let item;
    await setupResource(e);
    res = useResource();
    if (!res.body.address) throw new Error('NO-ADDRESS');
    // check authorization
    await checkAuthorization();
    // check body
    if (!res.body.expiry) throw new Error('no expiry');
    // check item
    item = await getItem(res.body.address, 'address');
    if (item.address !== res.body.address) throw new Error('INVALID-ADDRESS');
    const publicKey = makePublicToken();
    // insert item
    await create({
      token: publicKey,
      address: res.body.address,
      expiry: res.body.expiry,
    });
    disconnect();
    return {
      success: true,
      data: {
        key: publicKey,
        address: res.body.address,
      },
    };
  }
  catch (err)
  {
    disconnect();
    await capture(['/api/slideshow/public-address/create.post.js', 'default()'], err);
    return {
      success: false,
      message: CODE[err.message] || 'Failed create public address.',
    };
  }
}
