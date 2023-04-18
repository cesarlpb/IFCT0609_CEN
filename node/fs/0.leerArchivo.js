const http = require('http');
const fs = require('fs');

const filename = 'archivo.html'
console.log("http://localhost:8080")

http.createServer(function (req, res) {
  fs.readFile(filename, function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(data); // Escribimos el html en nuestra respuesta en HTML
    return res.end();
  });
}).listen(8080);