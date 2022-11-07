import * as path from 'path'
import { Router } from 'express'
import { isDev } from '../libs/entry-assets.js'
import allowPath from './allow-path.js'
// import { pageHome } from './pages/home.js'
// import { pageNests } from './pages/nests.js'
// import { pageArticle } from './pages/article.js'
// import { pageNotFound } from './pages/pageNotFound.js'

// set base
const router = Router({ strict: false })
const dev = isDev()
const __dirname = path.resolve('server/search-engine')

// set routers
// router.get('/', pageHome)
// router.get('/nest/:nestId/', pageNests)
// router.get('/nest/:nestId/:categorySrl/', pageNests)
// router.get('/article/:srl/', pageArticle)
// router.get('*', pageNotFound)

/**
 * search engine
 *
 * @param {Express} app
 */
export function searchEngine(app)
{
  app.set('view engine', 'pug')
  app.set('views', `${__dirname}/template/`)
  if (dev) app.locals.pretty = true
  app.use(router)
}

/**
 * allow search engine
 *
 * @param {string} path
 */
export function allowSearchEngine(path = undefined)
{
  if (!path || path === '/')
  {
    return allowPath.indexOf('/') > -1
  }
  else
  {
    let allow = false
    allowPath.forEach(o => {
      if (o === '/') return
      let exp = new RegExp(o)
      if (exp.test(path)) allow = true
    })
    return allow
  }
}
