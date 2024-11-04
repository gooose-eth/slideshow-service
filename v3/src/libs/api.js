import { ofetch } from 'ofetch'

let instance

function setup()
{
  if (instance) return
  instance = ofetch.create({
    baseURL: '/',
    retry: 1,
    responseType: 'json',
  })
}

export async function $get(url, params)
{
  if (!instance) setup()
  return await instance(url, {
    method: 'get',
    query: params,
  })
}

export async function $post(url, data, options)
{
  if (!instance) setup()
  return await instance(url, {
    method: 'post',
    body: data,
  })
}

export function formData(src)
{
  if (!src) return null
  let data = new FormData()
  Object.keys(src).forEach(o => data.append(o, src[o]))
  return data
}
