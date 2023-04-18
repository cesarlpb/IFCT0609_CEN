const http = require('http');

console.log("http://localhost:8080")

// Creamos servidor (local):
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>Hola, mundo</h1>"); // Escribimos en el response en HTML
  // Podemos añadir todos los res.write() que queramos
  res.write("<p>Siguiente fila</p>") // Añadimos \n para saltar línea
  res.write("<hr>")
  res.end("<p>Fin<p>"); // Terminamos el response
}).listen(8080); // Escuchamos el puerto 8080 para responder a nuevas peticiones