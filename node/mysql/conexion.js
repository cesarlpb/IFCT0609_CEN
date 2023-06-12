// Importamos módulo para conectar a MySQL
const mysql = require('mysql');
// Creamos la conexión en una variable pasándole los parámetros para conectar (host, user, password, port...)
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});
// Definimos los queries que vamos a utilizar

// *** CREATE ***
// Query para crear usuario -> INSERT INTO


// *** READ ***

// Query para leer todos los usuarios:
const readAllQuery = "SELECT * FROM pruebas.tblUsuarios;"
// Query para leer el usuario con idx 1 -> SELECT ... WHERE idx = 1
const readOneByIdQuery = (id) => `SELECT * FROM pruebas.tblUsuarios WHERE idx = ${id};`

// *** UPDATE ***
// Query para editar usuario -> UPDATE



// *** DELETE ***
// Query para eliminar usuario -> DELETE



con.connect(function (err) {
  if (err) throw err;
  console.log("Se ha establecido conexión a la base de datos.");
  con.query(readAllQuery, function (err, result) {
    if (err) throw err;
    console.log("readAll:\n" + JSON.stringify(result, null, 2)); // Indentación de 2 espacios
  });
  con.query(readOneByIdQuery(1), function (err, result) {
    if (err) throw err;
    console.log("readOne:\n" + JSON.stringify(result, null, 2)); // Acceder a un campo específico por id
  });
});