var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

const sql = "SELECT * FROM pruebas.tblUsuarios WHERE idx = 1;"

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