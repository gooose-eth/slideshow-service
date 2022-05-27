/**
 * slideshow / edit
 */

import { setupResource, useResource, checkAuthorization } from '../../init.js';
import { getItem, edit } from '../../db/queries.js';
import { checkPassword, createPassword } from '../../libs/password.js';
import { makeToken, updateToken, checkToken, getCookie } from '../../libs/token.js';
import { checkImage, testUrl, replaceQuot } from '../../libs/util.js';
import { capture } from '../../libs/error.js';

let res;

/**
 * authorization
 * @return {Promise<object>}
 */
async function authorization()
{
  let item, check, token;
  if (!res.body.address) throw new Error('NO-ADDRESS');
  if (res.body.token)
  {
    token = res.body.token;
  }
  else
  {
    const cookie = getCookie(res.evt, res.body.address);
    token = cookie?.token;
  }
  if (!token) throw new Error('NO-TOKEN');
  item = await getItem({ address: res.body.address });
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
      token,
    },
  };
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
    item: {
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
  }
}

/**
 * submit edit
 * @return {Promise<object>}
 */
async function submitEdit()
{
  await checkAuthorization();
  checkParams();
  // update item
  let data = {
    title: replaceQuot(res.body.title),
    description: replaceQuot(res.body.description),
    public: String(res.body.public),
    slideshow: encodeURIComponent(JSON.stringify(res.body.slideshow)),
  }
  if (res.body.password)
  {
    const { password, salt } = await createPassword(res.body.password);
    data.password = password;
    data.salt = salt;
  }
  if (res.body.thumbnail)
  {
    await checkImage(res.body.thumbnail);
    data.thumbnail = res.body.thumbnail;
  }
  await edit(res.body.address, data);
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
    const { title, description, thumbnail, slideshow } = res.body;
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
    await setupResource(e);
    res = useResource();
    switch (res.body.mode)
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
    await capture(['/api/slideshow/edit.post.js', 'default()'], err);
    return {
      success: false,
      message: 'Failed edit data.',
    };
  }
};
