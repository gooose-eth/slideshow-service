const prefix = 'slideshow'

/**
 * check object
 *
 * @return {boolean}
 */
function checkObject()
{
  return !!window.localStorage
}

/**
 * get storage
 *
 * @param {string} key
 * @return {any}
 */
export function getStorage(key)
{
  if (!(checkObject() && key)) return undefined
  try
  {
    return JSON.parse(window.localStorage.getItem(`${prefix}-${key}`))
  }
  catch(e)
  {
    return undefined
  }
}

/**
 * set storage
 *
 * @param {string} key
 * @param {any} value
 */
export function setStorage(key, value)
{
  if (!(checkObject() && key && value)) return
  window.localStorage.setItem(`${prefix}-${key}`, JSON.stringify(value))
}
