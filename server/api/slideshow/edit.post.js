/**
 * slideshow / edit
 */

export default async evt => {
  const body = await useBody(evt);
  return {
    message: 'slideshow / edit',
    success: true,
  };
};
