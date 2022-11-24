export const CODE = {
  'NO-SLIDESHOW': 'NO-SLIDESHOW',
  'NOT-MATCH-PASSWORD': 'NOT-MATCH-PASSWORD',
  'ERROR-PARAMS': 'ERROR-PARAMS',
  'NO-PERMISSION': 'NO-PERMISSION',
  'INVALID-SLIDESHOW-DATA': 'INVALID-SLIDESHOW-DATA',
  'NO-SRL': 'NO-SRL',
};

export const labels = {
  [CODE['NO-SLIDESHOW']]: '슬라이드쇼가 없습니다.',
  [CODE['NO-PERMISSION']]: '권한이 없습니다.',
  [CODE['INVALID-SLIDESHOW-DATA']]: '슬라이드쇼 데이터가 잘못되었습니다.',
};

export function captureError(path, type = 'error', message)
{
  message = labels[message] || message;
  console[type](path, type, message);
  // TODO: 나중에 오류처리에 대하여 좀더 작업하기
}
