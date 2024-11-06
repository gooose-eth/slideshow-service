import { twoDigit } from './strings.js'

/**
 * convert date format
 * format guide: `{yyyy}-{MM}-{dd} / {month},{week},{weekShort} / {hh}:{mm}:{ss}`
 */
export function dateFormat(date, format)
{
  let mix = format.replace(/\{yyyy\}/, String(date.getFullYear()))
  mix = mix.replace(/\{MM\}/, twoDigit(date.getMonth() + 1))
  mix = mix.replace(/\{dd\}/, twoDigit(date.getDate()))
  mix = mix.replace(/\{hh\}/, twoDigit(date.getHours()))
  mix = mix.replace(/\{mm\}/, twoDigit(date.getMinutes()))
  mix = mix.replace(/\{ss\}/, twoDigit(date.getSeconds()))
  return mix
}
