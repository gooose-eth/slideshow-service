/**
 * slideshow / public-address / item
 */

import { setupResource, useResource } from '../../../init.js';
import { getItem as getSlideshowItem } from '../../../db/slideshow.js';
import { getItem as getPublicKeyItem } from '../../../db/publicKey.js';
import { convertSlideshowResultData } from '../../../libs/data.js';
import { disconnect } from '../../../db/connect.js';
import { capture } from '../../../libs/error.js';
import { CODE } from '../../../../libs/error.ts';

let res;

export default async e => {
  try
  {
    await setupResource(e);
    res = useResource();
    if (!/^key-/.test(res.body.key)) throw new Error(CODE['INVALID-ADDRESS']);
    const address = res.body.key.replace(/^key-/, '');
    const publicKeyItem = await getPublicKeyItem(address);
    if (!publicKeyItem)
    {
      throw new Error(CODE['INVALID-ADDRESS']);
    }
    const diff = diffDate(publicKeyItem.expiry);
    if (!diff) throw new Error('EXPIRED-KEY');
    const slideshowItem = await getSlideshowItem(publicKeyItem.address, '*');
    if (!slideshowItem) throw new Error('no item');
    await disconnect();
    return {
      success: true,
      data: {
        publicKey: publicKeyItem,
        item: convertSlideshowResultData(slideshowItem, true),
      },
    };
  }
  catch (err)
  {
    await capture(['/api/slideshow/public-address/watch.post.js', 'default()'], err);
    return {
      success: false,
      message: CODE[err.message] || 'Failed get data.',
    };
  }
}

/**
 * diff date
 * @param {string} expiry 날짜가 내일이상인지 확인한다.
 * @return {boolean} expiry 날짜가 내일 이상이다.
 */
function diffDate(expiry)
{
  process.env.TZ = res.env.TIMEZONE;
  let now = new Date();
  now.setHours(0,0,0,0);
  let date = new Date(expiry);
  date.setHours(0,0,0,0);
  return date.getTime() >= now.getTime();
}
