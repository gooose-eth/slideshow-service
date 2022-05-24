export const CODE = {
  'NO-SLIDESHOW': 'NO-SLIDESHOW',
  'NO-ADDRESS': 'NO-ADDRESS',
  'NO-PASSWORD': 'NO-PASSWORD',
  'NO-TOKEN': 'NO-TOKEN',
  'NOT-MATCH-PASSWORD': 'NOT-MATCH-PASSWORD',
  'INVALID-TOKEN': 'INVALID-TOKEN',
  'ERROR-PARAMS': 'ERROR-PARAMS',
};

export const labels = {
  [CODE['NO-SLIDESHOW']]: '슬라이드쇼가 없습니다.',
  [CODE['NO-ADDRESS']]: '주소가 없습니다.',
  [CODE['NO-TOKEN']]: '토큰이 없습니다.',
  [CODE['INVALID-TOKEN']]: '토큰이 잘못되었습니다.',
};

export function captureError(path: string[], type: string = 'error', message: string): void
{
  message = labels[message] || message;
  if (process.dev) console[type](path, type, message);
  // TODO: 나중에 오류처리에 대하여 좀더 작업하기
}
