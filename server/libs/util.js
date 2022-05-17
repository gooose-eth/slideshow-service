import { $fetch } from 'ohmyfetch';

/**
 * exit
 * @param {Error} error
 */
export function exit(error = undefined)
{
  if (error)
  {
    console.group('ERROR =>');
    console.error(error.message);
    console.groupEnd();
  }
  process.exit(0);
}

/**
 * test URL
 * @param {string} str
 * @return {boolean}
 */
export function testUrl(str)
{
  let url;
  try
  {
    url = new URL(str);
  }
  catch (_)
  {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
}

/**
 * check image
 * @param {string} path
 * @return {Promise<void>}
 * @throws {Error}
 */
export async function checkImage(path)
{
  let res = await $fetch(path);
  if (!/^image/.test(res.type)) throw new Error('no image file');
}
