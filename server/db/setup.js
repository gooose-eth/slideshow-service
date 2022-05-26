import fs from 'fs';
import { connect } from './connect.js';

const path = './resource/db.sql';

/**
 * setup
 * @return {Promise<void>}
 */
export async function setup()
{
  const conn = await connect(true);
  let sql = fs.readFileSync(path).toString()
    .split('\n')
    .map((line) => {
      if (/^--/.test(line)) return '';
      return line;
    })
    .join('');
  await conn.query(sql);
}

/**
 * destroy
 * @return {Promise<void>}
 */
export async function destroy()
{
  const conn = await connect();
  await conn.query('drop table slideshow');
}
