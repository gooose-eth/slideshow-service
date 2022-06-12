import { connect, tableNames } from './connect.js';

/**
 * create public-address
 * @param {object} src
 * @return {Promise<void>}
 */
export async function create(src)
{
  try
  {
    // const conn = await connect(false);
    const sql = `insert into ${tableNames.address} values (null, 'token', 'address', 'permission', 'expiry', now())`;
    console.log(sql)
    // await conn.query(sql);
  }
  catch (e)
  {
    //
  }
}

/**
 * get public-address
 * @param {object} op
 * @return {Promise<object|null>}
 */
export async function getItem(op)
{
  const conn = await connect(false);
  return null;
}
