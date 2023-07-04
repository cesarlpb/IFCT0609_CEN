const http = require('http');

console.log("http://localhost:8080")

// Creamos servidor (local):
http.createServer(function (req, res) {
  res.write("Hola, mundo"); // Escribimos en el response
  // Podemos añadir todos los res.write() que queramos
  res.write("\nSiguiente fila") // Añadimos \n para saltar línea
  res.end("\nFin"); // Terminamos el response
}).listen(8080); // Escuchamos el puerto 8080 para responder a nuevas peticiones