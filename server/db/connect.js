import mariadb from 'mariadb';

/**
 * connect database
 * @param {boolean} multiple
 * @return {Promise}
 */
export default async function connect(multiple = false)
{
  const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD, TIMEZONE } = process.env;
  return mariadb.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    timezone: TIMEZONE,
    multipleStatements: multiple,
  });
}
