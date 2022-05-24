/**
 * slideshow / item
 */

import { setupResource, useResource } from '../../init.js';
import { getItem } from '../../db/queries.js';
import { checkPassword } from '../../libs/password.js';
import { getCookie, updateToken, makeToken, checkToken } from '../../libs/token.js';

let res;

/**
 * get fetch item
 * @return {Promise<object>}
 */
async function getFetchItem()
{
  function makeResultData(item)
  {
    return {
      address: item.address,
      title: item.title,
      description: item.description,
      slideshow: item.slideshow,
      thumbnail: item.thumbnail,
      public: item.public,
      regdate: item.regdate,
      update: item.update,
    };
  }

  let item, token, check, data;
  item = await getItem({
    address: res.body.address,
    field: '*',
  });
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
      data = makeResultData(item);
      data.token = token;
      if (check)
      {
        updateLog(res.evt, res.body);
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
    updateLog(res.evt, res.body);
    return {
      success: true,
      data: makeResultData(item),
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
  item = await getItem({
    address: res.body.address,
    field: '*',
  });
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

function updateLog(evt, body)
{
  //
}

export default async e => {
  try
  {
    await setupResource(e);
    res = useResource();
    switch (res.body.mode)
    {
      case 'fetch':
        return await getFetchItem();
      case 'submit-authorization':
        return await submitAuthorization();
      default:
        throw new Error('NO-MODE');
    }
  }
  catch (err)
  {
    return {
      success: false,
      message: err.message,
    };
  }
}
