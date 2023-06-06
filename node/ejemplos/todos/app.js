/*
  Ejemplo de NodeJS para crear unos todos:
  - Crear un servidor
    CRUD -> Create, Read, Update, Delete
    - Create: Crear una ruta para POST /todos (crear un todo)
    - Read: Crear una ruta para GET /todos (leer todos los todos)
    - Read: Crear una ruta para GET /todos/:id (leer un todo específico)
    - Update: Crear una ruta para PUT /todos/:id (editar un todo específico)
    - Delete: Crear una ruta para DELETE /todos/:id (eliminar un todo específico)
*/

// Importación de módulo http -> comunicación cliente-servidor
const http = require('http');

// Método para crear un servidor con NodeJS
// req == request -> petición del cliente
// res == response -> respuesta del servidor (esto lo determinamos nosotros)
http.createServer(function (req, res) {

  let url = req.url; // url después de localhost:8080 -> / o /api, /todos, etc...
  let method = req.method; // GET, POST, PUT, DELETE, etc...

  let todos = [
    { id: 1, titulo: "Comprar pan", descripcion: "Ir a comprar el pan", completado: false },
    { id: 2, titulo: "Tomar café", descripcion: "☕️", completado: false },
    { id: 3, titulo: "Programar en JS", descripcion: "Aprender más Javascript", completado: false },
  ]

  if (url == "/todos") {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log(JSON.stringify(todos))
    res.end(JSON.stringify(todos)); // Convertir el arreglo a JSON -> se devuelve como string
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Ruta incorrecta. Envia la peticion a /todos');
  }

}).listen(8080); // Se utiliza el puerto 8080 para el servidor
                 // localhost:8080 -> http://localhost:8080
                 // localhost -> 127.0.0.1