/**
 * slideshow / auth
 */

export default async e => {
  try
  {
    return {
      success: true,
    };
  }
  catch (e)
  {
    return {
      success: false,
      message: e.message,
    };
  }
}
