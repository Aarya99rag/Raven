import { config } from '../utils/config.js'

export const getHealthStatus = () => ({
  success: true,
  status: 'ok',
  service: config.appName,
  environment: config.nodeEnv,
  timestamp: new Date().toISOString(),
})
