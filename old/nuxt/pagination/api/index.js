const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db  = require('./modules/db')
const personsSchema = new mongoose.Schema({} , {strict: false})
const Persons = new mongoose.model('Persons', personsSchema)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/', async(req, res) => {
  let page = req.body.page === '' ? 1 : req.body.page
  let limit = 50
  const result = await Persons.find({},{_id:0}).limit(limit).skip((page-1) * limit)
  const length = await Persons.aggregate([{$count:'count'}])
  res.json({result:result,length:length})
})

export default {
  path:'/api',
  handler: app
}