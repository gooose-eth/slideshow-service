const { NODE_ENV } = Bun.env

/**
 * is development
 * @return {boolean}
 */
export function isDev()
{
  return NODE_ENV === 'development'
}
