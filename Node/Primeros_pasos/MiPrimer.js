import { createServer } from 'http';
import { miFuncion } from '../fecha'; // importamos módulo fecha

console.log("Servidor en: ")
console.log("http://localhost:8080")

createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>Fecha:</h1>");
  res.write("<p>" + miFuncion() + "</p>") // <--- notación
  res.end(); // terminar documento
}).listen(8080);


