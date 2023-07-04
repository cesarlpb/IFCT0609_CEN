const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/css", express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// enlaces a register y login
app.get('/', function(req, res) {
  res.render('pages/index', {title: 'Inicio'});
});

// Formulario de registro - GET
app.get('/register', function(req, res) {
  res.render('pages/register', {title: 'Registro'});
});

// Formulario de login - GET
app.get('/login', function(req, res) {
  res.render('pages/login', {title: 'Login'});
});

// Processado de los forms
app.post('/register', function(req, res) {
  // Añadir el usuario a la base de datos
  res.send(req.body);
});
app.post('/login', function(req, res) {
  // Comprobar el usuario en la base de datos
  res.send(req.body);
});

app.listen(8080);
console.log('Servidor en ejecución en http://localhost:8080/');