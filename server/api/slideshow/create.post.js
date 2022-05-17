/**
 * slideshow / create
 */

import { testUrl, checkImage } from '../../libs/util.js';
import { create } from '../../db/queries.js';
import { createPassword, uniqueId } from '../../libs/password.js';

/**
 * check params
 * @params {object} body
 * @throws {Error}
 */
async function checkParams(body)
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
    const body = await useBody(e);
    await checkParams(body);
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
      slideshow: JSON.stringify(body.slideshow),
    });
    return {
      success: true,
      address,
    };
  }
  catch (e)
  {
    return {
      success: false,
      message: e.message,
    };
  }
};
