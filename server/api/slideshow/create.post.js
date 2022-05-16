/**
 * slideshow / create
 */

import { testUrl } from '../../libs/util.js';

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
}

export default async e => {
  try
  {
    const body = await useBody(e);
    await checkParams(body);
    // console.log(body);
    return {
      success: true,
      address: 'foooo',
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
