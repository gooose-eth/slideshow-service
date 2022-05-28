import { pureObject } from './object';
import { captureError } from './error';
import type { Preference } from '~/store/slideshow.d';

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

function checkNestedKeys(src: object, type: string, keys: string[]): void
{
  const address = keys.join('.');
  const message_errorType = `The type(${address}) is wrong.`;
  for (let i = 0; i < keys.length; i++)
  {
    if (!src || !src.hasOwnProperty(keys[i]))
    {
      throw new Error(`The item(${address}) is missing or invalid.`);
    }
    src = src[keys[i]];
  }
  switch (type)
  {
    case 'array':
      if (!Array.isArray(src)) throw new Error(message_errorType);
      break;
    case 'string':
      if (typeof src !== 'string') throw new Error(message_errorType);
      break;
    case 'number':
      if (typeof src !== 'number') throw new Error(message_errorType);
      break;
    case 'boolean':
      if (typeof src !== 'boolean') throw new Error(message_errorType);
      break;
    case 'object':
      if (typeof src !== 'object') throw new Error(message_errorType);
      break;
  }
}

export function checkPreference(item: Preference): boolean
{
  try
  {
    if (!item) throw new Error('no item');
    if (!(item.general && item.slides && item.style && item.keyboard)) throw new Error('no item property');
    // general
    checkNestedKeys(item, 'boolean', ['general', 'hud']);
    checkNestedKeys(item, 'boolean', ['general', 'hoverVisibleHud']);
    checkNestedKeys(item, 'boolean', ['general', 'clickVisibleHud']);
    checkNestedKeys(item, 'boolean', ['general', 'visibleHudContents', 'menu']);
    checkNestedKeys(item, 'boolean', ['general', 'visibleHudContents', 'caption']);
    checkNestedKeys(item, 'boolean', ['general', 'visibleHudContents', 'controller']);
    checkNestedKeys(item, 'boolean', ['general', 'visibleHudContents', 'paginate']);
    checkNestedKeys(item, 'boolean', ['general', 'visibleHudContents', 'group']);
    // slides
    checkNestedKeys(item, 'number', ['slides', 'initialNumber']);
    checkNestedKeys(item, 'string', ['slides', 'animationType']);
    checkNestedKeys(item, 'number', ['slides', 'animationSpeed']);
    checkNestedKeys(item, 'string', ['slides', 'captionAnimationType']);
    checkNestedKeys(item, 'number', ['slides', 'captionAnimationSpeed']);
    checkNestedKeys(item, 'boolean', ['slides', 'autoplay']);
    checkNestedKeys(item, 'number', ['slides', 'autoplayDelay']);
    checkNestedKeys(item, 'boolean', ['slides', 'autoplayDirection']);
    checkNestedKeys(item, 'boolean', ['slides', 'autoplayPauseOnHover']);
    checkNestedKeys(item, 'boolean', ['slides', 'loop']);
    checkNestedKeys(item, 'boolean', ['slides', 'swipe']);
    // style
    checkNestedKeys(item, 'string', ['style', 'screenColor']);
    checkNestedKeys(item, 'string', ['style', 'imageType']);
    checkNestedKeys(item, 'array', ['style', 'imageScale']);
    checkNestedKeys(item, 'number', ['style', 'captionScale']);
    checkNestedKeys(item, 'array', ['style', 'captionPosition']);
    // keyboard
    checkNestedKeys(item, 'boolean', ['keyboard', 'enabled']);
    return true;
  }
  catch(e)
  {
    if (process.dev) console.error(e.message);
    captureError(['/libs/slideshow.ts', 'checkPreference()'], 'error', e.message);
    return false;
  }
}

/**
 * set area true
 */
export function setAreaTrue(src: boolean[], total: number, current: number, loop: boolean): boolean[]
{
  function setTrue(sw)
  {
    if (sw)
    {
      if (src[current + 1] !== undefined) src[current + 1] = true;
    }
    else
    {
      if (src[current - 1] !== undefined) src[current - 1] = true;
    }
  }
  src = pureObject(src);
  if (loop)
  {
    if (current === 0)
    {
      src[total - 1] = true;
      setTrue(true);
    }
    else if (current === total - 1)
    {
      src[0] = true;
      setTrue(false);
    }
    else
    {
      setTrue(true);
      setTrue(false);
    }
  }
  else
  {
    setTrue(true);
    setTrue(false);
  }
  return src;
}

/**
 * move number
 */
export function moveNumber(total: number = 0, value: number = 0, loop: boolean = true): number
{
  if (total - 1 < value)
  {
    if (!loop) return total - 1;
    return 0;
  }
  else if (value < 0)
  {
    if (!loop) return 0;
    return total - 1;
  }
  else
  {
    return Number(value);
  }
}
