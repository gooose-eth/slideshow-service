import { twoDigit } from './string';

/**
 * convert date format
 * example) dateFormat(new Date(), '{yyyy}-{MM}-{dd}');
 */
export function dateFormat(date: Date, format: string): string
{
  let mix = format.replace(/\{yyyy\}/, String(date.getFullYear()));
  mix = mix.replace(/\{MM\}/, twoDigit(date.getMonth() + 1));
  mix = mix.replace(/\{dd\}/, twoDigit(date.getDate()));
  mix = mix.replace(/\{hh\}/, twoDigit(date.getHours()));
  mix = mix.replace(/\{mm\}/, twoDigit(date.getMinutes()));
  mix = mix.replace(/\{ss\}/, twoDigit(date.getSeconds()));
  return mix;
}
