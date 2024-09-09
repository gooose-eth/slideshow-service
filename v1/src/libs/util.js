/**
 * sleep
 *
 * @param {number} ms
 * @return {Promise<void>}
 */
export function sleep(ms = 1000)
{
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * convert pure object
 * `proxy`, `observable`객체를 순수한 객체로 변환해준다.
 *
 * @param {any} src
 * @return {any}
 */
export function pureObject(src)
{
  if (!src) return null
  try
  {
    return JSON.parse(JSON.stringify(src))
  }
  catch(_)
  {
    return null
  }
}

/**
 * control fullscreen
 *
 * @param {boolean} sw
 */
export function fullscreen(sw)
{
  const doc = window.document
  const docEl = doc.documentElement
  if (sw)
  {
    const requestFullScreen = docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen
    requestFullScreen.call(docEl)
  }
  else
  {
    const cancelFullScreen = doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen
    cancelFullScreen.call(doc)
  }
}

/**
 * copy to clipboard
 *
 * @param {string} str
 * @return {Promise<void>}
 */
export function copyToClipboard(str)
{
  return new Promise((resolve, reject) => {
    if (navigator.clipboard)
    {
      navigator.clipboard.writeText(str).then(resolve)
    }
    else
    {
      reject()
    }
  })
}

/**
 * initial custom event
 */
export function initCustomEvent()
{
  const events = {
    on(event, cb, opts = false)
    {
      if (!this.namespaces) this.namespaces = {}
      this.namespaces[event] = cb
      this.addEventListener(event.split('.')[0], cb, opts || false)
      return this
    },
    off(event)
    {
      if (!(this.namespaces && this.namespaces[event])) return
      this.removeEventListener(event.split('.')[0], this.namespaces[event])
      delete this.namespaces[event]
      return this
    },
  }
  window.on = document.on = Element.prototype.on = events.on
  window.off = document.off = Element.prototype.off = events.off
}

/**
 * get value from type
 *
 * @param {string} type
 * @param {string} value
 * @return {any}
 */
export function getValueFromType(type, value)
{
  switch (type)
  {
    case 'boolean':
      return (value === 'true')
    case 'number':
      return Number(value)
    default:
      return value
  }
}

export function shuffleItemsFromArray(items)
{
  const shuffled = [...items].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, items.length)
}
