/**
 * exit
 * @param {Error} error
 */
export function exit(error = undefined)
{
  if (error)
  {
    console.group('ERROR =>');
    console.error(error.message);
    console.groupEnd();
  }
  process.exit(0);
}
