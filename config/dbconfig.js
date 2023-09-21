const mysql = require('mysql2')
require('dotenv').config()
const conn = mysql.createPool({
  host: process.env.DB_HOST, 
  user: process.env.DB_USER,      
  password: process.env.DB_PASSWORD,      
  database: process.env.DB_NAME
})

conn.getConnection((err, dd) => {
  if (err) throw err
  console.log('Database is connected successfully!')
})
module.exports = conn.promise()