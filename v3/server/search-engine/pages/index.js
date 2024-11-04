import { resolve } from 'path'
import { readFileSync } from 'fs'
import * as url from 'url'
import { getEnv } from '../../libs/entry-assets.js'
import { modelHome } from '../../models/home.js'
import { modelWatch } from '../../models/watch.js'
import * as error from '../../libs/error.js'
import { ERROR_CODE } from '../../libs/assets.js'
import { createPaginate } from '../../libs/paginate.js'
import { convertUrl } from '../../libs/text.js'
// import htmlAbout from '../../resource/about.html'

export async function pageHome(req, res)
{
  const env = getEnv()
  const _url = url.parse(req.url)
  let result, paginate, _error
  const _date = new Intl.DateTimeFormat('ko', { dateStyle: 'long', timeStyle: 'medium' })
  try
  {
    result = await modelHome({
      page: Number(req.query?.page) > 1 ? Number(req.query?.page) : 1,
    })
    paginate = createPaginate(
      result.total,
      req.query?.page,
      Number(env.VITE_INDEX_SIZE),
      10,
      convertUrl(_url.pathname),
      req.query
    )
    if (!(result.items?.length > 0))
    {
      throw new Error(ERROR_CODE.NO_ITEMS)
    }
  }
  catch (e)
  {
    _error = error.register(res, e)
  }
  finally
  {
    let title = env.VITE_APP_TITLE
    // set options
    let options = {
      name: env.VITE_APP_NAME,
      title,
      bodyTitle: env.VITE_APP_TITLE,
      description: env.VITE_APP_DESCRIPTION,
      keywords: env.VITE_APP_KEYWORDS,
      host: env.VITE_APP_HOST,
      url: `${env.VITE_APP_HOST}${_url.href}`,
      image: `/images/slideshow-banner.png`,
      items: result?.items.length > 0 ? result.items.map((o) => {
        return {
          ...o,
          regdate: `${_date.format(new Date(o.regdate))}`
        }
      }) : [],
      paginate: paginate || undefined,
      error: _error,
    }
    res.render('home', options)
  }
}

export async function pageWatch(req, res)
{
  const env = getEnv()
  const _url = url.parse(req.url)
  let result, _error, group, tree
  try
  {
    result = await modelWatch(Number(req.params.srl))
    if (!result?.srl) throw new Error(ERROR_CODE.NO_ITEMS)
    group = req.query.group || result?.json?.group
    tree = result?.json?.tree[group] || undefined
    if (!tree) throw new Error(ERROR_CODE.NO_ITEMS)
  }
  catch (e)
  {
    _error = error.register(res, e)
  }
  finally
  {
    let title = env.VITE_APP_TITLE
    res.render('watch', {
      name: env.VITE_APP_NAME,
      title,
      bodyTitle: env.VITE_APP_TITLE,
      description: env.VITE_APP_DESCRIPTION,
      keywords: env.VITE_APP_KEYWORDS,
      host: env.VITE_APP_HOST,
      url: `${env.VITE_APP_HOST}${_url.href}`,
      image: result?.thumbnail || `/images/slideshow-banner.png`,
      tree,
      error: _error,
    })
  }
}

export async function pageAbout(req, res)
{
  const env = getEnv()
  const _url = url.parse(req.url)
  let content, _error
  try
  {
    content = readFileSync(resolve('server/resource/about.html'), 'utf-8')
  }
  catch (e)
  {
    _error = error.register(res, e)
  }
  finally
  {
    let title = env.VITE_APP_TITLE
    // set options
    let options = {
      name: env.VITE_APP_NAME,
      title,
      description: env.VITE_APP_DESCRIPTION,
      keywords: env.VITE_APP_KEYWORDS,
      host: env.VITE_APP_HOST,
      url: `${env.VITE_APP_HOST}${_url.href}`,
      image: `/images/slideshow-banner.png`,
      content,
      error: _error,
    }
    res.render('about', options)
  }
}

export async function pageNotFound(req, res)
{
  const env = getEnv()
  const _url = url.parse(req.url)
  const _error = error.register(res, new Error(ERROR_CODE.NOT_FOUND))
  res.render('pageNotFound', {
    name: env.VITE_APP_NAME,
    title: env.VITE_APP_TITLE,
    description: env.VITE_APP_DESCRIPTION,
    keywords: env.VITE_APP_KEYWORDS,
    host: env.VITE_APP_HOST,
    url: `${env.VITE_APP_HOST}${_url.href}`,
    image: `/images/slideshow-banner.png`,
    error: _error,
  })
}
