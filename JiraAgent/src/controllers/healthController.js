import { getHealthStatus } from '../services/healthService.js'

export const getHealth = (_req, res, next) => {
  try {
    res.status(200).json(getHealthStatus())
  } catch (error) {
    next(error)
  }
}
