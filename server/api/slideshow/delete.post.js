/**
 * slideshow / delete
 */

let evt, body;

export default async e => {
  evt = e;
  body = await useBody(evt);
  return {
    message: 'slideshow / delete',
    success: true,
  };
};
