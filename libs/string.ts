export function convertStringToObject(str: string): object
{
  try
  {
    if (!str) throw new Error('no data');
    return JSON.parse(decodeURIComponent(str));
  }
  catch(e)
  {
    return {};
  }
}
