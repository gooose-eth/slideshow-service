import { Router } from 'express'
import { home } from './home.js'
// import * as models from '../../models/index.js'

// setup model api
// models.setup()

// set roues
const router = Router()
router.get('/', home)

export default router
