const http = require('http');
const port = 8080

console.log("Hola desde consola!")
console.log("Debes abrir el puerto: " + port)
console.log("http://localhost:" + port)

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>h1 del documento</h1>");
  res.write("<p>Parte media del documento</p>");
  res.end("<p>Final del documento</p>");
}).listen(port);