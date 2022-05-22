/**
 * slideshow / item
 */

import { getItem } from '../../db/queries.js';
import { checkPassword } from '../../libs/password.js';
import { getCookie, updateToken, makeToken, checkToken } from '../../libs/token.js';

let evt, body

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

  let item, token, check;
  item = await getItem({
    address: body.address,
    field: '*',
  });
  if (!item) throw new Error('NO-SLIDESHOW');
  item.slideshow = JSON.parse(decodeURIComponent(item.slideshow));
  if (item.public === 0)
  {
    // 비공개 데이터일 경우..
    if (body.token)
    {
      token = body.token;
    }
    else
    {
      const cookie = getCookie(evt, body.address);
      token = cookie?.token;
    }
    if (token)
    {
      check = checkToken(token, item.salt);
      if (check)
      {
        updateLog(evt, body);
        return {
          success: true,
          data: makeResultData(item),
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
    updateLog(evt, body);
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
  let item, check;
  if (!body.address) throw new Error('NO-ADDRESS');
  if (!body.password) throw new Error('NO-PASSWORD');
  item = await getItem({
    address: body.address,
    field: '*',
  });
  check = checkPassword(body.password, item.password, item.salt);
  if (!check) throw new Error('NOT-MATCH-PASSWORD');
  updateToken(evt, body.address, {
    token: makeToken(item.salt),
  });
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
    },
  };
}

function updateLog(evt, body)
{

}

export default async e => {
  try
  {
    evt = e;
    body = await useBody(evt);
    switch (body.mode)
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
