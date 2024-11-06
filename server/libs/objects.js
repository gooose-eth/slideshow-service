
/**
 * remove undefined value key in object
 * @param {object} obj
 * @return {any}
 */
export function removeUndefinedValueKey(obj)
{
  return Object.fromEntries(Object.entries(obj)
    .filter(([_, value]) => value !== undefined))
}
