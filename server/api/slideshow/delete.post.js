/**
 * slideshow / delete
 */

import { setupResource, useResource } from '../../init.js';

let res;

export default async e => {
  try
  {
    await setupResource(e);
    res = useResource();
    return {
      message: 'slideshow / delete',
      success: true,
    };
  }
  catch (err)
  {

  }
};
