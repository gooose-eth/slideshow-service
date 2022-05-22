/**
 * slideshow / edit
 */

import { getItem } from '../../db/queries.js';
import { checkPassword } from '../../libs/password.js';
import { makeToken, updateToken, checkToken, getCookie } from '../../libs/token.js';

/**
 * authorization
 * @param {any} evt
 * @param {any} body
 * @return {Promise<object>}
 */
async function authorization(evt, body)
{
  let item, check, token;
  if (!body.address) throw new Error('NO-ADDRESS');
  if (body.token)
  {
    token = body.token;
  }
  else
  {
    const cookie = getCookie(evt, body.address);
    token = cookie?.token;
  }
  if (!token) throw new Error('NO-TOKEN');
  item = await getItem({ address: body.address });
  check = checkToken(token, item.salt);
  if (!check) throw new Error('INVALID-TOKEN');
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

/**
 * submit authorization
 * @param {any} evt
 * @param {any} body
 * @return {Promise<object>}
 */
async function submitAuthorization(evt, body)
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
  }
}

/**
 * submit edit
 * @param {any} evt
 * @param {any} body
 * @return {Promise<object>}
 */
async function submitEdit(evt, body)
{
  console.log('TODO: 여기서부터 작업하기');
  return {
    success: true,
    message: 'slideshow / edit',
  };
}

export default async evt => {
  try
  {
    const body = await useBody(evt);
    switch (body.mode)
    {
      case 'authorization':
        return await authorization(evt, body);
      case 'submit-authorization':
        return await submitAuthorization(evt, body);
      case 'submit':
        return await submitEdit(evt, body);
      default:
        throw new Error('NO-MODE');
    }
  }
  catch(e)
  {
    return {
      success: false,
      message: e.message,
    };
  }
};
