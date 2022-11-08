/**
 * update address
 */
export async function update(req, res)
{
  // TODO: 주소가 없으면 로그아웃 이라는 액션으로 실행한다.
  // TODO: 데이터베이스에 주소가 존재하는지 검사하기
  // TODO: DB에 주소가 들어있으면 쿠키 저장하고 어카운트 정보를 리턴 (로그인 되었다는 상태)
  // TODO: DB에 주소가 없으면 어카운트 정보없이 리턴 (회원가입으로 넘어가라는 상태)
  res.json({
    message: 'auth/check',
  })
}

/**
 * register address
 * 주소 등록하기 (서비스에 등록한다.)
 *
 */
export async function register(req, res)
{
  res.json({
    message: 'auth/register',
  })
}
