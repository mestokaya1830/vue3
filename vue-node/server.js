import express from 'express'
const app = express()
import cors from 'cors'


app.use(cors())
app.use(express.json())

app.get('/api', (req, res) => {
  const user = {
    name:'Mesto',
    age: 50
  }
  res.json(user)
})


app.listen(3000, () => {
  console.log('Server is running...')
})