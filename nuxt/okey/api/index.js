const express = require('express')
const app = express()
const cors = require('cors')
const Router = require('./modules/router')

app.use(cors({ credentials: true, origin: true }))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

app.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})


app.use('/', Router)


app.use((error, req, res, next) => {
  console.log({ error })
})

// Export the server middleware
export default {
  path: '/api',
  handler: app
}