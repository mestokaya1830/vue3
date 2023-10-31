import express from "express";
const app = express()
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './modules/db.js'
import Users from './modules/userSchema.js'

dotenv.config()
app.use(express.json())
app.use(cors())


app.get('/api', async(req, res) => {
  const users = await Users.find({})
  res.json(users)
})
app.post('/api/newuser', async(req, res) => {
  console.log(req.body)
  const newUser = await new Users(req.body)
  await newUser.save()
  res.json('Saved')
})

if(process.env.NODE_ENV == 'production'){
  app.use(express.static('public'))
  app.get('/.*/', (req, res) => res.sendFile(path.resolve(__dirname + 'public/index.html')))
}

app.use((error, req, res, next) => {
  console.log(error)
})

app.listen(process.env.PORT, () => {
  console.log('Server is running...')
})