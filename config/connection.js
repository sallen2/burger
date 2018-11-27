const mysql = require('mysql');
const fs = require('fs');


const con = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'burger_db',
  ssl: {
    ca: fs.readFileSync(`${__dirname}/rds-combined-ca-bundle.pem`),
  },
});

module.exports = con;
