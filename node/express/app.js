// Importamos librería express
const express = require("express");
// Creamos una instancia de express llamada app
const app = express();
app.set('json spaces', 2) // Configuración para que los JSON aparezcan indentados

class Nota{
  constructor(id, titulo, texto, prioridad, fecha){
    this.id = id;
    this.titulo = titulo;
    this.texto = texto;
    this.prioridad = prioridad;
    this.fecha = fecha;
  }
}
// Datos para los endpoints
const notas = [
  new Nota(1, "Comprar pan", "Comprar pan en el supermercado", "", "2023-06-23"),
  new Nota(2, "Comprar leche", "Comprar leche en el supermercado", "normal", "2023-06-23"),
  new Nota(3, "Comprar huevos", "Comprar huevos en el supermercado", "urgente", "2023-10-22"),
];

// GET de un array (lista)
app.get("/notas", (req, res, next) => {
  res.json(notas);
 });
app.get("/notas/:id", (req, res, next) => {
  res.json({id: req.params.id})
});
app.post("/notas", (req, res, next) => {
  res.json({"mensaje": "Nota añadida"})
});
app.put("/notas/:id", (req, res, next) => {
  res.json({"mensaje": "Nota modificada"})
});
app.delete("/notas/:id", (req, res, next) => {
  res.json({"mensaje": "Nota borrada"})
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