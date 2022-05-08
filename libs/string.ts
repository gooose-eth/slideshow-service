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
