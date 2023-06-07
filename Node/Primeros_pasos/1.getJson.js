const http = require('http');
const port = 8080

console.log("Hola desde consola!")
console.log("Debes abrir el puerto: " + port)
console.log("http://localhost:" + port)

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  const json = {
    id: 1,
    message: 'Hola desde Node!',
    campo: "Otro campo", 
    lista: [1, 2, 3],
    obj: {
        id: 2,
        campo2: "Otro campo 2"
    },
    estaCreado: false
  };
  res.end(JSON.stringify(json));
}).listen(port);