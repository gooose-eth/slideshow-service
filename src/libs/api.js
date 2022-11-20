import { $fetch } from 'ohmyfetch'

let instance

function setup()
{
  if (instance) return
  instance = $fetch.create({
    baseURL: '/',
    retry: 1,
    responseType: 'json',
  })
}

export async function $get(url, params)
{
  if (!instance) setup()
  let res = await instance(url, {
    method: 'get',
    query: params,
  })
  return res
}

export async function post(url, data, options)
{
  if (!instance) setup()
  console.log('post')
}
