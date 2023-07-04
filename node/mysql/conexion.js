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

const createQuery =
  `INSERT INTO pruebas.tblUsuarios 
VALUES (
        NULL,
        'PEPE',
        'Pepe',
        'M',
        '0',
        'pepe@larana.com',
        '123-456-789',
        'SAMSUNG',
        'IUSACELL',
        '121.55',
        '1'
    );`

// *** READ ***

// Query para leer todos los usuarios:
const readAllQuery = "SELECT * FROM pruebas.tblUsuarios LIMIT 3;" // LIMIT 3 hace que solo me devuelva 3 usuarios
// Query para leer el usuario con idx 1 -> SELECT ... WHERE idx = 1
const readOneByIdQuery = (id) => `SELECT * FROM pruebas.tblUsuarios WHERE idx = ${id};`

// *** UPDATE ***
// Query para editar usuario -> UPDATE

const updateQueryById = (id) => {
  return `UPDATE pruebas.tblUsuarios SET 
    usuario = 'usuario2', nombre = 'Pepito' 
    WHERE tblUsuarios.idx = ${id};`
}

// *** DELETE ***
// Query para eliminar usuario -> DELETE
const deleteQueryById = (id) => `DELETE FROM pruebas.tblUsuarios WHERE idx = ${id};`


con.connect(function (err) {
  if (err) throw err;
  console.log("Se ha establecido conexión a la base de datos.");
  // Query readAll -> devuelve todos los usuarios de la tabla
  con.query(readAllQuery, function (err, result) {
    if (err) throw err;
    console.log("readAll:\n" + JSON.stringify(result, null, 2)); // Indentación de 2 espacios
  });
  // Query readOne -> devuelve el usuario por id
  con.query(readOneByIdQuery(1), function (err, result) {
    if (err) throw err;
    console.log("--------------------------------------------")
    console.log("readOne:\n" + JSON.stringify(result, null, 2)); // Acceder a un campo específico por id
  });
  // Query create -> crea un usuario
  con.query(createQuery, function (err, result) {
    if (err) throw err;
    console.log("--------------------------------------------")
    console.log("create:\n" + JSON.stringify(result, null, 2)); // Acceder a un campo específico por id
  });
  // Query update -> actualiza un usuario
  con.query(updateQueryById(2), function (err, result) {
    if (err) throw err;
    console.log("--------------------------------------------")
    console.log("update:\n" + JSON.stringify(result, null, 2)); // Acceder a un campo específico por id
  });
  // Query delete -> elimina un usuario
  con.query(deleteQueryById(1), function (err, result) {
    if (err) throw err;
    console.log("--------------------------------------------")
    console.log("delete:\n" + JSON.stringify(result, null, 2)); // Acceder a un campo específico por id
  });
});