/**
 * slideshow / create
 */

export default async evt => {
  try
  {
    const body = await useBody(evt);
    return {
      success: true,
      message: 'slideshow / create',
      address: 'foooo',
    };
  }
  catch (e)
  {

  }
};
