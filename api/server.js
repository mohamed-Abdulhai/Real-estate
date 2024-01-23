import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { DBConfig } from './src/db/dbConfig.js'
import authRouter from './src/modules/auth/routers/auth.router.js'
const app = express()
dotenv.config()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors());
DBConfig()


app.use('/api/auth', authRouter)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(port, () => console.log(`sever is runing on ${process.env.HOST}/${port}`))