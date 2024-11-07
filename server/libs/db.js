import { Database } from 'bun:sqlite'
import { dataPath } from './consts.js'
import { removeUndefinedValueKey } from './objects.js'

/** @var {Database} db */
export let db

export const tables = {
  slideshow: 'slideshow',
  file: 'file',
  provider: 'provider',
  token: 'token',
}

/**
 * connect db
 * @param {object} options
 * @param {?boolean} [options.readonly]
 * @param {?boolean} [options.create]
 * @param {?boolean} [options.readwrite]
 */
export function connect(options = {})
{
  if (!!db) return
  db = new Database(`${dataPath}/db.sqlite`, {
    ...options,
  })
}

/**
 * disconnect db
 */
export function disconnect()
{
  if (!db) return
  db.close()
  db = undefined
}

/**
 * get item
 * @param {string} [options.table]
 * @param {string[]} [options.fields]
 * @param {string} [options.where]
 * @param {string|array} [options.join]
 * @param {any} [options.values]
 * @param {boolean?} [options.run]
 * @return {object}
 */
export function getItem(options)
{
  const { table, fields, where, join, values, run } = options
  const field = fields?.length ? fields.join(',') : '*'
  const sql = optimiseSql(`select ${field} from ${table} ${parseJoin(join)} ${where ? `where ${where}` : ''}`)
  const query = db.query(sql)
  const data = (run !== false) ? query.get(values) : undefined
  return {
    sql,
    values,
    data,
  }
}

/**
 * add item
 * @example
 * options.table
 * options.value = [ { key, valueName, value } ]
 * @param {string} [options.table]
 * @param {array} [options.values]
 * @param {boolean} [options.run]
 * @return {object}
 */
export function addItem(options = {})
{
  const { table, values, run } = options
  let fields = []
  let valueNames = []
  let objects = []
  values.forEach(item => {
    if (item.value || item.valueName)
    {
      fields.push(item.key)
      valueNames.push(item.valueName || '?')
    }
    if (item.value) objects.push(item.value)
  })
  const sql = optimiseSql(`insert into ${table} (${fields.join(', ')}) values (${valueNames.join(', ')})`)
  if (run !== false) db.run(sql, objects)
  return {
    sql,
    values,
    data: getLastIndex(table),
  }
}


/**
 * get last index
 * @param {string} [table]
 * @return {object}
 */
export function getLastIndex(table)
{
  const sql = `select max(id) as maxID from ${table}`
  const query = db.query(sql)
  return query.get()?.maxID || 0
}

/**
 * 만료된 토큰을 삭제한다.
 * @return {object}
 */
export function clearTokens()
{
  const sql = `delete from ${tables.token} where expired <= CURRENT_TIMESTAMP`
  db.run(sql, [])
  return {
    sql,
  }
}

/**
 * sql 최적화
 * @param {string} str
 * @return {string}
 */
function optimiseSql(str)
{
  return str.trim().replace(/\s{2,}/g, ' ')
}

/**
 * join 영역을 필터링한다.
 * @param {string|string[]} src
 * @return {string}
 */
function parseJoin(src)
{
  if (Array.isArray(src))
  {
    return src.map(x => (x)).join(' ')
  }
  else if (typeof src === 'string')
  {
    return src
  }
  return ''
}
