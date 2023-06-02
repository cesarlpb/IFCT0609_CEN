var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

// Query para leer el usuario con idx 1 -> SELECT ... WHERE idx = 1
const sql = "SELECT nombre, email, telefono FROM pruebas.tblUsuarios WHERE idx = 1;"
// Query para leer todos los usuarios -> SELECT *

// Query para crear usuario -> INSERT INTO

// Query para editar usuario -> UPDATE

// Query para eliminar usuario -> DELETE


con.connect(function (err) {
  if (err) throw err;
  console.log("Se ha establecido conexión a la base de datos.");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Resultado: " + JSON.stringify(result, null, 2)); // Indentación de 2 espacios
    console.log("Nombre: " + result[0].nombre); // Acceder a un campo específico
    // etc
  });
});