/**
 * validate url
 *
 * @param {string} url
 * @return {boolean}
 */
export function validateUrl(url)
{
  try
  {
    new URL(url);
    return true;
  }
  catch(e)
  {
    return false;
  }
}

// /**
//  * copy to clipboard
//  *
//  * @param {string} str
//  * @return {Promise}
//  */
// export function copyToClipboard(str)
// {
//   return new Promise((resolve, reject) => {
//     if (navigator.clipboard)
//     {
//       navigator.clipboard.writeText(str).then(resolve);
//     }
//     else
//     {
//       reject();
//     }
//   });
// }
