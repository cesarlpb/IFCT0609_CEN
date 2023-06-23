const express = require('express');
const app = express();

app.get('/', function(req, res){
  let fechaHora = new Date().toLocaleString();
  console.log(fechaHora + " - Request GET en /")
  res.send("Hola mundo desde express");
});
app.get('/hola', function(req, res){
  let fechaHora = new Date().toLocaleString();
  console.log(fechaHora + " - Request GET en /hola")
  res.send("Hola");
});
app.post('/hola', function(req, res){
  let fechaHora = new Date().toLocaleString();
  console.log(fechaHora + " - Request POST en /hola")
  res.send("Esta es la respuesta a un POST");
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));