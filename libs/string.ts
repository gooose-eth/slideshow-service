export function validUrl(str: string): boolean
{
  if (!str) return false;
  let url;
  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
}

export function twoDigit(day: number|string): string
{
  return `0${day}`.slice(-2);
}

export function serialize(obj: object, usePrefix: boolean = false): string
{
  let str: string[] = [];
  let res: string = '';
  for (let p in obj)
  {
    if (obj.hasOwnProperty(p) && obj[p] !== undefined)
    {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  res = str.join('&');
  return (res && usePrefix ? '?' : '') + res;
}
