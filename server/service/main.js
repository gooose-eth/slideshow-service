import api from './api/index.js'

/**
 * server
 *
 * @param {Express} app
 */
function server(app)
{
  app.use('/api', api)
}

export default server
