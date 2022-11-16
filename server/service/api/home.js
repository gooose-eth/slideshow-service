import { modelHome } from '../../models/home.js'
import * as error from '../../libs/error.js'

export async function home(req, res)
{
  try
  {
    let result = await modelHome({
      page: Number(req.query?.page) > 1 ? Number(req.query?.page) : 1,
    })
    res.json(result)
  }
  catch (e)
  {
    let err = error.register(res, e)
    res.status(err.status).json(err)
  }
}
