import mongoose from 'mongoose'

const db = mongoose.connect('mongodb://mesto:9090@localhost:27017/works?authSource=works')
.then(() => console.log('Connected'))
.catch(() => console.log(error))

export default db