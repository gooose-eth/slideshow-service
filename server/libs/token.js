import { useResource } from '../init.js';

let res;
const start = 12;
const length = 24;

/**
 * get cookie
 * @param {any} evt
 * @param {string} address
 * @return {object}
 */
export function getCookie(evt, address)
{
  if (!res) res = useResource();
  let cookie = useCookie(evt, `${res.env.COOKIE_PREFIX}${address}`);
  try
  {
    cookie = JSON.parse(cookie);
  }
  catch (_)
  {
    cookie = null;
  }
  return cookie;
}

/**
 * update token
 * @param {any} evt
 * @param {string} address
 * @param {object} value
 */
export function updateToken(evt, address, value)
{
  if (!res) res = useResource();
  let cookie = useCookie(res.evt, `${res.env.COOKIE_PREFIX}${address}`);
  try
  {
    cookie = JSON.parse(cookie);
  }
  catch (_)
  {
    cookie = {};
  }
  cookie = {
    ...cookie,
    ...value,
  };
  setCookie(evt, `${res.env.COOKIE_PREFIX}${address}`, JSON.stringify(cookie, null), {
    path: '/',
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * (res.env.COOKIE_AGE_DAY || 7),
  });
}

/**
 * clear cookie
 * @param {any} evt
 * @param {string} address
 */
export function clearCookie(evt, address)
{
  if (!res) res = useResource();
  deleteCookie(evt, `${res.env.COOKIE_PREFIX}${address}`);
}


/**
 * make token
 * @param {string} salt
 * @return {string}
 */
export function makeToken(salt)
{
  return salt.slice(start, start + length);
}

/**
 * check token
 * @param {string} token
 * @param {string} salt
 * @return {boolean}
 */
export function checkToken(token, salt)
{
  return token === salt.slice(start, start + length);
}
