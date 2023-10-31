import express from 'express'
const app = express()
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import db from './model/db.js'
import Users from './model/usersSchema.js'

dotenv.config()
app.use(cors())
app.use(express.json())

app.get('/api', async(req, res) => {
  const users = await Users.find({})
  res.json(users)
})
app.post('/api/newuser', async(req, res) => {
  const newUser = await new Users(req.body)
  await newUser.save()
  res.json('Saved')
})

if(process.env.NODE_ENV == 'production'){
  app.use(express.static('public'))
  //handle spa
  app.get(/.*/, (req, res) => res.sendFile(path.resolve('/public/index.html')))
}


app.listen(3000, () => {
  console.log('Server is running...')
})