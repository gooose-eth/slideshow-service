import * as fs from 'fs'
import * as path from 'path'
import express from 'express'
import isbot from 'isbot'
import cookieParser from 'cookie-parser'
import { createServer } from 'vite'
import { openServerMessage, isDev, getEnv } from './libs/entry-assets.js'
import serviceServer from './service/main.js'
import { searchEngine, allowSearchEngine } from  './search-engine/main.js'

const __dirname = path.resolve()

/**
 * development
 *
 * @param {Express} app
 * @return {Promise<Express>}
 */
async function development(app)
{
  // set vite
  const vite = await createServer({
    mode: 'development',
    appType: 'custom',
    server: {
      middlewareMode: true,
    },
  })
  app.use(vite.middlewares)
  // extend routes
  serviceServer(app)
  // global route
  app.use('*', async (req, res, next) => {
    if (!!(isbot(req.get('user-agent')) && allowSearchEngine(req.baseUrl)))
    {
      searchEngine(app)
      next()
      return
    }
    try
    {
      const url = req.originalUrl
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template)
    }
    catch (e)
    {
      vite.ssrFixStacktrace(e)
      res.status(500).end(e.message)
    }
  })
  return app
}

/**
 * production
 *
 * @param {Express} app
 * @return {Express}
 */
function production(app)
{
  const env = getEnv()
  const outDir = env.VITE_OUT_DIR || 'dist'
  // extend routes
  serviceServer(app)
  // load static files
  app.use(express.static(outDir, {
    index: false,
    extensions: [ 'html' ],
  }))
  // service route
  app.use((req, res, next) => {
    // render search engine bot
    if (isbot(req.get('user-agent')))
    {
      searchEngine(app)
      next()
      return
    }
    // render html
    let template = fs.readFileSync(path.resolve(path.resolve(outDir), 'index.html'), 'utf-8')
    res
      .status(200)
      .set({ 'Content-Type': 'text/html' })
      .end(template)
  })
  return app
}

/**
 * setup server
 *
 * @return {Promise<void>}
 */
async function server()
{
  let app = express()
  const dev = isDev()
  const env = getEnv()
  // set timezone
  process.env.TZ = env.VITE_TIMEZONE
  // set cookie
  app.use(cookieParser())
  // render app
  app = dev ? await development(app) : production(app)
  // listen server
  app.listen(Number(env.VITE_PORT) || 3000, env.VITE_HOST, () => {
    openServerMessage(env.VITE_HOST, Number(env.VITE_PORT) || 3000, dev)
  })
}

// actions
server().then()
