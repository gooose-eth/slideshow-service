/**
 * Setup service
 */

// import fs from 'fs';

export default async e => {
  try
  {
    const body = await useBody(e);
    // console.log(fs)
    // let aaa = fs;

    switch (body.mode)
    {
      case 'create':
      case 'watch':
      case 'admin':
        console.log('SETUP() =>', body.mode);
        break;
      default:
        console.log('SETUP() =>', 'default');
        break;
    }

    return {
      success: true,
    };
  }
  catch (e)
  {
    return {
      success: false,
    };
  }
};
