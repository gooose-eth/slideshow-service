/**
 * initial custom event
 */
export function initCustomEvent(): void
{
  interface Events {
    on: Function;
    off: Function;
  }
  const events: Events = {
    on(event: string, cb: Function, opts: object|false = false): any
    {
      if (!this.namespaces) this.namespaces = {};
      this.namespaces[event] = cb;
      this.addEventListener(event.split('.')[0], cb, opts || false);
      return this;
    },
    off(event: string): any
    {
      if (!(this.namespaces && this.namespaces[event])) return;
      this.removeEventListener(event.split('.')[0], this.namespaces[event]);
      delete this.namespaces[event];
      return this;
    },
  };
  (<any>window).on = (<any>document).on = (<any>Element.prototype).on = events.on;
  (<any>window).off = (<any>document).off = (<any>Element.prototype).off = events.off;
}

/**
 * control fullscreen
 */
export function fullscreen(sw: boolean): void
{
  const doc: any = window.document;
  const docEl: any = doc.documentElement;
  if (sw)
  {
    const requestFullScreen = docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    requestFullScreen.call(docEl);
  }
  else
  {
    const cancelFullScreen = doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;
    cancelFullScreen.call(doc);
  }
}

/**
 * copy to clipboard
 */
export function copyToClipboard(str: string): Promise<void>
{
  return new Promise((resolve, reject) => {
    try
    {
      if (navigator.clipboard)
      {
        console.log(str)
        navigator.clipboard.writeText(str).then(resolve);
      }
      else
      {
        console.log('복사할 수 없습니다.');
        reject();
      }
    }
    catch(e)
    {
      console.log('=======>', e);
      reject();
    }
  });
}

export function getValueFromType(type: string, value: string): any
{
  switch (type)
  {
    case 'boolean':
      return (value === 'true');
    case 'number':
      return Number(value);
    default:
      return value;
  }
}

export function sleep(ms: number = 1000): Promise<Function>
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function newLink(url: string): void
{
  const pop = window.open(url);
  try
  {
    pop.focus();
  }
  catch (e)
  {
    alert(`브라우저 팝업차단을 해제해주세요.`);
  }
}
