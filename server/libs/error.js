import { ERROR_CODE } from './assets.js'
import { isDev } from './entry-assets.js'

const _date = new Intl.DateTimeFormat('ko', { dateStyle: 'medium', timeStyle: 'medium' })

export function register(res, err)
{
  // TODO: 좀더 개선할 필요가 있을것이다.
  let dev = isDev()
  let status
  let message
  let date = new Date()
  switch (err.status || err.message)
  {
    case ERROR_CODE.NO_ITEMS:
      status = 204
      message = 'No items'
      break
    case ERROR_CODE.NO_PERMISSION:
      status = 403
      message = 'Forbidden'
      break
    case ERROR_CODE.NOT_FOUND:
      status = 404
      message = 'Not found item'
      break
    case ERROR_CODE.UNKNOWN:
    case ERROR_CODE.FAILED_EDIT:
    case ERROR_CODE.FAILED_DELETE:
    default:
      status = 500
      message = (dev && err.message) ? err.message : 'Service error'
      break
  }
  // console
  if (dev)
  {
    console.group('> SERVICE ERROR')
    console.error(`- Status: [${status}] ${err.status || 'unknown error'}`)
    console.error(`- Date: ${_date.format(date)}`)
    console.error(`- URL: ${res.req.url}`)
    console.error(`- Message: ${err.message}`)
    console.groupEnd()
  }
  return { status, message }
}
