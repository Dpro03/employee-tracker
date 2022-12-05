// connection to database
let mysql = require("mysql2");
let DB = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sarah@0308",
    database: "company_db",
  },
  console.log(`Connected to the company_db database!`)
);

module.exports = DB;