const express = require('express');
const app = express();

app.use("/css", express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// enlaces a register y login
app.get('/', function(req, res) {
  res.render('pages/index', {title: 'Inicio'});
});

// Formulario de registro
app.get('/register', function(req, res) {
  res.render('pages/register', {title: 'Registro'});
});

// Formulario de registro
app.get('/login', function(req, res) {
  res.render('pages/login', {title: 'Login'});
});

app.listen(8080);
console.log('Servidor en ejecución en http://localhost:8080/');