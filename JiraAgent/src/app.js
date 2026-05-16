import express from 'express'
import routes from './routes/index.js'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js'
import { requestLogger } from './middleware/requestLogger.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(requestLogger)

app.use('/', routes)

app.use(notFoundHandler)
app.use(errorHandler)

export default app
