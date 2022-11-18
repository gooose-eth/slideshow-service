import { instance } from './index.js'
import { ERROR_CODE } from '../libs/assets.js'
import { getEnv } from "../libs/entry-assets.js";

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

/**
 * model admin
 *
 * @param {string} token
 * @param {number} page
 * @return {Promise<object>}
 */
export async function modelAdminItems({ token, page })
{
  let result = {
    total: 0,
    items: [],
  }
  const env = getEnv()
  const size = Number(env.VITE_INDEX_SIZE || 24)
  // get json items
  const res = await instance(`/json/`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
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
  // result
  return result
}

export async function modelAdminCreateItem({ token, body })
{
  let result = {}
  const env = getEnv()
  console.log(token, body)
  // const res = await instance(`/json/`, {
  //   method: 'post',
  //   headers: {
  //     'Authorization': `Bearer ${token}`,
  //   },
  //   body,
  // })
  // if (res?.success)
  // {
  //   //
  // }
  return {}
}

export async function modelAdminEditItem({})
{
  return {}
}

export async function modelAdminDeleteItem({})
{
  return {}
}

// TODO: 슬라이드 만들기
// TODO: 슬라이드 수정
// TODO: 슬라이드 삭제
