// Importamos librería express
const express = require("express");
// Creamos una instancia de express llamada app
const app = express();
// Aplicación que sale por el puerto 8080
app.listen(8080, () => {
 console.log("Servidor en ejecución en http:localhost:8080/");
});