import dotenv from 'dotenv'

dotenv.config({ quiet: true })

export const config = {
  appName: process.env.APP_NAME || 'JiraAgent',
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5000,
}
