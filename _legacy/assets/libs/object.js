/**
 * get form data
 *
 * @param {string} form
 * @return {object|null}
 */
export function getFormData(form)
{
  try
  {
    if (!form) throw new Error('no data');
    return JSON.parse(decodeURIComponent(form));
  }
  catch(e)
  {
    return {};
  }
}
