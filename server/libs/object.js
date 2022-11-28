/**
 * parse json
 *
 * @param {any} src
 * @return {any}
 */
export function parseJson(src)
{
  try
  {
    return JSON.parse(src)
  }
  catch (_) {
    return undefined
  }
}
