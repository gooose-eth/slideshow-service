/**
 * slideshow / item
 */

import { setupResource, useResource } from '../../init.js';
import { getItem } from '../../db/slideshow.js';
import { disconnect } from '../../db/connect.js';
import { checkPassword } from '../../libs/password.js';
import { convertSlideshowResultData } from '../../libs/data.js';
import { getCookie, updateToken, makeToken, checkToken } from '../../libs/token.js';
import { capture } from '../../libs/error.js';
import { CODE } from '../../../libs/error.ts';

let res;

/**
 * get fetch item
 * @return {Promise<object>}
 */
async function getFetchItem()
{
  let item, token, check, data;
  item = await getItem(res.body.address);
  if (!item) throw new Error('NO-SLIDESHOW');
  item.slideshow = JSON.parse(decodeURIComponent(item.slideshow));
  if (item.public === 0)
  {
    // 비공개 데이터일 경우..
    if (res.body.token)
    {
      token = res.body.token;
    }
    else
    {
      const cookie = getCookie(res.evt, res.body.address);
      token = cookie?.token;
    }
    if (token)
    {
      check = checkToken(token, item.salt);
      data = convertSlideshowResultData(item);
      data.token = token;
      if (check)
      {
        updateLog(res.evt, res.body).then();
        return {
          success: true,
          data,
        };
      }
    }
    return {
      success: true,
      data: null,
    };
  }
  else
  {
    // 공개용 데이터일 경우..
    updateLog(res.evt, res.body).then();
    return {
      success: true,
      data: convertSlideshowResultData(item),
    };
  }
}

/**
 * submit authorization
 * @return {Promise<object>}
 */
async function submitAuthorization()
{
  let item, check, token;
  if (!res.body.address) throw new Error('NO-ADDRESS');
  if (!res.body.password) throw new Error('NO-PASSWORD');
  item = await getItem(res.body.address);
  check = checkPassword(res.body.password, item.password, item.salt);
  if (!check) throw new Error('NOT-MATCH-PASSWORD');
  token = makeToken(item.salt);
  updateToken(res.evt, res.body.address, { token });
  item.slideshow = JSON.parse(decodeURIComponent(item.slideshow));
  return {
    success: true,
    data: {
      address: item.address,
      title: item.title,
      description: item.description,
      slideshow: item.slideshow,
      thumbnail: item.thumbnail,
      public: item.public,
      regdate: item.regdate,
      update: item.update,
      token,
    },
  };
}

async function updateLog(evt, body)
{
  // TODO: 추후에 로그 데이터 업데이트하기
}

export default async e => {
  try
  {
    let result;
    await setupResource(e);
    res = useResource();
    switch (res.body.mode)
    {
      case 'fetch':
        result = await getFetchItem();
        disconnect();
        return result;
      case 'submit-authorization':
        result = await submitAuthorization();
        disconnect();
        return result;
      default:
        throw new Error('NO-MODE');
    }
  }
  catch (err)
  {
    disconnect();
    await capture(['/api/slideshow/watch.post.js', 'default()'], err);
    return {
      success: false,
      message: CODE[err.message] || 'Failed get data.',
    };
  }
}