import express from 'express'
import { signIn, signUP } from '../controllers/auth.controller.js'
const router = express.Router()


router.post('/signup',signUP )
router.post('/signin',signIn )

export default router

