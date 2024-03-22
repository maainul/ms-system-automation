import express from 'express'
import { create } from '../controllers/tableValidation/create.js'
import { list } from '../controllers/tableValidation/list.js'


const router = express.Router()

router.post('/create', create)

router.get('/list', list)


export default router