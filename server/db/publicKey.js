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
    const conn = await connect(false);
    const sql = `insert into ${tableNames.publicKey} values (null, "${src.token}", "${src.address}", "${src.expiry}", now())`;
    await conn.query(sql);
  }
  catch (e)
  {
    throw new Error('Failed create public key.');
  }
}

/**
 * get public-address
 * @param {string} address
 * @param {string} field
 * @return {Promise<object|null>}
 */
export async function getItem(address, field = '*')
{
  const conn = await connect(false);
  const sql = `select ${field} from ${tableNames.publicKey} where token="${address}"`;
  const [ item ] = await conn.query(sql);
  return item || null;
}
