import { instance } from './index.js'
import { ERROR_CODE } from '../libs/assets.js'

/**
 * model json
 *
 * @param {number} srl
 * @return {Promise<object>}
 */
export async function modelWatch(srl)
{
  if (!(srl > 0))
  {
    throw {
      status: ERROR_CODE.NOT_FOUND,
      message: 'no srl',
    }
  }
  let result = {
    srl: 0,
    title: '',
    description: '',
    json: {},
    thumbnail: '',
    regdate: '',
  }
  const res = await instance(`/json/${srl}/`)
  if (!(res.success && res.data?.srl))
  {
    throw {
      status: ERROR_CODE.NOT_FOUND,
      message: 'not found item',
    }
  }
  result.srl = res.data.srl
  result.title = res.data.name
  result.description = res.data.description
  result.json = res.data.json
  result.thumbnail = res.data.path
  result.regdate = res.data.regdate
  return result
}
