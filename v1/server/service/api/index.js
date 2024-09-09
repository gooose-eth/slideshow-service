import { Router } from 'express'
import { home } from './home.js'
import { watch } from './watch.js'
import { about } from './about.js'
import { manageEditItem } from './manage.js'
import * as models from '../../models/index.js'

// setup model api
models.setup()

// set roues
const router = Router()
router.get('/', home)
router.get('/watch/:srl(\\d+)/', watch)
// router.get('/manage/', manageIndex)
// router.post('/manage/create/', manageCreateItem)
router.post('/manage/edit/:srl(\\d+)/', manageEditItem)
// router.post('/manage/delete/:srl(\\d+)/', manageDeleteItem)
router.get('/about/', about)

export default router
