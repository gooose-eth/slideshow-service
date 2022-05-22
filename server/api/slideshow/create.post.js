/**
 * slideshow / create
 */

import { testUrl, checkImage } from '../../libs/util.js';
import { create } from '../../db/queries.js';
import { createPassword, uniqueId } from '../../libs/password.js';

let evt, body;

async function submitCreate()
{
  await checkParams();
  // check thumbnail image
  if (body.thumbnail) await checkImage(body.thumbnail);
  const { password, salt } = await createPassword(body.password);
  const address = uniqueId();
  // insert date
  await create({
    address,
    title: body.title,
    description: body.description,
    password,
    salt,
    thumbnail: body.thumbnail,
    public: body.public,
    slideshow: encodeURIComponent(JSON.stringify(body.slideshow)),
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
async function checkParams()
{
  const { title, description, password, thumbnail, slideshow } = body;
  if (!title) throw new Error('no title');
  if (!description) throw new Error('no description');
  if (!password) throw new Error('no password');
  if (thumbnail) testUrl(thumbnail);
  if (!slideshow) throw new Error('no slideshow data');
  if (!(slideshow.tree && slideshow.preference && slideshow.group)) throw new Error('invalid slideshow');
}

export default async e => {
  try
  {
    evt = e;
    body = await useBody(evt);
    switch (body.mode)
    {
      case 'submit':
        return await submitCreate();
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
};
