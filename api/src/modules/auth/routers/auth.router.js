import express from 'express'
import { signIn, signUP } from '../controllers/auth.controller.js'
const router = express.Router()


router.post('/sign-up',signUP )
router.post('/sign-in',signIn )

export default router

