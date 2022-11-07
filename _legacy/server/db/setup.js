import fs from 'fs';
import { connect, tableNames } from './connect.js';
import { createPassword } from '../libs/password.js';

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
  const conn = await connect(false);
  await conn.query('drop table slideshow');
}

/**
 * change password
 * @param {string} address
 * @param {string} password
 * @return {Promise<void>}
 */
export async function changePassword(address, password)
{
  const conn = await connect(false);
  const newPassword = await createPassword(password);
  const values = `salt="${newPassword.salt}",password="${newPassword.password}"`;
  let sql = `update ${tableNames.slideshow} set ${values} where address="${address}"`;
  await conn.query(sql);
}
