/**
 * slideshow / public-address / item
 */

import { setupResource, useResource } from '../../../init.js';

let res;

export default async e => {
  try
  {
    await setupResource(e);
    res = useResource();
    console.log('public-address/item', res.body);
    return {
      success: true,
    };
  }
  catch (_err)
  {
    return {
      success: false,
    };
  }
}
