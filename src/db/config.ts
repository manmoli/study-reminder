require('dotenv').config()

export interface DBConnectionData {
  username: string
  password: string
  database: string
  host: string
  port: number
  dialect: string
}

export interface DBConfig {
  development: DBConnectionData,
  test: DBConnectionData,
  production: DBConnectionData
}

const config: DBConfig = {
  development: {
    username: <string> process.env.DB_USER,
    password: <string> process.env.DB_PASSWORD,
    database: <string> process.env.DB_NAME,
    host: <string> '127.0.0.1',
    port: <number><unknown> process.env.DB_PORT,
    dialect: <string> process.env.DB_DIALECT
  },
  test: {
    username: <string> process.env.DB_USER,
    password: <string> process.env.DB_PASSWORD,
    database: <string> process.env.DB_NAME,
    host: <string> '127.0.0.1',
    port: <number><unknown> process.env.DB_PORT,
    dialect: <string> process.env.DB_DIALECT
  },
  production: {
    username: <string> process.env.DB_USER,
    password: <string> process.env.DB_PASSWORD,
    database: <string> process.env.DB_NAME,
    host: <string> '127.0.0.1',
    port: <number><unknown> process.env.DB_PORT,
    dialect: <string> process.env.DB_DIALECT
  }
}

export default config
