import { connect } from './connect.js';

let conn;
const tableName = 'slideshow';

/**
 * get count
 * @param {object} op
 * @return {Promise<number>}
 */
export async function getCount(op)
{
  if (!conn) conn = await connect();
  const { q } = op;
  let res, sql, tail;
  tail = `where public=1`;
  if (q) tail += ` and title like '%${q}%'`;
  sql = `select count(*) total from ${tableName} ${tail}`;
  res = await conn.query(sql);
  return Number(res[0]?.total || 0);
}

/**
 * get slideshow items
 * @param {object} op
 * @return {Promise<object>}
 */
export async function getItems(op)
{
  if (!conn) conn = await connect();
  const { page, size, field, q } = op;
  let sql, tail;
  tail = `where public=1 `;
  if (q) tail += `and title like '%${q}%' `;
  tail += `order by ${op.order || 'regdate'} ${op.sort || 'desc'} `;
  tail += `limit ${(page-1) * size},${size} `;
  sql = `select ${field || '*'} from ${tableName} ${tail}`;
  return await conn.query(sql);
}

/**
 * get slideshow item
 * @param {object} op
 * @return {Promise<object|null>}
 */
export async function getItem(op)
{
  if (!conn) conn = await connect();
  const { address, field } = op;
  let sql = `select ${field || '*'} from ${tableName} where address="${address}"`;
  const [ item ] = await conn.query(sql);
  return item || null;
}

/**
 * create slideshow
 * @param {object} src
 * @return {Promise<void>}
 */
export async function create(src)
{
  try
  {
    if (!conn) conn = await connect();
    let sql = `insert into ${tableName}(\`key\`, address, title, description, slideshow, password, salt, thumbnail, \`public\`, hit, regdate, \`update\`) values (null, \"${src.address}\", \"${src.title}\", \"${src.description}\", \"${src.slideshow}\", '${src.password}', '${src.salt}', '${src.thumbnail}', '${src.public}', 0, now(), now())`;
    await conn.query(sql);
  }
  catch(e)
  {
    throw new Error('Failed create data.');
  }
}

/**
 * edit slideshow
 * @param {string} address
 * @param {any} src
 * @return {Promise<void>}
 */
export async function edit(address, src)
{
  //
}

/**
 * remove slideshow
 * @param {string} address
 * @return {Promise<void>}
 */
export async function remove(address)
{
  //
}
