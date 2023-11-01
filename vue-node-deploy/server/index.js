import express from "express";
const app = express()
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './modules/db.js'
import Users from './modules/userSchema.js'
import Wrap from './middleware/tryCatch.js'

dotenv.config()
app.use(cors())
app.use(express.json())

app.get('/users', async(req, res) => {//gere must take roue not so ('/')
  const users = await Users.find({}).sort({_id:-1})
  res.json(users)
})

app.post('/api/newuser', Wrap(async(req, res) => {
  const newUser = await new Users(req.body.newuser)
  await newUser.save()
  res.json('Saved')
}))

//must be after route
if(process.env.NODE_ENV == 'production'){
  app.use(express.static('public'))
  app.get('*', (req, res) => res.sendFile(path.resolve('public/index.html')))
}

app.listen(process.env.PORT, () => {
  console.log('Server is running...' + process.env.PORT)
})