import crypto from 'crypto';

const iterations = 100000;
const keylen = 64;
const digest = 'sha512';
const encoding = 'base64';

/**
 * create password
 * @param {string} keyword
 * @return {Promise<object>}
 */
export async function createPassword(keyword)
{
  if (!keyword) throw new Error('no password');
  let salt = await crypto.randomBytes(64);
  salt = salt.toString(encoding);
  let password = crypto.pbkdf2Sync(keyword, salt, iterations, keylen, digest);
  password = password.toString(encoding);
  return {
    password,
    salt,
  };
}

/**
 * check password
 * @param {string} target target password
 * @param {string} password
 * @param {string} salt
 * @return {boolean}
 */
export function checkPassword(target, password, salt)
{
  if (!target) throw new Error('no password');
  let newPassword = crypto.pbkdf2Sync(target, salt, iterations, keylen, digest);
  newPassword = newPassword.toString(encoding);
  return newPassword === password;
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
