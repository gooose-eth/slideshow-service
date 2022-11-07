export function twoDigit(day)
{
  return `0${day}`.slice(-2)
}

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

export function convertUrl(url = '')
{
  return /\/$/.test(url) ? url : `${url}/`
}
