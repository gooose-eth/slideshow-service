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

/**
 * convert date format
 * format guide: `{yyyy}-{MM}-{dd} / {hh}:{mm}:{ss}`
 *
 * @param {Date} date
 * @param {string} format
 * @return {string}
 */
export function dateFormat(date, format)
{
  let mix = format.replace(/\{yyyy\}/, String(date.getFullYear()))
  mix = mix.replace(/\{MM\}/, twoDigit(date.getMonth() + 1))
  mix = mix.replace(/\{dd\}/, twoDigit(date.getDate()))
  mix = mix.replace(/\{hh\}/, twoDigit(date.getHours()))
  mix = mix.replace(/\{mm\}/, twoDigit(date.getMinutes()))
  mix = mix.replace(/\{ss\}/, twoDigit(date.getSeconds()))
  return mix
}
