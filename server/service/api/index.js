import { Router } from 'express'
import { home } from './home.js'
import { watch } from './watch.js'
import * as models from '../../models/index.js'

// setup model api
models.setup()

// set roues
const router = Router()
router.get('/', home)
router.get('/watch/:srl(\\d+)/', watch)
router.post('/admin/', () => {})
router.post('/admin/create/', () => {})
router.post('/admin/edit/:srl(\\d+)/', () => {})
router.post('/admin/delete/:srl(\\d+)/', () => {})

export default router
