/**
 * capture
 */
export async function capture(location, err)
{
  if (process.env.NODE_ENV === 'development')
  {
    console.group('ERROR =>');
    console.error(err.message);
    console.groupEnd();
  }
  // TODO: 오류 저장을 위한 부분 만들기
}
