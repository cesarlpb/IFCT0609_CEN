const Sequelize = require("sequelize");
require('dotenv').config() // <-- Hay que crear un archivo .env con los datos

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
   {
     host: 'localhost',
     dialect: 'mysql',
     dialectOptions: {
       useUTC: false, // Lectura, no usamos UTC sino UTC +2:00
     },
     timezone: 'Europe/Madrid', // Escritura, usamos UTC +2:00 o Europe/Madrid (no hace falta estar pendientes del cambio de hora)
   },
 );

// TODO: Crear un formulario o endpoints para ejecutar cada una de estas funciones
   // Añadir express
    // Crear endpoints
    // Crear formulario(s)
    // Crear vistas
    // Llamar a las funciones desde los endpoints o formularios
    // :)

sequelize.authenticate().then(() => {
   console.log('La conexión se ha establecido correctamente.');
}).catch((error) => {
   console.error('No se ha podido conectar a la base de datos: ', error);
});