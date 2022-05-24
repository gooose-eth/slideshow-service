import mariadb from 'mariadb';
import { useResource } from '../init.js';

let conn;

/**
 * connect database
 * @param {boolean} multiple
 * @return {Promise<any>}
 */
export async function connect(multiple = false)
{
  if (conn) return conn;
  const { env } = useResource();
  if (!env) throw new Error('FAIL-CONNECT-DATABASE');
  const { host, port, userName, password, database, timezone } = env.DB;
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
