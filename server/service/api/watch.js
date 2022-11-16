import { modelWatch } from '../../models/watch.js'
import * as error from '../../libs/error.js'

export async function watch(req, res)
{
  try
  {
    let srl = Number(req.params.srl)
    let result = await modelWatch({
      srl,
    })
    res.json(result)
  }
  catch (e)
  {
    let err = error.register(res, e)
    res.status(err.status).json(err)
  }
}
