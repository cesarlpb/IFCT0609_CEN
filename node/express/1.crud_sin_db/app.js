// Importamos librería express
const express = require("express");
// Importamos librería body-parser
const bodyParser = require('body-parser')
// Importamos clase Nota
const { Nota } = require("./nota");
// Importamos las funciones desde functions.js
const { getAll, getOne, createOne, updateOne, deleteOne } = require("./functions");

// Creamos una instancia de express llamada app
const app = express();

// Importaciones para el body parser
// Parse application/x-www-form-urlencoded -> para parsear los formularios
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json -> para parsear los JSON
app.use(bodyParser.json())

// Configuración para que los JSON aparezcan indentados
app.set('json spaces', 2) 

// GET de un array (lista)
app.get("/notas", (req, res, next) => {
  // Sembramos 3 datos en el array de notas
  if(Nota.notas.length == 0) Nota.seed();
  let notas = getAll(); // llamamos a la función getAll de functions para recibir el arr de notas
  res.json(notas);
});
// GET de un elemento
app.get("/notas/:id", (req, res, next) => {
  let nota = getOne(req.params.id); // pasamos el id a la función getOne de functions para recibir una nota
  res.json(nota)
});
// POST de un elemento
app.post("/notas", (req, res, next) => {
  let nota = req.body; // objeto de tipo Nota
  let nuevaNota = createOne(nota);
  res.json(nuevaNota)
});
// PUT de un elemento
app.put("/notas/:id", (req, res, next) => {
  let notaEditada = updateOne(req.params.id, req.body);
  res.json(notaEditada)
});
// DELETE de un elemento
app.delete("/notas/:id", (req, res, next) => {
  let mensaje = deleteOne(req.params.id);
  res.json(mensaje)
});

 // Aplicación que sale por el puerto 8080
app.listen(8080, () => {
 console.log("Servidor en ejecución en http:localhost:8080/");
});