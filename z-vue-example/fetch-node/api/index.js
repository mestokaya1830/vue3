import express from 'express'
const app = express()
import cors from 'cors'
import helmet from 'helmet'
import users from './persons.js';

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.static('static'))


app.get('/', (req, res) => {
  res.json({title: 'Home'})
})

app.get('/users', (req, res) => {
  res.json({users})
})

app.get('/users/:id', (req, res) => {
  const user = users.find(item => item.index == req.params.id)
  res.json({user})
})

app.use((err, req, res, next) => {
  console.log(err)
  next()
})

app.listen(3000, () => {
  console.log('Server is running...')
})