const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "adm",
  password: "root"
});

module.exports = connection;
