import { modelManageItems, modelManageCreateItem, modelManageEditItem, modelManageDeleteItem } from '../../models/manage.js'
import * as error from '../../libs/error.js'
import { ERROR_CODE } from '../../libs/assets.js'
import { getEnv } from '../../libs/entry-assets.js'
import { parseJson } from '../../libs/object.js'

export async function manageIndex(req, res)
{
  try
  {
    const env = getEnv()
    const user = checkPermission(req, env)
    let result = await modelManageItems({
      token: req.cookies[env.VITE_COOKIE_ADMIN_TOKEN] || undefined,
      page: Number(req.query?.page) > 1 ? Number(req.query?.page) : 1,
    })
    result.admin = Boolean(user?.admin)
    res.json(result)
  }
  catch (e)
  {
    let err = error.register(res, e)
    res.status(err.status).json(err)
  }
}

export async function manageCreateItem(req, res)
{
  try
  {
    const env = getEnv()
    const user = checkPermission(req, env)
    let result = await modelManageCreateItem({
      token: req.cookies[env.VITE_COOKIE_ADMIN_TOKEN] || undefined,
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

export async function manageEditItem(req, res)
{
  try
  {
    const env = getEnv()
    const user = checkPermission(req, env)
    let result = await modelManageEditItem({
      token: req.cookies[env.VITE_COOKIE_ADMIN_TOKEN] || undefined,
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

export async function manageDeleteItem(req, res)
{
  try
  {
    const env = getEnv()
    const user = checkPermission(req, env)
    let result = await modelManageDeleteItem({
      token: req.cookies[env.VITE_COOKIE_ADMIN_TOKEN] || undefined,
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

/**
 * check permission
 *
 * @param {Request} req
 * @param {object} env
 * @return {object}
 */
function checkPermission(req, env)
{
  const user = parseJson(req.cookies[env['VITE_COOKIE_ADMIN_USER']])
  if (!user.admin)
  {
    throw {
      status: ERROR_CODE.NO_PERMISSION,
      message: 'You do not have permission.',
    }
  }
  return user
}
