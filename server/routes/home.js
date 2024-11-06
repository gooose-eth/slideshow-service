/**
 * [GET] /
 *
 * Home
 */

import pkg from '../../package.json'
import { success, error } from '../output.js'

const { VITE_HOST, VITE_PORT } = Bun.env

export default async (req, res) => {
  try
  {
    const url = `${req.protocol}://${VITE_HOST}:${VITE_PORT}${req.originalUrl}`
    success(req, res, {
      message: 'Welcome to Slideshow Service.',
      data: {
        version: pkg.version,
        url,
      },
    })
  }
  catch (e)
  {
    error(req, res, {
      code: e.code,
      message: 'An unknown error has occurred.',
      _file: __filename,
      _err: e,
    })
  }
}
