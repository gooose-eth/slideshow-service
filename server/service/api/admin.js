import { modelAdminItems, modelAdminCreateItem } from '../../models/admin.js'
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
  res.json({ foo: 'admin/create-item' })
}

export async function adminDeleteItem(req, res)
{
  res.json({ foo: 'admin/delete-item' })
}
