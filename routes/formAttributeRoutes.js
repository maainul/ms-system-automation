import express from 'express'
import  { upsertFormAttributeController, getFormAttributesController } from '../controllers/formAttributeController.js'


//router object
const router = express.Router()

// routers

// POST || REGISTER USER
router.post("/create", upsertFormAttributeController)

// GET || GET USER
router.get("/list", getFormAttributesController)


export default router
