/**
 * two digit
 *
 * @param {number} day
 * @returns {string}
 */
export function twoDigit(day)
{
  return `0${day}`.slice(-2)
}

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

export function validUrl(str)
{
  if (!str) return false
  let url
  try {
    url = new URL(str)
  } catch (_) {
    return false
  }
  return url.protocol === 'http:' || url.protocol === 'https:'
}
