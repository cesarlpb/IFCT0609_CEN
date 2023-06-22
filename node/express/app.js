// Importamos librería express
const express = require("express");
// Importamos las notas desde nota.js
const notas = require("./nota");
// Creamos una instancia de express llamada app
const app = express();
app.set('json spaces', 2) // Configuración para que los JSON aparezcan indentados

// GET de un array (lista)
app.get("/notas", (req, res, next) => {
  res.json(notas);
});
// GET de un elemento
app.get("/notas/:id", (req, res, next) => {
  res.json({id: req.params.id})
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