var http = require('http');
const port = 8080

console.log("Hola desde consola!")
console.log("Debes abrir el puerto: " + port)
console.log("http://localhost:" + port)

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hola desde Node!');
}).listen(port);