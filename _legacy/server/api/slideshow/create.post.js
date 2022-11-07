/**
 * slideshow / create
 */

import { setupResource, useResource } from '../../init.js';
import { create } from '../../db/slideshow.js';
import { disconnect } from '../../db/connect.js';
import { createPassword, uniqueId } from '../../libs/password.js';
import { testUrl, checkImage, replaceQuot } from '../../libs/util.js';
import { capture } from '../../libs/error.js';
import { CODE } from '../../../libs/error.ts';

let res;

async function submitCreate()
{
  checkParams();
  // check thumbnail image
  if (res.body.thumbnail) await checkImage(res.body.thumbnail);
  const { password, salt } = await createPassword(res.body.password);
  const address = uniqueId();
  // insert date
  await create({
    address,
    title: replaceQuot(res.body.title),
    description: replaceQuot(res.body.description),
    password,
    salt,
    thumbnail: res.body.thumbnail,
    public: res.body.public,
    slideshow: encodeURIComponent(JSON.stringify(res.body.slideshow)),
  });
  return {
    success: true,
    address,
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
    const { title, description, password, thumbnail, slideshow } = res.body;
    if (!title) throw new Error('no title');
    if (!description) throw new Error('no description');
    if (!password) throw new Error('no password');
    if (thumbnail) testUrl(thumbnail);
    if (!slideshow) throw new Error('no slideshow data');
    if (!(slideshow.tree && slideshow.preference && slideshow.group)) throw new Error('invalid slideshow');
  }
  catch (_)
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
      case 'submit':
        let result = await submitCreate();
        disconnect();
        return result;
      default:
        throw new Error('NO-MODE');
    }
  }
  catch (err)
  {
    await capture(['/api/slideshow/create.post.js', 'default()'], err);
    disconnect();
    return {
      success: false,
      message: CODE[err.message] || 'Failed create data.',
    };
  }
};
