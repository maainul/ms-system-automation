import express from 'express'
import { upsertFormAttributeController, getFormAttributesController } from '../controllers/formAttributeController.js'


//router object
const router = express.Router()

// routers

// POST || Add Table Attribute
router.post("/attribute/create", upsertFormAttributeController)

// GET || GET Form Attribute List
router.get("/attribute/list", getFormAttributesController)


export default router
