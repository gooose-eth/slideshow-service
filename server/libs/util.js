const { NODE_ENV } = Bun.env
import { dateFormat } from './dates.js'

/**
 * is development
 * @return {boolean}
 */
export function isDev()
{
  return NODE_ENV === 'development'
}

/**
 * 업로드용 패스 만들기
 * @param {string} prefix
 * @return {string}
 */
export function getUploadPathName(prefix = '')
{
  let path = '/' + prefix
  path += '/' + dateFormat(new Date(), '{yyyy}-{MM}')
  path = path.replace(/\/\//gi, '/')
  return path
}
