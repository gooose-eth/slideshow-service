/**
 * convert slideshow result data
 * @param {object} item
 * @param {boolean} parse
 * @return {object}
 */
export function convertSlideshowResultData(item, parse = false)
{
  return {
    address: item.address,
    title: item.title,
    description: item.description,
    slideshow: parse ? JSON.parse(decodeURIComponent(item.slideshow)) : item.slideshow,
    thumbnail: item.thumbnail,
    public: item.public,
    regdate: item.regdate,
    update: item.update,
  };
}
