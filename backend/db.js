const mysql = require('mysql')
const db = mysql.createConnection({
host: "sql3.freemysqlhosting.net:3306",
user: "sql3681643",
password: "X6caQaf2hF",
database:"sql3681643" 
})

module.exports = db;