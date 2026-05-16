import { redactObject, redactUrl } from '../utils/redact.js'

export const notFoundHandler = (req, _res, next) => {
  const error = new Error(
    `Route not found: ${req.method} ${redactUrl(req.originalUrl)}`,
  )
  error.statusCode = 404
  next(error)
}

export const errorHandler = (err, _req, res, _next) => {
  void _next

  const statusCode = err.statusCode || 500
  const message = statusCode === 500 ? 'Internal server error' : err.message

  console.error(
    JSON.stringify(
      redactObject({
        message: err.message,
        statusCode,
        details: err.details,
      }),
    ),
  )

  res.status(statusCode).json({
    success: false,
    message,
  })
}
