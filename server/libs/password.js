import crypto from 'crypto';

/**
 * create password
 * @param {string} keyword
 * @return {Promise<object>}
 */
export async function createPassword(keyword)
{
  if (!keyword) throw new Error('no password');
  let salt = await crypto.randomBytes(64);
  salt = salt.toString('base64');
  let password = crypto.pbkdf2Sync(keyword, salt, 100000, 64, 'sha512');
  password = password.toString('base64');
  return {
    password,
    salt,
  };
}

/**
 * unique id
 * @param {number} n
 * @return {string}
 */
export function uniqueId(n = 6)
{
  return crypto.randomBytes(n).toString('hex');
}
