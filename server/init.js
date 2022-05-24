import { checkToken } from './libs/token.js';
import { getItem } from './db/queries.js';

export let evt;
export let body;
export let env;

export async function setupResource(_evt)
{
  evt = _evt;
  body = await useBody(evt);
  env = useRuntimeConfig(evt);
}

export function useResource()
{
  return {
    evt,
    body,
    env,
  };
}

/**
 * check authorization
 * 헤더에 있는 토큰값으로 인증검사를 한다.
 * @param {string} salt 데이터베이스에 들어있는 `salt`값. 겂으면 직접 가져온다.
 */
export async function checkAuthorization(salt = undefined)
{
  try
  {
    const token = evt.req.headers.authorization?.replace('bearer ', '');
    if (!token) throw new Error('no token in header');
    if (!salt)
    {
      let item = await getItem({
        address: body.address,
        field: 'salt',
      });
      if (!item.salt) throw new Error('no salt in database');
      salt = item.salt;
    }
    let check = checkToken(token, salt);
    if (!check) throw new Error('failed check token');
  }
  catch (e)
  {
    throw new Error('FAILED-AUTHORIZATION');
  }
}
