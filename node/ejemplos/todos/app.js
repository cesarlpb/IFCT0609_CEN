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
const Todo = require('./todo.js');

// Método para crear un servidor con NodeJS
// req == request -> petición del cliente
// res == response -> respuesta del servidor (esto lo determinamos nosotros)
http.createServer(function (req, res) {

  let url = req.url; // url después de localhost:8080 -> / o /api, /todos, etc...
  let method = req.method; // GET, POST, PUT, DELETE, etc...
  
  Todo.seed(); // Crear algunos todos de ejemplo
  const TODOS = Todo.getAllTodos(); // Obtener los todos creados
  // getAllTodos() equivale a Todo.todos

  // GET all y GET by id
  if (url.startsWith("/todos") && method == "GET") {
    // Usamos split para conseguir el id de la URL:
    let id = url.split("/")[2]; // /todos/1 -> id = 1
    let esIdValido = Todo.validarId(id)
    let esUrlValida = url.endsWith(id) || url.endsWith(id + "/") // permitimos /todos/1 o /todos/1/
    if (esIdValido && esUrlValida) {
      let todo = Todo.getTodo(id); // Devuelve el Todo o null si no existe
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
      console.log(JSON.stringify(todo, null, 2)) // Escribimos resultado en consola (DEV)
      res.end(JSON.stringify(todo ? todo : {}, null, 2));    // Convertir el único objeto a JSON -> se devuelve como string
    } else if (!id) {
      // Devolvemos todos los todos con statusCode 200 -> OK
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
      console.log(JSON.stringify(TODOS, null, 2)) // DEV
      res.end(JSON.stringify(TODOS, null, 2)); // Convertir el arreglo a JSON -> se devuelve como string
    }
    else {
      // El id no es válido -> Error 400 -> Bad Request (petición incorrecta)
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=UTF-8' });
      console.log("Error 400. Bad request") // DEV
      res.end("Error 400. Bad request"); // Mensaje de error
    }
  } else if (url == "/todos" && method == "POST") {
    // lógica del método POST para crear nuevo todo
    const headers = req.headers;
    const esJSON = headers['content-type'].toLowerCase().startsWith("application/json");
    // Variables para lectura del body como string de JSON y como objeto JSON
    let jsonString = '', json = {};

    if (!esJSON) {
      // 400 -> Bad Request
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=UTF-8' });
      console.log("Error 400. Bad request") // DEV
      res.end("Error 400. Bad request. Content-type incorrecto, solo se admite JSON."); // Mensaje de error
    }
    else {  
      req.on('data', function (data) {
        jsonString += data;
      });
      req.on('end', function () {
        // Convertimos el string de JSON a objeto PERO primero lo pasamos a string con stringify porque sino da error la conversión
        json = JSON.parse(jsonString);
        // Leemos los keys del json
        const keys = Object.keys(json);
        // Validamos los campos del json
        let sonKeysValidos = Todo.verificarKeys(keys);
        let sonValuesValidos = Todo.verificarValues(json);

        // TODO: verificar que el id no se repita si nos pasan id
        // Revisar el scope de req.on(...)
      
        // Creamos un nuevo todo con esos campos
        if (sonKeysValidos && sonValuesValidos) {
        // El id no hace falta que me lo indiquen porque lo controlamos desde class Todo
        // El título puede estar vacío
        // La descripción puede estar vacía
        // El estado "completado" puede estar vacío -> false por defecto
          let nuevoTodo = new Todo(
            undefined,
            json?.titulo,
            json?.descripcion,
            json?.completado ?? false
          )
          // Este Todo se guarda automáticamente en el arreglo de todos -> Todo.todos
          res.writeHead(201, { 'Content-Type': 'text/plain; charset=UTF-8' }); // 201 -> Created
          console.log(JSON.stringify(nuevoTodo, null, 2)) // DEV
          res.end(JSON.stringify(nuevoTodo, null, 2))
        } else {
          // 400 -> Bad Request
          res.writeHead(400, { 'Content-Type': 'text/plain; charset=UTF-8' });
          console.log("Error 400. Bad request") // DEV
          res.end("Error 400. Bad request. Revisa la estructura del JSON."); // Mensaje de error
        }
      });
    }
  } else if (url == "/todos" && method == "PUT") {
    // lógica del método PUT para editar un todo
    // Recibir los campos que me envía la solicitud -> JSON
    // Validar esos campos de alguna forma
    // Editar el todo con el id que me envían
    // Agregar el nuevo todo a la lista de todos

    res.end("PUT /todos")
  } else if (url.startsWith("/todos") && method == "DELETE") {
    let id = url.split("/")[2]; // /todos/1 -> id = 1
    let esIdValido = Todo.validarId(id)
    let esUrlValida = url.endsWith(id) || url.endsWith(id + "/") // permitimos /todos/1 o /todos/1/
    // Si no hay id, Bad Request
    if (!esIdValido || !esUrlValida) {
      // 400 -> Bad Request
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=UTF-8' });
      console.log("Error 400. Bad request") // DEV
      res.end("Error 400. Bad request"); // Mensaje de error
    }
    // Si hay id, verificamos que exista ese id en la lista de todos -> borramos
    else {
      // Miramos si existe el id
      if (esIdValido) {
        let index = Todo.getTodoIndex(id); // Obtenemos el índice del todo con el id
        TODOS.splice(index, 1) // Eliminamos el todo con el id y devolvemos 200 -> OK
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
        console.log(`Se ha borrado el elemento con id ${id}\n\n`, JSON.stringify(TODOS))
        res.end(`Se ha borrado el elemento con id ${id}\n\n${JSON.stringify(TODOS, null, 2)}`); // Mensaje y array para comprobar que se ha borrado
      } 
      // else {
      //   // Si no existe, No Content -> 204
      //   res.writeHead(204, { 'Content-Type': 'text/plain; charset=UTF-8' });
      //   console.log(`El id ${id} no existe`)
      //   res.end(); // Mensaje vacío
      //   // TODO: revisar si conviene un error más adelante
      // }
    }
  }
  else {
    // 404 -> Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
    console.error(`Error 404. Ruta ${url} o método ${req.method} incorrecto. Envia la petición a /todos`)
    res.end(`Error 404. Ruta ${url} o método ${req.method} incorrecto. Envia la petición a /todos`);
  }
}).listen(8080); // Se utiliza el puerto 8080 para el servidor
                 // localhost:8080/todos -> http://localhost:8080/todos
                 // localhost -> 127.0.0.1