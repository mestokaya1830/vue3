const express = require('express')
const app = express()
const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '9090',
    database: 'crud'
});

con.connect(err => {
    if (err) throw err;
    console.log('Connected!');
});

app.get('/', (req, res) => {
  con.query('SELECT * FROM users',(err, result) =>{
    if (!err) {
      res.json(result)
    }
  })
})

export default {
  path:'/api',
  handler: app
}