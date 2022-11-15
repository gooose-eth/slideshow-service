import { instance } from './index.js'
import { getEnv } from '../libs/entry-assets.js'
import { ERROR_CODE } from '../libs/assets.js'
import { dateFormat } from '../libs/date.js'

function filteringSlides()
{

}

export async function modelHome({ page })
{
  let result = {
    total: 0,
    items: [],
  }
  const env = getEnv()
  const size = Number(env.VITE_INDEX_SIZE || 24)
  const baseQuery = {
    category: env.VITE_JSON_CATEGORY,
  }
  // get json items
  // TODO: 여기서부터..

  // return
  return result
}
