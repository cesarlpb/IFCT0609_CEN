// Leemos lista del archivo users.json
// Devolvemos esa lista en el endpoint
// localhost:8080

const http = require('http');
const fs = require('fs');
const port = 8080;
// const filename = "./users.json"
const filename = "./products.json"

console.log("App disponible en: http://localhost:" + port);

http.createServer(function (req, res) {
  
  fs.readFile(filename, (err, users) => {
    if (err){
        console.log("El archivo no se ha encontrado");
        console.error(err);
        res.writeHead(500); // Error interno del servidor == algo fue mal
        res.end("500. Error interno del servidor.")
    }
    else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(users);
        console.log("Solicitud de users correcta") // informativo
    }
  });
}).listen(port);