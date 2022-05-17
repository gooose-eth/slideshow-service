import connect from './connect.js';

let conn;

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
 * get slideshow items
 * @param {object} options
 * @return {Promise<object[]>}
 */
export async function getItems(options)
{
  return [];
}

/**
 * edit slideshow
 * @param {string} address
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
