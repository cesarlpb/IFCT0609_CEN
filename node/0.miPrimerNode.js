const http = require('http');
const port = 8080

console.log("Hola desde consola!")
console.log("Debes abrir el puerto: " + port)
console.log("http://localhost:" + port)

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
  <h1>Esto es un h1</h1>
  <p>Esto es un p</p>
  <p>Esto es un p</p>`);
}).listen(port);