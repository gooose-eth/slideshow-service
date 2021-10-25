const headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  'Authorization': '',
};

/**
 * make data
 *
 * @param {object} src
 * @return {string}
 */
function makeData(src)
{
  let formBody = [];
  for (const property in src) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(src[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
}

/**
 * get
 *
 * @param {string} url
 * @return {Promise}
 */
export async function get(url)
{
  try
  {
    return await fetch(url, {
      method: 'get',
      headers,
    }).then(res => res.json());
  }
  catch(e)
  {
    throw new Error(e.message);
  }
}

/**
 * post
 *
 * @param {string} url
 * @param {object} data
 * @param {string|null} type
 * @return {Promise}
 */
export async function post(url, data, type = 'json')
{
  try
  {
    let res = await fetch(url, {
      method: 'post',
      headers,
      body: makeData(data),
    });
    switch(type)
    {
      case 'text':
        return res.text();
      case 'json':
        return res.json();
      default:
        return res;
    }
  }
  catch(e)
  {
    throw new Error(e.message);
  }
}
