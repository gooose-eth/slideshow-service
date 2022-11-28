import { serialize } from './text.js'

/**
 * create paginate
 *
 * @param {number} total
 * @param {number} page
 * @param {number} size
 * @param {number} range
 * @param {string} baseUrl
 * @param {object} query
 * @return {array}
 */
export function createPaginate(total = 0, page = 1, size = 24, range = 10, baseUrl = './', query = {})
{
  page = Number(page) > 1 ? Number(page) : 1
  let items = []
  const count = Math.ceil(total / size)
  const block = Math.floor((page - 1) / range)
  function makeUrl(n = 1)
  {
    let newQuery = query ? JSON.parse(JSON.stringify(query)) : {}
    newQuery.page = n
    if (newQuery.page === 1) delete newQuery.page
    return `${baseUrl}${serialize(newQuery, true)}`
  }
  function pageItems()
  {
    let items = []
    let startPage = block * range + 1
    for (let i = 1; i < range + 1 && startPage <= count; i++, startPage++)
    {
      items[i - 1] = {
        key: startPage,
        active: (startPage === page),
        url: startPage === page ? undefined : makeUrl(startPage),
      }
    }
    let checkEmpty = false
    items.forEach(o => {
      if (o.active) checkEmpty = true
    })
    return checkEmpty ? items : []
  }

  if (block !== undefined && page > 0)
  {
    items = pageItems()
  }
  return items
}
