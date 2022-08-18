const mysql = require("mysql");

const db = mysql.createConnection({
    host : "http://localhost:3000/",
    user: "admin",
    password : "1234",
    database : "test"
});

db.connect();

module.exports = db;