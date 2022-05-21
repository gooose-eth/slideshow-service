/**
 * Setup service
 */

// TODO: 쿠키 때문에 사용할일이 있을것이다.

export default async e => {
  try
  {
    const body = await useBody(e);
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
