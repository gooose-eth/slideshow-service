import mariadb from 'mariadb';
import { useResource } from '../init.js';

let conn;
export const tableNames = {
  slideshow: 'slideshow',
};

/**
 * get ENV
 * @return {object}
 */
export function getENV()
{
  let { env } = useResource();
  if (env?.DB)
  {
    return env.DB;
  }
  else
  {
    const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD, TIMEZONE_OFFSET } = process.env;
    if (!(DB_HOST || DB_PORT || DB_DATABASE || DB_USERNAME || DB_PASSWORD)) return null;
    return {
      host: String(DB_HOST),
      port: Number(DB_PORT),
      userName: String(DB_USERNAME),
      password: String(DB_PASSWORD),
      database: String(DB_DATABASE),
      timezone: TIMEZONE_OFFSET || '',
    };
  }
}

/**
 * connect database
 * @param {boolean} multiple
 * @return {Promise<any>}
 */
export async function connect(multiple = false)
{
  if (conn) return conn;
  let env = getENV();
  if (!env) throw new Error('FAIL-CONNECT-DATABASE');
  const { host, port, userName, password, database, timezone } = env;
  conn = await mariadb.createConnection({
    host,
    port,
    user: userName,
    password,
    database,
    timezone,
    multipleStatements: multiple,
    dateStrings: 'date',
  });
  return conn;
}
