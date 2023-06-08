import { Application, Request, Response } from 'express'

import express from 'express'
import cors from 'cors'
import userRouter from './apps/modules/users/users.route'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes

app.use('/api/v1/users/', userRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('working successfully')
})

export default app
