const express = require('express');
const router = express.Router();
const urlencode = require('urlencode'); // librería para codificar y decodificar URLs

const path = require('path'); // Módulo para crear rutas absolutas a nuestros archivos

// Body parser para leer el body de los requests -> POST, PUT
const bodyParser = require('body-parser');
// To parse URL encoded data
router.use(bodyParser.urlencoded({ extended: false }))
// body -> JSON
router.use(bodyParser.json())

// Para servir archivos estáticos
// Nota: a diferencia del tutorial, nosotros usamos router en vez de app:
router.use("/img", express.static('public'));
// Las imágenes estarán disponibles en localhost:3000/img/<nombre_de_archivo.extension>

const notas = [
  {id: 1, texto: "Nota 1", name: "Pepe"},
  {id: 2, texto: "Nota 3", name: "Pepe"},
  {id: 1, texto: "Nota 1", name: "María"},
  {id: 2, texto: "Nota 2", name: "María"},
]
const users = [
  {id: 0, name: "Pepe", email: "pepe@gmail.com"},
  {id: 1, name: "María", email: "maria@gmail.com"},
  {id: 2, name: "Juan", email: "juan@gmail.com"},
]
// Middleware - console.log de la hora, la ruta, la ip y el método de cada request
// Middleware #1
router.use(function (req, res, next) {
  let fechaHora = new Date().toLocaleString();
  let url = urlencode.decode(req.originalUrl); // /notas/1/Mar%C3%ADa -> /notas/1/María
  console.log(fechaHora, "- Request en " + url + " desde " + req.ip + " con método " + req.method);
  // Pasamos un usuario mediante el objeto request:
  req.user = {id: "123", name: "Juan"};
  next();
  // TODO: Ejercicio. Guardar en un archivo de texto la hora, la ruta, la ip y el método de cada request -> TXT
});
// Middleware #2 - cambia req.method al valor correcto si viene en un form
router.use(function (req, res, next) {
  let metodoOriginal = req.method;
  if (req.body && req.body._method) {
    req.method = req.body._method.toUpperCase(); // put -> PUT
    delete req.body._method;
  }
  console.log("Método original:" + metodoOriginal + " Método actual: " + req.method);
  next();
});
router.all('/', function(req, res){
  console.log("Hola desde /"); // Después de ejecutar el middleware #1 y #2
  res.send(`
  <h1>Endpoints de usuarios</h1>
  <h2>JSON</h2>
  <ul>
    <li><code>GET</code> <a href="/json/usuarios">/json/usuarios</a> <span>Lista de todos los usuarios</span></li>
    <li><code>GET</code> <a href="/json/usuarios/1">/json/usuarios/&lt;id&gt;</a> <span>Usuario por <code>id</code> (int)</span></li>
    <li><code>POST</code> <a href="/json/crear">/json/crear</a> <span>Crear usuario</span></li>
    <li><code>PUT</code> <a href="/json/editar/1">/json/editar/&lt;id&gt;</a> <span>Editar usuario por <code>id</code> (int)</span></li>
    <li><code>DELETE</code> <a href="/json/borrar/1">/json/borrar/&lt;id&gt;</a> <span>Borrar usuario por <code>id</code> (int)</span></li>
  </ul>   
  <h2>HTML</h2>
  <ul>
    <li><code>GET</code> <a href="/html/usuarios">/html/usuarios</a> <span>Lista de todos los usuarios</span></li>
    <li><code>GET</code> <a href="/html/usuarios/1">/html/usuarios/&lt;id&gt;</a> <span>Usuario por <code>id</code> (int)</span></li>
    <li><code>POST</code> <a href="/html/crear">/html/crear</a> <span>Crear usuario</span></li>
    <li><code>PUT</code> <a href="/html/editar/1">/html/editar/&lt;id&gt;</a> <span>Editar usuario por <code>id</code> (int)</span></li>
    <li><code>DELETE</code> <a href="/html/borrar/1">/html/borrar/&lt;id&gt;</a> <span>Borrar usuario por <code>id</code> (int)</span></li>
  </ul> 
  `);
});
// El ? después del parámetro name indica que es opcional, entonces podemos usar el endpoint en caso de recibirlo o no
router.get('/hola/:name?', function(req, res){
  if(req.params.name){
    res.send("Hola, " + req.params.name + "!");
  }else{
    res.send("Hola!")
  }
});
router.post('/hola', function(req, res){
  // TODO: crear el usuario en la base de datos
  let nuevoUsuario = req.body; // req.body es el objeto que enviamos en el body del request al hacer un POST
  nuevoUsuario.rol = "usuario"
  res.send(nuevoUsuario);
});

// ****************** Usuarios GET y GET por id ******************
// Pattern matched routes
router.get("/html/usuarios", function(req, res){
  res.sendFile(path.join(__dirname, "html", "usuarios.html"));
});
router.get("/json/usuarios", function(req, res){
  res.send(users) // JSON
});
router.get("/html/usuarios/:id(\\d+)", function(req, res){
  res.sendFile(path.join(__dirname, "html", "usuario.html"));
});
router.get('/json/usuarios/:id(\\d+)', function(req, res){
  // \\d+ es un regex para validar dígitos en cualuier cantidad
  let user = users.find(user => user.id == req.params.id);
  res.send(user);
});
// ******* Formulario para crear un usuario *******
router.get('/html/crear', function(req, res){
  // Formulario para crear un usuario
  let ubicacion = 'forms/form-crear.html';
  // Usamos path para obtener ruta a la carpeta actual y concatenarle la ruta relativa del archivo
  console.log("Ubicación absoluta de la carpeta: " + path.join(__dirname, ""));
  console.log("Ubicación relativa del archivo: " + ubicacion);
  // Colocamos una cookie que guarde el tamaño del array de users actualmente:
  res.cookie('__usersLength', users.length);
  // Devolvemos en el response el archivo html del formulario
  res.sendFile(path.join(__dirname, ubicacion))
});
router.post('/json/crear', function(req, res){
  // Recibimos el form y lo enviamos de vuelta
  let nuevoUsuario = req.body; // req.body es el objeto que enviamos en el body del request al hacer un POST
  let nuevoUsuarioIdx = users.push(nuevoUsuario); // Actualizamos variable con el dato DESDE el array y lo devolvemos para comprobar que se añadió con todos los campos
  console.log(users[nuevoUsuarioIdx - 1])
  // TODO: crear el usuario en la base de datos
  res.status(201); // 201 Created
  res.send(users[nuevoUsuarioIdx - 1]); // o el user nuevo
});
//  ********* Formulario para editar un usuario *********
router.get('/html/editar/:id(\\d+)', function(req, res){
  let ubicacion = 'forms/form-editar.html';
  res.cookie("__id", req.params.id); // Guardamos el id para leerlo desde el HTML, de la misma forma, podemos guardar el nombre, email, etc.
  console.log(req.params)
  // Formulario para editar un usuario
  res.sendFile(path.join(__dirname, ubicacion))
});
// Nota: revisar por qué con PUT el form no se envía
router.put('/editar/:id(\\d+)', function(req, res){
  let id = req.params.id;
  let usuarioEditado = req.body;
  // Buscamos el id del usuario en el array
  let usuarioIdx = users.findIndex(user => user.id == id);
  if(usuarioIdx == -1){
    usuarioIdx = users.length; // Si no existe, lo añadimos al final
  }
  // Actualizamos el usuario en el array
  users[usuarioIdx] = usuarioEditado;
  // Devolvemos el usuario actualizado
  res.send(users[usuarioIdx]);
});
// ********* Formulario para borrar un usuario *********
router.get('/html/borrar/:id(\\d+)', function(req, res){
  let ubicacion = 'forms/form-borrar.html';
  res.sendFile(path.join(__dirname, ubicacion))
});
router.delete('/json/borrar/:id(\\d+)', function(req, res){
  let id = req.params.id;
  let idx = users.findIndex(user => user.id == id); // Si no encuentra el id, devuelve -1
  if(idx == -1){
    res.status(404); // 404 Not Found
    let ubicacion = 'html/404.html';
    res.sendFile(path.join(__dirname, ubicacion));
  }else{
    users.splice(idx, 1); // Borramos el usuario del array
    res.send(`Usuario con id ${id} borrado`);
  }
});
// *********************** Usuarios ***********************

// Notas de cosas por hacer
// Final de formulario para crear un usuario
router.get('/notas', function(req, res){
  res.send(notas);
});
// URL Building con Express
// Route parameters
router.get('/notas/:id(\\d+)', function(req, res){
  let nota = notas.find(nota => nota.id == req.params.id);
  res.send(nota);
});
// TODO: Ejercicio. Crear un solo enpoint que use un parámetro opcional para filtrar por nombre y por id, es decir, "fusionar" los dos endpoints /:id y /:id/:name
router.get('/notas/:id(\\d+)/:name', function(req, res){
  let nota = notas.find(nota => nota.id == req.params.id && nota.name == req.params.name);
  res.send(nota);
});

// *********************** Imágenes ***********************
// Imágenes en carpeta 'public'
router.get("/img", function(req, res){
  let ubicacion = 'html/img.html';
  res.sendFile(path.join(__dirname, ubicacion));
});

// Todas las demás rutas y métodos no implementados
router.all('*', function(req, res){
  res.status(404); // HTTP status 404: NotFound
  res.send("404 Not Found. Ruta o método no están implementados");
});

module.exports = router;