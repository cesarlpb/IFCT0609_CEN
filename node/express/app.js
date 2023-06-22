// Importamos librería express
const express = require("express");
// Importamos las funciones desde functions.js
const { getAll, getOne } = require("./functions");
// Creamos una instancia de express llamada app
const app = express();
app.set('json spaces', 2) // Configuración para que los JSON aparezcan indentados

// GET de un array (lista)
app.get("/notas", (req, res, next) => {
  let notas = getAll(); // llamamos a la función getAll de functions para recibir el arr de notas
  res.json(notas);
});
// GET de un elemento
app.get("/notas/:id", (req, res, next) => {
  let nota = getOne(req.params.id); // pasamos el id a la función getOne de functions para recibir una nota
  res.json(nota)
});
app.post("/notas", (req, res, next) => {
  res.json({"mensaje": "Nota añadida"})
});
app.put("/notas/:id", (req, res, next) => {
  res.json({"mensaje": `Nota ${req.params.id} modificada`})
});
app.delete("/notas/:id", (req, res, next) => {
  res.json({"mensaje": `Nota ${req.params.id} borrada`})
});

// TODO: creamos los endpoints para CRUD de un arr
// GET de un elemento
// POST de un elemento
// PUT de un elemento
// DELETE de un elemento

 // Aplicación que sale por el puerto 8080
app.listen(8080, () => {
 console.log("Servidor en ejecución en http:localhost:8080/");
});