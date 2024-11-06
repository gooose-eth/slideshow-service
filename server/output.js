import ipware from 'ipware'
import { dateFormat } from './libs/dates.js'

const ipWareInstance = ipware()
const dateFormatText = '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}'

/**
 * 응답 성공
 * @param {any} req
 * @param {any} res
 * @param {object} options
 */
export function success(req, res, options = {})
{
  const { code, message } = options
  res.runTime.stop()
  // TODO: 로그 기록하기
  res
    .status(options.code || 200)
    .json({
      ...options,
      code: undefined,
      time: dateFormat(new Date(), dateFormatText),
      runTime: res.runTime.result(),
    })
}

export function error(req, res, options = {})
{
  const { message, code } = options
  res.runTime.stop()
  // TODO: 로그 기록하기
  res
    .status(code || 500)
    .json({
      message: message || 'Unknown error',
      time: dateFormat(new Date(), dateFormatText),
      runTime: res.runTime.result(),
    })
}

