const mysql = require("mysql")
const http = require("http")

const con = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "contraseña", // <-- colocamos contraseña
  database : "nombre_db" // <-- cambiad nombre db 
});

// Queries
const selectAll = "SELECT * FROM nombre_tabla LIMIT 10;"; // <--- cambiad nombre tabla

con.connect(function(err) {
  if (err) throw err;
  console.log("Conexión exitosa a la base de datos " + "nombre_tabla");
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
  }).listen(8080, () => { console.log("http://localhost:8080")});
});