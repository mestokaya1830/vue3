import mongoose from "mongoose"

const db = mongoose.connect('mongodb://localhost:27017/works',{
  useNewUrlParser:true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected')
}).catch((err) => {console.log(err)})

export default db