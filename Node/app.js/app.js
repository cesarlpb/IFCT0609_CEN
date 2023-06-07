// Importación de módulo http -> comunicación cliente-servidor
const http = require('http');

// Método para crear un servidor con NodeJS
// req == request -> petición del cliente
// res == response -> respuesta del servidor (esto lo determinamos nosotros)
http.createServer(function (req, res) {

  // Algunos datos de la petición del cliente:
  console.log("url:", req.url); // url después de localhost:8080
  console.log("statusCode:", req.statusCode); // null
  console.log("method:", req.method); // GET por defecto
  console.log("httpVersion:", req.httpVersion); // 1.1 por defecto

  // Crear el response del servidor a la petición del cliente
  // 200 -> código de estado (200 = OK)
  // Content-Type -> tipo de contenido que se va a enviar
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola desde Node!');
}).listen(8080); // Se utiliza el puerto 8080 para el servidor
                 // localhost:8080 -> http://localhost:8080
                 // localhost -> 127.0.0.1