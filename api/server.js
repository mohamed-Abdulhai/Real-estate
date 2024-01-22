import express from 'express'
import dotenv from 'dotenv'
import { DBConfig } from './src/db/dbConfig.js'
import authRouter from './src/modules/auth/routers/auth.router.js'
const app = express()
dotenv.config()
const port = process.env.PORT || 3000
app.use(express.json())
DBConfig()


app.use('/api/auth',authRouter)
app.listen(port, () => console.log(`sever is runing on ${process.env.HOST}/${port}`))