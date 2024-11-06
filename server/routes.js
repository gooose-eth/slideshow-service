import RunningTimer from './libs/RunningTimer.js'
import routesMap from './routes/map.js'

const { VITE_LOCAL_PATH, VITE_LOCAL_PATH_NAME } = Bun.env

/** @var {Express} app */
let app

function setup(req, res, next)
{
  res.runTime = new RunningTimer()
  next()
}

/**
 * @param {Express} _app
 */
export default function (_app)
{
  app = _app
  app.use(setup)
  app.use(`${VITE_LOCAL_PATH}/${VITE_LOCAL_PATH_NAME}/`.replace(/\/\//gi, '/'), routesMap)
}
