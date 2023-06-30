const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// enlaces a register y login
app.get('/', function(req, res) {
  res.render('pages/index');
});

// Formulario de registro
app.get('/register', function(req, res) {
  res.render('pages/register');
});

// Formulario de registro
app.get('/login', function(req, res) {
  res.render('pages/login');
});

app.listen(8080);
console.log('Servidor en ejecución en http://localhost:8080/');