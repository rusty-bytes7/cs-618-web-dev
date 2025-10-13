import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { userRoutes } from './routes/users.js'
import { eventRoutes } from './routes/events.js'

import { postsRoutes } from './routes/posts.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())

postsRoutes(app)
userRoutes(app)
eventRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello from Express Live!')
})

export { app }
