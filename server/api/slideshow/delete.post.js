/**
 * slideshow / delete
 */

export default async evt => {
  const body = await useBody(evt);
  return {
    message: 'slideshow / delete',
    success: true,
  };
};
