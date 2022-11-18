import { modelAdminItems, modelAdminCreateItem, modelAdminEditItem, modelAdminDeleteItem } from '../../models/admin.js'
import * as error from '../../libs/error.js'

export async function adminIndex(req, res)
{
  try
  {
    let result = await modelAdminItems({
      token: req.cookies['goose-manager-token'] || undefined,
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

export async function adminCreateItem(req, res)
{
  try
  {
    let result = await modelAdminCreateItem({
      token: req.cookies['goose-manager-token'] || undefined,
      body: req.body,
    })
    res.json(result)
  }
  catch (e)
  {
    let err = error.register(res, e)
    res.status(err.status).json(err)
  }
}

export async function adminEditItem(req, res)
{
  try
  {
    let result = await modelAdminEditItem({
      token: req.cookies['goose-manager-token'] || undefined,
      srl: req.params?.srl || undefined,
      body: req.body,
    })
    res.json(result)
  }
  catch (e)
  {
    let err = error.register(res, e)
    res.status(err.status).json(err)
  }
}

export async function adminDeleteItem(req, res)
{
  try
  {
    let result = await modelAdminDeleteItem({
      token: req.cookies['goose-manager-token'] || undefined,
      srl: req.params?.srl || undefined,
    })
    res.json(result)
  }
  catch (e)
  {
    let err = error.register(res, e)
    res.status(err.status).json(err)
  }
}
