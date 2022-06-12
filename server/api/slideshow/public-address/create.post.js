/**
 * slideshow / public-address / create
 */

import { setupResource, useResource, checkAuthorization } from '../../../init.js';
import { create } from '../../../db/address.js';
import { disconnect } from '../../../db/connect.js';
import { capture } from '../../../libs/error.js';
import { CODE } from '../../../../libs/error.ts';

let res;

function checkBody()
{
  if (!res.body.expiry) throw new Error('no expiry');
  if (res.body.permission?.length <= 0) throw new Error('no permission');
}

export default async e => {
  try
  {
    let check, token;
    await setupResource(e);
    res = useResource();
    if (!res.body.address) throw new Error('NO-ADDRESS');
    // check authorization
    await checkAuthorization();
    // check body
    checkBody();
    await create({
      token: '', // 독창적인 구조로 문자 만들기(노트참고)
      address: '', // 슬라이드쇼 주소
      permission: '', // 권한(watch,edit,delete)
      expiry: '', // 0000-00-00
    });
    // TODO: 인증검사
    // TODO: 데이터 추가
    // TODO: 결과출력
    return {
      success: true,
    };
  }
  catch (err)
  {
    disconnect();
    await capture(['/api/slideshow/public-address/create.post.js', 'default()'], err);
    return {
      success: false,
      message: CODE[err.message] || 'Failed create public address.',
    };
  }
}
