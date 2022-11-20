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
 * model manage
 *
 * @param {string} token
 * @param {number} page
 * @return {Promise<object>}
 */
export async function modelManageItems({ token, page })
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

/**
 * model manage create item
 *
 * @param {string} token
 * @param {object} body
 * @return {Promise<any>}
 */
export async function modelManageCreateItem({ token, body })
{
  const res = await instance(`/json/`, {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body,
  })
  if (res?.success)
  {
    return {
      success: true,
      srl: res.srl
    }
  }
  else
  {
    throw {
      success: false,
      status: ERROR_CODE.FAILED_CREATE,
      message: 'failed create slide',
    }
  }
}

/**
 * model manage edit item
 *
 * @param {string} token
 * @param {number} srl
 * @param {object} body
 * @return {Promise<any>}
 */
export async function modelManageEditItem({ token, srl, body })
{
  const res = await instance(`/json/${srl}/edit/`, {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body,
  })
  if (res.success)
  {
    return { success: true }
  }
  else
  {
    throw {
      success: false,
      status: ERROR_CODE.FAILED_EDIT,
      message: 'failed edit slide',
    }
  }
}

/**
 * model manage delete item
 *
 * @param {string} token
 * @param {number} srl
 * @return {Promise<any>}
 */
export async function modelManageDeleteItem({ token, srl })
{
  const res = await instance(`/json/${srl}/delete/`, {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  if (res.success)
  {
    return { success: true }
  }
  else
  {
    throw {
      success: false,
      status: ERROR_CODE.FAILED_DELETE,
      message: 'failed delete slide',
    }
  }
}
