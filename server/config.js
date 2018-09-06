const mysql = require('mysql')

const connectdb = () => {
  let connection = mysql.createConnection({
    host: '59.110.18.65',
    user: 'rxm_db',
    password: '2x1CpGT2C5URxfSE',
    database: 'test',
    port: '3306'
  })
  return connection;
}

module.exports = connectdb;
