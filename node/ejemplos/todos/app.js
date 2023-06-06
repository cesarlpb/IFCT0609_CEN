/*
  Ejemplo de NodeJS para crear unos todos:
  - Crear un servidor
    CRUD -> Create, Read, Update, Delete
    - Create: Crear una ruta para POST /todos (crear un todo)
    - Read: Crear una ruta para GET /todos (leer todos los todos)
    - Read: Crear una ruta para GET /todos/:id (leer un todo específico)
    - Update: Crear una ruta para PUT /todos/:id (editar un todo específico)
    - Delete: Crear una ruta para DELETE /todos/:id (eliminar un todo específico)

    Para hacer las peticiones a las rutas, se puede utilizar Postman o Insomnia
    -> https://www.postman.com/downloads/
    ¿Por qué Postman? Para no tener que hacer los formularios HTML por el momento
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

  if (url.startsWith("/todos") && method == "GET") {
    // Usamos split para conseguir el id de la URL:
    let id = url.split("/")[2]; // /todos/1 -> id = 1
    // Comprobamos que es número válido:
    // Comprobamos que no sea NaN (Not a Number)
    // Comprobamos que sea mayor que 0
    // Comprobamos que no sea null, undefined, etc...
    let esEntero = id == parseInt(id); // o podemos usar: Number.isInteger(Number(id))
    let esIdValido = !isNaN(id) && esEntero && id > 0 && id ? true : false;
    if (esIdValido) {
      let todo = {};
      // Devolvemos un resultado
      // Bucle para encontrar el todo con el id
      for (let i = 0; i < todos.length; i++) {
        let currentId = todos[i].id
        if (currentId == id) {
          todo = todos[i]
          break;
        }
      }
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
      console.log(JSON.stringify(todo, null, 2))
      res.end(JSON.stringify(todo, null, 2)); // Convertir el único objeto a JSON -> se devuelve como string
    } else if (!id) {
      // Devolvemos todos los todos
      // 200 -> OK
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
      console.log(JSON.stringify(todos, null, 2))
      res.end(JSON.stringify(todos, null, 2)); // Convertir el arreglo a JSON -> se devuelve como string
    }
    else {
      // 400 -> Bad Request
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=UTF-8' });
      console.log("Error 400. Bad request")
      res.end("Error 400. Bad request"); // Mensaje de error
    }
  } else if (url == "/todos" && method == "POST") {
    // lógica del método POST para crear nuevo todo
    res.end("POST /todos")
  } else if (url == "/todos" && method == "PUT") {
    // lógica del método PUT para editar un todo
    res.end("PUT /todos")
  } else if (url == "/todos" && method == "DELETE") {
    // lógica del método DELETE para eliminar un todo
    res.end("DELETE /todos")
  }
  else {
    // 404 -> Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
    console.error(`Error 404. Ruta ${url} o método ${req.method} incorrecto. Envia la petición a /todos`)
    res.end(`Error 404. Ruta ${url} o método ${req.method} incorrecto. Envia la petición a /todos`);
  }

}).listen(8080); // Se utiliza el puerto 8080 para el servidor
                 // localhost:8080 -> http://localhost:8080
                 // localhost -> 127.0.0.1