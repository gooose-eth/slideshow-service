let prefix = 'slideshow';
let disableStorage = {
  preference: false,
  tree: false,
};

/**
 * check localStorage
 *
 * @return {boolean}
 */
function checkObject()
{
  return !!window.localStorage;
}

/**
 * change prefix
 *
 * @param {string} newPrefix
 */
export function changePrefix(newPrefix)
{
  prefix = newPrefix;
}

/**
 * get value in localStorage
 *
 * @param {string} key
 * @returns {object}
 */
export function get(key)
{
  if (disableStorage[key]) return;
  if (!(checkObject() && key)) return undefined;
  try
  {
    return JSON.parse(window.localStorage.getItem(`${prefix}_${key}`));
  }
  catch(e)
  {
    return undefined;
  }
}

/**
 * set value in localStorage
 *
 * @param {string} key
 * @param {any} value
 */
export function set(key, value)
{
  if (disableStorage[key]) return;
  if (!(checkObject() && key && value)) return;
  window.localStorage.setItem(`${prefix}_${key}`, JSON.stringify(value));
}

/**
 * disabled storage
 */
export function disabled(key)
{
  switch (key)
  {
    case 'preference':
    case 'tree':
    case 'group':
      disableStorage[key] = true;
      break;
  }
}
