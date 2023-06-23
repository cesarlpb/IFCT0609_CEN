const express = require('express');
const router = express.Router();

const notas = [
  {id: 1, texto: "Nota 1"},
  {id: 2, texto: "Nota 2"},
  {id: 3, texto: "Nota 3"}
]

router.all('/', function(req, res){
  let fechaHora = new Date().toLocaleString();
  console.log(fechaHora + " - Request all en /")
  res.send("Hola mundo desde express");
});
router.get('/hola', function(req, res){
  let fechaHora = new Date().toLocaleString();
  console.log(fechaHora + " - Request GET en /hola")
  res.send("Hola");
});
router.post('/hola', function(req, res){
  let fechaHora = new Date().toLocaleString();
  console.log(fechaHora + " - Request POST en /hola")
  res.send("Esta es la respuesta a un POST");
});
router.get('/notas', function(req, res){
  let fechaHora = new Date().toLocaleString();
  console.log(fechaHora + " - Request GET en /notas")
  res.send(notas);
});
router.get('/notas/:id', function(req, res){
  let fechaHora = new Date().toLocaleString();
  console.log(fechaHora + " - Request GET en /notas/" + req.params.id)
  let nota = notas.find(nota => nota.id == req.params.id);
  res.send(nota);
});

module.exports = router;