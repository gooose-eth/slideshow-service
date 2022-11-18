import { Router } from 'express'
import { home } from './home.js'
import { watch } from './watch.js'
import { adminIndex, adminCreateItem, adminEditItem, adminDeleteItem } from './admin.js'
import * as models from '../../models/index.js'

// setup model api
models.setup()

// set roues
const router = Router()
router.get('/', home)
router.get('/watch/:srl(\\d+)/', watch)
router.get('/admin/', adminIndex)
router.post('/admin/create/', adminCreateItem)
router.post('/admin/edit/:srl(\\d+)/', adminEditItem)
router.post('/admin/delete/:srl(\\d+)/', adminDeleteItem)

export default router
