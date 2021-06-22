import express from 'express'
import db from './db/models'
const app = express()
const port = process.env.PORT || 3000

db.sequelize.authenticate().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
})
