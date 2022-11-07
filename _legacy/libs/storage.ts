const prefix = 'slideshow';

function checkObject(): boolean
{
  if (!process.client) return false;
  return !!window.localStorage;
}

export function getStorage(key: string): any
{
  if (!(checkObject() && key)) return undefined;
  try
  {
    return JSON.parse(window.localStorage.getItem(`${prefix}-${key}`));
  }
  catch(e)
  {
    return undefined;
  }
}

export function setStorage(key: string, value: any): void
{
  if (!(checkObject() && key && value)) return;
  window.localStorage.setItem(`${prefix}-${key}`, JSON.stringify(value));
}
