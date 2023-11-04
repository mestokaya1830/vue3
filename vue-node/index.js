import express from 'express'
const app = express()
import cors from 'cors'
import db from './modules/db.js'
import Wrap from './modules/tryWrap.js'
import Nested from './modules/nestedSC.js'

app.use(cors())
app.use(express.json())

app.get('/', Wrap(async(req, res) => {
  const nested = await Nested.find()
  res.json(nested)
}))
app.post('/limitsettings', Wrap(async(req, res) => {
  console.log(req.body.limitsettings)
  res.json('saved')
}))
app.post('/creditlogs', Wrap(async(req, res) => {
  console.log(req.body.creditlogs)
  res.json('saved')
}))
app.post('/gamelogs', Wrap(async(req, res) => {
  console.log(req.body.gamelogs)
  res.json('saved')
}))


app.listen(3000, () => {
  console.log('Server is running...')
})