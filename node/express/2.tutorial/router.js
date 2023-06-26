const express = require('express');
const router = express.Router();
const urlencode = require('urlencode'); // librería para codificar y decodificar URLs

// Body parser para leer el body de los requests -> POST, PUT
const bodyParser = require('body-parser');
// To parse URL encoded data
router.use(bodyParser.urlencoded({ extended: false }))
// body -> JSON
router.use(bodyParser.json())

const notas = [
  {id: 1, texto: "Nota 1", name: "Pepe"},
  {id: 2, texto: "Nota 3", name: "Pepe"},
  {id: 1, texto: "Nota 1", name: "María"},
  {id: 2, texto: "Nota 2", name: "María"},
]
const users = [
  {id: "000", name: "Pepe"},
  {id: "001", name: "María"},
  {id: "002", name: "Juan"},
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
// Middleware #2
router.use(function (req, res, next) {
  let fechaHora = new Date().toLocaleString();
  console.log(fechaHora, "- Hora en el Middleware #2");
  // Escribimos el usuario (con id y name) que pasamos en el middleware #1
  console.log(`
    Usuario:
    id: ${req.user.id},
    nombre: ${req.user.name}
    `)
    req.user.rol = "usuario" // Añadimos una propiedad al objeto user
  next();
});
router.all('/', function(req, res){
  console.log("Hola desde /"); // Después de ejecutar el middleware #1 y #2
  res.send("Hola mundo desde express. Usuario actual: " + req.user.name + " con id " + req.user.id + " con rol " + req.user.rol);
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
// Formulario para crear un usuario
router.get('/form', function(req, res){
  // Formulario para crear un usuario
  // TODO: crear el formulario
  res.send('<h2>Formulario</h2>')
});
router.post('/form', function(req, res){
  // Recibimos el form y lo enviamos de vuelta
  // TODO: crear el usuario en un array
  // TODO: crear el usuario en la base de datos
  res.send(req.body);
});
// Final de formulario para crear un usuario
router.get('/notas', function(req, res){
  res.send(notas);
});
// URL Building con Express
// Route parameters
router.get('/notas/:id', function(req, res){
  let nota = notas.find(nota => nota.id == req.params.id);
  res.send(nota);
});
// TODO: Ejercicio. Crear un solo enpoint que use un parámetro opcional para filtrar por nombre y por id, es decir, "fusionar" los dos endpoints /:id y /:id/:name
router.get('/notas/:id/:name', function(req, res){
  let nota = notas.find(nota => nota.id == req.params.id && nota.name == req.params.name);
  res.send(nota);
});

// Pattern matched routes
router.get("/users", function(req, res){
  res.send(users)
});
router.get('/users/:id([0-9]{3})', function(req, res){
  let user = users.find(user => user.id == req.params.id);
  res.send(user);
});
router.all('*', function(req, res){
  res.status(404); // HTTP status 404: NotFound
  res.send("404 Not Found. Ruta o método no están implementados");
});

module.exports = router;