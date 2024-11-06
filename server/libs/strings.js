/**
 * 숫자 한자리라면 앞에 `0`을 붙인다.
 */
export function twoDigit(day)
{
  return `0${day}`.slice(-2)
}
