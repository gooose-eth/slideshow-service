import fs from 'fs';
import conn from './connect.js';

const path = './resource/db.sql';

/**
 * setup
 * @return {Promise<void>}
 */
export async function setup()
{
  const connect = await conn(true);
  let sql = fs.readFileSync(path).toString()
    .split('\n')
    .map((line) => {
      if (/^--/.test(line)) return '';
      return line;
    })
    .join('');
  await connect.query(sql);
}

/**
 * destroy
 * @return {Promise<void>}
 */
export async function destroy()
{
  const connect = await conn();
  await connect.query('drop table slideshow');
}
