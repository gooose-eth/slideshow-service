let originalPrefix = 'slideshow-service';
let prefix = originalPrefix;

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
 * @param {string} hash
 */
export function changePrefix(hash)
{
  prefix = originalPrefix + '-' + hash;
}

/**
 * get value in localStorage
 *
 * @param {string} key
 * @returns {object}
 */
export function get(key)
{
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
  if (!(checkObject() && key && value)) return;
  window.localStorage.setItem(`${prefix}_${key}`, JSON.stringify(value));
}
