/**
 * validate url
 *
 * @param {string} url
 * @return {boolean}
 */
export function validateUrl(url)
{
  try
  {
    new URL(url);
    return true;
  }
  catch(e)
  {
    return false;
  }
}
