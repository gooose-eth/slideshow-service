import { instance } from './index.js'
import { getEnv } from '../libs/entry-assets.js'
import { ERROR_CODE } from '../libs/assets.js'

function filteringSlides(src)
{
  return src.map(o => {
    return {
      srl: o.srl,
      title: o.name,
      description: o.description,
      thumbnail: o.path,
      regdate: o.regdate,
    }
  })
}

export async function modelHome({ page })
{
  let result = {
    total: 0,
    items: [],
  }
  const env = getEnv()
  const size = Number(env.VITE_INDEX_SIZE || 24)
  // get json items
  const res = await instance(`/json/`, {
    query: {
      field: 'srl,name,description,path,regdate',
      category: Number(env.VITE_JSON_CATEGORY),
      limit: `${(page-1)*size},${size}`,
    },
  })
  if (res?.success)
  {
    result.total = res.data?.total
    result.items = res.data?.index.length > 0 ? filteringSlides(res.data.index) : []
  }
  else
  {
    throw {
      status: ERROR_CODE.NOT_FOUND,
      message: 'not found items',
    }
  }
  // return
  return result
}
