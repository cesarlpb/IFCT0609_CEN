// Importamos librería express
const express = require("express");
// Creamos una instancia de express llamada app
const app = express();

class PostIt{
  constructor(titulo, texto, prioridad, fecha){
    this.titulo = titulo;
    this.texto = texto;
    this.prioridad = prioridad;
    this.fecha = fecha;
  }
}
// Datos para los endpoints
const postIts = [
  new PostIt("Comprar pan", "Comprar pan en el supermercado", "", "2023-06-23"),
  new PostIt("Comprar leche", "Comprar leche en el supermercado", "normal", "2023-06-23"),
  new PostIt("Comprar huevos", "Comprar huevos en el supermercado", "urgente", "2023-10-22"),
];

// GET de un array (lista)
app.get("/postits", (req, res, next) => {
  res.json(postIts);
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