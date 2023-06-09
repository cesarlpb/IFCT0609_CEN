/*
  Ejemplo de NodeJS para crear unos todos:
  - Crear un servidor con módulo http usando el método createServer
    CRUD -> Create, Read, Update, Delete
    - Create: Crear una ruta para POST /todos (crear un todo)

    - Read: Crear una ruta para GET /todos o /todos/ (leer todos los todos)
    - Read: Crear una ruta para GET /todos/{id} o /todos/{id}/ con id = 1, 2, 3... (leer un todo específico)
      - getAll() o getAllTodos() -> devuelve todos los objetos de clase Todo
      - getOne() o getById() o getTodoPorId() -> devuelve un objeto de clase Todo por id
      - getByTitulo() o getTodoPorTitulo() -> devuelve un objeto de clase Todo por título
      - etc...
      - getTodosPorCampo() -> función para buscar por cualquier campo del Todo
        -- devuelve un array de objetos de clase Todo por campo específico

    - Update: Crear una ruta para PUT /todos/{id} (editar un todo específico)
      - TODO: crear método para editar el todo por id
    - Delete: Crear una ruta para DELETE /todos/:id (eliminar un todo específico)
      - TODO: crear método para eliminar el todo por id (splice)

    Para hacer las peticiones a las rutas, se puede utilizar Postman 
    -> https://www.postman.com/downloads/
    -> Colección: https://github.com/cesarlpb/IFCT0609_CEN/blob/main/node/ejemplos/todos/todos.postman_collection_v2.json
      -- En Postman: Archivo > Importar > Seleccionar el .json
      -- Click derecho -> Renombrar o click en ... > Edit para actualizar nombre de colección
    ¿Por qué Postman? Para no tener que hacer los formularios HTML por el momento
*/

// Importación de Módulos  
const http = require('http');     // Importación de módulo http -> comunicación cliente-servidor
const Todo = require('./todo.js');// Importación de clase Todo
const h = require('./helpers.js');// Importación de módulo helpers -> funciones de ayuda
// Método createServer para crear un servidor con NodeJS
// req == request -> petición del cliente
// res == response -> respuesta del servidor (esto lo determinamos nosotros)
// url -> localhost:8080/todos
// https://www.w3schools.com/nodejs/met_http_createserver.asp
http.createServer(function (req, res) {

  const url = req.url;       // url después de localhost:8080 -> url = / o /api, /todos, etc...
  const method = req.method; // GET, POST, PUT, DELETE. Los demás métodos no los consideramos por el momento.
  const base = "todos";    // Parte inicial de la url del endpoint -> /todos

  Todo.seed(); // Crear algunos todos de ejemplo -> 5 todos
  const TODOS = Todo.getAllTodos(); // Obtener los todos creados -> 5 todos
  // Nota: getAllTodos() equivale a Todo.todos si no se aplica ninguna lógica en el método

  const esGetUrl = h.validarMethodURL(base, method, url).esGetUrl; // /todos o /todos/1
  const esPutUrl = h.validarMethodURL(base, method, url).esPutUrl; // /todos o /todos/1
  const esPostUrl = h.validarMethodURL(base, method, url).esPostUrl; // /todos o /todos/1
  const esDeleteUrl = h.validarMethodURL(base, method, url).esDeleteUrl; // /todos o /todos/1

  // Método GET 
  // GET all y GET by id
  if (esGetUrl && method == "GET") {
    // Usamos split para conseguir el id de la URL:
    let id = url.split("/")[2]; // /todos/1 -> id = 1
    let esIdValido = Todo.validarId(id)
    let esUrlValida = url.endsWith(id) || url.endsWith(id + "/") // permitimos /todos/1 o /todos/1/
    if (esIdValido && esUrlValida) {
      let todo = Todo.getTodoPorId(id); // Devuelve el Todo o null si no existe
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
  } else if (esPostUrl && method == "POST") {
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
  } else if (esPutUrl && method == "PUT") {
    // Usamos split para conseguir el id de la URL:
    let id = url.split("/")[2]; // /todos/1 -> id = 1
    let esIdValido = Todo.validarId(id)
    let esUrlValida = url.endsWith(id) || url.endsWith(id + "/") // permitimos /todos/1 o /todos/1/
    let todo = Todo.getTodoPorId(id); // Buscar el objeto con ese id, obtenemos null si el id no existe
    // TODO: revisar por qué esIdValido es int y no boolean
    if (!esIdValido || !esUrlValida) {
      // 400 -> Bad Request
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=UTF-8' });
      console.log("Error 400. Bad request") // DEV
      res.end("Error 400. Bad request: url, id o formato de JSON incorrecto."); // Mensaje de error
    }

    // Leemos el contenido del body del request igual que en POST -> TODO: refactorizar en una función
    const headers = req.headers;
    const esJSON = headers['content-type'].toLowerCase().startsWith("application/json");
    // Variables para lectura del body como string de JSON y como objeto JSON
    let jsonString = '', json = {};
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
      // let sonValuesValidos = Todo.verificarValues(Object.keys(json)); // arr de keys como param
      if (!esJSON || !sonKeysValidos) {
        // 400 -> Bad Request
        res.writeHead(400, { 'Content-Type': 'text/plain; charset=UTF-8' });
        console.log("Error 400. Bad request") // DEV
        res.end("Error 400. Bad request: url, id o formato de JSON incorrecto."); // Mensaje de error
      } else if (todo) {
        // Si el todo existe, actualizamos sus campos
        Todo.editarTodoPorId(id, json);
        // 200 -> OK
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
        console.log(JSON.stringify(todo, null, 2)) // DEV
        res.end(JSON.stringify(todo, null, 2))
      } else {
        // 204 -> No Content // mensaje en blanco
        res.writeHead(204, { 'Content-Type': 'text/plain; charset=UTF-8' });
        console.log("204. No se encontró el todo con ese id") // DEV
        res.end();
      }
    })
  } else if (esDeleteUrl && method == "DELETE") {
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
      // TODO: refactorizar en una función dentro de clase Todo
      if (esIdValido) {
        Todo.borrarTodoPorId(id);
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
        console.log(`Se ha borrado el elemento con id ${id}\n\n`, JSON.stringify(TODOS))
        res.end(`Se ha borrado el elemento con id ${id}\n\n${JSON.stringify(TODOS, null, 2)}`); // Mensaje y array para comprobar que se ha borrado
      } 
      else {
        // Si no existe, No Content -> 204
        res.writeHead(204, { 'Content-Type': 'text/plain; charset=UTF-8' });
        console.log(`El id ${id} no existe`)
        res.end(); // Mensaje vacío
        // TODO: revisar si conviene un error más adelante
        // TODO: cuando se piden borrados sucesivos del mismo id se borra otro TODO <--- RESOLVER
      }
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