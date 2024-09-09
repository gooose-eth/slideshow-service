import { modelHome } from '../../models/home.js'
import * as error from '../../libs/error.js'
import { getEnv } from '../../libs/entry-assets.js'
import { parseJson } from '../../libs/object.js'

export async function home(req, res)
{
  try
  {
    const env = getEnv()
    let result = await modelHome({
      page: Number(req.query?.page) > 1 ? Number(req.query?.page) : 1,
    })
    const user = parseJson(req.cookies[env.VITE_COOKIE_ADMIN_USER])
    result.admin = Boolean(user?.admin)
    res.json(result)
  }
  catch (e)
  {
    let err = error.register(res, e)
    res.status(err.status).json(err)
  }
}
