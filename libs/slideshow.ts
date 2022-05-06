interface Slide {
  src: string
  title?: string
  description?: string
}
export function checkSlideItems(items: Slide[]): void
{
  if (!(items && typeof items === 'object')) throw new Error('Invalid slides data');
  for (let i=0; i<items.length; i++)
  {
    if (!(items[i] && items[i].src))
    {
      throw new Error(`The item[${i}] of this item is invalid.`);
    }
  }
}

export function checkTree(src: any): boolean
{
  if (!src) throw new Error('No value');
  if (typeof src !== 'object') throw new Error('This value is not an object.');
  let keys = Object.keys(src);
  for (let i = 0; i < keys.length; i++)
  {
    // for address
    if (typeof src[keys[i]].slides === 'string') continue;
    if (!Array.isArray(src[keys[i]].slides))
    {
      throw new Error(`not array item: item.${keys[i]}`);
    }
    if (src[keys[i]].length <= 0) continue;
    checkSlideItems(src[keys[i]]);
  }
  return true;
}

export function objectToString(src: any, space: number = 2): string
{
  return JSON.stringify(src, null, space);
}

export function getFileData(file: File, parse: boolean = true): Promise<object|any[]>
{
  return new Promise((resolve, reject) => {
    try
    {
      if (!(file)) throw new Error('no file');
      const reader: FileReader = new FileReader();
      reader.onload = e => {
        try
        {
          let target: any = e.target;
          resolve(parse ? JSON.parse(target.result) : target.result);
        }
        catch(e)
        {
          reject(new Error(e.message || 'failed get file data'));
        }
      };
      reader.readAsText(file);
    }
    catch(e)
    {
      reject(new Error(e.message || 'failed get file data'));
    }
  });
}
