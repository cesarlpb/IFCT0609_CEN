const http = require('http');
var fecha = require('./fecha'); // importamos módulo fecha

console.log("Servidor en: ")
console.log("http://localhost:8080")

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>Fecha:</h1>");
  res.write("<p>" + fecha.miFuncion() + "</p>") // <--- notación
  res.end(); // terminar documento
}).listen(8080);