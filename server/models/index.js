import { $fetch } from 'ohmyfetch'
import { getEnv } from '../libs/entry-assets.js'
import { filteringHostname } from '../libs/text.js'

// api instance
export let instance

// setup model api
export function setup()
{
  const { VITE_API_URL, VITE_API_TOKEN } = getEnv()
  instance = $fetch.create({
    baseURL: filteringHostname(VITE_API_URL),
    responseType: 'json',
    headers: {
      'Authorization': `Bearer ${VITE_API_TOKEN}`,
    },
    retry: 1,
  })
}
