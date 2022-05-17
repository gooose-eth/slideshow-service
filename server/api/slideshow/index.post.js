/**
 * slideshow / index
 */

export default async e => {
  try
  {
    const body = await useBody(e);
    //
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
};
