const express = require('express');
const router = express.Router();

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

module.exports = router;