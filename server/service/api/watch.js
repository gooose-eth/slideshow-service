import { modelWatch } from '../../models/watch.js'
import * as error from '../../libs/error.js'
import { getEnv } from '../../libs/entry-assets.js'
import { parseJson } from '../../libs/object.js'

export async function watch(req, res)
{
  try
  {
    let srl = Number(req.params.srl)
    const env = getEnv()
    let result = await modelWatch({
      srl,
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