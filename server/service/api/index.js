import { Router } from 'express'
import { home } from './home.js'
import { update as authUpdate, register as authRegister } from './auth.js'
// import * as models from '../../models/index.js'

// setup model api
// models.setup()

// set roues
const router = Router()
router.get('/', home)
router.post('/auth/update/', authUpdate)
router.post('/auth/register/', authRegister)

export default router
