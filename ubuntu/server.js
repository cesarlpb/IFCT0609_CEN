const mysql = require("mysql")
const http = require("http")
require('dotenv').config() // Accedemos al .env

const con = mysql.createConnection({
  host : "127.0.0.1", // con localhost en el servidor no conecta, más info: https://github.com/nodejs/help/issues/1555 y https://stackoverflow.com/questions/30266221/node-js-mysql-error-connect-econnrefused
  port: 3306, // (opcional) Usamos puerto por defecto
  user : process.env.USER,
  password : process.env.PASSWORD, // <-- colocamos contraseña
  database : process.env.DATABASE, // <-- cambiad nombre db 
  // socketPath: '/var/run/mysqld/mysqld.sock'
});
const db = process.env.DATABASE;
const table = "temp" // <--- cambiad nombre tabla
// Queries
const selectAll = `SELECT * FROM ${table} LIMIT 10;`; 

con.connect(function(err) {
  if (err) throw err;
  console.log("Conexión exitosa a la base de datos " + db);
  http.createServer(function(req, res){
    let id = req.url.split("/")[2]
    if(req.url.startsWith("/datos") && !id && req.method == "GET"){
      con.query(selectAll, function (err, result) {
        if (err) throw err;
        console.log("Lista de datos")
        res.writeHead(200, {"Content-type" : "application/json; charset = UTF-8;"})
        res.end(JSON.stringify(result, null, 2))
      })
    }else{
      res.writeHead(400)
      res.end("Bad Request")
    }
  }).listen(8080, () => { console.log("http://localhost:8080/datos")});
});