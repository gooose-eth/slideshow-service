/**
 * err
 * @param {array} path
 * @param {string} type
 * @param {string} message
 */
export function error(path, type = 'warning', message)
{
  if (DEV)
  {
    console.error(path.join('/'), `${type.toUpperCase()}`, message);
  }
}
