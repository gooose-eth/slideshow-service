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
 * get last index
 * @param {string} [table]
 * @return {object}
 */
export function getLastIndex(table)
{
  const sql = `select max(id) as maxID from ${table}`
  const query = db.query(sql)
  return {
    sql,
    data: query.get()?.maxID || 0,
  }
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
