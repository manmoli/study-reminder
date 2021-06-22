'use strict'

import fs from 'fs'
import path from 'path'
import { DataTypes, Options, Sequelize, Model } from 'sequelize'
import config, { DBConfig } from '../config'
import dotenv from 'dotenv'
dotenv.config()
const basename = path.basename(__filename)
const env: string = process.env.NODE_ENV || 'development'
const envConfig = config[env as keyof DBConfig]

export interface DB {
  sequelize: Sequelize
  [index: string]: any
}

const db: any = {}

const sequelize: Sequelize = new Sequelize(
  envConfig.database,
  envConfig.username,
  envConfig.password,
  <Options> envConfig
)

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts'
    )
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
