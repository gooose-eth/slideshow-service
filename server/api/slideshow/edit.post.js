/**
 * slideshow / edit
 */

import { getItem } from '../../db/queries.js';
import { checkPassword, createPassword } from '../../libs/password.js';
import { makeToken, updateToken, checkToken, getCookie } from '../../libs/token.js';
import { checkImage, testUrl, replaceQuot } from '../../libs/util.js';
import { edit } from '../../db/queries.js';

let evt, body;

/**
 * authorization
 * @return {Promise<object>}
 */
async function authorization()
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
  }
}

/**
 * submit edit
 * @return {Promise<object>}
 */
async function submitEdit()
{
  checkParams();
  // get cookie
  const cookie = getCookie(evt, body.address);
  let token = cookie?.token;
  if (!token) throw new Error('NO-TOKEN');
  // get item
  let item = await getItem({
    address: body.address,
    field: 'salt',
  });
  // check token
  if (!checkToken(token, item.salt)) throw new Error('INVALID-TOKEN');
  // update item
  // TODO: 제목과 설명항목에서 큰따옴표와 작은 따옴표 변환처리를 하는것부터 시작해야겠다.
  console.log(replaceQuot(body.title))
  let data = {
    title: replaceQuot(body.title),
    description: body.description,
    public: body.public,
    slideshow: encodeURIComponent(JSON.stringify(body.slideshow)),
  }
  if (body.password)
  {
    const { password, salt } = await createPassword(body.password);
    data.password = password;
    data.salt = salt;
  }
  if (body.thumbnail)
  {
    await checkImage(body.thumbnail);
    data.thumbnail = body.thumbnail;
  }
  await edit(body.address, data);
  console.log('COMPLETE EDIT DATA')
  return {
    success: true,
  };
}

/**
 * check params
 * @throws {Error}
 */
function checkParams()
{
  try
  {
    const { title, description, password, thumbnail, slideshow } = body;
    if (!title) throw new Error('ERROR-PARAM');
    if (!description) throw new Error('no description');
    if (thumbnail) testUrl(thumbnail);
    if (!slideshow) throw new Error('no slideshow data');
    if (!(slideshow.tree && slideshow.preference && slideshow.group)) throw new Error('invalid slideshow');
  }
  catch(_)
  {
    throw new Error('ERROR-PARAMS');
  }
}

export default async e => {
  try
  {
    evt = e;
    body = await useBody(evt);
    switch (body.mode)
    {
      case 'authorization':
        return await authorization();
      case 'submit-authorization':
        return await submitAuthorization();
      case 'submit':
        return await submitEdit();
      default:
        throw new Error('NO-MODE');
    }
  }
  catch(err)
  {
    return {
      success: false,
      message: err.message,
    };
  }
};
