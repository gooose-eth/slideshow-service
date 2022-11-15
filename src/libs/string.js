/**
 * serialize
 *
 * @param {object} obj
 * @param {boolean} usePrefix
 * @return {string}
 */
export function serialize(obj, usePrefix = false)
{
  let str = []
  let res
  for (let p in obj)
  {
    if (obj.hasOwnProperty(p) && obj[p] !== undefined)
    {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  }
  res = str.join('&')
  return (res && usePrefix ? '?' : '') + res
}
