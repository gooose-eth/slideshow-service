import * as path from 'path'
import { Router } from 'express'
import { isDev } from '../libs/entry-assets.js'
import { pageHome, pageWatch, pageAbout, pageNotFound } from './pages/index.js'

// set base
const router = Router({ strict: false })
const dev = isDev()
const __dirname = path.resolve('server/search-engine')

// set routers
router.get('/', pageHome)
router.get('/watch/:srl(\\d+)/', pageWatch)
router.get('/about/', pageAbout)
router.get('*', pageNotFound)

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
