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
  let cookie = useCookie(evt.req, `${process.env.COOKIE_PREFIX}${address}`);
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
  let cookie = useCookie(evt, `${process.env.COOKIE_PREFIX}${address}`);
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
  setCookie(evt, `${process.env.COOKIE_PREFIX}${address}`, JSON.stringify(cookie, null), {
    path: '/',
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * (process.env.COOKIE_AGE_DAY || 7),
  });
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

/**
 * clear token
 */
export function clearToken()
{
  // TODO: 로그아웃할때 필요할것이다.
}
