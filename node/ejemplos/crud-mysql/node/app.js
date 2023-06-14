const http = require('http');

http.createServer(function (req, res) {
  console.log("Consola del servidor")
  res.end("Salida para el navegador") // por defecto es text/plain
}).listen(8080, () => { console.log("Servidor en ejecución en http://localhost:8080") })