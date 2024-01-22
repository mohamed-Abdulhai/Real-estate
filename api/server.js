import express from 'express'
import dotenv from 'dotenv'
import {DBConfig} from './src/db/dbConfig.js'
const app = express()
dotenv.config()
const port = process.env.PORT || 3000

DBConfig()


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`sever is runing on ${process.env.HOST}/${port}`))