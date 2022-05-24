import { connect } from './connect.js';

const tableName = 'slideshow';

/**
 * get count
 * @param {object} op
 * @return {Promise<number>}
 */
export async function getCount(op)
{
  const conn = await connect();
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
  const conn = await connect();
  const { page, size, field, q } = op;
  let sql, tail = '';
  tail += op.publicFilter ? ' public=1' : '';
  if (q) tail += ` and title like '%${q}%'`;
  if (tail) tail = `where${tail}`;
  tail += ` order by ${op.order || 'regdate'} ${op.sort || 'desc'}`;
  tail += ` limit ${(page-1) * size},${size}`;
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
  const conn = await connect();
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
    const conn = await connect();
    let sql = `insert into ${tableName}(\`key\`, address, title, description, slideshow, password, salt, thumbnail, \`public\`, regdate, \`update\`) values (null, \"${src.address}\", \"${src.title}\", \"${src.description}\", \"${src.slideshow}\", '${src.password}', '${src.salt}', '${src.thumbnail}', '${src.public}', now(), now())`;
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
 * @param {any} body
 * @return {Promise<void>}
 */
export async function edit(address, body)
{
  try
  {
    const conn = await connect();
    let fields = Object.keys(body).map(key => {
      if (!key) return false;
      return `${key}="${body[key]}"`;
    }).filter(Boolean).join(',');
    let sql = `update ${tableName} set ${fields} where address="${address}"`;
    await conn.query(sql);
  }
  catch(e)
  {
    throw new Error('Failed edit data.');
  }
}

/**
 * remove slideshow
 * @param {string} address
 * @return {Promise<void>}
 */
export async function remove(address)
{
  try
  {
    const conn = await connect();
    const sql = `delete from ${tableName} where address="${address}"`;
    await conn.query(sql);
  }
  catch (e)
  {
    throw new Error('Failed remove data.');
  }
}
