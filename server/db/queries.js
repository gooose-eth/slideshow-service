import { connect } from './connect.js';

let conn;

/**
 * get slideshow items
 * @param {object} op
 * @return {Promise<object>}
 */
export async function getItems(op)
{
  if (!conn) conn = await connect();
  const { page, size } = op;
  let where = '';
  let sql = `select COUNT(*) total from slideshow${where}`;
  // let [ count ] = await conn.query(sqlCount);
  // console.log(count);
  // let sql = `select * from slideshow${where}`;
  let res = await conn.query(sql);
  // TODO: 여기부분부터 계속 진행하기.. (ㅠㅠ)
  res.forEach(item => {
    console.log(item)
  })
  return [];
}

/**
 * get slideshow item
 * @param {object} op
 * @return {Promise<object>}
 */
export async function getItem(op)
{
  const { address } = op;
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
    let sql = `insert into slideshow(\`key\`, address, title, description, slideshow, password, salt, thumbnail, \`public\`, hit, regdate, \`update\`) values (null, '${src.address}', '${src.title}', '${src.description}', '${src.slideshow}', '${src.password}', '${src.salt}', '${src.thumbnail}', '${src.public}', 0, now(), now())`;
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
