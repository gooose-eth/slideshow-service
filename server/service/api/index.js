import { Router } from 'express'
import { home } from './home.js'
import * as models from '../../models/index.js'

// setup model api
models.setup()

// set roues
const router = Router()
router.get('/', home)
router.post('/watch/:srl(\\d+)/', () => {})
router.post('/admin/', () => {})
router.post('/admin/create/', () => {})
router.post('/admin/edit/:srl(\\d+)/', () => {})
router.post('/admin/delete/:srl(\\d+)/', () => {})

export default router
